import { DashboardOutlined } from "@mui/icons-material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      group: "ACTIONS",
      name: "Consigners",
      href: "",
      icon: <DashboardOutlined />,
      active: pathname === "/review/",
      position: "top",
    },
    {
      group: "ACTIONS",
      name: "Drivers",
      href: "/consigner/orders",
      icon: <ChecklistOutlinedIcon />,
      active: isNavItemActive(pathname, "/consigner/orders"),
      position: "top",
    },
    {
      group: "ACTIONS",
      name: "Vehicles",
      href: "/consigner/inbox",
      icon: <LocalShippingIcon />,
      active: isNavItemActive(pathname, "/consigner/inbox"),
      position: "top",
    },
    {
      group: "",
      name: "Settings",
      href: "/consigner/settings",
      icon: <SettingsOutlinedIcon />,
      active: isNavItemActive(pathname, "/consigner/settings"),
      position: "bottom",
    },
    {
      group: null,
      name: "Logout",
      href: "/",
      icon: <LogoutOutlinedIcon/>,
      position: "bottom",
    }
  ];
};
