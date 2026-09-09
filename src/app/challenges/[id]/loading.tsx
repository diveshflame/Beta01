export default function Loading() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-4 px-4">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-card-border border-t-accent" />
      <p className="text-sm text-muted">Loading challenge…</p>
    </div>
  );
}