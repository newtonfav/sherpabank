import { transferMoney } from "@/src/actions/actions";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function Transfer() {
  return (
    <div className="transfer pt-6 pb-8 px-6 rounded-[0.8rem]">
      <p className="mb-4 font-medium text-black">Transfer Money</p>
      <form action={transferMoney} className="inline-flex gap-3">
        <input
          type="text"
          placeholder="account number"
          className="rounded-[0.4rem] text-black p-2 outline-none placeholder-opacity-70 placeholder-black bg-opacity-40 bg-primary-200"
        />
        <input
          type="number"
          placeholder="amount"
          className="rounded-[0.4rem] text-black p-2 outline-none placeholder-opacity-70 placeholder-black bg-opacity-40 bg-primary-200"
        />
        <button className="bg-primary-200 py-2 px-4 rounded-[0.4rem]">
          <ArrowLongRightIcon className="w-6" />
        </button>
      </form>
    </div>
  );
}
