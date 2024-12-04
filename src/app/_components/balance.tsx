import getAccountBalance from "@/src/helpers/getAccountBalance";
import prisma from "../_lib/db";
import TextCopy from "./text-copy";

export default async function Balance() {
  const account = await prisma.account.findUnique({
    where: {
      username: "sherpas",
    },
  });

  const transactions = await prisma.transaction.findMany({
    where: {
      Accountid: account?.id,
    },
  });

  const balance = getAccountBalance(transactions);

  return (
    <div className="flex justify-between w-full mb-8">
      <div className="">
        <div className="text-xl font-medium">Current Balance</div>
        <span className="text-sm text-primary-20 items-center inline-flex gap-1">
          <span className="text-xs">IBAN:</span>{" "}
          <TextCopy text={account?.accountNumber as string} />
        </span>
      </div>
      <div className="text-5xl inline-flex font-medium">
        ${balance.toLocaleString()}
      </div>
    </div>
  );
}
