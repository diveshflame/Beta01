import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { JoinChallengeForm } from "@/components/join-challenge-form";

export const dynamic = "force-dynamic";

export default async function JoinChallengePage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const session = await auth();
  if (!session?.user) redirect("/signin");

  const { code } = await searchParams;

  return (
    <AppShell>
      <div className="py-6 space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Join a Challenge</h1>
          <p className="text-muted text-xs">
            Enter an invite code or paste an invite link.
          </p>
        </div>
        <JoinChallengeForm initialCode={code || ""} />
      </div>
    </AppShell>
  );
}
