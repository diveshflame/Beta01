import { PGlite } from "@electric-sql/pglite";
import { PrismaPGlite } from "pglite-prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { readFileSync } from "node:fs";
import { join } from "node:path";

let cached: PrismaClient | null = null;
let cachedPg: PGlite | null = null;

export async function getTestDb(): Promise<PrismaClient> {
  if (cached) return cached;
  const client = new PGlite();
  const adapter = new PrismaPGlite(client);
  const prisma = new PrismaClient({ adapter });
  const sql = readFileSync(
    join(process.cwd(), "tests", "fixtures", "schema.sql"),
    "utf8"
  );
  await client.exec(sql);
  await prisma.$connect();
  cachedPg = client;
  cached = prisma;
  return prisma;
}

export async function closeTestDb(): Promise<void> {
  if (cached) {
    await cached.$disconnect();
    cached = null;
  }
  if (cachedPg) {
    await cachedPg.close();
    cachedPg = null;
  }
}

export async function wipeTestDb(): Promise<void> {
  const db = await getTestDb();
  await db.$executeRawUnsafe(
    `TRUNCATE TABLE "activity_events","weekly_scores","day_summaries","task_logs","task_tiers","challenge_tasks","challenge_members","verification_tokens","accounts","sessions","challenges","users" CASCADE`
  );
}
