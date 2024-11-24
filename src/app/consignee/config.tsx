import { DashboardOutlined } from "@mui/icons-material";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      group: "ACTIONS",
      name: "Dashboard",
      href: "/consignee/dashboard",
      icon: <DashboardOutlined />,
      active: pathname === "/consignee/dashboard",
      position: "top",
    },
    {
      group: "ACTIONS",
      name: "Orders",
      href: "/consignee/orders",
      icon: <ChecklistOutlinedIcon />,
      active: isNavItemActive(pathname, "/consignee/orders"),
      position: "top",
    },
    {
      group: null,
      name: "Logout",
      href: "/",
      icon: <LogoutOutlinedIcon />,
      position: "bottom",
    },
  ];
};
