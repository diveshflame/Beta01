import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { AppShell } from "@/components/app-shell";
import { CopyInviteButton } from "@/components/copy-invite-button";
import { EditTasksSection } from "@/components/task-editor";
import { ChallengeDetailsEditor } from "@/components/challenge-details-editor";
import { countdownTo } from "@/lib/date-utils";

export const dynamic = "force-dynamic";

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session?.user) redirect("/signin");
  const { id } = await params;

  const challenge = await db.challenge.findUnique({
    where: { id },
    include: {
      admin: { select: { name: true, image: true } },
      tasks: { include: { tiers: true } },
      members: {
        include: { user: { select: { name: true, image: true } } },
        orderBy: [{ points: "desc" }, { joinedAt: "asc" }],
      },
    },
  });

  if (!challenge) notFound();

  const me = challenge.members.find((m) => m.userId === session.user.id);
  const isAdmin = challenge.adminId === session.user.id;
  const inChallenge = Boolean(me);

  const daysLeft = countdownTo(challenge.endDate);
  const weekNum = Math.floor(
    (new Date().getTime() - new Date(challenge.startDate).getTime()) /
      (1000 * 60 * 60 * 24 * 7)
  ) + 1;

  return (
    <AppShell>
      <div className="py-6 space-y-4">
        <div>
          <p className="text-muted text-xs">{inChallenge ? "Challenge" : "Preview"}</p>
          <h1 className="text-2xl font-bold tracking-tight">{challenge.name}</h1>
          {challenge.description && (
            <p className="text-muted text-sm mt-1">{challenge.description}</p>
          )}
          <div className="flex flex-wrap gap-2 mt-3 text-xs">
            <Badge>Week {Math.max(1, weekNum)}</Badge>
            <Badge>{daysLeft} days left</Badge>
            <Badge>{challenge.members.length} members</Badge>
            <Badge>{challenge.isPublic ? "Public" : "Private"}</Badge>
          </div>
        </div>

        {!inChallenge ? (
          <div className="rounded-2xl bg-card border border-card-border p-5 text-center space-y-3">
            <p className="text-sm text-muted">
              You aren&apos;t in this challenge yet.
            </p>
            <Link
              href={`/challenges/join?code=${challenge.inviteCode}`}
              className="inline-block rounded-xl bg-accent text-white px-5 py-2.5 text-sm font-semibold"
            >
              Join with invite code
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3">
              <Box label="My points" value={String(me!.points)} />
              <Box label="My streak" value={`${me!.currentStreak}🔥`} />
              <Box label="Active tasks" value={String(challenge.tasks.length)} />
              <Box
                label="Daily tasks"
                value={String(challenge.tasks.filter((t) => t.type === "DAILY").length)}
              />
            </div>

            <ChallengesTasks tasks={challenge.tasks} />

            {isAdmin && (
              <>
                <div className="rounded-2xl bg-card border border-card-border p-4">
                  <p className="text-xs text-muted">Admin</p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-sm font-medium">Invite code</p>
                    <CopyInviteButton code={challenge.inviteCode} />
                  </div>
                </div>

                <ChallengeDetailsEditor
                  challengeId={challenge.id}
                  initial={{
                    name: challenge.name,
                    description: challenge.description,
                    startDate: challenge.startDate,
                    endDate: challenge.endDate,
                    isPublic: challenge.isPublic,
                    maxMembers: challenge.maxMembers,
                  }}
                />

                <EditTasksSection
                  challengeId={challenge.id}
                  tasks={challenge.tasks}
                />
              </>
            )}

            <MembersList
              members={challenge.members}
              adminId={challenge.adminId}
            />
          </>
        )}
      </div>
    </AppShell>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-card border border-card-border px-2.5 py-1 font-medium">
      {children}
    </span>
  );
}

function Box({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-card border border-card-border p-4">
      <p className="text-muted text-xs">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}

function ChallengesTasks({
  tasks,
}: {
  tasks: {
    id: string;
    name: string;
    type: string;
    inputType: string;
    isRuleBreaker: boolean;
    isAlcoholTask: boolean;
    points: number;
    target: number | null;
    tiers: { threshold: number; points: number }[];
  }[];
}) {
  const daily = tasks.filter((t) => t.type === "DAILY");
  const weekly = tasks.filter((t) => t.type === "WEEKLY");
  return (
    <div className="space-y-3">
      {daily.length > 0 && (
        <div className="rounded-2xl bg-card border border-card-border p-4">
          <h3 className="text-sm font-semibold mb-2">Daily Challenges</h3>
          <div className="divide-y divide-card-border">
            {daily.map((task) => (
              <div key={task.id} className="flex items-center justify-between py-2.5">
                <span className="text-sm">{task.name}</span>
                <span className="text-xs text-accent font-semibold">
                  {task.points} pts
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {weekly.length > 0 && (
        <div className="rounded-2xl bg-card border border-card-border p-4">
          <h3 className="text-sm font-semibold mb-2">Weekly Challenges</h3>
          <div className="divide-y divide-card-border">
            {weekly.map((task) => (
              <div key={task.id} className="py-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{task.name}</span>
                  <span className="text-xs text-accent font-semibold">
                    {task.tiers.length > 0
                      ? `tiers`
                      : `${task.points} pts`}
                  </span>
                </div>
                {task.tiers.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {[...task.tiers]
                      .sort((a, b) => a.threshold - b.threshold)
                      .map((t) => (
                        <span
                          key={t.threshold}
                          className="text-[11px] rounded-full bg-background border border-card-border px-2 py-0.5"
                        >
                          {t.threshold}+ → {t.points} pts
                        </span>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {tasks.length === 0 && (
        <div className="rounded-2xl bg-card border border-card-border p-4 text-center text-muted text-sm">
          No challenges configured yet.
        </div>
      )}
    </div>
  );
}

function MembersList({
  members,
  adminId,
}: {
  members: {
    userId: string;
    user: { name: string | null; image: string | null };
    points: number;
    currentStreak: number;
  }[];
  adminId: string;
}) {
  return (
    <div className="rounded-2xl bg-card border border-card-border p-4">
      <h3 className="text-sm font-semibold mb-2">Members</h3>
      <div className="divide-y divide-card-border">
        {members.map((m, i) => (
          <div key={m.userId} className="flex items-center gap-3 py-2.5">
            <span className="w-6 text-muted text-sm font-semibold">#{i + 1}</span>
            <Avatar name={m.user.name ?? "?"} image={m.user.image} />
            <span className="flex-1 text-sm font-medium truncate">
              {m.user.name}
              {m.currentStreak > 0 && <span className="ml-1">🔥</span>}
              {m.userId === adminId && (
                <span className="ml-1 text-[10px] font-semibold text-accent2">
                  ADMIN
                </span>
              )}
            </span>
            <span className="text-xs text-muted">{m.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Avatar({ name, image }: { name: string; image: string | null }) {
  if (image)
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={image} alt={name} className="h-8 w-8 rounded-full object-cover" />
    );
  return (
    <span
      className="h-8 w-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold"
      aria-hidden
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}
