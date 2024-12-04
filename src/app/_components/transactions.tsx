import formatTransactionTime from "@/src/helpers/formateTransactionTime";
import prisma from "../_lib/db";

export default async function Transactions() {
  const transactions = (await prisma.transaction.findMany()).sort(
    (a, b) => Number(b.createdAt) - Number(a.createdAt)
  );

  return (
    <div className="bg-primary-200 rounded-[0.8rem] w-7/12">
      <div className="overflow-scroll h-[55dvh]">
        {transactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className={`flex flex-row justify-between mx-6 py-6 ${
              index !== transactions.length - 1
                ? "border-b border-primary-400"
                : ""
            }`}
          >
            <div className="flex gap-4 items-center">
              <span
                className={`px-3 py-1 text-xs rounded-[0.8rem] font-medium text-white ${transaction.type}`}
              >
                {transaction.type.toUpperCase()}
              </span>
              <span className="text-xs">
                {formatTransactionTime(transaction.createdAt)}
              </span>
            </div>

            <span className="inline-flex">
              {transaction.type === "withdrawal" ? "-" : ""}$
              {transaction.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
