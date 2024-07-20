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

const Sidebar = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const navItems = NavItems();
  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div
      className={cn(
        isSidebarExpanded ? "w-[200px]" : "w-60px",
        "border-r transition-all duration-300 ease-in-out transform hidden sm:flex h-fill"
      )}
    >
      
    </div>
  );
};

export default Sidebar;
