"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SignInForm({
  googleConfigured,
  devEnabled,
}: {
  googleConfigured: boolean;
  devEnabled: boolean;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleGoogle() {
    setLoading("google");
    setError(null);
    await signIn("google", { callbackUrl: "/dashboard" });
  }

  async function handleDev(e: React.FormEvent) {
    e.preventDefault();
    if (!email) {
      setError("Enter an email to sign in (dev mode).");
      return;
    }
    setLoading("dev");
    setError(null);
    const res = await signIn("dev", {
      email,
      name,
      redirect: false,
    });
    if (res?.error) {
      setError(res.error);
      setLoading(null);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  }

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Winter Arc</h1>
        <p className="text-muted text-sm">
          Build an unbreakable routine through daily habits and weekly
          challenges.
        </p>
      </div>

      {error && (
        <div className="rounded-lg bg-danger/10 text-danger text-sm px-3 py-2">
          {error}
        </div>
      )}

      {googleConfigured && (
        <button
          onClick={handleGoogle}
          disabled={loading !== null}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-card border border-card-border py-3 text-sm font-medium hover:bg-card-border/40 transition disabled:opacity-50"
        >
          <GoogleIcon />
          Continue with Google
        </button>
      )}

      {devEnabled && (
        <>
          {googleConfigured && (
            <div className="flex items-center gap-3 text-muted text-xs">
              <div className="h-px flex-1 bg-card-border" />
              or
              <div className="h-px flex-1 bg-card-border" />
            </div>
          )}
          <form onSubmit={handleDev} className="space-y-3">
            <div>
              <label className="text-xs text-muted">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl bg-card border border-card-border px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="text-xs text-muted">Name (optional)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-1 w-full rounded-xl bg-card border border-card-border px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
            <button
              type="submit"
              disabled={loading !== null}
              className="w-full rounded-xl bg-accent text-white py-3 text-sm font-semibold hover:brightness-110 transition disabled:opacity-50"
            >
              {loading === "dev" ? "Signing in…" : "Sign in (Dev)"}
            </button>
            <p className="text-center text-xs text-muted">
              Dev mode — used until Google OAuth credentials are configured.
            </p>
          </form>
        </>
      )}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
      />
    </svg>
  );
}
