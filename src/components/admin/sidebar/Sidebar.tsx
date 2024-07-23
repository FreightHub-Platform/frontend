"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { NavItems } from "../../../app/admin/config";
import { cn } from "@nextui-org/theme";

import SidebarItem from "./SidebarItem";
import SidebarMenu from "./SidebarMenu";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Sidebar = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const navItems = NavItems();
  const pathname = usePathname();

  const categorizedNavItems = navItems.reduce(
    (acc, item) => {
      const group = item.group || "Others";
      if (item.position === "bottom") {
        acc.bottom.push(item);
      } else {
        if (!acc.groupedNavItems[group]) acc.groupedNavItems[group] = [];
        acc.groupedNavItems[group].push(item);
      }
      return acc;
    },
    { top: [], bottom: [], groupedNavItems: {} }
  );
  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div
      className={cn(
        isSidebarExpanded ? "w-[240px]" : "w",
        "border-r transition-all duration-300 ease-in-out transform hidden flex-col sm:flex h-fill"
      )}
    >
      <div className="flex flex-col px-3 pt-4 w-full h-full ">
        {Object.keys(categorizedNavItems.groupedNavItems).map(
          (group, index) => (
            <SidebarMenu
              key={index}
              isExpanded={isSidebarExpanded}
              items={categorizedNavItems.groupedNavItems[group]}
              pathname={pathname}
            />
          )
        )}
      </div>
      <div className="px-6 pb-4 ">
        {categorizedNavItems.bottom.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            isExpanded={isSidebarExpanded}
            pathname={pathname}
          />
        ))}
      </div>
      <div className="absolute">
        {isSidebarExpanded ? (
          <button
          type="button"
          style={{ top: "39vh" }}
          className={cn(
            "absolute -z-10  left-52  h-16 rounded-xl  bg-white flex items-center justify-center",
            isSidebarExpanded ? "transform rotate-180" : ""
          )}
          onClick={toggleSidebar}
          title="Toggle Sidebar"
        >
            <span className="material-icons"><ArrowForwardIosIcon/></span>
        </button>
        ): (
          <button
          type="button"
          style={{ top: "39vh" }}
          className={cn(
            "absolute -z-10  left-24 pl-4 w-8 h-16 rounded-xl  bg-white flex items-center justify-center",
            isSidebarExpanded ? "transform rotate-180" : ""
          )}
          onClick={toggleSidebar}
          title="Toggle Sidebar"
        >
            <span className="material-icons"><ArrowForwardIosIcon/></span>
        </button>
        )  
        }
        
      </div>
    </div>
  );
};

export default Sidebar;
