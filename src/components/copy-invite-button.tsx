"use client";

import { useState } from "react";

export function CopyInviteButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className="text-accent text-sm font-semibold"
      onClick={copy}
    >
      {code} · {copied ? "copied" : "copy"}
    </button>
  );
}
