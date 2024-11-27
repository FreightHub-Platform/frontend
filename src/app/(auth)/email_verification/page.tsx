"use client";

import Image from "next/image";
import Navbar from "../../../components/navbar/Navbar";
import styles from "./email_verification.module.css";
import Verification from "../../../components/Auth/verification/Verification";
import Footer from "../../../components/footer/Footer";

const EmailVerification = () => {
  const handleLinkClick = () => {
    // setLoading(true);
  };

  return (
    <div className={styles.container}>
      <Navbar onLinkClick={handleLinkClick} />
      <div className={styles.left}>
        <Verification />
        <Footer />
      </div>
      <div className={styles.right}>
        <Image
          className={styles.img}
          src="/images/home-page-side.png"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default EmailVerification;
