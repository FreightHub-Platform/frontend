"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Smooch_Sans } from "next/font/google";
import { IconButton } from "@mui/material";
import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import Logo from "../../../../public/images/Logo.svg";
import SearchIn from "./SeachInput";
import { Badge } from "@nextui-org/badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Cookies from "js-cookie";
import { getConsignerById } from "../../../utils/consigner";
import Notification from "./Notification";
import { useRouter } from "next/navigation";

const displayFont = Smooch_Sans({
  weight: "700",
  style: "normal",
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export function Topbar() {
  const [businessName, setBusinessName] = useState('John Does');
  const [logo, setLogo] = useState('https://i.pravatar.cc/150?u=a04258a2462d826712d');

  useEffect(() => {
    const fetchConsignerData = async () => {
      const consigner = {"id": localStorage.getItem("id")};

      // if(!consigner.id){
      //   window.location.href = "http://localhost:3000/"
      // }

      try {
        const data = await getConsignerById(consigner, Cookies.get('jwt'));
        if (data && data.businessName && data.logo) {
          setBusinessName(data.businessName);
          setLogo(data.logo);
        }
      } catch (error) {
        console.error('Error fetching consigner data:', error);
      }
    };

    fetchConsignerData();
  }, []);


  const [notification, setNotification] = useState(false)
  const [showBadge, setShowBadge] = useState(true)
  const [numberNotification, setNumberNotification] = useState(0)

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
            <div className="flex flex-col align-middle my-auto">
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
                  src={logo}
                />
              </Badge>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col align-middle my-auto">
              <p className="text-medium">{businessName}</p>
              <p className="text-sm text-gray-500">Consigner</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
