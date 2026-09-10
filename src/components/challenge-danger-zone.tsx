"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  leaveChallenge,
  deleteChallenge,
  resetChallengePoints,
} from "@/app/actions";

export function ChallengeDangerZone({
  challengeId,
  isAdmin,
  memberCount,
}: {
  challengeId: string;
  isAdmin: boolean;
  memberCount: number;
}) {
  const router = useRouter();
  const [confirming, setConfirming] = useState<null | "leave" | "delete" | "reset">(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const soloOwner = isAdmin && memberCount <= 1;

  function run(action: "leave" | "delete" | "reset") {
    setError(null);
    startTransition(() => {
      const call =
        action === "delete"
          ? deleteChallenge(challengeId)
          : action === "reset"
            ? resetChallengePoints(challengeId)
            : leaveChallenge(challengeId);
      call.then((res) => {
        if (!res.ok) {
          setError(res.error ?? "Something went wrong.");
          setConfirming(null);
          return;
        }
        if (action === "reset") {
          setConfirming(null);
          router.refresh();
          return;
        }
        router.push("/challenges");
        router.refresh();
      });
    });
  }

  return (
    <div className="rounded-2xl bg-card border border-card-border p-4 space-y-3">
      <p className="text-sm font-semibold">Danger zone</p>

      {error && (
        <div className="rounded-lg bg-danger/10 text-danger text-sm px-3 py-2">
          {error}
        </div>
      )}

      {isAdmin && confirming !== "reset" && (
        <button
          type="button"
          onClick={() => setConfirming("reset")}
          className="w-full rounded-xl border border-warning/40 text-warning bg-warning/5 px-4 py-2.5 text-sm font-semibold hover:bg-warning/10 transition"
        >
          Reset all points
        </button>
      )}

      {confirming === "reset" && (
        <div className="space-y-2">
          <p className="text-sm text-muted">
            Reset points for every member? All points, streaks, and log
            history in this challenge will be cleared to 0. This cannot be
            undone.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => run("reset")}
              disabled={isPending}
              className="flex-1 rounded-xl bg-warning text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110 transition disabled:opacity-50"
            >
              {isPending ? "Resetting…" : "Yes, reset points"}
            </button>
            <button
              type="button"
              onClick={() => setConfirming(null)}
              disabled={isPending}
              className="flex-1 rounded-xl bg-card border border-card-border px-4 py-2.5 text-sm font-semibold hover:bg-background transition disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!confirming && (
        <button
          type="button"
          onClick={() => setConfirming(isAdmin ? "delete" : "leave")}
          className="w-full rounded-xl border border-danger/40 text-danger bg-danger/5 px-4 py-2.5 text-sm font-semibold hover:bg-danger/10 transition"
        >
          {isAdmin ? "Delete challenge" : "Leave challenge"}
        </button>
      )}

      {confirming === "leave" && (
        <div className="space-y-2">
          <p className="text-sm text-muted">
            {soloOwner
              ? "You are the only member. Leaving will permanently delete this challenge and all its data."
              : "Leave this challenge? Your points and logs for it will be removed."}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => run("leave")}
              disabled={isPending}
              className="flex-1 rounded-xl bg-danger text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110 transition disabled:opacity-50"
            >
              {isPending ? "Leaving…" : "Yes, leave"}
            </button>
            <button
              type="button"
              onClick={() => setConfirming(null)}
              disabled={isPending}
              className="flex-1 rounded-xl bg-card border border-card-border px-4 py-2.5 text-sm font-semibold hover:bg-background transition disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {confirming === "delete" && (
        <div className="space-y-2">
          <p className="text-sm text-muted">
            Permanently delete this challenge, its tasks, and all member
            points and logs? This cannot be undone.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => run("delete")}
              disabled={isPending}
              className="flex-1 rounded-xl bg-danger text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110 transition disabled:opacity-50"
            >
              {isPending ? "Deleting…" : "Yes, delete"}
            </button>
            <button
              type="button"
              onClick={() => setConfirming(null)}
              disabled={isPending}
              className="flex-1 rounded-xl bg-card border border-card-border px-4 py-2.5 text-sm font-semibold hover:bg-background transition disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
