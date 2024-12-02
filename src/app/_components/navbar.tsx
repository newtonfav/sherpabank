import React from "react";
import Logo from "./logo";

export default function NavBar() {
  return (
    <div className="py-5 px-20 shadow-sm">
      <div className="flex justify-between items-center flex-row">
        <Logo />

        <button className="font-normal px-10 py-2 bg-primary-300 rounded-[0.65rem] text-white">
          Login
        </button>
      </div>
    </div>
  );
}
