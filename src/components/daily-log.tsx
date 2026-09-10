"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { saveTaskLog } from "@/app/actions";
import {
  getDailyCompletionSummary,
  DAILY_BONUS_POINTS,
  type ChallengeTask,
  type TaskLog,
} from "@/lib/scoring";

export function DailyLogClient({
  challengeId,
  challengeName,
  tasks,
  initialLogs,
  weekLogs = [],
}: {
  challengeId: string;
  challengeName: string;
  tasks: ChallengeTask[];
  initialLogs: TaskLog[];
  weekLogs?: TaskLog[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [logState, setLogState] = useState<Record<string, { completed: boolean; value: number }>>(() => {
    const state: Record<string, { completed: boolean; value: number }> = {};
    tasks.forEach((task) => {
      const log = initialLogs.find((l) => l.taskId === task.id);
      state[task.id] = {
        completed: log ? log.completed : false,
        value: log ? log.value : 0,
      };
    });
    return state;
  });
  const [saved, setSaved] = useState(false);

  // Convert logState to TaskLog format for calculating completion
  const logsList = tasks.map((t) => ({
    id: "",
    challengeId,
    userId: "",
    taskId: t.id,
    date: new Date(),
    completed: logState[t.id]?.completed ?? false,
    value: logState[t.id]?.value ?? 0,
  }));

  const completion = getDailyCompletionSummary(tasks, logsList);

  function save(taskId: string, completed: boolean, value: number) {
    setLogState((prev) => ({
      ...prev,
      [taskId]: { completed, value },
    }));
    setSaved(true);
    startTransition(() => {
      saveTaskLog(challengeId, taskId, completed, value).then(() => {
        router.refresh();
      });
    });
  }

  function toggle(taskId: string) {
    const current = logState[taskId] || { completed: false, value: 0 };
    save(taskId, !current.completed, current.value);
  }

  function addValue(taskId: string, amount: number) {
    const current = logState[taskId] || { completed: false, value: 0 };
    const nextVal = Math.max(0, Math.round((current.value + amount) * 10) / 10);
    save(taskId, current.completed, nextVal);
  }

  const dailyHabits = tasks.filter((t) => t.type === "DAILY" && !t.isRuleBreaker && !t.isAlcoholTask);
  const weeklyChallenges = tasks.filter((t) => t.type === "WEEKLY" || t.isRuleBreaker || t.isAlcoholTask);
  const allLogTasks = tasks;

  const weekDone: Record<string, number> = {};
  const weekSum: Record<string, number> = {};
  tasks.forEach((task) => {
    const logs = weekLogs.filter((l) => l.taskId === task.id);
    weekDone[task.id] = logs.filter((l) => l.completed).length;
    weekSum[task.id] = logs.reduce((s, l) => s + (l.value || 0), 0);
  });

  return (
    <div className="space-y-6">
      <CompletionBar completion={completion} pending={isPending} saved={saved} />

      {/* Unified Today's log: daily habits + weekly challenges */}
      {allLogTasks.length > 0 && (
        <Section
          title="Today's log"
          subtitle="One-tap, auto-saves · Weekly challenge points are calculated & credited on Sunday"
        >
          <div className="divide-y divide-card-border">
            {allLogTasks.map((task) => {
              const current = logState[task.id] || { completed: false, value: 0 };
              const isWeekly = task.type === "WEEKLY";

              if (isWeekly && task.inputType === "NUMBER") {
                const total = Math.round(weekSum[task.id] * 10) / 10;
                return (
                  <div key={task.id} className="py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">{task.name}</span>
                        <p className="text-[11px] text-muted">
                          Weekly goal · Credited Sunday ({task.points} pts)
                        </p>
                      </div>
                      <span className="text-xs text-muted">
                        This week:{" "}
                        <span className="text-foreground font-semibold">
                          {total}
                          {task.target ? ` / ${task.target}` : ""}
                        </span>
                      </span>
                    </div>
                    <div className="flex gap-2 mt-2 flex-wrap items-center">
                      {[1, 2, 5].map((n) => (
                        <QuickAddBtn
                          key={n}
                          label={`+${n}`}
                          onClick={() => addValue(task.id, n)}
                        />
                      ))}
                      <CustomInput
                        placeholder="Custom"
                        onValue={(n) =>
                          save(task.id, current.completed, Math.max(0, n))
                        }
                      />
                    </div>
                  </div>
                );
              }

              if (isWeekly) {
                const target = task.target || 0;
                const doneCount = weekDone[task.id] || 0;
                const isMet = target > 0 && doneCount >= target;

                return (
                  <div key={task.id} className="flex items-center justify-between py-3">
                    <div>
                      <span
                        className={`text-sm ${
                          current.completed
                            ? "text-foreground font-medium"
                            : "text-muted"
                        }`}
                      >
                        {task.name}
                      </span>
                      <p className="text-[11px] text-muted">
                        {target > 0 ? (
                          <>
                            <span className={isMet ? "text-success font-medium" : ""}>
                              {doneCount}/{target} days logged this week
                            </span>
                            {isMet ? " ✓" : ""} · Credited Sunday ({task.points} pts)
                          </>
                        ) : (
                          `Weekly challenge · Credited Sunday (${task.points} pts)`
                        )}
                      </p>
                    </div>
                    <Toggle checked={current.completed} onChange={() => toggle(task.id)} />
                  </div>
                );
              }

              // Standard Daily Habit / Task
              return (
                <HabitRow
                  key={task.id}
                  label={task.name}
                  points={task.points}
                  checked={
                    task.isRuleBreaker ? !current.completed : current.completed
                  }
                  onToggle={() => toggle(task.id)}
                />
              );
            })}
          </div>
        </Section>
      )}
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
  highlight,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        highlight ? "border-warning/30 bg-warning/5" : "border-card-border bg-card"
      }`}
    >
      <div className="mb-2">
        <h2 className="font-semibold text-sm">{title}</h2>
        {subtitle && <p className="text-muted text-xs">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function HabitRow({
  label,
  points,
  checked,
  onToggle,
}: {
  label: string;
  points: number;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-2">
        <span className={`text-sm ${checked ? "text-foreground font-medium" : "text-muted"}`}>
          {label}
        </span>
        <span className="text-[11px] text-accent font-semibold">{points} pts</span>
      </div>
      <Toggle checked={checked} onChange={onToggle} />
    </div>
  );
}

function RuleRow({
  label,
  broken,
  onToggle,
}: {
  label: string;
  broken: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className={`text-sm ${broken ? "text-danger font-medium" : "text-muted"}`}>
        {label} {broken ? "(broken)" : ""}
      </span>
      <Toggle checked={broken} onChange={onToggle} danger={broken} />
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  danger,
}: {
  checked: boolean;
  onChange: () => void;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${
        checked ? (danger ? "bg-danger" : "bg-accent") : "bg-card-border"
      }`}
    >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
    </button>
  );
}

function QuickAddBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl bg-background border border-card-border px-4 py-2 text-sm font-semibold hover:border-accent transition"
    >
      {label}
    </button>
  );
}

function CustomInput({
  placeholder,
  onValue,
}: {
  placeholder: string;
  onValue: (n: number) => void;
}) {
  const [text, setText] = useState("");
  function commit() {
    const n = parseFloat(text);
    if (!isNaN(n) && n >= 0) onValue(n);
    setText("");
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        commit();
      }}
    >
      <input
        inputMode="decimal"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={commit}
        placeholder={placeholder}
        className="w-24 rounded-xl bg-background border border-card-border px-3 py-2 text-sm outline-none focus:border-accent"
      />
    </form>
  );
}

function CompletionBar({
  completion,
  pending,
  saved,
}: {
  completion: { percent: number; achieved: number; total: number };
  pending: boolean;
  saved: boolean;
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-accent/15 to-accent2/15 border border-accent/20 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold">Today&apos;s completion</span>
        <span
          className={`text-xs ${pending ? "text-muted" : saved ? "text-success" : ""}`}
        >
          {pending ? "Saving…" : saved ? "Auto-saved ✓" : ""}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-3 flex-1 rounded-full bg-background overflow-hidden">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{ width: `${completion.percent}%` }}
          />
        </div>
        <span className="text-lg font-bold">{completion.percent}%</span>
      </div>
      <p className="text-xs text-muted mt-1.5">
        {completion.achieved}/{completion.total} daily tasks done · 75% earns
        +{DAILY_BONUS_POINTS} bonus
      </p>
    </div>
  );
}
