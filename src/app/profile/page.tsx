import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { startOfDay } from "@/lib/scoring";
import { AppShell } from "@/components/app-shell";
import { ProfileClient } from "@/components/profile-client";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) redirect("/signin");
  const userId = session.user.id;

  const user = await db.user.findUnique({
    where: { id: userId },
    include: {
      memberships: {
        include: {
          challenge: {
            include: {
              tasks: true,
            },
          },
        },
      },
    },
  });
  if (!user) redirect("/signin");

  // All day summaries across all the user's challenges.
  const summaries = await db.daySummary.findMany({
    where: { userId },
    orderBy: { date: "desc" },
  });

  const today = startOfDay(new Date());
  const todayTaskLogs = await db.taskLog.findMany({
    where: {
      userId,
      date: today,
    },
  });

  const daysLogged = summaries.length;
  const perfectDays = summaries.filter((s) => s.dailyBonusAwarded).length;
  const avgCompletion =
    daysLogged === 0
      ? 0
      : Math.round(
          summaries.reduce(
            (acc, s) =>
              acc + (s.totalCount ? (s.completedCount / s.totalCount) * 100 : 0),
            0
          ) / daysLogged
        );

  const stats = {
    daysLogged,
    perfectDays,
    avgCompletion,
  };

  const activeMemberships = user.memberships
    .filter((m) => m.challenge.isActive && m.challenge.endDate >= new Date())
    .map((m) => ({
      id: m.id,
      points: m.points,
      currentStreak: m.currentStreak,
      challenge: {
        id: m.challenge.id,
        name: m.challenge.name,
        description: m.challenge.description,
        startDate: m.challenge.startDate.toISOString(),
        endDate: m.challenge.endDate.toISOString(),
        tasks: m.challenge.tasks.map((t) => ({
          id: t.id,
          name: t.name,
          points: t.points,
          type: t.type,
        })),
      },
      todayLogs: todayTaskLogs
        .filter((l) => l.challengeId === m.challenge.id)
        .map((l) => ({ taskId: l.taskId, completed: l.completed })),
    }));

  const formattedSummaries = summaries.map((s) => ({
    id: s.id,
    date: s.date.toISOString(),
    completedCount: s.completedCount,
    totalCount: s.totalCount,
    pointsAwarded: s.pointsAwarded,
    dailyBonusAwarded: s.dailyBonusAwarded,
  }));

  return (
    <AppShell>
      <div className="py-6">
        <ProfileClient
          user={{
            id: user.id,
            name: user.name,
            displayName: user.displayName,
            email: user.email,
            image: user.image,
            totalPoints: user.totalPoints,
            currentStreak: user.currentStreak,
            longestStreak: user.longestStreak,
            mantra: user.mantra ?? "I am inevitable",
            streakTokens: user.streakTokens ?? 1,
          }}
          stats={stats}
          summaries={formattedSummaries}
          activeMemberships={activeMemberships}
        />
      </div>
    </AppShell>
  );
}
