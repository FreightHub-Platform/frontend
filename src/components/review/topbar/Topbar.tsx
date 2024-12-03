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
import Notification from "./Notification";

const displayFont = Smooch_Sans({
  weight: "700",
  style: "normal",
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export function Topbar() {



  const [notification, setNotification] = React.useState(false)
  const [showBadge, setShowBadge] = React.useState(true)
  const [numberNotification, setNumberNotification] = React.useState(0)

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    if(!jwt){
      window.location.href = "http://localhost:3000/"
    }
  },[])

  const updateNotificationCount = (count) => {
    setNumberNotification(count);
  };

  return (
    <nav className="flex w-full justify-between px-5 py-2 bg-white items-center">
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
                
                <Badge
                  content={ showBadge ? "" : null} // Always display the red dot
                  size="sm"
                  shape="circle"
                  color="danger"
                >
                  <NotificationsNoneOutlinedIcon fontSize="large" className="text-gray-600" />
                </Badge>
              </IconButton>
              {
                notification ? 
                  <div className="max-h-[600px] w-[500px] absolute z-50 right-7 top-10 flex shadow-2xl rounded-2xl" >
                    <Notification updateNotificationCount={(count) => updateNotificationCount(count)}/>
                  </div>
                : null
              }
            </div>
            {/* <div>
              <IconButton aria-label="delete">
                <SettingsOutlinedIcon
                  fontSize="large"
                  className="text-gray-600"
                />
              </IconButton>
            </div> */}
            {/* <div>
              <IconButton aria-label="delete">
                <HelpOutlineIcon fontSize="large" className="text-gray-600" />
              </IconButton>
            </div> */}
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
              <p className="text-sm text-gray-500">Review Board</p>
            </div>
            {/* <IconButton aria-label="delete">
              <ExpandMoreIcon />
            </IconButton> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
