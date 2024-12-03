"use client";

import * as React from "react";
import { Smooch_Sans } from "next/font/google";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import Logo from "../../../../public/images/Logo.svg";
import SearchIn from "./SeachInput";
import { Badge } from "@nextui-org/badge";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const displayFont = Smooch_Sans({
  weight: "700",
  style: "normal",
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export function Topbar() {
  const [loggedUser, setLoggedUser] = React.useState({
    name: "User",
    role: "Role",
  });
  React.useEffect(() => {
    // Fetch logged user data from localStorage
    const loggedUserData = localStorage.getItem("loggedUserData");
    if (loggedUserData) {
      const parsedData = JSON.parse(loggedUserData);
      setLoggedUser({
        name: parsedData.name || "User",
        role: parsedData.role || "Role", // Fallback to 'Role' if role is missing
      });
    }
  }, []);

  return (
    <nav className="flex w-full justify-between px-5 py-2 bg-white items-center">
      <div className="flex flex-row text-4xl items-center ">
        <Image src={Logo} alt="logo" width={80} />
        <p className={displayFont.className}>FREIGHT HUB</p>
      </div>
      <div>
        <div>{/* <SearchIn /> */}</div>
      </div>
      <div>
        <div className="flex flex-row gap-x-6">
          <div className="flex flex-row gap-3">
            <div></div>
            <div></div>
            <div>
              <IconButton aria-label="delete">
                <HelpOutlineIcon fontSize="large" className="text-gray-600" />
              </IconButton>
            </div>
            <div className="flex flex-col  align-middle my-auto">
              <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Avatar
                  isBordered
                  color="warning"
                  radius="full"
                  src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                />
              </Badge>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col  align-middle my-auto">
              <p className="text-sm text-gray-500">{loggedUser.name}</p>

              <p className="text-sm text-gray-500">Admin</p>
            </div>
            <IconButton aria-label="delete"></IconButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
