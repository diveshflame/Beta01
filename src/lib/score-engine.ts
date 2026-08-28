import { db } from "@/lib/db";
import {
  isDailySuccessSummary,
  getDailyCompletionSummary,
  computeWeeklyResultSummary,
  formatDateKey,
  startOfWeek,
  endOfDay,
  startOfDay,
  daysBetween,
} from "@/lib/scoring";

export async function runDayScoring(
  userId: string,
  challengeId: string,
  onDate: Date
): Promise<void> {
  // 1. Get the challenge and all its tasks
  const challenge = await db.challenge.findUnique({
    where: { id: challengeId },
    include: { tasks: { include: { tiers: true } } },
  });
  if (!challenge) return;

  const tasks = challenge.tasks;
  const dailyTasks = tasks.filter((t) => t.type === "DAILY");

  // 2. Load all task logs for this member
  const allLogs = await db.taskLog.findMany({
    where: { userId, challengeId },
    orderBy: { date: "asc" },
  });

  // Group task logs by date key
  const logsByDate: Record<string, typeof allLogs> = {};
  allLogs.forEach((log) => {
    const key = formatDateKey(log.date);
    if (!logsByDate[key]) logsByDate[key] = [];
    logsByDate[key].push(log);
  });

  // Calculate daily success for all logged dates
  const successKeys = new Set<string>();
  const loggedDates = Object.keys(logsByDate).sort();

  loggedDates.forEach((key) => {
    const dayLogs = logsByDate[key];
    const comp = getDailyCompletionSummary(tasks, dayLogs);
    const isSuccess = comp.total > 0 && comp.percent >= 75; // 75% threshold
    if (isSuccess) {
      successKeys.add(key);
    }
  });

  // Determine streaks for the current date
  const run: Date[] = [];
  const d = new Date(onDate);
  while (successKeys.has(formatDateKey(d))) {
    run.unshift(new Date(d));
    d.setDate(d.getDate() - 1);
  }

  // Calculate longest streak overall
  const longest = longestConsecutiveChain([...successKeys]);

  // Update DaySummary records for dates in the current streak run
  for (let i = 0; i < run.length; i++) {
    const idx = i + 1; // position in current streak
    const date = run[i];
    const key = formatDateKey(date);
    const dayLogs = logsByDate[key] || [];

    const comp = getDailyCompletionSummary(tasks, dayLogs);
    
    // Sum points for completed daily habits
    let habitPoints = 0;
    dailyTasks.forEach((task) => {
      const log = dayLogs.find((l) => l.taskId === task.id);
      if (task.isRuleBreaker) {
        if (!log || !log.completed) {
          habitPoints += task.points;
        }
      } else {
        if (log && log.completed) {
          habitPoints += task.points;
        }
      }
    });

    const isSuccess = comp.total > 0 && comp.percent >= 75;
    let awarded = habitPoints;
    if (isSuccess) awarded += 5; // DAILY_BONUS_POINTS = 5
    const streakBonus = idx % 7 === 0; // STREAK_BONUS_DAYS = 7
    if (streakBonus) awarded += 15; // STREAK_BONUS_POINTS = 15

    await db.daySummary.upsert({
      where: {
        userId_challengeId_date: { userId, challengeId, date: startOfDay(date) },
      },
      update: {
        completedCount: comp.achieved,
        totalCount: comp.total,
        pointsAwarded: awarded,
        dailyBonusAwarded: isSuccess,
        streakBonusAwarded: streakBonus,
      },
      create: {
        userId,
        challengeId,
        date: startOfDay(date),
        completedCount: comp.achieved,
        totalCount: comp.total,
        pointsAwarded: awarded,
        dailyBonusAwarded: isSuccess,
        streakBonusAwarded: streakBonus,
      },
    });
  }

  // If onDate itself is not a success day, ensure it has a DaySummary record
  const onDateKey = formatDateKey(onDate);
  if (!successKeys.has(onDateKey)) {
    const dayLogs = logsByDate[onDateKey] || [];
    const comp = getDailyCompletionSummary(tasks, dayLogs);

    let habitPoints = 0;
    dailyTasks.forEach((task) => {
      const log = dayLogs.find((l) => l.taskId === task.id);
      if (task.isRuleBreaker) {
        if (!log || !log.completed) {
          habitPoints += task.points;
        }
      } else {
        if (log && log.completed) {
          habitPoints += task.points;
        }
      }
    });

    await db.daySummary.upsert({
      where: {
        userId_challengeId_date: { userId, challengeId, date: startOfDay(onDate) },
      },
      update: {
        completedCount: comp.achieved,
        totalCount: comp.total,
        pointsAwarded: habitPoints,
        dailyBonusAwarded: false,
        streakBonusAwarded: false,
      },
      create: {
        userId,
        challengeId,
        date: startOfDay(onDate),
        completedCount: comp.achieved,
        totalCount: comp.total,
        pointsAwarded: habitPoints,
        dailyBonusAwarded: false,
        streakBonusAwarded: false,
      },
    });
  }

  // 3. Update Weekly Score for the week containing onDate
  const member = await db.challengeMember.findUnique({
    where: { challengeId_userId: { challengeId, userId } },
  });
  if (member) {
    const weekStart = startOfWeek(onDate);
    const weekEnd = endOfDay(new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000));

    // Get logs for the entire week
    const weekLogs = await db.taskLog.findMany({
      where: {
        userId,
        challengeId,
        date: { gte: weekStart, lte: weekEnd },
      },
    });

    // Count successful days in this week
    const weekSuccessDays = await db.daySummary.count({
      where: {
        userId,
        challengeId,
        date: { gte: weekStart, lte: weekEnd },
        dailyBonusAwarded: true,
      },
    });

    const tiers = tasks.flatMap((t) => t.tiers);
    const weeklyResult = computeWeeklyResultSummary(
      tasks,
      tiers,
      weekLogs,
      weekSuccessDays,
      7
    );

    const weekNumber = Math.max(1, Math.floor(daysBetween(challenge.startDate, weekStart) / 7) + 1);

    await db.weeklyScore.upsert({
      where: {
        userId_challengeId_weekStart: { userId, challengeId, weekStart },
      },
      update: {
        points: weeklyResult.points,
        weekEnd,
        weekNumber,
      },
      create: {
        userId,
        challengeId,
        weekStart,
        weekEnd,
        weekNumber,
        points: weeklyResult.points,
      },
    });
  }

  // 4. Sync totals
  await syncMemberTotals(userId, challengeId, run.length, longest);
}

