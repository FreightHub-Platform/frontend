"use client";
import React from "react";
import SidebarItem from "./SidebarItem";

const SidebarMenu = ({ isExpanded, items , pathname }) => {
  return (
    <div className="flex flex-col space-y-2">
      {items.length > 0 && (
        <>
          {items[0].group && <p className="text-gray-600 text-xs">{items[0].group}</p>}
          <div className="px-3 pt-2" >
            {items.map((item) => (
              <SidebarItem key={item.name} item={item} isExpanded={isExpanded} pathname={pathname} />
            ))}
          </div>
        </>
      )}

    </div>
  );
};

export default SidebarMenu;
