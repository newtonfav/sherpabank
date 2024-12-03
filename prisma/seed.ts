import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialTransaction: Prisma.TransactionCreateInput = {
  type: "deposit",
  amount: 1000,
  Account: {
    connectOrCreate: {
      where: {
        username: "sherpas",
      },
      create: {
        username: "sherpas",
        balance: 1000,
        accountNumber: "GB29NWBK60161331926819",
      },
    },
  },
};

async function main() {
  console.log("Start seeding...");

  const newTransaction = await prisma.transaction.create({
    data: initialTransaction,
  });

  console.log(`Created transaction with id: ${newTransaction.id}`);

  console.log("Seeding finished.");
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
