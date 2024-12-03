"use client";
import { withdraw } from "@/src/actions/actions";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { useActionState } from "react";

const initialState = {
  success: null,
  message: "",
};

export default function Withdraw() {
  const [state, formAction] = useActionState(withdraw, initialState);

  return (
    <div className="withdrawal pt-6 pb-3 px-6 rounded-[0.8rem]">
      <p className="mb-4 font-medium text-black">Withdraw</p>
      <form action={formAction} className="flex flex-col justify-center gap-2">
        <div className="inline-flex gap-3">
          <input
            type="number"
            placeholder="amount"
            name="amount"
            required
            className="rounded-[0.4rem] text-black p-2 outline-none placeholder-opacity-70 placeholder-black bg-opacity-40 bg-primary-200"
          />
          <button className="bg-primary-200 py-2 px-4 rounded-[0.4rem]">
            <ArrowLongRightIcon className="w-6" />
          </button>
        </div>
        <div className="h-5">
          {state.success === false && (
            <p className="text-xs text-white font-medium items-center">
              {state.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
