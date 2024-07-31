"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@nextui-org/theme";
import { Icon } from "@mui/material";
import { Button } from "@nextui-org/button";

const SidebarItem = ({ item, isExpanded, pathname }) => {

  const getPathSegment = (pathname: string) => {
    const segments = pathname.split('/');
    return `/${segments[1]}/${segments[2]}`;
  };



  const isActive = getPathSegment(pathname) === item.href;

  return (
    <div className="flex flex-row mb-2 ">
      {!isExpanded ? (
        <Link href={item.href || "#"} legacyBehavior>
          <a className="w-full">
            <Button
              size="sm"
              startContent={<Icon>{item.icon}</Icon>}
              className={cn(
                "flex items-center justify-center w-full h-12 mx-0",
                isActive ? "bg-primary text-white" : ""
              )}
            >
              {isExpanded && <span className="ml-4">{item.name}</span>}
            </Button>
          </a>
        </Link>
      ) : (
        <Link href={item.href || "#"} legacyBehavior>
          <a className="w-full">
            <Button
              startContent={<Icon>{item.icon}</Icon>}
              className={cn(
                "flex items-center justify-center w-full h-12 mx-0",
                isActive ? "bg-primary text-white" : ""
              )}
            >
              {isExpanded && <span className="ml-4">{item.name}</span>}
            </Button>
          </a>
        </Link>
      )}
    </div>
  );
};

export default SidebarItem;
