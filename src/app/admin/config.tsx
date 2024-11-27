import { DashboardOutlined, LocalShippingOutlined } from "@mui/icons-material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      group: "",
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: <DashboardOutlined />,
      active: pathname === "/admin/dashboard",
      position: "top",
    },
    {
      group: "Management",
      name: "Vehicles",
      href: "/admin/vehicles",
      icon: <LocalShippingOutlined />,
      active: isNavItemActive(pathname, "/admin/vehicles"),
      position: "top",
    },
    {
      group: "Management",
      name: "Users",
      href: "/admin/users",
      icon: <PeopleAltOutlinedIcon />,
      active: isNavItemActive(pathname, "/admin/users"),
      position: "top",
    },
    {
      group: "Management",
      name: "Orders",
      href: "/admin/orders",
      icon: <ReceiptLongOutlinedIcon />,
      active: isNavItemActive(pathname, "/admin/orders"),
      position: "top",
    },
    // {
    //   group: "Financial",
    //   name: "Revenue",
    //   href: "/admin/revenue",
    //   icon: <ShowChartOutlinedIcon/>,
    //   active: isNavItemActive(pathname, "/admin/revenue"),
    //   position: "top",
    // },
    {
      group: "Financial",
      name: "Billing",
      href: "/admin/billing",
      icon: <RequestQuoteOutlinedIcon />,
      active: isNavItemActive(pathname, "/admin/billing"),
      position: "top",
    },
    // {
    //   group: "Reviews",
    //   name: "Reviews",
    //   href: "/admin/reviews",
    //   icon: <ReviewsOutlinedIcon />,
    //   active: isNavItemActive(pathname, "/admin/reviews"),
    //   position: "top",
    // },
    {
      group: "User",
      name: "Profile",
      href: "/admin/profile",
      icon: <AccountCircleOutlinedIcon />,
      active: isNavItemActive(pathname, "/admin/profile"),
      position: "top",
    },
    {
      group: "",
      name: "Settings",
      href: "/admin/settings",
      icon: <SettingsOutlinedIcon />,
      active: isNavItemActive(pathname, "/admin/settings"),
      position: "bottom",
    },
    {
      group: null,
      name: "Logout",
      href: "/admin/logout",
      icon: <LogoutOutlinedIcon />,
      active: pathname === "/admin/logout",
      position: "bottom",
    },
  ];
};
