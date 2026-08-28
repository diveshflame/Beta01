import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { AppShell } from "@/components/app-shell";

export const dynamic = "force-dynamic";

export default async function ChallengesPage() {
  const session = await auth();
  if (!session?.user) redirect("/signin");

  const memberships = await db.challengeMember.findMany({
    where: { userId: session.user.id },
    orderBy: { joinedAt: "desc" },
    include: {
      challenge: {
        include: { _count: { select: { members: true } } },
      },
    },
  });

  return (
    <AppShell>
      <div className="py-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Challenges</h1>
            <p className="text-muted text-xs">Your challenges</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/challenges/join"
              className="rounded-xl bg-card border border-card-border px-4 py-2 text-sm font-semibold"
            >
              Join
            </Link>
            <Link
              href="/challenges/new"
              className="rounded-xl bg-accent text-white px-4 py-2 text-sm font-semibold"
            >
              Create
            </Link>
          </div>
        </div>

        {memberships.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-muted">You aren&apos;t in any challenge yet.</p>
            <div className="flex justify-center gap-3">
              <Link
                href="/challenges/new"
                className="rounded-xl bg-accent text-white px-5 py-2.5 text-sm font-semibold"
              >
                Create Challenge
              </Link>
              <Link
                href="/challenges/join"
                className="rounded-xl bg-card border border-card-border px-5 py-2.5 text-sm font-semibold"
              >
                Join with code
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {memberships.map((m) => {
              const c = m.challenge;
              const now = new Date();
              const active = now >= c.startDate && now <= c.endDate && c.isActive;
              return (
                <Link
                  key={m.id}
                  href={`/challenges/${c.id}`}
                  className="block rounded-2xl bg-card border border-card-border p-4 hover:border-accent/50 transition"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">{c.name}</p>
                      <p className="text-xs text-muted mt-0.5">
                        {c._count.members} members ·{" "}
                        {c.startDate.toLocaleDateString()} →{" "}
                        {c.endDate.toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        active
                          ? "bg-success/15 text-success"
                          : "bg-card-border/40 text-muted"
                      }`}
                    >
                      {active ? "Active" : "Ended"}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-2">
                    {m.points} pts · streak {m.currentStreak}🔥
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </AppShell>
  );
}
