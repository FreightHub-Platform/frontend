"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("jwt");
    Cookies.remove("jwt");
    router.push("/login");
  }, [router]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="
        flex
        justify-center
        items-center
        w-full
        h-full
        bg-gray-100
        text-gray-700
        text-lg
        font-semibold
      
      "
      >
        <p>Logging out...</p>
      </div>
    </motion.div>
  );
};

export default LogoutPage;
