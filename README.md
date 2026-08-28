# Winter Arc Challenge App

A mobile-first web app for running "Winter Arc"-style habit challenges: daily
habit logging, automatic weekly scoring, streaks, and leaderboards.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**,
**Prisma 6** (PostgreSQL), and **NextAuth/Auth.js v5** (Google OAuth).

## Requirements

- Node.js 20.9+ (Tested on Node 24)
- A PostgreSQL database (local or hosted — e.g. Neon, Supabase, Railway,
  Prisma Postgres, or a local install)

## Setup

### 1. Environment variables

Copy the values in `.env` and fill them in:

```dotenv
# PostgreSQL connection string
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/winter_arc?schema=public"

# Auth.js secret - generate with:  npx auth secret
AUTH_SECRET="..."

# Google OAuth - create a Web client at
# https://console.cloud.google.com/apis/credentials
# Add http://localhost:3000/api/auth/callback/google as an authorized redirect URI
AUTH_GOOGLE_ID="..."
AUTH_GOOGLE_SECRET="..."

# Dev login fallback (Credentials provider) - used while Google is not configured
AUTH_DEV_ENABLED="true"

AUTH_URL="http://localhost:3000"
```

### 2. Install, migrate, and run

```bash
npm install
npx prisma migrate dev   # creates tables from prisma/schema.prisma
npm run dev
```

Open http://localhost:3000.

> Until `AUTH_GOOGLE_ID`/`AUTH_GOOGLE_SECRET` are set, the app falls back to a
> **"Sign in (Dev)"** credentials provider so you can log in with any email.

### 3. Production

```bash
npm run build
npx prisma migrate deploy   # apply migrations in production
npm run start
```

## Project structure

```
prisma/schema.prisma     # data model (users, challenges, daily logs, weekly scores, activity)
src/lib/
  auth.ts                # NextAuth config (Google + dev credentials)
  db.ts                  # PrismaClient singleton
  scoring.ts             # domain logic: habits, completion %, weekly results, streak math
  score-engine.ts        # idempotent daily-bonus/streak awarding + member totals
  queries.ts             # server-side fetch helpers (dashboard data)
src/app/
  page.tsx               # / -> redirect to /dashboard or /signin
  signin/                # Google + dev sign-in
  dashboard/             # home dashboard (today, week, rank, points, streak, countdown)
  log/                   # DAILY LOG (habits, workout, rule breakers) - auto-save
  challenges/            # list, create, join, [id] dashboard
  leaderboards/          # Today / This Week / Overall tabs
  profile/               # profile + achievement statistics
  api/auth/[...nextauth] # Auth.js route handler
  actions.ts             # server actions (saveDailyLog, createChallenge, joinChallenge)
```

## Scoring model (v1)

- **Daily completion** = habits (10) + gym + push-ups + walking + no-sugar +
  no-fast-food + meals-at-home (16 tasks total).
- **Daily bonus** (+5) when completion ≥ 75%.
- **Streak bonus** (+15) every 7 consecutive successful days.
- **Weekly bonus** (every Sunday) for hitting weekly gym / push-up / walking
  targets and maintaining no-sugar / no-fast-food / meals-at-home all week.

## Notes

- All pages are server-rendered on demand (`export const dynamic =
  "force-dynamic"`), so a live DB is required at runtime.
- This is Next.js **16.3.3** — note the breaking changes vs. older versions:
  async `params`/`searchParams`/`cookies()`, and `middleware` is now `proxy`.
