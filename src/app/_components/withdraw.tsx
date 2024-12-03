import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Withdraw() {
  return (
    <div className="withdrawal pt-6 pb-8 px-6 rounded-[0.8rem]">
      <p className="mb-4 font-medium text-black">Withdraw</p>
      <div className="inline-flex gap-3">
        <input
          type="text"
          placeholder="user"
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
      </div>
    </div>
  );
}
