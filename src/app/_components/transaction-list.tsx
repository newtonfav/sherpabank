"use client";

import formatTransactionTime from "@/src/helpers/formateTransactionTime";
import { ITransaction } from "@/src/helpers/getAccountBalance";
import { useEffect, useState } from "react";

export default function TransactionsList({
  transactions,
}: {
  transactions: ITransaction[];
}) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary-200 rounded-[0.8rem] w-7/12 tabletPortrait:w-full">
      <div className="overflow-scroll h-[55dvh]">
        {transactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className={`flex flex-row justify-between transaction-item mx-6 py-6 ${
              index !== transactions.length - 1
                ? "border-b border-primary-400"
                : ""
            }`}
          >
            <div className="flex gap-4 smallerPhone:gap-2 items-center">
              <span
                className={`px-3 py-1 text-xs rounded-[0.8rem] smallerPhone:text-[0.6rem] font-medium text-white ${transaction.type}`}
              >
                {transaction.type.toUpperCase()}
              </span>
              <span className="text-xs">
                {formatTransactionTime(
                  new Date(transaction.createdAt),
                  currentTime
                )}
              </span>
            </div>

            <span className="inline-flex smallerPhone:text-sm">
              {transaction.type === "deposit" ? "" : "-"}$
              {transaction.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
