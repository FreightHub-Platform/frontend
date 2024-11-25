"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("jwt");

    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthGuard;
