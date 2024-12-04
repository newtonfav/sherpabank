"use client";
import { transferMoney } from "@/src/actions/actions";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { useActionState } from "react";

const initialState = {
  success: null,
  message: "",
};

export default function Transfer() {
  const [state, formAction] = useActionState(transferMoney, initialState);

  return (
    <div className="transfer pt-6 pb-3 px-6 rounded-[0.8rem]">
      <p className="mb-4 font-medium text-black">Transfer Money</p>
      <form action={formAction} className="flex flex-col gap-2">
        <div className="inline-flex gap-2">
          <input
            type="text"
            name="iban"
            required
            placeholder="IBAN"
            className="rounded-[0.4rem] w-5/12 text-black p-2 outline-none placeholder-opacity-70 placeholder-black bg-opacity-40 bg-primary-200"
          />
          <input
            type="number"
            placeholder="amount"
            name="amount"
            required
            className="rounded-[0.4rem] w-5/12 text-black p-2 outline-none placeholder-opacity-70 placeholder-black bg-opacity-40 bg-primary-200"
          />
          <button className="bg-primary-200 py-2 px-4 rounded-[0.4rem]">
            <ArrowLongRightIcon className="w-6" />
          </button>
        </div>
        <div className="h-5">
          {state.success === false && (
            <p className="text-xs text-red-600 font-medium items-center">
              {state.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
