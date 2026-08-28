import { describe, it, expect } from "vitest";
import {
  getDailyCompletionSummary,
  isDailySuccessSummary,
  computeWeeklyResultSummary,
  type ChallengeTask,
  type TaskTier,
  type TaskLog,
} from "@/lib/scoring";

// ---------------------------------------------------------------------------
// Task fixtures matching the user's challenge spec
// ---------------------------------------------------------------------------

const dailyTasks: ChallengeTask[] = [  // Protein, fruit, water, sleep, bed, cold shower, reading → standard habits (checkbox)
  { id: "t-protein", challengeId: "c1", name: "Daily protein 100g", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 5, target: 100 },
  { id: "t-fruit", challengeId: "c1", name: "1 fruit", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 2, target: 1 },
  { id: "t-water", challengeId: "c1", name: "3L water", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 2, target: 3 },
  { id: "t-sleep", challengeId: "c1", name: "8h sleep", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 7, target: 8 },
  { id: "t-bed", challengeId: "c1", name: "Make bed", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 1, target: 1 },
  { id: "t-shower", challengeId: "c1", name: "Cold shower", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 3, target: 1 },
  { id: "t-read", challengeId: "c1", name: "Read 20 pages", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 3, target: 20 },
  // Rule breakers: success = NOT broken
  { id: "t-noeve", challengeId: "c1", name: "No eating after 10PM", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 4, target: null },
  { id: "t-noscope", challengeId: "c1", name: "No YT shorts after 6pm", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 5, target: null },
  { id: "t-nophone", challengeId: "c1", name: "No phone during meals", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 2, target: null },
];

