import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { CreateChallengeForm } from "@/components/create-challenge-form";

export const dynamic = "force-dynamic";

export default async function CreateChallengePage() {
  const session = await auth();
  if (!session?.user) redirect("/signin");

  return (
    <AppShell>
      <div className="py-6 space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">New Challenge</h1>
          <p className="text-muted text-xs">
            Define the rules before it starts.
          </p>
        </div>
        <CreateChallengeForm adminName={session.user.name ?? "You"} />
      </div>
    </AppShell>
  );
}
