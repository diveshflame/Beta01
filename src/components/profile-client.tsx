"use client";

import { useState, useTransition, useRef } from "react";
import { useRouter } from "next/navigation";
import { SignOutButton } from "@/components/sign-out-button";
import { updateUserMantra, updateUserProfile, useStreakInsurance } from "@/app/actions";

export interface UserSummaryLog {
  id: string;
  date: string; // ISO date string YYYY-MM-DD
  completedCount: number;
  totalCount: number;
  pointsAwarded: number;
  dailyBonusAwarded: boolean;
}

export interface ActiveMembershipData {
  id: string;
  points: number;
  currentStreak: number;
  challenge: {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    tasks: {
      id: string;
      name: string;
      points: number;
      type: string;
    }[];
  };
  todayLogs: { taskId: string; completed: boolean }[];
}

export interface ProfileClientProps {
  user: {
    id: string;
    name: string | null;
    displayName: string | null;
    email: string;
    image: string | null;
    totalPoints: number;
    currentStreak: number;
    longestStreak: number;
    mantra: string | null;
    streakTokens: number | null;
  };
  stats: {
    daysLogged: number;
    perfectDays: number;
    avgCompletion: number;
  };
  summaries: UserSummaryLog[];
  activeMemberships: ActiveMembershipData[];
}