const weeklyTasks: ChallengeTask[] = [
  { id: "t-gym", challengeId: "c1", name: "Gym 4x/week", type: "WEEKLY", inputType: "NUMBER", isRuleBreaker: false, isAlcoholTask: false, points: 40, target: 4 },
  { id: "t-walk", challengeId: "c1", name: "10km walk", type: "WEEKLY", inputType: "NUMBER", isRuleBreaker: false, isAlcoholTask: false, points: 10, target: 10 },
  { id: "t-push", challengeId: "c1", name: "100 pushups", type: "WEEKLY", inputType: "NUMBER", isRuleBreaker: false, isAlcoholTask: false, points: 5, target: 100 },
  { id: "t-sugar", challengeId: "c1", name: "No sugar", type: "WEEKLY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 20, target: null },
  { id: "t-ffood", challengeId: "c1", name: "No fast food", type: "WEEKLY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 20, target: null },
  { id: "t-junk", challengeId: "c1", name: "All meals at home (no junk)", type: "WEEKLY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 30, target: null },
  { id: "t-alc", challengeId: "c1", name: "No alcohol", type: "WEEKLY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: true, points: 20, target: null },
];

const pushupTiers: TaskTier[] = [
  { id: "p-100", taskId: "t-push", threshold: 100, points: 5 },
  { id: "p-200", taskId: "t-push", threshold: 200, points: 10 },
  { id: "p-350", taskId: "t-push", threshold: 350, points: 50 },
  { id: "p-700", taskId: "t-push", threshold: 700, points: 100 },
];

function log(taskId: string, completed = false, value = 0): TaskLog {
  return {
    id: "x",
    challengeId: "c1",
    userId: "u1",
    taskId,
    date: new Date("2026-01-05T00:00:00.000Z"),
    completed,
    value,
  };
}

// ---------------------------------------------------------------------------
// Daily completion
// ---------------------------------------------------------------------------

describe("getDailyCompletionSummary", () => {
  it("counts completed standard habits and unbroken rule breakers", () => {
    const logs = [
      log("t-protein", true),
      log("t-fruit", true),
      log("t-water", true),
      log("t-sleep", true),
      log("t-bed", true),
      log("t-shower", true),
      log("t-read", true),
      // rule breakers: no logs → success (not broken)
    ];
    const comp = getDailyCompletionSummary(dailyTasks, logs);
    // 7 completed + 3 unbroken rule breakers = 10/10
    expect(comp).toEqual({ achieved: 10, total: 10, percent: 100 });
    expect(isDailySuccessSummary(dailyTasks, logs)).toBe(true);
  });

  it("a broken rule breaker does not count as achieved", () => {
    const logs = [
      log("t-protein", true),
      log("t-fruit", true),
      log("t-water", true),
      log("t-sleep", true),
      log("t-bed", true),
      log("t-shower", true),
      log("t-read", true),
      log("t-noscope", true), // watched shorts → rule broken
    ];
    const comp = getDailyCompletionSummary(dailyTasks, logs);
    // 7 completed + 2 unbroken rule breakers (noeve, nophone) = 9/10
    expect(comp.achieved).toBe(9);
    expect(comp.total).toBe(10);
    expect(comp.percent).toBe(90);
  });

  it("reports a day as success at the 75% threshold (8 of 10)", () => {
    const completed: [string, boolean][] = [
      ["t-protein", true],
      ["t-fruit", true],
      ["t-water", true],
      ["t-sleep", true],
      ["t-bed", true],
      ["t-shower", true],
      ["t-read", true], // 7 habits
      ["t-nophone", true], // broken rule → loses one of 3
    ];
    const logs = completed.map(([id, c]) => log(id, c));
    const comp = getDailyCompletionSummary(dailyTasks, logs);
    // achieved = 7 + (3 rule breakers - 1 broken) = 9 → 90%
    expect(comp.percent).toBe(90);
    expect(comp.achieved).toBe(9);
  });
});

// ---------------------------------------------------------------------------
// Weekly result
// ---------------------------------------------------------------------------

describe("computeWeeklyResultSummary", () => {
  it("awards points only when weekly NUMBER targets are met", () => {
    const weekLogs = [
      // gym: 4 sessions
      ...[1, 2, 3, 4].map((v) => log("t-gym", true, v === 1 ? 1 : 1)),
      // walking: total 11km across 2 logs
      log("t-walk", true, 6),
      log("t-walk", true, 5),
      // pushups: total 220
      log("t-push", true, 220),
    ];
    const res = computeWeeklyResultSummary(weeklyTasks, pushupTiers, weekLogs, 7, 7);
    const byName = Object.fromEntries(res.taskResults.map((r) => [r.name, r]));
    expect(byName["Gym 4x/week"].achieved).toBe(true);
    expect(byName["Gym 4x/week"].points).toBe(40);
    expect(byName["10km walk"].points).toBe(10);
    expect(byName["100 pushups"].points).toBe(10); // tier: 200+ → 10
    // Plus clean rules: no sugar 20 + no fast food 20 + no junk 30 + no alcohol 20
    expect(res.points).toBe(150);
    expect(res.taskResults.every((r) => r.achieved)).toBe(true);
  });

  it("pushup tier escalation: 350+ → 50, 700+ → 100", () => {
    const mk = (val: number) =>
      computeWeeklyResultSummary(weeklyTasks, pushupTiers, [log("t-push", true, val)], 7, 7);
    expect(mk(50).taskResults.find((r) => r.taskId === "t-push")!.points).toBe(0);
    expect(mk(100).taskResults.find((r) => r.taskId === "t-push")!.points).toBe(5);
    expect(mk(400).taskResults.find((r) => r.taskId === "t-push")!.points).toBe(50);
    expect(mk(900).taskResults.find((r) => r.taskId === "t-push")!.points).toBe(100);
  });

  it("a weekly rule breaker awards points when never broken, none when broken", () => {
    const clean = computeWeeklyResultSummary(weeklyTasks, pushupTiers, [], 7, 7);
    expect(clean.taskResults.find((r) => r.taskId === "t-sugar")!.points).toBe(20);
    expect(clean.taskResults.find((r) => r.taskId === "t-ffood")!.points).toBe(20);
    expect(clean.taskResults.find((r) => r.taskId === "t-junk")!.points).toBe(30);

    const broken = computeWeeklyResultSummary(
      weeklyTasks,
      pushupTiers,
      [log("t-sugar", true)],
      7,
      7
    );
    expect(broken.taskResults.find((r) => r.taskId === "t-sugar")!.points).toBe(0);
  });

  it("no alcohol: awards full points when not broken, none when broken", () => {
    const notBroken: TaskLog[] = []; // no alcohol logs → not broken
    const clean = computeWeeklyResultSummary(weeklyTasks, pushupTiers, notBroken, 7, 7);
    expect(clean.taskResults.find((r) => r.taskId === "t-alc")!.points).toBe(20);

    // broken (a drink happened)
    const broken = computeWeeklyResultSummary(weeklyTasks, pushupTiers, [log("t-alc", true)], 7, 7);
    expect(broken.taskResults.find((r) => r.taskId === "t-alc")!.points).toBe(0);
  });

  it("represents a perfect week when all daily days and all weekly tasks succeeded", () => {
    const weekLogs = [
      ...[1, 2, 3, 4].map(() => log("t-gym", true, 1)),
      log("t-walk", true, 10),
      log("t-push", true, 150),
    ];
    const res = computeWeeklyResultSummary(weeklyTasks, pushupTiers, weekLogs, 7, 7);
    expect(res.perfectWeek).toBe(true);
  });

  it("is not a perfect week if a daily day was missed", () => {
    const weekLogs = [
      ...[1, 2, 3, 4].map(() => log("t-gym", true, 1)),
      log("t-walk", true, 10),
      log("t-push", true, 150),
    ];
    const res = computeWeeklyResultSummary(weeklyTasks, pushupTiers, weekLogs, 6, 7);
    expect(res.perfectWeek).toBe(false);
  });
});
