import { beforeAll, afterAll, describe, it, expect, vi } from "vitest";

vi.mock("@/lib/db", async () => {
  const { getTestDb } = await import("../helpers/test-db");
  return { db: await getTestDb() };
});
vi.mock("@/lib/auth", async () => ({
  auth: async () => ({ user: { id: "ADMIN_USER" } }),
}));
vi.mock("next/cache", async () => ({
  revalidatePath: () => {},
}));

import { db } from "@/lib/db";
import { updateChallenge, updateChallengeTasks } from "@/app/actions";

const MON = new Date(2026, 0, 5, 12);
let challengeId = "";

beforeAll(async () => {
  const admin = await db.user.create({
    data: { email: "edit-admin@test.dev", name: "Admin", id: "ADMIN_USER" },
  });
  const other = await db.user.create({
    data: { email: "edit-other@test.dev", name: "Other" },
  });
  const c = await db.challenge.create({
    data: {
      name: "Original",
      description: "Original description",
      startDate: MON,
      endDate: new Date(2026, 1, 28, 12),
      isPublic: true,
      inviteCode: "EDIT01",
      adminId: admin.id,
    },
  });
  challengeId = c.id;

  // A second challenge owned by "other" to test ownership denial.
  await db.challenge.create({
    data: {
      name: "Other's challenge",
      description: "",
      startDate: MON,
      endDate: new Date(2026, 1, 28, 12),
      isPublic: true,
      inviteCode: "EDIT02",
      adminId: other.id,
    },
  });
});

afterAll(async () => {
  const { closeTestDb } = await import("../helpers/test-db");
  await closeTestDb();
});

describe("updateChallenge", () => {
  it("allows the owner to edit the challenge details", async () => {
    const res = await updateChallenge(challengeId, {
      name: "Renamed",
      description: "New description",
      startDate: "2026-01-05",
      endDate: "2026-03-01",
      isPublic: false,
      maxMembers: 10,
    });
    expect(res.ok).toBe(true);

    const c = await db.challenge.findUnique({ where: { id: challengeId } });
    expect(c!.name).toBe("Renamed");
    expect(c!.description).toBe("New description");
    expect(c!.isPublic).toBe(false);
    expect(c!.maxMembers).toBe(10);
  });

  it("rejects invalid dates", async () => {
    const res = await updateChallenge(challengeId, {
      name: "X",
      description: "",
      startDate: "2026-03-01",
      endDate: "2026-01-05",
      isPublic: true,
    });
    expect(res.ok).toBe(false);
    expect(res.error).toContain("End date");
  });

  it("lets the owner change task points and add a task", async () => {
    const task = await db.challengeTask.create({
      data: {
        challengeId,
        name: "Habit",
        type: "DAILY",
        inputType: "CHECKBOX",
        isRuleBreaker: false,
        isAlcoholTask: false,
        points: 5,
        target: null,
      },
    });

    const res = await updateChallengeTasks(challengeId, [
      { id: task.id, name: "Habit", type: "DAILY", inputType: "CHECKBOX", isRuleBreaker: false, isAlcoholTask: false, points: 9, target: null },
      { name: "New Task", type: "WEEKLY", inputType: "NUMBER", isRuleBreaker: false, isAlcoholTask: false, points: 20, target: 4 },
    ]);
    expect(res.ok).toBe(true);

    const updated = await db.challengeTask.findUnique({ where: { id: task.id } });
    expect(updated!.points).toBe(9);

    const all = await db.challengeTask.findMany({ where: { challengeId } });
    expect(all).toHaveLength(2);
    expect(all.map((t) => t.name)).toContain("New Task");
  });
});
