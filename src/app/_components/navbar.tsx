import React from "react";
import Logo from "./logo";
import Image from "next/image";
import avatar from "@/public/adediji.png";

export default function NavBar() {
  return (
    <div className="py-4 px-20 phone:px-10 smallerPhone:px-5 shadow-sm">
      <div className="flex justify-between items-center flex-row">
        <Logo />

        {/* <button className="font-normal px-10 py-2 smallPhone:text-xs bg-primary-300 rounded-[0.65rem] text-white">
          Login
        </button> */}

        <div className="inline-flex items-center gap-4">
          <span className="font-medium text-base phone:hidden">Profile</span>
          <Image
            src={avatar}
            alt="profile image"
            className="w-12 rounded-full"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
