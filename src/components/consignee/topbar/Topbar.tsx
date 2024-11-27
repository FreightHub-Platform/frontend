"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Smooch_Sans } from "next/font/google";
import { IconButton } from "@mui/material";
import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import Logo from "../../../../public/images/Logo.svg";
import { Badge } from "@nextui-org/badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Cookies from "js-cookie";

const displayFont = Smooch_Sans({
  weight: "700",
  style: "normal",
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export function Topbar() {
  const [userName, setUserName] = useState("John Does");
  const [avatar, setAvatar] = useState(
    "https://i.pravatar.cc/150?u=a04258a2462d826712d"
  );

 

  const [notification, setNotification] = useState(false);
  const [showBadge, setShowBadge] = useState(true);

  return (
    <nav className="flex w-full justify-between px-5 py-2 bg-white items-center">
      <div className="flex flex-row text-4xl items-center">
        <Image src={Logo} alt="logo" width={80} />
        <p className={displayFont.className}>FREIGHT HUB</p>
      </div>
      <div>
        <div className="flex flex-row gap-x-6">
          <div className="flex flex-row gap-3">
            <div className="relative">
              <IconButton
                aria-label="notifications"
                onClick={() => {
                  setNotification(!notification);
                  setShowBadge(false);
                }}
              >
                {showBadge ? (
                  <Badge content="99+" size="sm" shape="circle" color="danger">
                    <NotificationsNoneOutlinedIcon
                      fontSize="large"
                      className="text-gray-600"
                    />
                  </Badge>
                ) : (
                  <NotificationsNoneOutlinedIcon
                    fontSize="large"
                    className="text-gray-600"
                  />
                )}
              </IconButton>
              {notification ? (
                <div className="max-h-[600px] w-[500px] absolute z-50 right-7 top-10 flex shadow-2xl rounded-2xl">
                  {/* notifications content  */}
                  {/* ///////////////////////////////////////// */}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col align-middle my-auto">
              <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Avatar isBordered color="warning" radius="full" src={avatar} />
              </Badge>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col align-middle my-auto">
              <p className="text-medium">{userName}</p>
              <p className="text-sm text-gray-500">Consignee</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
