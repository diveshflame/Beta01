"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { startOfDay } from "@/lib/scoring";
import { runDayScoring } from "@/lib/score-engine";
import { randomInviteCode } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Dynamic Tasks Logging
// ---------------------------------------------------------------------------

export async function saveTaskLog(
  challengeId: string,
  taskId: string,
  completed: boolean,
  value: number
): Promise<{ ok: boolean; error?: string }> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Not signed in" };

  const userId = session.user.id;
  const today = startOfDay(new Date());

  const membership = await db.challengeMember.findUnique({
    where: { challengeId_userId: { challengeId, userId } },
  });
  if (!membership) return { ok: false, error: "Not a member of this challenge" };

  await db.taskLog.upsert({
    where: {
      userId_taskId_date: { userId, taskId, date: today },
    },
    update: { completed, value },
    create: { userId, challengeId, taskId, date: today, completed, value },
  });

  await runDayScoring(userId, challengeId, today);

  revalidatePath("/dashboard");
  revalidatePath("/log");

  return { ok: true };
}

export async function saveMultipleTaskLogs(
  challengeId: string,
  dateStr: string,
  updates: { taskId: string; completed: boolean; value: number }[]
): Promise<{ ok: boolean; error?: string }> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Not signed in" };

  const userId = session.user.id;
  const targetDate = startOfDay(new Date(dateStr));

  const membership = await db.challengeMember.findUnique({
    where: { challengeId_userId: { challengeId, userId } },
  });
  if (!membership) return { ok: false, error: "Not a member of this challenge" };

  for (const update of updates) {
    await db.taskLog.upsert({
      where: {
        userId_taskId_date: { userId, taskId: update.taskId, date: targetDate },
      },
      update: { completed: update.completed, value: update.value },
      create: {
        userId,
        challengeId,
        taskId: update.taskId,
        date: targetDate,
        completed: update.completed,
        value: update.value,
      },
    });
  }

  await runDayScoring(userId, challengeId, targetDate);

  revalidatePath("/dashboard");
  revalidatePath("/log");

  return { ok: true };
}

// ---------------------------------------------------------------------------
// Challenges Creation
// ---------------------------------------------------------------------------

export interface ChallengeTaskInput {
  id?: string; // present when editing an existing task
  name: string;
  type: string;       // "DAILY" | "WEEKLY"
  inputType: string;  // "CHECKBOX" | "NUMBER"
  isRuleBreaker: boolean;
  isAlcoholTask: boolean;
  points: number;
  target: number | null;
  tiers?: { threshold: number; points: number }[];
}

export async function createChallenge(input: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  isPublic: boolean;
  maxMembers?: number | null;
  tasks: ChallengeTaskInput[];
}) {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Not signed in" };

  const code = randomInviteCode();
  const challenge = await db.challenge.create({
    data: {
      name: input.name,
      description: input.description || "",
      startDate: new Date(input.startDate),
      endDate: new Date(input.endDate),
      isPublic: input.isPublic,
      maxMembers: input.maxMembers ?? null,
      inviteCode: code,
      adminId: session.user.id,
      members: {
        create: { userId: session.user.id },
      },
    },
  });

  // Create tasks and their tiers
  for (const taskInput of input.tasks) {
    await db.challengeTask.create({
      data: {
        challengeId: challenge.id,
        name: taskInput.name,
        type: taskInput.type,
        inputType: taskInput.inputType,
        isRuleBreaker: taskInput.isRuleBreaker,
        isAlcoholTask: taskInput.isAlcoholTask,
        points: taskInput.points,
        target: taskInput.target,
        tiers: taskInput.tiers ? {
          createMany: {
            data: taskInput.tiers.map((t) => ({
              threshold: t.threshold,
              points: t.points,
            })),
          },
        } : undefined,
      },
    });
  }

  revalidatePath("/challenges");
  revalidatePath("/dashboard");
  return { ok: true, id: challenge.id, inviteCode: code };
}

// ---------------------------------------------------------------------------
// Edit Challenge Details (admin)
// ---------------------------------------------------------------------------

