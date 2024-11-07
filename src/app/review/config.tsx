import { DashboardOutlined } from "@mui/icons-material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
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
      name: "Consigners",
      href: "/review/consigners",
      icon: <DashboardOutlined />,
      active: pathname === "/review/consigners",
      position: "top",
    },
    {
      group: "ACTIONS",
      name: "Drivers",
      href: "/review/drivers",
      icon: <ChecklistOutlinedIcon />,
      active: isNavItemActive(pathname, "/review/drivers"),
      position: "top",
    },
    {
      group: "ACTIONS",
      name: "Vehicles",
      href: "/review/vehicles",
      icon: <LocalShippingIcon />,
      active: isNavItemActive(pathname, "/review/vehicles"),
      position: "top",
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
