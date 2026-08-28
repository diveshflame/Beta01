import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { SignInForm } from "@/components/signin-form";

export const dynamic = "force-dynamic";

export default async function SignInPage() {
  const session = await auth();
  if (session?.user) redirect("/dashboard");

  const googleConfigured = Boolean(
    process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
  );
  const devEnabled = process.env.AUTH_DEV_ENABLED === "true";

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
      <SignInForm
        googleConfigured={googleConfigured}
        devEnabled={devEnabled}
      />
    </main>
  );
}
