"use client";

import { useState } from "react";

export interface LeaderboardRow {
  userId: string;
  name: string;
  image: string | null;
  today: number;
  week: number;
  overall: number;
  streak: number;
}

type Tab = "today" | "week" | "overall";

export function LeaderboardClient({
  today,
  week,
  overall,
  myUserId,
}: {
  today: LeaderboardRow[];
  week: LeaderboardRow[];
  overall: LeaderboardRow[];
  myUserId: string;
}) {
  const [tab, setTab] = useState<Tab>("today");

  const data = tab === "today" ? today : tab === "week" ? week : overall;
  const myRank = data.findIndex((r) => r.userId === myUserId) + 1;

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-1 rounded-xl bg-card p-1 border border-card-border">
        {(
          [
            ["today", "Today"],
            ["week", "This Week"],
            ["overall", "Overall"],
          ] as [Tab, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`rounded-lg py-2 text-sm font-semibold transition ${
              tab === key ? "bg-accent text-white" : "text-muted"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-card border border-card-border divide-y divide-card-border">
        {data.map((row, i) => {
          const isMe = row.userId === myUserId;
          return (
            <div
              key={row.userId}
              className={`flex items-center gap-3 px-4 py-3 ${
                isMe ? "bg-accent/10" : ""
              }`}
            >
              <RankBadge rank={i + 1} />
              <span className="h-8 w-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold overflow-hidden">
                {row.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={row.image} alt="" className="h-full w-full object-cover" />
                ) : (
                  row.name.charAt(0).toUpperCase()
                )}
              </span>
              <span className="flex-1 text-sm font-medium truncate">
                {row.name}
                {row.streak > 0 && <span className="ml-1">🔥</span>}
                {isMe && <span className="ml-1 text-accent">(you)</span>}
              </span>
              <span className="text-sm font-bold">
                {tab === "today"
                  ? row.today
                  : tab === "week"
                  ? row.week
                  : row.overall}
                <span className="text-muted text-xs font-medium ml-0.5">pts</span>
              </span>
            </div>
          );
        })}
        {data.length === 0 && (
          <div className="px-4 py-10 text-center text-muted text-sm">
            No rankings yet.
          </div>
        )}
      </div>

      {myRank > 0 && (
        <p className="text-center text-xs text-muted">
          Your rank: #{myRank}
        </p>
      )}
    </div>
  );
}

function RankBadge({ rank }: { rank: number }) {
  const medal = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : null;
  return (
    <span className="w-6 text-center text-sm font-bold">
      {medal ?? `#${rank}`}
    </span>
  );
}
