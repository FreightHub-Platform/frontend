"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { cn } from "@nextui-org/theme";
import SidebarItem from "./SidebarItem";
import { Dashboard } from "@mui/icons-material";

const SidebarMenu = ({ isExpanded, items }) => {
  return (
    <div className="flex flex-col space-y-2">
      {items.length > 0 && (
        <>
          {items[0].group && <p className="text-gray-600 text-sm">{items[0].group}</p>}
          <div className="px-3 pt-2">
            {items.map((item) => (
              <SidebarItem key={item.name} item={item} isExpanded={isExpanded} />
            ))}
          </div>
        </>
      )}
      {/* <Button startContent={<SettingsIcon />} className={cn("flex items-center justify-center w-full")}>
    <span className="hidden">Settings</span>
  </Button>
  <Button startContent={<LogoutIcon />}  className={cn("flex items-center justify-center w-full")}>
    <span className="hidden">Logout</span>
  </Button> */}
    </div>
  );
};

export default SidebarMenu;
