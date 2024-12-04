import { DashboardOutlined } from "@mui/icons-material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PersonIcon from '@mui/icons-material/Person';

import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
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
      name: "Reports",
      href: "/consigner/monthlyReport",
      icon: <DescriptionIcon />,
      active: isNavItemActive(pathname, "/consigner/monthlyReport"),
      position: "top",
    },
    {
      group: "",
      name: "Profile",
      href: "/consigner/profile",
      icon: <PersonIcon />,
      active: isNavItemActive(pathname, "/consigner/profile"),
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
