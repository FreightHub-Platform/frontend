"use client";

import * as React from "react";
import { Smooch_Sans } from "next/font/google";
import { IconButton } from "@mui/material";
import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import Logo from "../../../../public/images/Logo.svg";
import SearchIn from "./SeachInput";
import { Badge } from "@nextui-org/badge";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useEffect, useState } from "react";
import { api } from "../../../utils/config";

const displayFont = Smooch_Sans({
  weight: "700",
  style: "normal",
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

interface UserData {
  id: number;
  username: string;
  role: string;
  name: string;
  mobileNumber: string;
  createdDate: string;
  activeStatus: boolean;
  lastLoginDate: string | null;
  updatedDate: string;
}

export function Topbar() {
  const [user, setUser] = useState<UserData | null>(null);

  // Fetch user data by ID
  const fetchUserData = async () => {
    try {
      const jwtToken = localStorage.getItem("jwt");
      const userId = localStorage.getItem("id");

      if (!userId) {
        console.error("User ID not found in localStorage");
        return;
      }

      const response = await api.post("/user/id", userId, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setUser(response.data.data);
      } else {
        console.error("Failed to fetch user data:", response);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      fetchUserData().then(() => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        }
      });
    }
  }, [user]);

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
            <div>
              <IconButton aria-label="help">
                <HelpOutlineIcon fontSize="large" className="text-gray-600" />
              </IconButton>
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
                  src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                />
              </Badge>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col align-middle my-auto">
              {user ? (
                <>
                  <p className="text-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </>
              ) : (
                <p className="text-sm text-gray-500">Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