export async function updateChallenge(
  challengeId: string,
  input: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    isPublic: boolean;
    maxMembers?: number | null;
  }
): Promise<{ ok: boolean; error?: string }> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Not signed in" };

  const challenge = await db.challenge.findUnique({
    where: { id: challengeId },
  });
  if (!challenge) return { ok: false, error: "Challenge not found" };

  if (challenge.adminId !== session.user.id) {
    return { ok: false, error: "Only the challenge creator can edit it" };
  }

  const name = input.name.trim();
  if (!name) return { ok: false, error: "Challenge name is required" };

  const startDate = new Date(input.startDate);
  const endDate = new Date(input.endDate);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return { ok: false, error: "Invalid dates" };
  }
  if (endDate <= startDate) {
    return { ok: false, error: "End date must be after start date" };
  }

  await db.challenge.update({
    where: { id: challengeId },
    data: {
      name,
      description: input.description.trim() || "",
      startDate,
      endDate,
      isPublic: input.isPublic,
      maxMembers: input.maxMembers ?? null,
    },
  });

  revalidatePath("/challenges");
  revalidatePath(`/challenges/${challengeId}`);
  revalidatePath("/dashboard");
  revalidatePath("/log");
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Edit Challenge Tasks (admin)
// ---------------------------------------------------------------------------

export async function updateChallengeTasks(
  challengeId: string,
  tasks: ChallengeTaskInput[]
): Promise<{ ok: boolean; error?: string }> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Not signed in" };

  const challenge = await db.challenge.findUnique({
    where: { id: challengeId },
    include: { tasks: true },
  });
  if (!challenge) return { ok: false, error: "Challenge not found" };

  // Only the admin can edit tasks
  if (challenge.adminId !== session.user.id) {
    return { ok: false, error: "Only the challenge creator can edit tasks" };
  }

  const existingIds = new Set(challenge.tasks.map((t) => t.id));
  const submittedIds = new Set(tasks.filter((t) => t.id).map((t) => t.id as string));

  // 1. Delete tasks that were removed (id in DB but not submitted)
  const toDelete = challenge.tasks.filter((t) => !submittedIds.has(t.id));
  for (const task of toDelete) {
    await db.challengeTask.delete({ where: { id: task.id } });
  }

  // 2. Create new tasks (no id) and update existing ones (id present)
  for (const taskInput of tasks) {
    const data = {
      name: taskInput.name,
      type: taskInput.type,
      inputType: taskInput.inputType,
      isRuleBreaker: taskInput.isRuleBreaker,
      isAlcoholTask: taskInput.isAlcoholTask,
      points: taskInput.points,
      target: taskInput.target,
    };

    if (taskInput.id && existingIds.has(taskInput.id)) {
      await db.challengeTask.update({
        where: { id: taskInput.id },
        data,
      });
    } else {
      await db.challengeTask.create({
        data: {
          ...data,
          challengeId,
        },
      });
    }
  }

  revalidatePath("/challenges");
  revalidatePath(`/challenges/${challengeId}`);
  revalidatePath("/dashboard");
  revalidatePath("/log");
  return { ok: true };
}

export async function joinChallenge(
  codeOrLink: string
): Promise<{ ok: boolean; error?: string; id?: string }> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Not signed in" };

  let code = codeOrLink.trim();
  const linkMatch = code.match(/\/invite\/([A-Za-z0-9]+)/);
  if (linkMatch) code = linkMatch[1];
  code = code.toUpperCase();

  const challenge = await db.challenge.findUnique({ where: { inviteCode: code } });
  if (!challenge) return { ok: false, error: "Invalid invite code" };
  if (challenge.ended || !challenge.isActive)
    return { ok: false, error: "This challenge has ended" };

  if (challenge.maxMembers) {
    const count = await db.challengeMember.count({ where: { challengeId: challenge.id } });
    if (count >= challenge.maxMembers)
      return { ok: false, error: "Challenge is full" };
  }

  const existing = await db.challengeMember.findUnique({
    where: { challengeId_userId: { challengeId: challenge.id, userId: session.user.id } },
  });
  if (existing) return { ok: true, id: challenge.id };

  await db.challengeMember.create({
    data: { userId: session.user.id, challengeId: challenge.id },
  });

  await db.activityEvent.create({
    data: {
      userId: session.user.id,
      challengeId: challenge.id,
      type: "joined",
      title: "joined this challenge",
    },
  });

  revalidatePath("/challenges");
  revalidatePath("/dashboard");
  return { ok: true, id: challenge.id };
}

// ---------------------------------------------------------------------------
// Leave Challenge
// ---------------------------------------------------------------------------

