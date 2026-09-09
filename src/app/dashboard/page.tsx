import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getDashboardData } from "@/lib/queries";
import { AppShell } from "@/components/app-shell";
import { StreakFlame, pointsLabel } from "@/components/ui-helpers";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/signin");
  const userId = session.user.id;

  const data = await getDashboardData(userId);

  return (
    <AppShell>
      <Header />
      {!data.challenge ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-xs font-medium">
                {data.challenge.challenge.name}
              </p>
              <h2 className="text-lg font-bold">
                {data.daysToLeaderboardRest > 0
                  ? `${data.daysToLeaderboardRest} day${data.daysToLeaderboardRest === 1 ? "" : "s"
                  } left this week`
                  : "Weekly results ready"}
              </h2>
            </div>
            <div className="text-right">
              <p className="text-muted text-xs">Rank</p>
              <p className="text-xl font-bold text-accent">
                #{data.rank}
                <span className="text-muted text-sm font-medium">
                  /{data.memberCount}
                </span>
              </p>
            </div>
          </div>

          <LogTodayButton />

          <div className="grid grid-cols-2 gap-3">
            <StatCard
              label="Today's progress"
              value={
                data.completionToday ? `${data.completionToday.percent}%` : "—"
              }
              sub={
                data.completionToday
                  ? `${data.completionToday.achieved}/${data.completionToday.total}`
                  : "Not logged"
              }
            />
            <StatCard
              label="Points"
              value={String(data.totalPoints)}
              sub="in this challenge"
            />
            <StatCard
              label="Current streak"
              value={
                <>
                  {data.challenge.currentStreak}{" "}
                  <StreakFlame className="inline text-sm" />
                </>
              }
              sub="days in a row"
            />
            <StatCard
              label="Weekly bonus"
              value={
                data.weekResult && data.weekResult.points > 0
                  ? `+${data.weekResult.points}`
                  : "—"
              }
              sub="this week"
            />
          </div>

          <WeeklyProgressSection data={data} />
        </div>
      )}
    </AppShell>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-between py-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Winter Arc</h1>
        <p className="text-muted text-xs">Daily habits · Weekly challenges</p>
      </div>
    </div>
  );
}

function LogTodayButton() {
  return (
    <Link
      href="/log"
      className="block w-full rounded-xl bg-accent text-white py-3.5 text-center text-sm font-semibold shadow-lg shadow-accent/20 hover:brightness-110 transition"
    >
      Log Today ({pointsLabel()})
    </Link>
  );
}

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: React.ReactNode;
  sub: string;
}) {
  return (
    <div className="rounded-2xl bg-card border border-card-border p-4">
      <p className="text-muted text-xs">{label}</p>
      <div className="mt-1 text-2xl font-bold">{value}</div>
      <p className="text-muted text-xs mt-0.5">{sub}</p>
    </div>
  );
}

function WeeklyProgressSection({
  data,
}: {
  data: Awaited<ReturnType<typeof getDashboardData>>;
}) {
  const results = data.weekResult?.taskResults || [];
  return (
    <div className="rounded-2xl bg-card border border-card-border p-4 space-y-4">
      <h3 className="text-sm font-semibold">Weekly Challenges progress</h3>
      {results.length === 0 ? (
        <p className="text-muted text-xs">No weekly tasks configured.</p>
      ) : (
        results.map((res) => (
          <ProgressRow
            key={res.taskId}
            label={res.name}
            current={res.currentValue}
            target={res.targetValue || 0}
            unit=""
            achieved={res.achieved}
          />
        ))
      )}
    </div>
  );
}

function ProgressRow({
  label,
  current,
  target,
  unit,
  achieved,
}: {
  label: string;
  current: number;
  target: number;
  unit: string;
  achieved: boolean;
}) {
  const pct = target > 0 ? Math.min(100, Math.round((current / target) * 100)) : (achieved ? 100 : 0);
  return (
    <div>
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="font-medium">
          {label} {achieved && <span className="text-success">✓</span>}
        </span>
        {target > 0 && (
          <span className="text-muted">
            {current}/{target} {unit}
          </span>
        )}
      </div>
      <div className="h-2 rounded-full bg-background overflow-hidden">
        <div
          className={`h-full rounded-full ${achieved ? "bg-success" : "bg-accent"} transition-all`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
      <div className="text-5xl">🏔️</div>
      <h2 className="text-xl font-bold">No active challenge yet</h2>
      <p className="text-muted text-sm max-w-xs">
        Create a challenge or join one with an invite code to start logging.
      </p>
      <div className="flex gap-3">
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
  );
}
