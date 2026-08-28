"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/dashboard", label: "Home", icon: HomeIcon },
  { href: "/log", label: "Log", icon: LogIcon },
  { href: "/challenges", label: "Challenges", icon: TrophyIcon },
  { href: "/leaderboards", label: "Ranks", icon: RankIcon },
  { href: "/profile", label: "Profile", icon: ProfileIcon },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <div className="flex-1 pb-20 md:pb-6 max-w-2xl w-full mx-auto px-4">
        {children}
      </div>
      <nav className="fixed bottom-0 inset-x-0 z-30 border-t border-card-border bg-background/95 backdrop-blur md:hidden">
        <div className="max-w-2xl mx-auto grid grid-cols-5">
          {NAV.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </div>
      </nav>
    </div>
  );
}

function NavItem({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: (props: { className?: string }) => React.ReactNode;
}) {
  const pathname = usePathname();
  const active =
    pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={`flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium transition ${
        active ? "text-accent" : "text-muted"
      }`}
    >
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  );
}
function LogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5h6M9 12h6M9 19h6" />
      <rect x="4" y="3" width="16" height="18" rx="2" />
    </svg>
  );
}
function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" />
    </svg>
  );
}
function RankIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M6 21V9m6 12V4m6 17v-9" />
    </svg>
  );
}
function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  );
}
