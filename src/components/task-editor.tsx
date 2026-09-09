"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateChallengeTasks, type ChallengeTaskInput } from "@/app/actions";

interface ChallengeTaskWithTiers {
  id: string;
  name: string;
  type: string;
  inputType: string;
  isRuleBreaker: boolean;
  isAlcoholTask: boolean;
  points: number;
  target: number | null;
  tiers: { threshold: number; points: number }[];
}

export function EditTasksSection({
  challengeId,
  tasks,
}: {
  challengeId: string;
  tasks: ChallengeTaskWithTiers[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-card border border-card-border p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Challenges / Tasks</p>
          <p className="text-xs text-muted">
            Edit, add, or remove tasks and their points.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-xl bg-accent text-white px-4 py-2 text-sm font-semibold hover:brightness-110 transition"
        >
          {open ? "Close" : "Edit tasks"}
        </button>
      </div>
      {open && (
        <div className="mt-4">
          <TaskEditor challengeId={challengeId} initialTasks={tasks} />
        </div>
      )}
    </div>
  );
}

interface TaskDraft {
  id: string | null; // null = not yet in DB
  name: string;
  type: "DAILY" | "WEEKLY";
  points: string;
  target: string;
}

let taskIdCounter = 0;
function newTaskId() {
  taskIdCounter += 1;
  return `draft-${taskIdCounter}-${Date.now()}`;
}

export function TaskEditor({
  challengeId,
  initialTasks,
}: {
  challengeId: string;
  initialTasks: ChallengeTaskWithTiers[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const [tasks, setTasks] = useState<TaskDraft[]>(() =>
    initialTasks.map((t) => ({
      id: t.id,
      name: t.name,
      type: t.type as "DAILY" | "WEEKLY",
      points: String(t.points),
      target: t.target != null ? String(t.target) : "",
    }))
  );

  function addTask() {
    setSaved(false);
    setTasks((prev) => [
      ...prev,
      { id: newTaskId(), name: "", type: "DAILY", points: "", target: "" },
    ]);
  }

  function updateTask(id: string, patch: Partial<TaskDraft>) {
    setSaved(false);
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  }

  function removeTask(draftId: string) {
    setSaved(false);
    setTasks((prev) => prev.filter((t) => t.id !== draftId));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const validTasks = tasks.filter((t) => t.name.trim() !== "");
    if (validTasks.length === 0) {
      setError("Keep at least one task with a name.");
      return;
    }

    const taskInputs: ChallengeTaskInput[] = validTasks.map((t) => {
      const points = Number(t.points) || 0;
      const target =
        t.type === "WEEKLY" && t.target.trim() !== "" ? Number(t.target) : null;
      const isWeekly = t.type === "WEEKLY";
      return {
        id: t.id ?? undefined,
        name: t.name.trim(),
        type: t.type,
        inputType: "CHECKBOX",
        isRuleBreaker: isWeekly && target === null,
        isAlcoholTask: false,
        points,
        target,
      };
    });

    startTransition(() => {
      updateChallengeTasks(challengeId, taskInputs).then((res) => {
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
    <form onSubmit={submit} className="space-y-3">
      {error && (
        <div className="rounded-lg bg-danger/10 text-danger text-sm px-3 py-2">
          {error}
        </div>
      )}
      {saved && (
        <div className="rounded-lg bg-accent/10 text-accent text-sm px-3 py-2">
          Tasks saved.
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Edit Challenges / Tasks</p>
          <p className="text-xs text-muted">
            Edit names and points, add new ones, or remove tasks. Removing a task
            also clears its logged entries.
          </p>
        </div>
        <button
          type="button"
          onClick={addTask}
          className="rounded-xl bg-accent text-white px-4 py-2 text-sm font-semibold hover:brightness-110 transition"
        >
          + Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="rounded-xl bg-background border border-dashed border-card-border p-6 text-center text-muted text-sm">
          No tasks. Tap{" "}
          <span className="text-accent font-semibold">+ Add</span> to create one.
        </div>
      ) : (
        <div className="space-y-3">
          {tasks.map((task, idx) => (
            <div
              key={task.id}
              className="rounded-xl bg-background border border-card-border p-3 space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted font-semibold w-6">
                  {idx + 1}.
                </span>
                <input
                  value={task.name}
                  onChange={(e) => updateTask(task.id!, { name: e.target.value })}
                  placeholder="Challenge name (e.g. Gym, No Sugar)"
                  className="input flex-1"
                />
                <button
                  type="button"
                  onClick={() => removeTask(task.id!)}
                  className="text-muted hover:text-danger text-sm px-2"
                  aria-label="Remove task"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pl-8">
                <label className="block">
                  <span className="text-[11px] text-muted">Type</span>
                  <select
                    value={task.type}
                    onChange={(e) =>
                      updateTask(task.id!, {
                        type: e.target.value as "DAILY" | "WEEKLY",
                      })
                    }
                    className="input"
                  >
                    <option value="DAILY">Daily</option>
                    <option value="WEEKLY">Weekly</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-[11px] text-muted">
                    {task.type === "DAILY" ? "Points / day" : "Points"}
                  </span>
                  <input
                    type="number"
                    value={task.points}
                    onChange={(e) =>
                      updateTask(task.id!, { points: e.target.value })
                    }
                    placeholder="0"
                    className="input"
                  />
                </label>
                {task.type === "WEEKLY" && (
                  <label className="block">
                    <span className="text-[11px] text-muted">
                      Days / week
                    </span>
                    <input
                      type="number"
                      value={task.target}
                      onChange={(e) =>
                        updateTask(task.id!, { target: e.target.value })
                      }
                      placeholder="e.g. 4 or empty"
                      className="input"
                    />
                  </label>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl bg-accent text-white py-3 text-sm font-semibold hover:brightness-110 transition disabled:opacity-50"
      >
        {isPending ? "Saving…" : "Save Tasks"}
      </button>
    </form>
  );
}
