import { beforeAll, afterAll, describe, it, expect, vi } from "vitest";

// Point the app's `db` singleton at an isolated PGlite database.
vi.mock("@/lib/db", async () => {
  const { getTestDb } = await import("../helpers/test-db");
  return { db: await getTestDb() };
});

// Simulate an authenticated user and silence path revalidation.
vi.mock("@/lib/auth", async () => ({
  auth: async () => ({ user: { id: "CURRENT_USER" } }),
}));
vi.mock("next/cache", async () => ({
  revalidatePath: () => {},
}));

import { db } from "@/lib/db";
import { saveTaskLog } from "@/app/actions";

// A fixed date far enough back that "today" (server time) never overlaps with the
// challenge's start week, isolating the exact logging behavior we're asserting on.
const MON = new Date(2026, 0, 5, 12);
let challengeId = "";
const taskIds: Record<string, string> = {};

beforeAll(async () => {
  const admin = await db.user.create({
    data: { email: "admin-log@test.dev", name: "Admin" },
  });
  const c = await db.challenge.create({
    data: {
      name: "Points Log",
      description: "",
      startDate: MON,
      endDate: new Date(2026, 1, 28, 12),
      isPublic: true,
      inviteCode: "LOG001",
      adminId: admin.id,
    },
  });
  challengeId = c.id;

  const tasks = [
    { name: "Habit A", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 5, target: null },
    { name: "Habit B", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 2, target: null },
    { name: "Rule R", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: true, isAlcoholTask: false, points: 4, target: null },
    { name: "Gym", type: "WEEKLY", inputType: "NUMBER", isRuleBreaker: false, isAlcoholTask: false, points: 40, target: 4 },
  ];
  for (const t of tasks) {
    const created = await db.challengeTask.create({ data: { challengeId, ...t } });
    taskIds[t.name] = created.id;
  }
});

afterAll(async () => {
  const { closeTestDb } = await import("../helpers/test-db");
  await closeTestDb();
});

describe("saveTaskLog updates member points", () => {
  it("awards task points immediately and accumulates weekly points", async () => {
    const user = await db.user.create({
      data: { email: "user-log@test.dev", name: "User", id: "CURRENT_USER" },
    });
    const member = await db.challengeMember.create({
      data: { challengeId, userId: user.id },
    });

    // Log a single daily habit -> should immediately add its 5 points, plus the
    // 4 points from the unbroken Rule R (rule breakers award when not broken).
    const res = await saveTaskLog(challengeId, taskIds["Habit A"], true, 0);
    expect(res.ok).toBe(true);

    let m = await db.challengeMember.findUnique({ where: { id: member.id } });
    expect(m!.points).toBe(9);

    // Log a weekly number task (gym value 4 hits the target) -> adds 40 pts.
    await saveTaskLog(challengeId, taskIds["Gym"], true, 4);
    m = await db.challengeMember.findUnique({ where: { id: member.id } });
    expect(m!.points).toBe(49);

    // Toggling the habit off should remove those 5 points.
    await saveTaskLog(challengeId, taskIds["Habit A"], false, 0);
    m = await db.challengeMember.findUnique({ where: { id: member.id } });
    expect(m!.points).toBe(44);
  });
});
