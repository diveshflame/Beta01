/*
  Warnings:

  - You are about to drop the column `readingHabitEnabled` on the `challenges` table. All the data in the column will be lost.
  - You are about to drop the column `weeklyGymTarget` on the `challenges` table. All the data in the column will be lost.
  - You are about to drop the column `weeklyPushupTarget` on the `challenges` table. All the data in the column will be lost.
  - You are about to drop the column `weeklyWalkingTarget` on the `challenges` table. All the data in the column will be lost.
  - You are about to drop the column `dailyBonus` on the `weekly_scores` table. All the data in the column will be lost.
  - You are about to drop the column `gymDone` on the `weekly_scores` table. All the data in the column will be lost.
  - You are about to drop the column `mealsHomeDone` on the `weekly_scores` table. All the data in the column will be lost.
  - You are about to drop the column `noFastFoodDone` on the `weekly_scores` table. All the data in the column will be lost.
  - You are about to drop the column `noSugarDone` on the `weekly_scores` table. All the data in the column will be lost.
  - You are about to drop the column `perfectWeek` on the `weekly_scores` table. All the data in the column will be lost.
  - You are about to drop the column `pushupsDone` on the `weekly_scores` table. All the data in the column will be lost.
  - You are about to drop the column `walkingDone` on the `weekly_scores` table. All the data in the column will be lost.
  - You are about to drop the column `weeklyBonus` on the `weekly_scores` table. All the data in the column will be lost.
  - You are about to drop the `daily_logs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "daily_logs" DROP CONSTRAINT "daily_logs_challengeId_fkey";

-- DropForeignKey
ALTER TABLE "daily_logs" DROP CONSTRAINT "daily_logs_userId_fkey";

-- AlterTable
ALTER TABLE "challenge_members" ADD COLUMN     "isAlcoholDrinker" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "challenges" DROP COLUMN "readingHabitEnabled",
DROP COLUMN "weeklyGymTarget",
DROP COLUMN "weeklyPushupTarget",
DROP COLUMN "weeklyWalkingTarget";

-- AlterTable
ALTER TABLE "weekly_scores" DROP COLUMN "dailyBonus",
DROP COLUMN "gymDone",
DROP COLUMN "mealsHomeDone",
DROP COLUMN "noFastFoodDone",
DROP COLUMN "noSugarDone",
DROP COLUMN "perfectWeek",
DROP COLUMN "pushupsDone",
DROP COLUMN "walkingDone",
DROP COLUMN "weeklyBonus";

-- DropTable
DROP TABLE "daily_logs";

-- CreateTable
CREATE TABLE "challenge_tasks" (
    "id" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "inputType" TEXT NOT NULL,
    "isRuleBreaker" BOOLEAN NOT NULL DEFAULT false,
    "isAlcoholTask" BOOLEAN NOT NULL DEFAULT false,
    "points" INTEGER NOT NULL,
    "target" DOUBLE PRECISION,

    CONSTRAINT "challenge_tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_tiers" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "threshold" DOUBLE PRECISION NOT NULL,
    "points" INTEGER NOT NULL,

    CONSTRAINT "task_tiers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_logs" (
    "id" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "value" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "task_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "day_summaries" (
    "id" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "completedCount" INTEGER NOT NULL DEFAULT 0,
    "totalCount" INTEGER NOT NULL DEFAULT 0,
    "pointsAwarded" INTEGER NOT NULL DEFAULT 0,
    "dailyBonusAwarded" BOOLEAN NOT NULL DEFAULT false,
    "streakBonusAwarded" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "day_summaries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "task_logs_userId_taskId_date_key" ON "task_logs"("userId", "taskId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "day_summaries_userId_challengeId_date_key" ON "day_summaries"("userId", "challengeId", "date");

-- AddForeignKey
ALTER TABLE "challenge_tasks" ADD CONSTRAINT "challenge_tasks_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "challenges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_tiers" ADD CONSTRAINT "task_tiers_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "challenge_tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_logs" ADD CONSTRAINT "task_logs_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "challenges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_logs" ADD CONSTRAINT "task_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_logs" ADD CONSTRAINT "task_logs_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "challenge_tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "day_summaries" ADD CONSTRAINT "day_summaries_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "challenges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "day_summaries" ADD CONSTRAINT "day_summaries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
