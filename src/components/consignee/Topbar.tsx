"use client";

import * as React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.svg";

export function Topbar() {
  return (
    <nav className="flex w-full justify-between px-5 py-2 bg-white items-center shadow-md">
      <div className="flex items-center ">
        <Image
          src={Logo}
          alt="logo"
          width={60}
          height={60}
          className="sm:w-10 sm:h-10"
        />
        <p className="text-xl sm:text-lg font-bold ml-2">FREIGHT HUB</p>
      </div>
    </nav>
  );
}
