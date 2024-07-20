import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: "home",
      active: pathname === "/admin/dashboard",
      position: "top",
    },
    {
      name: "Vehicles",
      href: "/admin/vehicles",
      icon: "car",
      active: isNavItemActive(pathname, "/admin/vehicles"),
      position: "top",
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: "users",
      active: isNavItemActive(pathname, "/admin/users"),
      position: "top",
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: "shopping-cart",
      active: isNavItemActive(pathname, "/admin/orders"),
      position: "top",
    },
    {
      name: "Revenue",
      href: "/admin/revenue",
      icon: "chart-bar",
      active: isNavItemActive(pathname, "/admin/revenue"),
      position: "top",
    },
    {
      name: "Billing",
      href: "/admin/billing",
      icon: "credit-card",
      active: isNavItemActive(pathname, "/admin/billing"),
      position: "top",
    },
    {
      name: "Reviews",
      href: "/admin/reviews",
      icon: "star",
      active: isNavItemActive(pathname, "/admin/reviews"),
      position: "top",
    },
    {
      name: "Profile",
      href: "/admin/profile",
      icon: "user",
      active: isNavItemActive(pathname, "/admin/profile"),
      position: "top",
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: "cog",
      active: isNavItemActive(pathname, "/admin/settings"),
      position: "bottom",
    },
    {
      name: "Logout",
      href: "/admin/logout",
      icon: "logout",
      active: pathname === "/admin/logout",
      position: "bottom",
    }
  ];
};
