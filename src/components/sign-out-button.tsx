"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/signin" })}
      className="w-full rounded-xl border border-card-border bg-card py-3 text-sm font-semibold text-muted hover:text-danger hover:border-danger/40 transition"
    >
      Sign out
    </button>
  );
}
