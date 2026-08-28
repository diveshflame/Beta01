const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  const challenges = await prisma.challenge.findMany();
  console.log('--- DATABASE CHECK ---');
  console.log('Users count:', users.length);
  console.log('Challenges count:', challenges.length);
  if (users.length > 0) {
    console.log('Users:', users.map(u => ({ id: u.id, email: u.email, name: u.name })));
  }
  if (challenges.length > 0) {
    console.log('Challenges:', challenges.map(c => ({ id: c.id, name: c.name, inviteCode: c.inviteCode })));
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
