import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const productLaunch = await prisma.eventCategories.upsert({
    where: { categoryName: 'Product Launch' },
    update: {},
    create: {
      categoryName: 'Product Launch',
      status: false,
    },
  });
  const seminar = await prisma.eventCategories.upsert({
    where: { categoryName: 'Seminar' },
    update: {},
    create: {
      categoryName: 'Seminar',
      status: false,
    },
  });
  const webEvent = await prisma.eventCategories.upsert({
    where: { categoryName: 'Web Event' },
    update: {},
    create: {
      categoryName: 'Web Event',
      status: false,
    },
  });
  const conference = await prisma.eventCategories.upsert({
    where: { categoryName: 'Conference' },
    update: {},
    create: {
      categoryName: 'Conference',
      status: false,
    },
  });
  console.log(productLaunch, seminar, webEvent, conference);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
