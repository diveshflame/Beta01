export function StreakFlame({ className }: { className?: string }) {
  return (
    <span className={className} role="img" aria-label="streak">
      🔥
    </span>
  );
}

export function pointsLabel() {
  return "1-minute daily log";
}
