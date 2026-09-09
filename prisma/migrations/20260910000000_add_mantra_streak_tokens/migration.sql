-- AlterTable
ALTER TABLE "users" ADD COLUMN     "mantra" TEXT DEFAULT 'I am inevitable',
ADD COLUMN     "streakTokens" INTEGER NOT NULL DEFAULT 1;