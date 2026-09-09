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
import { leaveChallenge, deleteChallenge } from "@/app/actions";

const MON = new Date(2026, 0, 5, 12);
let multiId = "";
let multiMemberId = "";
let soloId = "";
let otherOwnerId = "";
let otherOwnerChallengeId = "";

async function makeMember(userId: string, challengeId: string) {
  return db.challengeMember.create({
    data: { userId, challengeId },
  });
}

beforeAll(async () => {
  await db.user.create({
    data: { email: "danger-admin@test.dev", name: "Admin", id: "ADMIN_USER" },
  });
  const member = await db.user.create({
    data: { email: "danger-member@test.dev", name: "Member" },
  });
  multiMemberId = member.id;
  const otherOwner = await db.user.create({
    data: { email: "danger-other@test.dev", name: "OtherOwner" },
  });
  otherOwnerId = otherOwner.id;

  // Challenge with two members (owner ADMIN_USER + member).
  const multi = await db.challenge.create({
    data: {
      name: "Multi",
      description: "",
      startDate: MON,
      endDate: new Date(2026, 1, 28, 12),
      isPublic: true,
      inviteCode: "DANG01",
      adminId: "ADMIN_USER",
      members: { create: { userId: member.id } },
    },
  });
  multiId = multi.id;

  // Solo challenge owned by ADMIN_USER (no other members).
  const solo = await db.challenge.create({
    data: {
      name: "Solo",
      description: "",
      startDate: MON,
      endDate: new Date(2026, 1, 28, 12),
      isPublic: true,
      inviteCode: "DANG02",
      adminId: "ADMIN_USER",
      members: { create: { userId: "ADMIN_USER" } },
    },
  });
  soloId = solo.id;

  // Challenge owned by a different user (to test delete denial).
  const other = await db.challenge.create({
    data: {
      name: "Others",
      description: "",
      startDate: MON,
      endDate: new Date(2026, 1, 28, 12),
      isPublic: true,
      inviteCode: "DANG03",
      adminId: otherOwner.id,
      members: { create: { userId: otherOwner.id } },
    },
  });
  otherOwnerChallengeId = other.id;
});

afterAll(async () => {
  const { closeTestDb } = await import("../helpers/test-db");
  await closeTestDb();
});

describe("deleteChallenge", () => {
  it("lets the owner delete a challenge (data cascades)", async () => {
    const t = await db.challengeTask.create({
      data: {
        challengeId: multiId,
        name: "DelTask",
        type: "DAILY",
        inputType: "CHECKBOX",
        isRuleBreaker: false,
        isAlcoholTask: false,
        points: 5,
        target: null,
      },
    });
    await db.taskLog.create({
      data: {
        userId: multiMemberId,
        challengeId: multiId,
        taskId: t.id,
        date: MON,
        completed: true,
        value: 1,
      },
    });

    const res = await deleteChallenge(multiId);
    expect(res.ok).toBe(true);

    const gone = await db.challenge.findUnique({ where: { id: multiId } });
    expect(gone).toBeNull();
    expect(
      await db.challengeMember.findMany({ where: { challengeId: multiId } })
    ).toHaveLength(0);
    expect(
      await db.taskLog.findMany({ where: { challengeId: multiId } })
    ).toHaveLength(0);
  });

  it("denies deletion when the caller is not the owner", async () => {
    const res = await deleteChallenge(otherOwnerChallengeId);
    expect(res.ok).toBe(false);
    expect(res.error).toContain("creator");
    expect(await db.challenge.findUnique({ where: { id: otherOwnerChallengeId } }))
      .not.toBeNull();
  });
});

describe("leaveChallenge", () => {
  it("lets a member leave without deleting the challenge", async () => {
    const c = await db.challenge.create({
      data: {
        name: "Leaveable",
        description: "",
        startDate: MON,
        endDate: new Date(2026, 1, 28, 12),
        isPublic: true,
        inviteCode: "DANG04",
        adminId: multiMemberId,
        members: { create: { userId: "ADMIN_USER" } },
      },
    });

    const res = await leaveChallenge(c.id);
    expect(res.ok).toBe(true);

    const stillThere = await db.challenge.findUnique({ where: { id: c.id } });
    expect(stillThere).not.toBeNull();
    expect(
      await db.challengeMember.findMany({ where: { challengeId: c.id } })
    ).toHaveLength(0);
  });

  it("transfers ownership when the owner leaves and others remain", async () => {
    const c = await db.challenge.create({
      data: {
        name: "Transfer",
        description: "",
        startDate: MON,
        endDate: new Date(2026, 1, 28, 12),
        isPublic: true,
        inviteCode: "DANG05",
        adminId: "ADMIN_USER",
        members: {
          create: [{ userId: "ADMIN_USER" }, { userId: multiMemberId }],
        },
      },
    });

    const res = await leaveChallenge(c.id);
    expect(res.ok).toBe(true);

    const after = await db.challenge.findUnique({ where: { id: c.id } });
    expect(after).not.toBeNull();
    expect(after!.adminId).toBe(multiMemberId);
    expect(
      await db.challengeMember.findMany({ where: { challengeId: c.id } })
    ).toHaveLength(1);
  });

  it("deletes the challenge when the solo owner leaves", async () => {
    const res = await leaveChallenge(soloId);
    expect(res.ok).toBe(true);
    expect(await db.challenge.findUnique({ where: { id: soloId } })).toBeNull();
  });
});