export function ProfileClient({
  user,
  stats,
  summaries,
  activeMemberships,
}: ProfileClientProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Avatar upload file input ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [userImage, setUserImage] = useState<string | null>(user.image);

  // Display Name inline editing
  const [isEditingName, setIsEditingName] = useState(false);
  const [displayNameText, setDisplayNameText] = useState(
    user.displayName || user.name || "I am inevitable"
  );

  // Mantra inline editing
  const [isEditingMantra, setIsEditingMantra] = useState(false);
  const [mantraText, setMantraText] = useState(
    user.mantra || "I show up even when I don't feel like it."
  );

  // Modals state
  const [showReplayModal, setShowReplayModal] = useState(false);
  const [showInsuranceModal, setShowInsuranceModal] = useState(false);
  const [insuranceStatus, setInsuranceStatus] = useState<string | null>(null);
  const [showRecapModal, setShowRecapModal] = useState(false);

  // Inline challenge expansion
  const [expandedChallengeId, setExpandedChallengeId] = useState<string | null>(null);

  // Proof wall day inspector & filter state
  const [selectedDayLog, setSelectedDayLog] = useState<UserSummaryLog | null>(null);
  const [filterPerfectDaysOnly, setFilterPerfectDaysOnly] = useState(false);

  // Long press timer ref for challenge card
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);

  // Handle Avatar file selection
  function handleAvatarClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      setUserImage(base64);
      startTransition(() => {
        updateUserProfile({ image: base64 }).then(() => {
          router.refresh();
        });
      });
    };
    reader.readAsDataURL(file);
  }

  // Handle Display Name save
  function handleSaveName(e: React.FormEvent) {
    e.preventDefault();
    setIsEditingName(false);
    startTransition(() => {
      updateUserProfile({ displayName: displayNameText }).then(() => {
        router.refresh();
      });
    });
  }

  // Handle Mantra save
  function handleSaveMantra(e: React.FormEvent) {
    e.preventDefault();
    setIsEditingMantra(false);
    startTransition(() => {
      updateUserMantra(mantraText).then(() => {
        router.refresh();
      });
    });
  }

  // Streak insurance redemption
  function handleUseStreakInsurance() {
    setInsuranceStatus(null);
    startTransition(() => {
      useStreakInsurance().then((res) => {
        if (res.ok) {
          setInsuranceStatus("Streak protected successfully! 🔥");
          router.refresh();
        } else {
          setInsuranceStatus(res.error || "Failed to redeem streak insurance.");
        }
      });
    });
  }

  // Generate 14-day mosaic dates aligned with user summaries
  const today = new Date();
  const mosaicDays = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (13 - i));
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const dateKey = `${yyyy}-${mm}-${dd}`;

    const summary = summaries.find((s) => {
      const sDateStr = s.date.slice(0, 10);
      const sObj = new Date(s.date);
      const sY = sObj.getFullYear();
      const sM = String(sObj.getMonth() + 1).padStart(2, "0");
      const sD = String(sObj.getDate()).padStart(2, "0");
      const sKey = `${sY}-${sM}-${sD}`;
      return sKey === dateKey || sDateStr === dateKey;
    });

    return {
      dateKey,
      displayDate: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      summary,
    };
  });

  const levelCount = Math.max(1, stats.daysLogged);
  const streakActive = user.currentStreak > 0;

  // Calculate dynamic date range from summaries
  let recentDatesRange = "Ongoing";
  if (summaries.length > 0) {
    const sorted = [...summaries].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    const startStr = new Date(sorted[0].date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    const endStr = new Date(sorted[sorted.length - 1].date).toLocaleDateString(
      "en-US",
      { month: "short", day: "numeric" }
    );
    recentDatesRange =
      sorted.length === 1 || startStr === endStr
        ? startStr
        : `${startStr}–${endStr.split(" ")[1] ?? endStr}`;
  }

  const currentWeekNumber = Math.max(1, Math.ceil(stats.daysLogged / 7));

  return (
    <div className="min-h-screen text-[#EAE6DF] p-4 sm:p-5 font-sans space-y-5 max-w-md mx-auto relative">
      {/* Hidden File Input for Avatar */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* 1. Header */}
      <header className="flex items-center justify-between pt-2 pb-1">
        <button
          onClick={() => router.back()}
          className="text-base text-[#8B8F9C] hover:text-[#EAE6DF] transition px-1"
          aria-label="Back"
        >
          ‹
        </button>
        <h1 className="font-display font-bold text-sm tracking-[0.25em] text-[#EAE6DF] uppercase">
          PROFILE
        </h1>
        <button
          onClick={() => setIsEditingName(true)}
          className="text-xs font-semibold text-[#D4AF37] hover:underline"
        >
          Edit
        </button>
      </header>

      {/* 2. Identity Section */}
      <section className="flex flex-col items-center text-center space-y-2 pt-1">
        {/* Avatar Trigger: #262A36 circle with brass/ember dashed ring & camera icon */}
        <button
          onClick={handleAvatarClick}
          className="relative group cursor-pointer focus:outline-none"
          title="Click to change profile picture"
        >
          <div className="w-16 h-16 rounded-full bg-[#262A36] border-2 border-dashed border-[#D4AF37]/60 flex items-center justify-center overflow-hidden shadow-lg transition transform group-hover:scale-105">
            {userImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={userImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg className="w-7 h-7 text-[#8B8F9C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            )}
          </div>
          <div className="absolute bottom-0 right-0 bg-[#FF5D3A] text-white p-1 rounded-full text-[10px] shadow group-hover:brightness-110 flex items-center justify-center w-5 h-5 border border-[#111319]">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M68 9a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-3.172a2 2 0 01-1.414-.586l-1.828-1.828A2 2 0 0011.172 6H8.828a2 2 0 00-1.414.586L5.586 8.414A2 2 0 014.172 9H4z" />
              <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </button>

        {/* Display Name with Pencil Icon */}
        {isEditingName ? (
          <form onSubmit={handleSaveName} className="flex items-center gap-2">
            <input
              type="text"
              value={displayNameText}
              onChange={(e) => setDisplayNameText(e.target.value)}
              className="bg-[#1A1D27] border border-[#FF5D3A] rounded-xl px-3 py-1 text-sm font-display font-bold text-[#EAE6DF] text-center outline-none"
              autoFocus
            />
            <button
              type="submit"
              disabled={isPending}
              className="bg-[#FF5D3A] text-white text-xs px-2.5 py-1 rounded-lg font-bold"
            >
              Save
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-1.5 justify-center">
            <h2 className="font-display font-bold text-xl text-[#EAE6DF] tracking-wide">
              {displayNameText}
            </h2>
            <button
              onClick={() => setIsEditingName(true)}
              className="p-1 opacity-70 hover:opacity-100 text-[#8B8F9C] hover:text-[#D4AF37] transition cursor-pointer"
              title="Edit name"
              aria-label="Edit name"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
        )}

        <p className="text-xs text-[#6F7482] font-mono tracking-tight">
          {user.email}
        </p>
      </section>

      {/* 3. Monument Ziggurat Component */}
      <section
        className="cursor-pointer bg-[#1E212B] border border-[rgba(245,241,232,0.08)] rounded-3xl px-10 pt-8 pb-7 text-center"
        onClick={() => setShowReplayModal(true)}
      >
        <svg
          width="140"
          height="190"
          viewBox="0 0 140 190"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto block"
        >
          <defs>
            <linearGradient id="block" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3A3F4E" />
              <stop offset="100%" stopColor="#262A36" />
            </linearGradient>
          </defs>

          {/* GHOST BLOCKS — unbuilt future blocks awaiting the next levels */}
          <polygon
            points="45,58 95,58 88,72 52,72"
            fill="none"
            stroke="#3A3F4E"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
          <polygon
            points="50,74 90,74 84,88 56,88"
            fill="none"
            stroke="#3A3F4E"
            strokeWidth="1"
            strokeDasharray="3,3"
          />

          {/* BUILT BLOCKS — dynamic based on daysLogged */}
          {(() => {
            const count = Math.min(Math.max(1, stats.daysLogged), 5);
            const insets = [10, 6, 4, 2, 1];
            const blocks = [];
            for (let i = 0; i < count; i++) {
              const wideL = 30 + i * 6;
              const wideR = 110 - i * 6;
              const topY = 150 - i * 22;
              const bottomY = topY + (i === 0 ? 18 : 20);
              const inset = insets[i] ?? 2;
              blocks.push(
                <polygon
                  key={i}
                  points={`${wideL},${topY} ${wideR},${topY} ${wideR - inset},${bottomY} ${wideL + inset},${bottomY}`}
                  fill="url(#block)"
                  stroke="#454A59"
                  strokeWidth="1"
                />
              );
            }
            return blocks;
          })()}

          {/* EMBERS + FLAME — lit when streakActive is true, unlit variant when false */}
          {streakActive ? (
            <g>
              {/* Ember particles rising off the flame */}
              {(
                [
                  [62, 86, 1.8, "#FFB88A", "ep1"],
                  [78, 82, 1.4, "#FF8A65", "ep2"],
                  [70, 90, 1.6, "#FFD9A0", "ep3"],
                  [58, 80, 1.3, "#FF8A65", "ep4"],
                  [82, 88, 1.5, "#FFB88A", "ep5"],
                  [66, 76, 1.2, "#FFD9A0", "ep6"],
                  [74, 94, 1.4, "#FF8A65", "ep7"],
                ] as const
              ).map(([cx, cy, r, fill, ep], idx) => (
                <circle
                  key={idx}
                  className={`ember-p ${ep}`}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill={fill}
                />
              ))}

              {/* Lit flame */}
              <g transform="translate(70,92) scale(1.35) translate(-70,-92)">
                <path
                  className="flame-outer"
                  d="M70 78 C 76 88, 78 94, 70 104 C 62 94, 64 88, 70 78 Z"
                  fill="#FF5D3A"
                />
                <path
                  className="flame-inner"
                  d="M70 86 C 73 92, 74 96, 70 101 C 66 96, 67 92, 70 86 Z"
                  fill="#FFD9A0"
                />
              </g>
            </g>
          ) : (
            <g className="flame flame-unlit" transform="translate(70,92) scale(1.35) translate(-70,-92)">
              <path
                d="M70 78 C 76 88, 78 94, 70 104 C 62 94, 64 88, 70 78 Z"
                fill="#3A3F4E"
              />
              <path
                d="M70 86 C 73 92, 74 96, 70 101 C 66 96, 67 92, 70 86 Z"
                fill="#262A36"
              />
            </g>
          )}
        </svg>

        {/* Caption */}
        <div className="mt-2 text-[12.5px] text-[#8B8F9C]">
          <b className="font-semibold text-[#F5F1E8]">
            Level {stats.daysLogged || 1}
          </b>{" "}
          of the forge &middot;{" "}
          {streakActive ? "streak keeps it lit" : "streak is dormant"}
        </div>
      </section>

      {/* 4. Mantra Card */}
      <section className="bg-[#1A1D27] p-3.5 rounded-2xl border border-white/5 flex items-center justify-between">
        {isEditingMantra ? (
          <form onSubmit={handleSaveMantra} className="flex-1 flex gap-2">
            <input
              type="text"
              value={mantraText}
              onChange={(e) => setMantraText(e.target.value)}
              className="flex-1 bg-[#111319] border border-[#FF5D3A] rounded-xl px-3 py-1.5 text-xs text-[#EAE6DF] outline-none"
              autoFocus
            />
            <button
              type="submit"
              disabled={isPending}
              className="bg-[#FF5D3A] text-white text-xs px-3 py-1.5 rounded-xl font-bold"
            >
              Save
            </button>
          </form>
        ) : (
          <div
            onClick={() => setIsEditingMantra(true)}
            className="flex-1 flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-2 pr-2">
              <span className="text-[#FF5D3A] font-serif text-xl font-bold leading-none">
                “
              </span>
              <p className="text-xs text-[#EAE6DF] font-medium leading-tight">
                {mantraText}
              </p>
            </div>
            <button
              type="button"
              className="p-1 opacity-70 hover:opacity-100 text-[#8B8F9C] hover:text-[#D4AF37] transition cursor-pointer"
              title="Edit mantra"
              aria-label="Edit mantra"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* 5. Stat Medallions */}
      <section className="grid grid-cols-3 gap-3">
        {/* Points Medallion */}
        <div className="bg-[#1A1D27] p-3 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center space-y-1.5">
          <div className="w-11 h-11 rounded-full bg-[#E5B537] flex items-center justify-center text-[#111319] font-display font-bold text-lg shadow">
            {user.totalPoints}
          </div>
          <span className="text-[11px] font-medium text-[#8B8F9C]">Points</span>
        </div>

        {/* Streak Medallion */}
        <button
          onClick={() => setShowInsuranceModal(true)}
          className="bg-[#1A1D27] p-3 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center space-y-1.5 hover:bg-[#222634] transition cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full bg-[#FF5D3A] flex items-center justify-center text-[#111319] font-display font-bold text-lg shadow">
            {user.currentStreak}
          </div>
          <span className="text-[11px] font-medium text-[#8B8F9C]">Streak</span>
        </button>

        {/* Active Challenges Medallion */}
        <div className="bg-[#1A1D27] p-3 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center space-y-1.5">
          <div className="w-11 h-11 rounded-full bg-[#2A2F3D] flex items-center justify-center text-[#EAE6DF] font-display font-bold text-lg shadow border border-white/10">
            {activeMemberships.length}
          </div>
          <span className="text-[11px] font-medium text-[#8B8F9C]">Active</span>
        </div>
      </section>

      {/* 6. Section: The forge */}
      <section className="space-y-2.5 pt-1">
        <div className="flex items-center justify-between font-mono text-xs">
          <h2 className="font-display font-bold text-sm text-[#EAE6DF] tracking-wide">
            The forge
          </h2>
          <span className="text-[#8B8F9C]">{activeMemberships.length} active</span>
        </div>

        {activeMemberships.length === 0 ? (
          <div className="bg-[#1A1D27] p-4 rounded-2xl border border-white/5 text-xs text-[#8B8F9C] text-center">
            No active challenges in the forge.
          </div>
        ) : (
          activeMemberships.map((m) => {
            const totalTasks = m.challenge.tasks.length;
            const completedTasks = m.todayLogs.filter((l) => l.completed).length;
            const percent =
              totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
            const isExpanded = expandedChallengeId === m.challenge.id;

            return (
              <div
                key={m.id}
                onMouseDown={() => {
                  longPressTimer.current = setTimeout(() => {
                    setExpandedChallengeId((prev) => (prev === m.challenge.id ? null : m.challenge.id));
                  }, 500);
                }}
                onMouseUp={() => {
                  if (longPressTimer.current) clearTimeout(longPressTimer.current);
                }}
                onTouchStart={() => {
                  longPressTimer.current = setTimeout(() => {
                    setExpandedChallengeId((prev) => (prev === m.challenge.id ? null : m.challenge.id));
                  }, 500);
                }}
                onTouchEnd={() => {
                  if (longPressTimer.current) clearTimeout(longPressTimer.current);
                }}
                onClick={() => {
                  setExpandedChallengeId((prev) => (prev === m.challenge.id ? null : m.challenge.id));
                }}
                className="bg-[#1A1D27] p-4 rounded-2xl border border-white/5 cursor-pointer hover:border-white/20 transition space-y-3"
              >
                <div className="flex items-center gap-3">
                  {/* SVG Ring Progress */}
                  <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                    <svg className="w-12 h-12 transform -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="18"
                        stroke="#2A2F3D"
                        strokeWidth="4"
                        fill="transparent"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="18"
                        stroke="#FF5D3A"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 18}
                        strokeDashoffset={
                          2 * Math.PI * 18 * (1 - percent / 100)
                        }
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute font-mono text-[10px] font-bold text-[#EAE6DF]">
                      {percent}%
                    </span>
                  </div>

                  <div className="flex-1 truncate">
                    <h3 className="font-display font-bold text-sm text-[#EAE6DF]">
                      {m.challenge.name}
                    </h3>
                    <p className="text-[11px] text-[#8B8F9C]">
                      {m.points} pts · {m.currentStreak} 🔥 streak · today&apos;s task open
                    </p>
                  </div>
                </div>

                {/* Expanded Task Overview */}
                {isExpanded && (
                  <div className="border-t border-white/5 pt-2.5 space-y-1.5 text-xs font-mono">
                    <p className="text-[10px] text-[#8B8F9C] uppercase">
                      Today&apos;s Tasks:
                    </p>
                    {m.challenge.tasks.map((t) => {
                      const log = m.todayLogs.find((l) => l.taskId === t.id);
                      return (
                        <div
                          key={t.id}
                          className="flex items-center justify-between bg-[#222634] px-2.5 py-1.5 rounded-xl"
                        >
                          <span className="text-[#EAE6DF] font-sans">{t.name}</span>
                          <span className={log?.completed ? "text-[#34d399]" : "text-[#8B8F9C]"}>
                            {log?.completed ? "Done ✓" : "Pending"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* 7. Section: Proof */}
      <section className="space-y-2 pt-1">
        <div className="flex items-center justify-between font-mono text-xs">
          <h2 className="font-display font-bold text-sm text-[#EAE6DF] tracking-wide">
            Proof
          </h2>
          <span className="text-[#8B8F9C]">last 14 days</span>
        </div>

        {/* 14-Day Mosaic Row */}
        <div className="grid grid-cols-7 sm:grid-cols-14 gap-1.5 py-1">
          {mosaicDays.map((day) => {
            const hasLog = Boolean(day.summary);
            const isPerfect = day.summary?.dailyBonusAwarded || (hasLog && day.summary?.completedCount && day.summary.completedCount > 0);

            let bgColor = "bg-[#252A36]";
            if (hasLog) {
              bgColor = isPerfect ? "bg-[#FF5D3A]" : "bg-[#D48937]";
            }

            return (
              <button
                key={day.dateKey}
                onClick={() => setSelectedDayLog(day.summary || null)}
                className={`h-7 rounded-md border border-white/5 ${bgColor} transition hover:scale-110 flex items-center justify-center`}
                title={`${day.displayDate}: ${
                  day.summary ? `${day.summary.completedCount} tasks` : "No log"
                }`}
              />
            );
          })}
        </div>

        {/* Mosaic Legend */}
        <div className="flex items-center gap-1.5 text-[10px] text-[#8B8F9C] font-mono pt-0.5">
          <span>Lighter</span>
          <span className="w-2.5 h-2.5 rounded bg-[#252A36]" />
          <span className="w-2.5 h-2.5 rounded bg-[#9A6230]" />
          <span className="w-2.5 h-2.5 rounded bg-[#D48937]" />
          <span className="w-2.5 h-2.5 rounded bg-[#FF5D3A]" />
          <span>Inevitable</span>
        </div>
      </section>

      {/* 8. Section: Record */}
      <section className="space-y-2 pt-1">
        <h2 className="font-display font-bold text-sm text-[#EAE6DF] tracking-wide">
          Record
        </h2>

        <div className="bg-[#1A1D27] rounded-2xl border border-white/5 divide-y divide-white/5 text-xs">
          <div className="p-3 flex justify-between items-center">
            <span className="text-[#8B8F9C]">Longest streak</span>
            <span className="text-[#EAE6DF]">
              <strong className="font-bold">{user.longestStreak} day</strong> · ongoing
            </span>
          </div>

          <div className="p-3 flex justify-between items-center">
            <span className="text-[#8B8F9C]">Days logged</span>
            <span className="font-bold text-[#EAE6DF]">{stats.daysLogged}</span>
          </div>

          <button
            onClick={() => setFilterPerfectDaysOnly((p) => !p)}
            className="w-full p-3 flex justify-between items-center text-left hover:bg-[#222634] transition"
          >
            <span className="text-[#8B8F9C]">Perfect days</span>
            <span className="text-[#EAE6DF]">
              <strong className="font-bold">{stats.perfectDays}</strong> · {recentDatesRange}
            </span>
          </button>

          <div className="p-3 flex justify-between items-center">
            <span className="text-[#8B8F9C]">Daily completion</span>
            <span className="font-bold text-[#EAE6DF]">
              {stats.avgCompletion}%
            </span>
          </div>
        </div>
      </section>

      {/* 9. Section: Week 1 Recap Card */}
      <section className="relative overflow-hidden bg-[#1A1D27] p-5 rounded-2xl border border-white/5 space-y-2">
        {/* Upper Right Glowing Accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#FF5D3A]/25 blur-2xl pointer-events-none" />

        <span className="text-[10px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
          WEEK {currentWeekNumber} RECAP
        </span>

        <h3 className="font-display font-bold text-xl text-[#EAE6DF] leading-tight">
          You forged {stats.daysLogged} days straight.
        </h3>

        <p className="text-xs text-[#8B8F9C] leading-relaxed">
          Zero missed check-ins, {user.totalPoints} points earned. Ready to share it or send it to a friend?
        </p>

        <div className="pt-2">
          <button
            onClick={() => setShowRecapModal(true)}
            className="bg-[#FF5D3A] text-[#111319] font-bold text-xs px-4 py-2.5 rounded-full hover:brightness-110 transition shadow"
          >
            View recap →
          </button>
        </div>
      </section>

      {/* 10. De-emphasized Sign Out (no full width card / background box) */}
      <div className="py-3 text-center">
        <SignOutButton />
      </div>

      {/* MODAL 1: Day-by-Day Replay Modal */}
      {showReplayModal && (
        <Modal onClose={() => setShowReplayModal(false)} title="DAY-BY-DAY FORGING HISTORY">
          <div className="space-y-2.5 font-mono text-xs max-h-80 overflow-y-auto pr-1">
            {summaries.length === 0 ? (
              <p className="text-[#8B8F9C] text-center py-4">No forging logs recorded yet.</p>
            ) : (
              summaries.map((s, idx) => (
                <div
                  key={s.id}
                  className="bg-[#222634] p-3 rounded-xl border border-white/5 flex items-center justify-between"
                >
                  <div>
                    <p className="font-bold text-[#EAE6DF]">
                      Day {idx + 1} · {s.date.slice(0, 10)}
                    </p>
                    <p className="text-[11px] text-[#8B8F9C]">
                      Completed {s.completedCount}/{s.totalCount} tasks
                    </p>
                  </div>
                  <span className="text-[#D4AF37] font-bold">
                    +{s.pointsAwarded} pts
                  </span>
                </div>
              ))
            )}
          </div>
        </Modal>
      )}

      {/* MODAL 2: Streak Insurance Modal */}
      {showInsuranceModal && (
        <Modal onClose={() => setShowInsuranceModal(false)} title="STREAK INSURANCE">
          <div className="space-y-3.5 font-mono text-xs">
            <p className="text-[#8B8F9C]">
              Protect your missed day streak by using a Streak Token or spending earned points.
            </p>
            <div className="bg-[#222634] p-3 rounded-xl border border-white/5 space-y-1">
              <p className="text-[#EAE6DF]">
                Available Tokens:{" "}
                <span className="text-[#FF5D3A] font-bold">
                  {user.streakTokens ?? 1}
                </span>
              </p>
              <p className="text-[#8B8F9C] text-[11px]">
                Cost: 1 Token or 50 Points
              </p>
            </div>

            {insuranceStatus && (
              <div className="p-2 rounded-xl bg-[#FF5D3A]/20 text-[#FF5D3A] text-center">
                {insuranceStatus}
              </div>
            )}

            <button
              onClick={handleUseStreakInsurance}
              disabled={isPending}
              className="w-full bg-[#FF5D3A] text-[#111319] py-2.5 rounded-xl font-bold uppercase tracking-wider hover:brightness-110 transition disabled:opacity-50"
            >
              {isPending ? "Protecting..." : "Redeem Streak Insurance"}
            </button>
          </div>
        </Modal>
      )}

      {/* MODAL 3: Day Inspector Popup */}
      {selectedDayLog !== null && (
        <Modal onClose={() => setSelectedDayLog(null)} title={`LOG DETAIL (${selectedDayLog.date.slice(0, 10)})`}>
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-[#8B8F9C]">Tasks Completed</span>
              <span className="text-[#EAE6DF]">
                {selectedDayLog.completedCount} / {selectedDayLog.totalCount}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-[#8B8F9C]">Points Awarded</span>
              <span className="text-[#D4AF37] font-bold">
                +{selectedDayLog.pointsAwarded} pts
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#8B8F9C]">Daily Bonus</span>
              <span className={selectedDayLog.dailyBonusAwarded ? "text-[#34d399]" : "text-[#8B8F9C]"}>
                {selectedDayLog.dailyBonusAwarded ? "Earned ✓" : "None"}
              </span>
            </div>
          </div>
        </Modal>
      )}

      {/* MODAL 4: Shareable Weekly Recap Sheet */}
      {showRecapModal && (
        <Modal onClose={() => setShowRecapModal(false)} title="WEEKLY RECAP CARD">
          <div className="bg-[#111319] p-4 rounded-2xl border border-[#FF5D3A]/40 space-y-4 text-center font-mono">
            <h3 className="font-display text-lg font-bold uppercase text-[#FF5D3A] tracking-wider">
              FORGED THIS WEEK
            </h3>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-[#1A1D27] p-2.5 rounded-xl border border-white/5">
                <p className="text-[10px] text-[#8B8F9C]">Forged</p>
                <p className="text-base font-bold text-[#EAE6DF]">{stats.daysLogged} days</p>
              </div>
              <div className="bg-[#1A1D27] p-2.5 rounded-xl border border-white/5">
                <p className="text-[10px] text-[#8B8F9C]">Points</p>
                <p className="text-base font-bold text-[#D4AF37]">{user.totalPoints}</p>
              </div>
              <div className="bg-[#1A1D27] p-2.5 rounded-xl border border-white/5">
                <p className="text-[10px] text-[#8B8F9C]">Streak</p>
                <p className="text-base font-bold text-[#FF5D3A]">{user.currentStreak}🔥</p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5">
              <p className="text-xs italic text-[#EAE6DF]">
                &ldquo;{mantraText}&rdquo;
              </p>
              <p className="text-[10px] text-[#8B8F9C] uppercase mt-1">
                — {displayNameText}
              </p>
            </div>

            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(
                    `Forged ${stats.daysLogged} days on Winter Arc! Points: ${user.totalPoints} | Streak: ${user.currentStreak}🔥. "${mantraText}"`
                  );
                  alert("Recap summary copied to clipboard!");
                }
              }}
              className="w-full bg-[#D4AF37] text-[#111319] font-bold py-2.5 rounded-xl text-xs uppercase tracking-widest hover:brightness-110 transition"
            >
              Copy Share Summary
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1A1D27] border border-white/10 rounded-2xl w-full max-w-sm p-4 space-y-3.5 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <h3 className="font-mono text-xs font-bold text-[#FF5D3A] uppercase tracking-wider">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-xs text-[#8B8F9C] hover:text-[#EAE6DF]"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
