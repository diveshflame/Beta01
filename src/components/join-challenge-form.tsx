"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { joinChallenge } from "@/app/actions";

export function JoinChallengeForm({ initialCode }: { initialCode: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [code, setCode] = useState(initialCode);
  const [error, setError] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(() => {
      joinChallenge(code).then((res) => {
        if (!res.ok) {
          setError(res.error ?? "Could not join.");
          return;
        }
        router.push(`/challenges/${res.id}`);
        router.refresh();
      });
    });
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {error && (
        <div className="rounded-lg bg-danger/10 text-danger text-sm px-3 py-2">
          {error}
        </div>
      )}
      <label className="block">
        <span className="text-xs text-muted">Invite code or link</span>
        <div className="mt-1">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="ABC12345 or https://…/invite/ABC12345"
            className="input uppercase tracking-widest"
            autoFocus
          />
        </div>
      </label>
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl bg-accent text-white py-3.5 text-sm font-semibold hover:brightness-110 transition disabled:opacity-50"
      >
        {isPending ? "Joining…" : "Join Challenge"}
      </button>
    </form>
  );
}
