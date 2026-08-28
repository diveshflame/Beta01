const { PrismaClient } = require("@prisma/client");
const { runDayScoring } = require("../src/lib/score-engine");

const prisma = new PrismaClient();

// Helper to format date keys
function formatDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

async function main() {
  console.log("=== STARTING SCORING SYSTEM TEST SIMULATION ===");

  // 1. Clean up existing test data
  console.log("Clearing existing challenges and logs...");
  await prisma.taskTier.deleteMany();
  await prisma.taskLog.deleteMany();
  await prisma.daySummary.deleteMany();
  await prisma.weeklyScore.deleteMany();
  await prisma.challengeMember.deleteMany();
  await prisma.activityEvent.deleteMany();
  await prisma.challenge.deleteMany();
  await prisma.user.deleteMany();

  // 2. Create users
  console.log("Creating test users...");
  const admin = await prisma.user.create({
    data: { email: "aman@test.com", name: "Aman", displayName: "Aman (Admin)" },
  });
  const drinkerUser = await prisma.user.create({
    data: { email: "drinker@test.com", name: "Drinker User", displayName: "Drinker User" },
  });
  const nonDrinkerUser = await prisma.user.create({
    data: { email: "nondrinker@test.com", name: "Non-Drinker User", displayName: "Non-Drinker User" },
  });

  // Define challenge dates: Monday August 24 to Sunday August 30, 2026
  const startDate = new Date("2026-08-24T00:00:00Z");
  const endDate = new Date("2026-08-30T23:59:59Z");

  // 3. Create the challenge
  console.log("Creating dynamic challenge...");
  const challenge = await prisma.challenge.create({
    data: {
      name: "tester_winter_arc",
      description: "Tester Winter Arc Challenge",
      startDate,
      endDate,
      inviteCode: "testcode123",
      adminId: admin.id,
    },
  });

  // 4. Configure Challenge Tasks & Tiers (Option B Dynamic Points)
  console.log("Configuring challenge tasks and point tiers...");
  
  const tasksConfig = [
    // --- DAILY CHALLENGES ---
    { name: "Daily protein target : 100gm", type: "DAILY", inputType: "CHECKBOX", points: 5 },
    { name: "1 fruit everyday", type: "DAILY", inputType: "CHECKBOX", points: 2 },
    { name: "3L water everyday", type: "DAILY", inputType: "CHECKBOX", points: 2 },
    { name: "No eating after 10 PM", type: "DAILY", inputType: "CHECKBOX", points: 4 },
    { name: "8 hours sleep daily", type: "DAILY", inputType: "CHECKBOX", points: 7 },
    { name: "No YouTube shorts/Reels/TikTok after 6 pm", type: "DAILY", inputType: "CHECKBOX", points: 5 },
    { name: "No phone during meals", type: "DAILY", inputType: "CHECKBOX", points: 2 },
    { name: "Morning - Make your bed daily", type: "DAILY", inputType: "CHECKBOX", points: 1 },
    { name: "Cold Shower everyday", type: "DAILY", inputType: "CHECKBOX", points: 3 },
    { name: "read 20 pages/day or 30 minutes", type: "DAILY", inputType: "CHECKBOX", points: 3 },

    // --- WEEKLY CHALLENGES ---
    { name: "Gym", type: "WEEKLY", inputType: "CHECKBOX", points: 40, target: 4 },
    { name: "Walking", type: "WEEKLY", inputType: "NUMBER", points: 10, target: 10 },
    { name: "Push-ups", type: "WEEKLY", inputType: "NUMBER", points: 0, target: 100, tiers: [
      { threshold: 100, points: 5 },
      { threshold: 200, points: 10 },
      { threshold: 350, points: 50 },
      { threshold: 700, points: 100 },
    ]},
    { name: "No Sugar", type: "WEEKLY", inputType: "CHECKBOX", points: 20, isRuleBreaker: true },
    { name: "No Fast Food", type: "WEEKLY", inputType: "CHECKBOX", points: 20, isRuleBreaker: true },
    { name: "All meals at home - No junk", type: "WEEKLY", inputType: "CHECKBOX", points: 30, isRuleBreaker: true },
    { name: "No Alcohol", type: "WEEKLY", inputType: "CHECKBOX", points: 20, isRuleBreaker: true, isAlcoholTask: true },
  ];

  const tasksMap = {};
  for (const tc of tasksConfig) {
    const task = await prisma.challengeTask.create({
      data: {
        challengeId: challenge.id,
        name: tc.name,
        type: tc.type,
        inputType: tc.inputType,
        isRuleBreaker: tc.isRuleBreaker || false,
        isAlcoholTask: tc.isAlcoholTask || false,
        points: tc.points,
        target: tc.target || null,
        tiers: tc.tiers ? {
          createMany: {
            data: tc.tiers.map(tier => ({
              threshold: tier.threshold,
              points: tier.points,
            }))
          }
        } : undefined,
      },
    });
    tasksMap[tc.name] = task.id;
  }

  // 5. Create Memberships
  console.log("Joining users to the challenge and setting drinker profiles...");
  
  // Drinker membership
  const memberDrinker = await prisma.challengeMember.create({
    data: {
      userId: drinkerUser.id,
      challengeId: challenge.id,
      isAlcoholDrinker: true,
    },
  });

  // Non-Drinker membership
  const memberNonDrinker = await prisma.challengeMember.create({
    data: {
      userId: nonDrinkerUser.id,
      challengeId: challenge.id,
      isAlcoholDrinker: false,
    },
  });

  // 6. Generate daily logs over 7 days (Monday Aug 24 to Sunday Aug 30)
  console.log("Generating 7 days of daily log entries...");

  const daysList = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    daysList.push(d);
  }

  // --- SCENARIO 1: Drinker User (High Achiever, Completes 8/10 daily, Gym 4x, Walk 12km, Pushups 750, Unbroken rules)
  // Daily base score per day: protein(5) + fruit(2) + water(2) + noEating(4) + sleep(7) + noShorts(5) + noPhone(2) + madeBed(1) = 28 pts
  // Completes 8/10 daily habits -> triggers daily completion bonus (+5 pts/day)
  // 7 consecutive success days -> triggers streak bonus (+15 pts on Day 7)
  // Weekly achievements: Gym (40 pts), Walking 12km (10 pts), Pushups 750 (100 pts), No Sugar (20 pts), No Fast Food (20 pts), Meals Home (30 pts), No Alcohol (20 pts)
  // Total expected points: Daily (28*7 + 5*7 + 15 = 246) + Weekly (40 + 10 + 100 + 20 + 20 + 30 + 20 = 240) = 486 points
  console.log("Seeding logs for Drinker User...");
  for (let i = 0; i < 7; i++) {
    const date = daysList[i];
    
    // 8 Daily habits completed
    const dailyHabitsToComplete = [
      "Daily protein target : 100gm",
      "1 fruit everyday",
      "3L water everyday",
      "No eating after 10 PM",
      "8 hours sleep daily",
      "No YouTube shorts/Reels/TikTok after 6 pm",
      "No phone during meals",
      "Morning - Make your bed daily"
    ];

    for (const name of dailyHabitsToComplete) {
      await prisma.taskLog.create({
        data: {
          challengeId: challenge.id,
          userId: drinkerUser.id,
          taskId: tasksMap[name],
          date,
          completed: true,
        },
      });
    }

    // Weekly metrics logged daily
    // Gym sessions logged on Mon, Wed, Fri, Sat (4 times)
    const isGymDay = i === 0 || i === 2 || i === 4 || i === 5;
    await prisma.taskLog.create({
      data: {
        challengeId: challenge.id,
        userId: drinkerUser.id,
        taskId: tasksMap["Gym"],
        date,
        completed: isGymDay,
      },
    });

    // Walking logs: 2km on Mon, 3km on Tue, 1km on Wed, 4km on Thu, 2km on Fri (total 12km)
    let walkVal = 0;
    if (i === 0) walkVal = 2.0;
    else if (i === 1) walkVal = 3.0;
    else if (i === 2) walkVal = 1.0;
    else if (i === 3) walkVal = 4.0;
    else if (i === 4) walkVal = 2.0;
    
    await prisma.taskLog.create({
      data: {
        challengeId: challenge.id,
        userId: drinkerUser.id,
        taskId: tasksMap["Walking"],
        date,
        value: walkVal,
      },
    });

    // Push-ups: logs 100 pushups on Mon, Tue, Wed, Thu, Fri, Sat and 150 on Sun (total 750 pushups)
    const pushupVal = i === 6 ? 150 : 100;
    await prisma.taskLog.create({
      data: {
        challengeId: challenge.id,
        userId: drinkerUser.id,
        taskId: tasksMap["Push-ups"],
        date,
        value: pushupVal,
      },
    });

    // Rules: None are broken (completed = false)
    await prisma.taskLog.create({
      data: { challengeId: challenge.id, userId: drinkerUser.id, taskId: tasksMap["No Sugar"], date, completed: false },
    });
    await prisma.taskLog.create({
      data: { challengeId: challenge.id, userId: drinkerUser.id, taskId: tasksMap["No Fast Food"], date, completed: false },
    });
    await prisma.taskLog.create({
      data: { challengeId: challenge.id, userId: drinkerUser.id, taskId: tasksMap["All meals at home - No junk"], date, completed: false },
    });
    await prisma.taskLog.create({
      data: { challengeId: challenge.id, userId: drinkerUser.id, taskId: tasksMap["No Alcohol"], date, completed: false },
    });
  }

  // --- SCENARIO 2: Non-Drinker User (Low Achiever, Completes 5/10 daily, Gym 3x, Walk 7km, Pushups 350, Sugar broken, Alcohol unbroken)
  // Daily base score per day: fruit(2) + water(2) + bed(1) + coldShower(3) + reading(3) = 11 pts
  // 5/10 completed -> no daily bonus (+0 pts/day)
  // No streak bonus
  // Total daily expected points: 11 * 7 = 77 pts
  // Weekly achievements: Gym 3x (0 pts), Walking 7km (0 pts), Pushups 350 (50 pts), No Sugar broken (0 pts), No Fast Food (20 pts), Meals Home (30 pts), No Alcohol (10 pts)
  // Total weekly expected points: 0 + 0 + 50 + 0 + 20 + 30 + 10 = 110 points
  // Overall expected points: 77 + 110 = 187 points
  console.log("Seeding logs for Non-Drinker User...");
  for (let i = 0; i < 7; i++) {
    const date = daysList[i];
    
    // 5 Daily habits completed
    const dailyHabitsToComplete = [
      "1 fruit everyday",
      "3L water everyday",
      "Morning - Make your bed daily",
      "Cold Shower everyday",
      "read 20 pages/day or 30 minutes"
    ];

    for (const name of dailyHabitsToComplete) {
      await prisma.taskLog.create({
        data: {
          challengeId: challenge.id,
          userId: nonDrinkerUser.id,
          taskId: tasksMap[name],
          date,
          completed: true,
        },
      });
    }

    // Weekly metrics logged daily
    // Gym sessions logged on Mon, Wed, Fri (3 times)
    const isGymDay = i === 0 || i === 2 || i === 4;
    await prisma.taskLog.create({
      data: {
        challengeId: challenge.id,
        userId: nonDrinkerUser.id,
        taskId: tasksMap["Gym"],
        date,
        completed: isGymDay,
      },
    });

    // Walking logs: 1km per day (total 7km)
    await prisma.taskLog.create({
      data: {
        challengeId: challenge.id,
        userId: nonDrinkerUser.id,
        taskId: tasksMap["Walking"],
        date,
        value: 1.0,
      },
    });

    // Pushups: 50 per day (total 350 pushups)
    await prisma.taskLog.create({
      data: {
        challengeId: challenge.id,
        userId: nonDrinkerUser.id,
        taskId: tasksMap["Push-ups"],
        date,
        value: 50,
      },
    });

    // Rules: Sugar broken on Wednesday (day index 2)
    const isSugarBroken = i === 2;
    await prisma.taskLog.create({
      data: { challengeId: challenge.id, userId: nonDrinkerUser.id, taskId: tasksMap["No Sugar"], date, completed: isSugarBroken },
    });
    await prisma.taskLog.create({
      data: { challengeId: challenge.id, userId: nonDrinkerUser.id, taskId: tasksMap["No Fast Food"], date, completed: false },
    });
    await prisma.taskLog.create({
      data: { challengeId: challenge.id, userId: nonDrinkerUser.id, taskId: tasksMap["All meals at home - No junk"], date, completed: false },
    });
    await prisma.taskLog.create({
      data: { challengeId: challenge.id, userId: nonDrinkerUser.id, taskId: tasksMap["No Alcohol"], date, completed: false },
    });
  }

  // 7. Execute Scoring Engine for both users day-by-day
  console.log("Running scoring engine for Drinker User...");
  for (const date of daysList) {
    await runDayScoring(drinkerUser.id, challenge.id, date);
  }

  console.log("Running scoring engine for Non-Drinker User...");
  for (const date of daysList) {
    await runDayScoring(nonDrinkerUser.id, challenge.id, date);
  }

  // 8. Retrieve and Verify Results
  console.log("Retrieving final scores and summaries...");

  const finalDrinkerMember = await prisma.challengeMember.findUnique({
    where: { challengeId_userId: { challengeId: challenge.id, userId: drinkerUser.id } },
  });
  const finalNonDrinkerMember = await prisma.challengeMember.findUnique({
    where: { challengeId_userId: { challengeId: challenge.id, userId: nonDrinkerUser.id } },
  });

  const drinkerSummaries = await prisma.daySummary.findMany({
    where: { userId: drinkerUser.id, challengeId: challenge.id },
    orderBy: { date: "asc" },
  });
  const nonDrinkerSummaries = await prisma.daySummary.findMany({
    where: { userId: nonDrinkerUser.id, challengeId: challenge.id },
    orderBy: { date: "asc" },
  });

  const drinkerWeekly = await prisma.weeklyScore.findUnique({
    where: { userId_challengeId_weekStart: { userId: drinkerUser.id, challengeId: challenge.id, weekStart: startDate } },
  });
  const nonDrinkerWeekly = await prisma.weeklyScore.findUnique({
    where: { userId_challengeId_weekStart: { userId: nonDrinkerUser.id, challengeId: challenge.id, weekStart: startDate } },
  });

  console.log("\n=================== VERIFICATION AUDIT ===================");

  console.log("\n[DRINKER USER AUDIT] (Expected Overall: 486)");
  console.log(`- Final Challenge Member Points: ${finalDrinkerMember.points} (Drinker User)`);
  console.log(`- Weekly Score Points: ${drinkerWeekly ? drinkerWeekly.points : 0} (Expected: 240)`);
  console.log("- Daily Summaries Points breakdown:");
  drinkerSummaries.forEach((s, idx) => {
    console.log(`  Day ${idx + 1} (${formatDate(s.date)}): Completed ${s.completedCount}/${s.totalCount} tasks. Points Awarded: ${s.pointsAwarded} (Daily Bonus: ${s.dailyBonusAwarded}, Streak Bonus: ${s.streakBonusAwarded})`);
  });
  console.log(`- Current Streak: ${finalDrinkerMember.currentStreak} (Expected: 7)`);
  console.log(`- Longest Streak: ${finalDrinkerMember.longestStreak} (Expected: 7)`);

  console.log("\n[NON-DRINKER USER AUDIT] (Expected Overall: 187)");
  console.log(`- Final Challenge Member Points: ${finalNonDrinkerMember.points} (Non-Drinker User)`);
  console.log(`- Weekly Score Points: ${nonDrinkerWeekly ? nonDrinkerWeekly.points : 0} (Expected: 110)`);
  console.log("- Daily Summaries Points breakdown:");
  nonDrinkerSummaries.forEach((s, idx) => {
    console.log(`  Day ${idx + 1} (${formatDate(s.date)}): Completed ${s.completedCount}/${s.totalCount} tasks. Points Awarded: ${s.pointsAwarded} (Daily Bonus: ${s.dailyBonusAwarded}, Streak Bonus: ${s.streakBonusAwarded})`);
  });
  console.log(`- Current Streak: ${finalNonDrinkerMember.currentStreak} (Expected: 0)`);
  console.log(`- Longest Streak: ${finalNonDrinkerMember.longestStreak} (Expected: 0)`);

  console.log("\n=================== VALIDATION ASSERTS ===================");
  const drinkerValid = finalDrinkerMember.points === 486;
  const nonDrinkerValid = finalNonDrinkerMember.points === 187;

  if (drinkerValid && nonDrinkerValid) {
    console.log("✓ SUCCESS: All points and bonus math perfectly validate against user rules!");
  } else {
    console.log("✗ FAILED: Points calculations do not match the expected values.");
    if (!drinkerValid) console.log(`  Drinker expected 486, got ${finalDrinkerMember.points}`);
    if (!nonDrinkerValid) console.log(`  Non-Drinker expected 187, got ${finalNonDrinkerMember.points}`);
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
