"use client";
import React from "react";
import Link from "next/link";
import { Tooltip } from "@nextui-org/tooltip";
import { cn } from "@nextui-org/theme";
import { Icon } from "@mui/material";
import { Button } from "@nextui-org/button";

const SidebarItem = ({ item, isExpanded }) => {
  return (
    // <Tooltip content={item.name} placement="right" isDisabled={isExpanded}>
    //   <Link href={item.href || "#"}>
    //     <div
    //       className={cn(
    //         "flex items-center p-2 my-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
    //         isExpanded ? "justify-start" : "justify-center"
    //       )}
    //     >
    //       <Icon className="text-lg">{item.icon}</Icon>
    //       {isExpanded && <span className="ml-4">{item.name}</span>}
    //     </div>
    //   </Link>
    // </Tooltip>
    <div className="flex flex-row mb-2 ">
       <Link href={item.href || "#"} legacyBehavior>
        <a className="w-full">
          <Button
            startContent={<Icon>{item.icon}</Icon>}
            className={cn("flex items-center justify-center w-full h-11")}
          >
            {isExpanded && <span className="ml-4">{item.name}</span>}
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default SidebarItem;
