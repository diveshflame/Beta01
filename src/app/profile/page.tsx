import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { AppShell } from "@/components/app-shell";
import { SignOutButton } from "@/components/sign-out-button";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) redirect("/signin");
  const userId = session.user.id;

  const user = await db.user.findUnique({
    where: { id: userId },
    include: { memberships: { include: { challenge: true } } },
  });
  if (!user) redirect("/signin");

  // All day summaries across all the user's challenges.
  const summaries = await db.daySummary.findMany({
    where: { userId },
  });

  const daysLogged = summaries.length;
  const perfectDays = summaries.filter((s) => s.dailyBonusAwarded).length;
  const avgCompletion =
    daysLogged === 0
      ? 0
      : Math.round(
          summaries.reduce(
            (acc, s) => acc + (s.totalCount ? (s.completedCount / s.totalCount) * 100 : 0),
            0
          ) / daysLogged
        );

  const stats = {
    totalPoints: user.totalPoints,
    currentStreak: user.currentStreak,
    longestStreak: user.longestStreak,
    daysLogged,
    perfectDays,
    avgCompletion,
  };

  const activeMemberships = user.memberships.filter(
    (m) => m.challenge.isActive && m.challenge.endDate >= new Date()
  );

  return (
    <AppShell>
      <div className="py-6 space-y-5">
        <div className="flex items-center gap-4">
          {user.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.image}
              alt=""
              className="h-16 w-16 rounded-full object-cover"
            />
          ) : (
            <span className="h-16 w-16 rounded-full bg-accent/20 text-accent flex items-center justify-center text-2xl font-bold">
              {(user.displayName ?? user.name ?? "?").charAt(0).toUpperCase()}
            </span>
          )}
          <div className="flex-1">
            <h1 className="text-xl font-bold">{user.displayName ?? user.name}</h1>
            <p className="text-muted text-xs">{user.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Stat label="Points" value={String(stats.totalPoints)} />
          <Stat label="Streak" value={`${stats.currentStreak}🔥`} />
          <Stat label="Challenges" value={String(activeMemberships.length)} />
        </div>

        <div className="rounded-2xl bg-card border border-card-border p-4 space-y-3">
          <h2 className="text-sm font-semibold">Active Challenges</h2>
          {activeMemberships.length === 0 ? (
            <p className="text-muted text-sm">No active challenges.</p>
          ) : (
            activeMemberships.map((m) => (
              <a
                key={m.id}
                href={`/challenges/${m.challenge.id}`}
                className="block rounded-xl bg-background border border-card-border p-3 hover:border-accent/50 transition"
              >
                <p className="text-sm font-medium">{m.challenge.name}</p>
                <p className="text-xs text-muted">
                  {m.points} pts · {m.currentStreak}🔥 streak
                </p>
              </a>
            ))
          )}
        </div>

        <div className="rounded-2xl bg-card border border-card-border p-4">
          <h2 className="text-sm font-semibold mb-3">Achievements</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <KV k="Longest streak" v={`${stats.longestStreak} days`} />
            <KV k="Days logged" v={String(stats.daysLogged)} />
            <KV k="Perfect days" v={String(stats.perfectDays)} />
            <KV k="Daily completion" v={`${stats.avgCompletion}%`} />
          </div>
          <p className="text-xs text-muted mt-3 pt-3 border-t border-card-border">
            Detailed task statistics are shown per challenge on the challenge
            dashboard.
          </p>
        </div>

        <SignOutButton />
      </div>
    </AppShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-card border border-card-border p-3 text-center">
      <p className="text-muted text-xs">{label}</p>
      <p className="mt-0.5 text-lg font-bold">{value}</p>
    </div>
  );
}

function KV({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-card-border pb-2">
      <span className="text-muted">{k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}
