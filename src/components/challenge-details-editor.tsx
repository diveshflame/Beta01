"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateChallenge } from "@/app/actions";

function toDateInputValue(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function ChallengeDetailsEditor({
  challengeId,
  initial,
}: {
  challengeId: string;
  initial: {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    isPublic: boolean;
    maxMembers: number | null;
  };
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: initial.name,
    description: initial.description,
    startDate: toDateInputValue(initial.startDate),
    endDate: toDateInputValue(initial.endDate),
    isPublic: initial.isPublic,
    maxMembers: initial.maxMembers != null ? String(initial.maxMembers) : "",
  });

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setSaved(false);
    setError(null);
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.name.trim()) {
      setError("Give your challenge a name.");
      return;
    }
    if (new Date(form.endDate) <= new Date(form.startDate)) {
      setError("End date must be after start date.");
      return;
    }
    startTransition(() => {
      updateChallenge(challengeId, {
        name: form.name.trim(),
        description: form.description.trim(),
        startDate: form.startDate,
        endDate: form.endDate,
        isPublic: form.isPublic,
        maxMembers: form.maxMembers ? Number(form.maxMembers) : null,
      }).then((res) => {
        if (!res.ok) {
          setError(res.error ?? "Something went wrong.");
          return;
        }
        setSaved(true);
        router.refresh();
      });
    });
  }

  return (
    <div className="rounded-2xl bg-card border border-card-border p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Challenge details</p>
          <p className="text-xs text-muted">
            Edit the name, dates, and visibility of your challenge.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-xl bg-accent text-white px-4 py-2 text-sm font-semibold hover:brightness-110 transition"
        >
          {open ? "Close" : "Edit details"}
        </button>
      </div>

      {open && (
        <form onSubmit={submit} className="mt-4 space-y-4">
          {error && (
            <div className="rounded-lg bg-danger/10 text-danger text-sm px-3 py-2">
              {error}
            </div>
          )}
          {saved && (
            <div className="rounded-lg bg-accent/10 text-accent text-sm px-3 py-2">
              Challenge details saved.
            </div>
          )}

          <Field label="Challenge name">
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Winter Arc 2026"
              className="input"
            />
          </Field>

          <Field label="Description">
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="What's the goal of this challenge?"
              rows={2}
              className="input resize-none"
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Start date">
              <input
                type="date"
                value={form.startDate}
                onChange={(e) => set("startDate", e.target.value)}
                className="input"
              />
            </Field>
            <Field label="End date">
              <input
                type="date"
                value={form.endDate}
                onChange={(e) => set("endDate", e.target.value)}
                className="input"
              />
            </Field>
          </div>

          <Field label="Max members (optional)">
            <input
              type="number"
              value={form.maxMembers}
              onChange={(e) => set("maxMembers", e.target.value)}
              placeholder="Unlimited"
              className="input"
            />
          </Field>

          <div>
            <p className="text-xs text-muted mb-2">Visibility</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => set("isPublic", true)}
                className={`flex-1 rounded-xl border px-4 py-2 text-xs font-semibold transition ${
                  form.isPublic
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-card-border bg-card text-muted"
                }`}
              >
                Public
              </button>
              <button
                type="button"
                onClick={() => set("isPublic", false)}
                className={`flex-1 rounded-xl border px-4 py-2 text-xs font-semibold transition ${
                  !form.isPublic
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-card-border bg-card text-muted"
                }`}
              >
                Private
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-xl bg-accent text-white py-3 text-sm font-semibold hover:brightness-110 transition disabled:opacity-50"
          >
            {isPending ? "Saving…" : "Save details"}
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs text-muted">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
