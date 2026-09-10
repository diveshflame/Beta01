// Dynamic scoring & domain logic.

export interface ChallengeTask {
  id: string;
  challengeId: string;
  name: string;
  type: string;       // "DAILY" | "WEEKLY"
  inputType: string;  // "CHECKBOX" | "NUMBER"
  isRuleBreaker: boolean;
  isAlcoholTask: boolean;
  points: number;
  target: number | null;
}

export interface TaskTier {
  id: string;
  taskId: string;
  threshold: number;
  points: number;
}

export interface TaskLog {
  id: string;
  challengeId: string;
  userId: string;
  taskId: string;
  date: Date;
  completed: boolean;
  value: number;
}

export interface ChallengeMember {
  id: string;
  challengeId: string;
  userId: string;
  joinedAt: Date;
  points: number;
  currentStreak: number;
  longestStreak: number;
}

export const DAILY_BONUS_THRESHOLD = 0.75;
export const DAILY_BONUS_POINTS = 15;
export const STREAK_BONUS_POINTS = 15;
export const STREAK_BONUS_DAYS = 7;

export interface DailyCompletion {
  achieved: number;
  total: number;
  percent: number;
}

/**
 * Calculates completion status for a given day.
 */
export function getDailyCompletionSummary(
  tasks: ChallengeTask[],
  logs: TaskLog[]
): DailyCompletion {
  const dailyTasks = tasks.filter((t) => t.type === "DAILY");
  if (dailyTasks.length === 0) {
    return { achieved: 0, total: 0, percent: 0 };
  }

  let achieved = 0;
  dailyTasks.forEach((task) => {
    const log = logs.find((l) => l.taskId === task.id);
    if (task.isRuleBreaker) {
      // For rule breakers, not breaking it means success.
      // If there is no log, or log completed is false, we count it as successful.
      if (!log || !log.completed) {
        achieved += 1;
      }
    } else {
      // For standard habits, completed must be true.
      if (log && log.completed) {
        achieved += 1;
      }
    }
  });

  const total = dailyTasks.length;
  const percent = Math.round((achieved / total) * 100);
  return { achieved, total, percent };
}

export function isDailySuccessSummary(
  tasks: ChallengeTask[],
  logs: TaskLog[]
): boolean {
  const comp = getDailyCompletionSummary(tasks, logs);
  return comp.total > 0 && comp.percent >= DAILY_BONUS_THRESHOLD * 100;
}

export interface WeeklyTaskResult {
  taskId: string;
  name: string;
  achieved: boolean;
  points: number;
  currentValue: number;
  targetValue: number | null;
}

export interface WeeklyResult {
  taskResults: WeeklyTaskResult[];
  points: number;
  perfectWeek: boolean;
}

/**
 * Computes weekly results and awards points dynamically.
 */
export function computeWeeklyResultSummary(
  tasks: ChallengeTask[],
  tiers: TaskTier[],
  logs: TaskLog[], // logs for the entire week
  completedDailyCount: number, // number of successful days in the week
  totalDailyDays: number // e.g. 7
): WeeklyResult {
  const weeklyTasks = tasks.filter((t) => t.type === "WEEKLY");
  const taskResults: WeeklyTaskResult[] = [];
  let totalPoints = 0;

  weeklyTasks.forEach((task) => {
    const taskLogs = logs.filter((l) => l.taskId === task.id);
    let achieved = false;
    let points = 0;
    let currentValue = 0;

    if (task.inputType === "NUMBER") {
      currentValue = taskLogs.reduce((s, l) => s + (l.value || 0), 0);
      const target = task.target || 0;

      // Handle tiered point values (like pushups)
      const taskTiers = tiers.filter((t) => t.taskId === task.id);
      if (taskTiers.length > 0) {
        const sortedTiers = [...taskTiers].sort((a, b) => b.threshold - a.threshold);
        const metTier = sortedTiers.find((t) => currentValue >= t.threshold);
        if (metTier) {
          achieved = true;
          points = metTier.points;
        } else {
          achieved = currentValue >= target;
          points = achieved ? task.points : 0;
        }
      } else {
        achieved = currentValue >= target;
        points = achieved ? task.points : 0;
      }
    } else if (task.isAlcoholTask) {
      // Alcohol rules:
      // Broken if any daily log has completed = true
      const broken = taskLogs.some((l) => l.completed);
      achieved = !broken;
      if (achieved) {
        points = task.points;
      }
    } else if (task.isRuleBreaker) {
      // Rule breaker is broken if any log has completed = true
      const broken = taskLogs.some((l) => l.completed);
      achieved = !broken;
      points = achieved ? task.points : 0;
    } else {
      // General weekly checkboxes (e.g. gym, if logged checkbox daily)
      currentValue = taskLogs.filter((l) => l.completed).length;
      achieved = currentValue >= (task.target || 0);
      points = achieved ? task.points : 0;
    }

    taskResults.push({
      taskId: task.id,
      name: task.name,
      achieved,
      points,
      currentValue,
      targetValue: task.target,
    });
    totalPoints += points;
  });

  const allWeeklyAchieved = taskResults.every((r) => r.achieved);
  const perfectWeek = totalDailyDays >= 7 && completedDailyCount >= totalDailyDays && allWeeklyAchieved;

  return {
    taskResults,
    points: totalPoints,
    perfectWeek,
  };
}

// Calendar days are normalized to a UTC-midnight timestamp that represents the
// same *local* calendar day. This keeps in-memory dates, values written to the
// DATE columns, and values read back from the DB all referring to the same day
// regardless of the server timezone (important for positive UTC offsets, where
// a local midnight would otherwise be stored as the previous UTC day).

export function startOfDay(date: Date): Date {
  const d = new Date(date);
  return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
}

export function startOfWeek(date: Date): Date {
  const local = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const day = local.getDay(); // 0 = Sunday
  const diff = (day + 6) % 7; // Monday as first day
  local.setDate(local.getDate() - diff);
  return new Date(
    Date.UTC(local.getFullYear(), local.getMonth(), local.getDate())
  );
}

export function endOfDay(date: Date): Date {
  return new Date(startOfDay(date).getTime() + 24 * 60 * 60 * 1000 - 1);
}

export function daysBetween(from: Date, to: Date): number {
  const a = startOfDay(from).getTime();
  const b = startOfDay(to).getTime();
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatDateKey(d: Date): string {
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getUTCDate()).padStart(2, "0")}`;
}
