import Balance from "./_components/balance";
import Greeting from "./_components/greeting";
import Operations from "./_components/operations";
import Transactions from "./_components/transactions";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto m-8 px-16">
      <div className="text-primary-10">
        <Greeting />
        <Balance />

        <div className="flex flex-row gap-4 w-full">
          <Transactions />
          <Operations />
        </div>
      </div>
    </div>
  );
}