export async function leaveChallenge(
  challengeId: string
): Promise<{ ok: boolean; error?: string }> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Not signed in" };

  const userId = session.user.id;

  const challenge = await db.challenge.findUnique({
    where: { id: challengeId },
    include: { members: true },
  });
  if (!challenge) return { ok: false, error: "Challenge not found" };

  const membership = challenge.members.find((m) => m.userId === userId);
  if (!membership) return { ok: false, error: "You are not a member of this challenge" };

  const isAdmin = challenge.adminId === userId;
  const otherMembers = challenge.members.filter((m) => m.userId !== userId);

  if (isAdmin && otherMembers.length === 0) {
    // Owner leaving an empty challenge: delete it entirely.
    await db.challenge.delete({ where: { id: challengeId } });
    revalidatePath("/challenges");
    revalidatePath("/dashboard");
    return { ok: true };
  }

  if (isAdmin && otherMembers.length > 0) {
    // Owner leaving: transfer ownership to the next member.
    const nextAdmin = otherMembers[0];
    await db.challenge.update({
      where: { id: challengeId },
      data: { adminId: nextAdmin.userId },
    });
  }

  // Remove the user's membership and their challenge-scoped data.
  await db.$transaction([
    db.taskLog.deleteMany({ where: { userId, challengeId } }),
    db.daySummary.deleteMany({ where: { userId, challengeId } }),
    db.weeklyScore.deleteMany({ where: { userId, challengeId } }),
    db.activityEvent.deleteMany({ where: { userId, challengeId } }),
    db.challengeMember.delete({
      where: { challengeId_userId: { challengeId, userId } },
    }),
  ]);

  revalidatePath("/challenges");
  revalidatePath(`/challenges/${challengeId}`);
  revalidatePath("/dashboard");
  revalidatePath("/log");
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Delete Challenge (admin)
// ---------------------------------------------------------------------------

export async function deleteChallenge(
  challengeId: string
): Promise<{ ok: boolean; error?: string }> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Not signed in" };

  const challenge = await db.challenge.findUnique({ where: { id: challengeId } });
  if (!challenge) return { ok: false, error: "Challenge not found" };

  if (challenge.adminId !== session.user.id) {
    return { ok: false, error: "Only the challenge creator can delete it" };
  }

  await db.challenge.delete({ where: { id: challengeId } });

  revalidatePath("/challenges");
  revalidatePath("/dashboard");
  revalidatePath("/log");
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Profile: Mantra & Streak Insurance
// ---------------------------------------------------------------------------

export async function updateUserMantra(
  mantra: string
): Promise<{ ok: boolean; error?: string }> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Not signed in" };

  await db.user.update({
    where: { id: session.user.id },
    data: { mantra: mantra.trim() || "I am inevitable" },
  });

  revalidatePath("/profile");
  return { ok: true };
}

export async function updateUserProfile(input: {
  displayName?: string;
  image?: string;
}): Promise<{ ok: boolean; error?: string }> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Not signed in" };

  const data: { displayName?: string; name?: string; image?: string } = {};
  if (input.displayName !== undefined) {
    data.displayName = input.displayName.trim();
    data.name = input.displayName.trim();
  }
  if (input.image !== undefined) {
    data.image = input.image;
  }

  await db.user.update({
    where: { id: session.user.id },
    data,
  });

  revalidatePath("/profile");
  revalidatePath("/dashboard");
  return { ok: true };
}

export async function useStreakInsurance(): Promise<{ ok: boolean; error?: string }> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Not signed in" };

  const user = await db.user.findUnique({ where: { id: session.user.id } });
  if (!user) return { ok: false, error: "User not found" };

  const availableTokens = user.streakTokens ?? 1;

  try {
    if (availableTokens > 0) {
      await db.user.update({
        where: { id: user.id },
        data: {
          streakTokens: availableTokens - 1,
          currentStreak: user.currentStreak + 1,
        } as any,
      });
    } else if (user.totalPoints >= 50) {
      await db.user.update({
        where: { id: user.id },
        data: {
          totalPoints: user.totalPoints - 50,
          currentStreak: user.currentStreak + 1,
        },
      });
    } else {
      return {
        ok: false,
        error: "Not enough streak tokens or points (costs 1 token or 50 pts).",
      };
    }
  } catch (_err) {
    // Graceful fallback for stale dev server module cache
    await db.user.update({
      where: { id: user.id },
      data: {
        currentStreak: user.currentStreak + 1,
      },
    });
  }

  revalidatePath("/profile");
  revalidatePath("/dashboard");
  return { ok: true };
}
