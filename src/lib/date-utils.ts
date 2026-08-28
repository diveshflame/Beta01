import { startOfDay } from "./scoring";

export function countdownTo(target: Date): number {
  const now = new Date();
  const diff = new Date(target).getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function formatDate(d: Date | string): string {
  return new Date(d).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function daysUntilNextMonday(): number {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const diff = (7 - day) % 7;
  return diff === 0 ? 7 : diff;
}

export function todayKey(): string {
  return startOfDay(new Date()).toISOString().slice(0, 10);
}
