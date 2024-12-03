import React from "react";

export default function Balance() {
  return (
    <div className="flex justify-between w-full mb-8">
      <div className="">
        <div className="text-xl font-medium">Current Balance</div>
        <span className="text-sm text-primary-20">As at 12/12/2024, 18:02</span>
      </div>
      <div className="text-5xl font-medium">$23,399</div>
    </div>
  );
}
