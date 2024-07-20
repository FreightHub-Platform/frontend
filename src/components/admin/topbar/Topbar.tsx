"use client";

import * as React from "react";
import { Smooch_Sans } from "next/font/google";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Logo from "../../../../public/images/Logo.svg";
import SearchIn from "./SeachInput";

const displayFont = Smooch_Sans({
  weight: "700",
  style: "normal",
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export function Topbar() {
  return (
    <nav className="flex w-full justify-between px-5 py-5 bg-white items-center">
      <div className="flex flex-row text-4xl items-center ">
        <Image src={Logo} alt="logo" width={80} />
        <p className={displayFont.className}>FREIGHT HUB</p>
      </div>
      <div>
        <div>
          <SearchIn />
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-x-4">
          <div>
            <div><IconButton aria-label="delete">
  {/* <DeleteIcon /> */}
</IconButton></div>
            <div><IconButton aria-label="delete">
  {/* <DeleteIcon /> */}
</IconButton></div>
            <div><IconButton aria-label="delete">
  {/* <DeleteIcon /> */}
</IconButton></div>
          </div>
          <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
          <div className="flex flex-row gap-6">
            <div>
              <p>John Doe</p>
              <p className="">Admin</p>
            </div>
            <IconButton aria-label="delete">
              <ExpandMoreIcon />
            </IconButton>
          </div>{" "}
        </div>
      </div>
    </nav>
  );
}
