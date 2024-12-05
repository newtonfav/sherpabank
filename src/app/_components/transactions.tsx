import prisma from "../_lib/db";
import TransactionsList from "./transaction-list";

export default async function Transactions() {
  const transactions = (await prisma.transaction.findMany()).sort(
    (a, b) => Number(b.createdAt) - Number(a.createdAt)
  );

  return <TransactionsList transactions={transactions} />;
}
