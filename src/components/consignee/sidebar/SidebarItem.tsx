"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@nextui-org/theme";

const SidebarItem = ({ item, isExpanded, pathname }: any) => {
  const isActive = pathname === item.href;

  return (
    <Link href={item.href || "#"} legacyBehavior>
      <a className="w-full">
        <button
          className={cn(
            "flex items-center w-full h-12 px-4",
            isActive ? "bg-primary text-white" : "hover:bg-gray-200"
          )}
        >
          {item.icon}
          {isExpanded && <span className="ml-4">{item.name}</span>}
        </button>
      </a>
    </Link>
  );
};

export default SidebarItem;



