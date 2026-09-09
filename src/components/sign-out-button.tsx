"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/signin" })}
      className="text-xs font-mono text-[#8B8F9C] hover:text-[#FF5D3A] transition py-2 px-4 bg-transparent"
    >
      Sign out
    </button>
  );
}
