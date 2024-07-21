"use client";
import React from "react";

import { Fragment, useState } from "react";
import Link from "next/link";

import { NavItems } from "../../../app/admin/config";
import { cn } from "@nextui-org/theme";

import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
import SidebarItem from "./SidebarItem";
import SidebarMenu from "./SidebarMenu";
import { Dashboard } from "@mui/icons-material";

const Sidebar = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);

  const navItems = NavItems();

  
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
        isSidebarExpanded ? "w-[240px]" : "w-60px",
        "border-r transition-all duration-300 ease-in-out transform hidden flex-col sm:flex h-fill"
      )}
    >
      {/* Top */}
      {/* <div className="flex flex-col px-3 pt-4 w-full h-full "> */}
        {/* <Button
          onClick={toggleSidebar}
          className="flex items-center justify-center mt-4"
        >
          {isSidebarExpanded ? (
            <ChevronLeftOutlinedIcon />
          ) : (
            <ChevronRightOutlinedIcon />
          )}
        </Button> */}

        {/* Sidebar Items */}
        <div className="flex flex-col px-3 pt-4 w-full h-full ">
        {Object.keys(categorizedNavItems.groupedNavItems).map((group, index) => (
          <SidebarMenu
            key={index}
            isExpanded={isSidebarExpanded}
            items={categorizedNavItems.groupedNavItems[group]}
          />
        ))}
      </div>
      <div className="px-6 pb-4 ">
        {categorizedNavItems.bottom.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            isExpanded={isSidebarExpanded}
          />
        ))}
      </div>

      {/* Bottom */}
      {/* <div className="mb-4">
        <SidebarMenu />
      </div> */}
    </div>
  );
};

export default Sidebar;
