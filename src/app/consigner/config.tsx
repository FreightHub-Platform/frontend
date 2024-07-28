import { DashboardOutlined } from "@mui/icons-material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

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
      href: "/consigner/dashboard",
      icon: <DashboardOutlined />,
      active: pathname === "/consigner/dashboard",
      position: "top",
    },
    {
      group: "ACTIONS",
      name: "Order List",
      href: "/consigner/orders",
      icon: <ChecklistOutlinedIcon />,
      active: isNavItemActive(pathname, "/consigner/orders"),
      position: "top",
    },
    {
      group: "ACTIONS",
      name: "Inbox",
      href: "/consigner/inbox",
      icon: <QuestionAnswerOutlinedIcon />,
      active: isNavItemActive(pathname, "/consigner/inbox"),
      position: "top",
    },
    {
      group: "USER",
      name: "Profile",
      href: "/consigner/profile",
      icon: <AccountCircleOutlinedIcon />,
      active: isNavItemActive(pathname, "/consigner/profile"),
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
