import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { getPrimaryChallenge } from "@/lib/queries";
import { startOfWeek, startOfDay, endOfDay } from "@/lib/scoring";
import { AppShell } from "@/components/app-shell";
import { LeaderboardClient } from "@/components/leaderboard-client";

export const dynamic = "force-dynamic";

export default async function LeaderboardsPage() {
  const session = await auth();
  if (!session?.user) redirect("/signin");

  const membership = await getPrimaryChallenge(session.user.id);
  if (!membership) redirect("/challenges/new");
  const challengeId = membership.challenge.id;

  const dayStart = startOfDay(new Date());
  const dayEnd = endOfDay(new Date());
  const weekStart = startOfWeek(new Date());

  const members = await db.challengeMember.findMany({
    where: { challengeId },
    include: { user: { select: { name: true, image: true, mantra: true } } },
  });

  const todayLogs = await db.daySummary.findMany({
    where: { challengeId, date: { gte: dayStart, lte: dayEnd } },
    select: { userId: true, pointsAwarded: true },
  });
  const weekLogs = await db.weeklyScore.findMany({
    where: { challengeId, weekStart },
    select: { userId: true, points: true },
  });

  const todayByUser = new Map<string, number>();
  todayLogs.forEach((l) =>
    todayByUser.set(l.userId, (todayByUser.get(l.userId) ?? 0) + l.pointsAwarded)
  );
  const weekByUser = new Map<string, number>();
  weekLogs.forEach((l) =>
    weekByUser.set(l.userId, (weekByUser.get(l.userId) ?? 0) + l.points)
  );

  const rows = members.map((m) => ({
    userId: m.userId,
    name: m.user.name ?? "Unknown",
    image: m.user.image,
    mantra: m.user.mantra,
    today: todayByUser.get(m.userId) ?? 0,
    week: weekByUser.get(m.userId) ?? 0,
    overall: m.points,
    streak: m.currentStreak,
  }));

  const today = [...rows].sort((a, b) => b.today - a.today || b.week - a.week);
  const week = [...rows].sort((a, b) => b.week - a.week || b.overall - a.overall);
  const overall = [...rows].sort((a, b) => b.overall - a.overall);

  return (
    <AppShell>
      <div className="py-6 space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Leaderboards</h1>
          <p className="text-muted text-xs">{membership.challenge.name}</p>
        </div>
        <LeaderboardClient
          today={today}
          week={week}
          overall={overall}
          myUserId={session.user.id}
        />
      </div>
    </AppShell>
  );
}