async function syncMemberTotals(
  userId: string,
  challengeId: string,
  currentStreak: number,
  longestStreak: number
) {
  const summaries = await db.daySummary.findMany({
    where: { userId, challengeId },
  });
  const weeklyScores = await db.weeklyScore.findMany({
    where: { userId, challengeId },
  });

  const totalPoints =
    summaries.reduce((s, d) => s + d.pointsAwarded, 0) +
    weeklyScores.reduce((s, w) => s + w.points, 0);

  const membership = await db.challengeMember.findUnique({
    where: { challengeId_userId: { challengeId, userId } },
  });
  if (!membership) return;

  await db.challengeMember.update({
    where: { id: membership.id },
    data: {
      points: totalPoints,
      currentStreak,
      longestStreak,
    },
  });

  await db.user.update({
    where: { id: userId },
    data: {
      totalPoints,
      currentStreak,
      longestStreak,
    },
  });
}

function longestConsecutiveChain(keys: string[]): number {
  const set = new Set(keys);
  let best = 0;
  for (const key of set) {
    best = Math.max(best, lenInclusive(set, key));
  }
  return best;
}

function lenInclusive(set: Set<string>, startKey: string): number {
  let len = 0;
  const cur = new Date(startKey + "T00:00:00Z");
  while (set.has(formatDateKey(cur))) {
    len += 1;
    cur.setDate(cur.getDate() + 1);
  }
  return len;
}
