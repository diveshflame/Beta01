import { db } from "@/lib/db";
import {
  startOfWeek,
  endOfDay,
  startOfDay,
  getDailyCompletionSummary,
  computeWeeklyResultSummary,
} from "@/lib/scoring";

export async function getPrimaryChallenge(userId: string) {
  const membership = await db.challengeMember.findFirst({
    where: { userId, challenge: { isActive: true } },
    orderBy: { joinedAt: "desc" },
    include: {
      challenge: {
        include: {
          tasks: {
            include: { tiers: true },
          },
        },
      },
    },
  });
  return membership ?? null;
}

export async function getTodayLogs(userId: string, challengeId: string) {
  const today = startOfDay(new Date());
  return db.taskLog.findMany({
    where: {
      userId,
      challengeId,
      date: today,
    },
  });
}

export async function getWeekLogs(userId: string, challengeId: string) {
  const weekStart = startOfWeek(new Date());
  const weekEnd = endOfDay(new Date());
  return db.taskLog.findMany({
    where: {
      userId,
      challengeId,
      date: { gte: weekStart, lte: weekEnd },
    },
    orderBy: { date: "asc" },
  });
}

export interface DashboardData {
  challenge: Awaited<ReturnType<typeof getPrimaryChallenge>>;
  todayLogs: Awaited<ReturnType<typeof getTodayLogs>>;
  completionToday: ReturnType<typeof getDailyCompletionSummary> | null;
  weekLogs: Awaited<ReturnType<typeof getWeekLogs>>;
  weekResult: ReturnType<typeof computeWeeklyResultSummary> | null;
  rank: number;
  memberCount: number;
  totalPoints: number;
  daysToLeaderboardRest: number;
}

export async function getDashboardData(userId: string): Promise<DashboardData> {
  const membership = await getPrimaryChallenge(userId);
  const challenge = membership?.challenge ?? null;

  if (!challenge || !membership) {
    return {
      challenge: null,
      todayLogs: [],
      completionToday: null,
      weekLogs: [],
      weekResult: null,
      rank: 0,
      memberCount: 0,
      totalPoints: 0,
      daysToLeaderboardRest: 0,
    };
  }

  const weekStart = startOfWeek(new Date());
  const weekEnd = endOfDay(new Date());

  const [todayLogs, weekLogs, weekSuccessDays, rankers] = await Promise.all([
    getTodayLogs(userId, challenge.id),
    getWeekLogs(userId, challenge.id),
    db.daySummary.count({
      where: {
        userId,
        challengeId: challenge.id,
        date: { gte: weekStart, lte: weekEnd },
        dailyBonusAwarded: true,
      },
    }),
    db.challengeMember.findMany({
      where: { challengeId: challenge.id },
      orderBy: [{ points: "desc" }, { joinedAt: "asc" }],
      select: { userId: true },
    }),
  ]);

  const tasks = challenge.tasks;
  const tiers = tasks.flatMap((t) => t.tiers);
  const weekResult = computeWeeklyResultSummary(
    tasks,
    tiers,
    weekLogs,
    weekSuccessDays,
    7
  );

  const completionToday = getDailyCompletionSummary(tasks, todayLogs);

  const rank =
    rankers.findIndex((m) => m.userId === userId) + 1 || rankers.length;
  const memberCount = rankers.length;

  const now = new Date();
  const sunday = startOfWeek(now);
  sunday.setDate(sunday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);
  const daysToLeaderboardRest = Math.max(
    0,
    Math.ceil((sunday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  );

  return {
    challenge: membership,
    todayLogs,
    completionToday,
    weekLogs,
    weekResult,
    rank,
    memberCount,
    totalPoints: membership.points,
    daysToLeaderboardRest,
  };
}
