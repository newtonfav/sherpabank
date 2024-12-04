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
      <div className="leading-3">
        <div className="text-xl font-medium tabletPortrait:text-base smallPhone:text-sm">
          Current Balance
        </div>
        <span className="text-sm text-primary-20 items-center inline-flex gap-1 tabletPortrait:text-xs">
          <span className="text-xs smallPhone:text-[0.6rem]">IBAN:</span>{" "}
          <TextCopy text={account?.accountNumber as string} />
        </span>
      </div>
      <div className="text-5xl inline-flex tracking-tight font-medium tabletPortrait:text-4xl smallPhone:text-3xl">
        ${balance.toLocaleString()}
      </div>
    </div>
  );
}
