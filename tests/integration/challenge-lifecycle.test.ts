import { beforeAll, afterAll, describe, it, expect } from "vitest";
import { vi } from "vitest";

// Point the app's `db` singleton at an isolated PGlite database for these tests.
vi.mock("@/lib/db", async () => {
  const { getTestDb } = await import("../helpers/test-db");
  return { db: await getTestDb() };
});

import { db } from "@/lib/db";
import { runDayScoring } from "@/lib/score-engine";
import { startOfWeek } from "@/lib/scoring";

// ---------------------------------------------------------------------------
// Challenge definition (matches the user's spec)
// ---------------------------------------------------------------------------

const DAILY_TASKS = [
  { name: "Daily protein 100g", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 5, target: 100 },
  { name: "1 fruit", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 2, target: 1 },
  { name: "3L water", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 2, target: 3 },
  { name: "8h sleep", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 7, target: 8 },
  { name: "Make bed", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 1, target: 1 },
  { name: "Cold shower", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 3, target: 1 },
  { name: "Read 20 pages", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 3, target: 20 },
  { name: "No eating after 10PM", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 4, target: null },
  { name: "No YT shorts after 6pm", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 5, target: null },
  { name: "No phone during meals", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 2, target: null },
];

const WEEKLY_TASKS = [
  { name: "Gym 4x/week", type: "WEEKLY", inputType: "NUMBER", isRuleBreaker: false, isAlcoholTask: false, points: 40, target: 4 },
  { name: "10km walk", type: "WEEKLY", inputType: "NUMBER", isRuleBreaker: false, isAlcoholTask: false, points: 10, target: 10 },
  { name: "100 pushups", type: "WEEKLY", inputType: "NUMBER", isRuleBreaker: false, isAlcoholTask: false, points: 5, target: 100 },
  { name: "No sugar", type: "WEEKLY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 20, target: null },
  { name: "No fast food", type: "WEEKLY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 20, target: null },
  { name: "All meals at home (no junk)", type: "WEEKLY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 30, target: null },
  { name: "No alcohol", type: "WEEKLY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: true, points: 20, target: null },
];

const PUSHUP_TIERS = [
  { threshold: 100, points: 5 },
  { threshold: 200, points: 10 },
  { threshold: 350, points: 50 },
  { threshold: 700, points: 100 },
];

// A fixed Monday–Sunday week, in LOCAL time (Jan 5 2026 is a Monday)
const MON = new Date(2026, 0, 5, 12); // noon local to avoid TZ edge cases
function day(offset: number): Date {
  return new Date(2026, 0, 5 + offset, 12);
}

let challengeId = "";
const taskId: Record<string, string> = {};

async function insertLog(userId: string, taskName: string, date: Date, completed: boolean, value = 0) {
  await db.taskLog.create({
    data: {
      challengeId,
      userId,
      taskId: taskId[taskName],
      date: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12),
      completed,
      value,
    },
  });
}
// Simulates a member completing the given set of daily habits on a date.
// `allDone`: complete every standard habit + keep all rule breakers.
async function logFullDayPerfect(userId: string, date: Date) {
  for (const t of DAILY_TASKS) {
    if (t.isRuleBreaker) {
      // rule breaker: no log = not broken (success)
      continue;
    }
    await insertLog(userId, t.name, date, true);
  }
}

beforeAll(async () => {
  const admin = await db.user.create({
    data: { email: "admin@test.dev", name: "Admin", displayName: "Admin" },
  });

  const challenge = await db.challenge.create({
    data: {
      name: "Winter Arc 2026",
      description: "Test challenge",
      startDate: MON,
      endDate: new Date("2026-02-28T00:00:00.000Z"),
      isPublic: true,
      inviteCode: "TEST001",
      adminId: admin.id,
    },
  });
  challengeId = challenge.id;

  // Create tasks, capturing generated ids by name
  for (const t of [...WEEKLY_TASKS, ...DAILY_TASKS]) {
    const created = await db.challengeTask.create({
      data: {
        challengeId,
        name: t.name,
        type: t.type,
        inputType: t.inputType,
        isRuleBreaker: t.isRuleBreaker,
        isAlcoholTask: t.isAlcoholTask,
        points: t.points,
        target: t.target,
      },
    });
    taskId[t.name] = created.id;
  }

  // Pushup tiers
  await db.taskTier.createMany({
    data: PUSHUP_TIERS.map((tr) => ({ taskId: taskId["100 pushups"], threshold: tr.threshold, points: tr.points })),
  });
});

afterAll(async () => {
  const { closeTestDb } = await import("../helpers/test-db");
  await closeTestDb();
});

describe("challenge lifecycle", () => {
  it("creates a member and lets them join, then scores a perfect week", async () => {
    // Alice joins
    const alice = await db.user.create({
      data: { email: "alice@test.dev", name: "Alice" },
    });
    await db.challengeMember.create({
      data: { challengeId, userId: alice.id },
    });

    // Log all 7 days perfectly (all daily habits done)
    for (let i = 0; i < 7; i++) {
      await logFullDayPerfect(alice.id, day(i));
    }

    // Weekly progress: gym 4x, 10km walk, 150 pushups (base tier), all rules kept
    for (const n of [0, 1, 2, 3]) {
      await insertLog(alice.id, "Gym 4x/week", day(n), true, 1);
    }
    await insertLog(alice.id, "10km walk", day(0), true, 6);
    await insertLog(alice.id, "10km walk", day(1), true, 4);
    await insertLog(alice.id, "100 pushups", day(2), true, 150);

    // Run scoring on the last day (Sunday) → computes the whole week + streak
    await runDayScoring(alice.id, challengeId, day(6));

    // --- Daily points ---
    // Habit points/day = 23 (7 standard) + 11 (3 unbroken rule breakers) = 34
    // +15 daily bonus (100%) = 49 for days 1..6; day 7 (7-day streak) gets +15 → 64
    const summaries = await db.daySummary.findMany({
      where: { userId: alice.id, challengeId },
      orderBy: { date: "asc" },
    });
    expect(summaries).toHaveLength(7);
    for (let i = 0; i < 6; i++) {
      expect(summaries[i].dailyBonusAwarded).toBe(true);
      expect(summaries[i].pointsAwarded).toBe(49);
      expect(summaries[i].streakBonusAwarded).toBe(false);
    }
    expect(summaries[6].pointsAwarded).toBe(64); // 49 + 15 streak
    expect(summaries[6].streakBonusAwarded).toBe(true);

    const dailyTotal = summaries.reduce((s, d) => s + d.pointsAwarded, 0);
    expect(dailyTotal).toBe(6 * 49 + 64); // 358

    // --- Weekly points ---
    const weekly = await db.weeklyScore.findUnique({
      where: {
        userId_challengeId_weekStart: { userId: alice.id, challengeId, weekStart: startOfWeek(day(6)) },
      },
    });
    // gym 40 + walk 10 + pushups 5 + sugar 20 + fastfood 20 + junk 30 + alcohol 20 = 145
    expect(weekly!.points).toBe(145);

    // --- Member totals ---
    const member = await db.challengeMember.findUnique({
      where: { challengeId_userId: { challengeId, userId: alice.id } },
    });
    expect(member!.points).toBe(358 + 145); // 503
    expect(member!.currentStreak).toBe(7);
    expect(member!.longestStreak).toBe(7);
  });

  it("breaks a rule and loses those weekly points", async () => {
    const bob = await db.user.create({
      data: { email: "bob@test.dev", name: "Bob" },
    });
    await db.challengeMember.create({
      data: { challengeId, userId: bob.id },
    });

    // Perfect daily week
    for (let i = 0; i < 7; i++) await logFullDayPerfect(bob.id, day(i));
    // Meets gym + walk + pushups, but breaks No sugar (drink? no — eats sugar) and no alcohol
    for (const n of [0, 1, 2, 3]) await insertLog(bob.id, "Gym 4x/week", day(n), true, 1);
    await insertLog(bob.id, "10km walk", day(0), true, 10);
    await insertLog(bob.id, "100 pushups", day(1), true, 250);
    await insertLog(bob.id, "No sugar", day(2), true); // broke no-sugar rule
    await insertLog(bob.id, "No alcohol", day(3), true); // drank → broke alcohol

    await runDayScoring(bob.id, challengeId, day(6));

    const weekly = await db.weeklyScore.findUnique({
      where: { userId_challengeId_weekStart: { userId: bob.id, challengeId, weekStart: startOfWeek(day(6)) } },
    });
    // gym 40 + walk 10 + pushups 10 (250→200 tier? tier200=10, but 250<350 → 10)
    // sugar 0 (broken) + fastfood 20 + junk 30 + alcohol 0 (broken)
    // → 40 + 10 + 10 + 0 + 20 + 30 + 0 = 110
    expect(weekly!.points).toBe(110);
  });

  it("ranks the leaderboard by total points (Alice > Bob)", async () => {
    const members = await db.challengeMember.findMany({
      where: { challengeId },
      include: { user: true },
    });
    const byEmail = new Map(members.map((m) => [m.user.email, m]));
    expect(byEmail.get("alice@test.dev")!.points).toBeGreaterThan(
      byEmail.get("bob@test.dev")!.points
    );

    // Leaderboard ordering (what the /leaderboards page computes)
    const rows = members
      .map((m) => ({ name: m.user.name, overall: m.points, week: 0, today: 0 }))
      .sort((a, b) => b.overall - a.overall);
    expect(rows[0].name).toBe("Alice");
  });

  it("joins members by invite code, blocks duplicates and a full challenge", async () => {
    // A fresh limited challenge (mirrors createChallenge)
    const host = await db.user.create({ data: { email: "host@test.dev", name: "Host" } });
    const limited = await db.challenge.create({
      data: {
        name: "Limited",
        startDate: MON,
        endDate: new Date(2026, 2, 1, 12),
        isPublic: false,
        inviteCode: "LIMIT1",
        maxMembers: 2,
        adminId: host.id,
      },
    });
    await db.challengeMember.create({ data: { challengeId: limited.id, userId: host.id } });

    // Mirrors joinChallenge: look up by code, respect maxMembers, avoid duplicates
    async function join(userId: string): Promise<{ ok: boolean; reason?: string }> {
      const c = await db.challenge.findUnique({ where: { inviteCode: "LIMIT1" } });
      if (!c) return { ok: false, reason: "invalid" };
      const count = await db.challengeMember.count({ where: { challengeId: c.id } });
      if (c.maxMembers && count >= c.maxMembers) return { ok: false, reason: "full" };
      const existing = await db.challengeMember.findUnique({
        where: { challengeId_userId: { challengeId: c.id, userId } },
      });
      if (existing) return { ok: false, reason: "already joined" };
      await db.challengeMember.create({ data: { challengeId: c.id, userId } });
      return { ok: true };
    }

    const u1 = await db.user.create({ data: { email: "u1@test.dev", name: "U1" } });
    const u2 = await db.user.create({ data: { email: "u2@test.dev", name: "U2" } });
    const u3 = await db.user.create({ data: { email: "u3@test.dev", name: "U3" } });

    expect((await join(host.id)).ok).toBe(false); // already the admin
    expect((await join(u1.id)).ok).toBe(true);
    expect((await join(u2.id)).ok).toBe(false); // full (maxMembers=2 counts admin)
    expect((await join(u3.id)).ok).toBe(false); // full
    expect((await join(u1.id)).ok).toBe(false); // duplicate

    const memberCount = await db.challengeMember.count({ where: { challengeId: limited.id } });
    expect(memberCount).toBe(2); // admin + u1
  });
});
