import Link from "next/link";
import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

import styles from "@/styles/component.module.css";
import Image from "next/image";

function SideNav({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (e: boolean) => void;
}) {
  return (
    <>  
      <div
        className={
          show
            ? styles.sideNavContainer
            : `${styles.hideSideNavBar} ${styles.sideNavContainer}`
        }
      >
        <div className={styles.logo}>
          <Image
            src={"/logo.png"}
            alt="GreenBuilders"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.navItems}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
        <div onClick={() => setShow(!show)} className={styles.closeSideNav}>
          <CloseCircleOutlined />
        </div>
      </div>
      <div
        onClick={() => setShow(!show)}
        className={
          show ? styles.overlay : `${styles.hideOverlay} ${styles.overlay}`
        }
      />
    </>
  );
}

export default SideNav;
