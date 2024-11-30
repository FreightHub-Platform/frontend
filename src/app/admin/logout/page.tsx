"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { Spinner } from "@nextui-org/react";

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("jwt");
    Cookies.remove("jwt");
    //remove everything from local storage
    localStorage.clear();
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
        <div className="flex justify-center items-center">
          <Spinner size="lg" />
        </div>
      </div>
    </motion.div>
  );
};

export default LogoutPage;
