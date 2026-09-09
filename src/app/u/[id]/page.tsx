import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { AppShell } from "@/components/app-shell";

export const dynamic = "force-dynamic";

export default async function PublicProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session?.user) redirect("/signin");

  const { id } = await params;

  const user = await db.user.findUnique({
    where: { id },
    include: {
      memberships: {
        include: { challenge: { select: { id: true, name: true, isActive: true } } },
        orderBy: { points: "desc" },
      },
    },
  });
  if (!user) notFound();

  const displayName = user.displayName || user.name || "Unknown";
  const totalPoints = user.memberships.reduce((acc, m) => acc + m.points, 0);

  return (
    <AppShell>
      <div className="py-6 space-y-4">
        <div className="flex items-center gap-3">
          <Link
            href="/leaderboards"
            className="text-lg text-muted hover:text-foreground transition px-1"
            aria-label="Back to leaderboards"
          >
            ‹
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
          <span className="text-muted text-xs font-medium self-center">
            {user.id === session.user.id ? "(you)" : displayName}
          </span>
        </div>

        {/* Identity */}
        <div className="rounded-2xl bg-card border border-card-border p-4 flex items-center gap-4">
          <span className="h-14 w-14 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xl font-bold overflow-hidden shrink-0">
            {user.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.image} alt="" className="h-full w-full object-cover" />
            ) : (
              displayName.charAt(0).toUpperCase()
            )}
          </span>
          <div className="min-w-0">
            <p className="text-lg font-bold truncate">{displayName}</p>
            {user.mantra && (
              <p className="text-xs text-muted mt-0.5 truncate">
                <span className="text-accent font-semibold">“</span>
                {user.mantra}
                <span className="text-accent font-semibold">”</span>
              </p>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <StatCard label="Total points" value={totalPoints} />
          <StatCard label="Streak" value={user.currentStreak} suffix={user.currentStreak > 0 ? " 🔥" : ""} />
          <StatCard label="Longest" value={user.longestStreak} />
        </div>

        {/* Memberships */}
        <div className="rounded-2xl bg-card border border-card-border divide-y divide-card-border">
          <h2 className="px-4 pt-3 pb-1 text-xs font-bold text-muted uppercase tracking-wide">
            Challenges
          </h2>
          {user.memberships.length === 0 ? (
            <div className="px-4 py-6 text-center text-muted text-sm">
              Not in any challenge yet.
            </div>
          ) : (
            user.memberships.map((m) => (
              <div key={m.id} className="px-4 py-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{m.challenge.name}</p>
                  <p className="text-xs text-muted">
                    {m.currentStreak > 0 ? `${m.currentStreak} 🔥 streak` : "no streak"}
                  </p>
                </div>
                <span className="text-sm font-bold shrink-0">
                  {m.points}
                  <span className="text-muted text-xs font-medium ml-0.5">pts</span>
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div className="rounded-2xl bg-card border border-card-border p-3 text-center">
      <p className="text-xl font-bold">{value}
        {suffix && <span>{suffix}</span>}
      </p>
      <p className="text-[11px] text-muted font-medium mt-0.5">{label}</p>
    </div>
  );
}