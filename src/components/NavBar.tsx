"use client";
import React, { useState } from 'react'
import styles from '@/styles/component.module.css'
import Image from "next/image"
import Link from 'next/link'
import {MenuOutlined} from "@ant-design/icons"
import SideNav from './SideNav';

function NavBar() {
    const [showSideNav, setShowSideNav] = useState(false);


    const showSideNavFunc = () => {
        setShowSideNav(!showSideNav)
    }
  return (
    <>
        <div className={styles.navContainer}>
            <div className={styles.brand}>
                <div className={styles.logoContainer}>
                    <Image src={"/logo.png"} alt='GreenBuilders' fill style={{objectFit: "contain", objectPosition: "center"}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
            </div>
            <div className={styles.navLinks}>
                <div className={styles.navLink}>
                    <Link href={"/"}>
                        Home
                    </Link>
                </div>
                <div className={styles.navLink}>
                    <Link href={"/about"}>
                        About
                    </Link>
                </div>
                <div className={styles.navLink}>
                    <Link href={"/services"}>
                        Services
                    </Link>
                </div>
                <div className={styles.navLink}>
                    <Link href={"/projects"}>
                        Projects
                    </Link>
                </div>
                <div className={styles.navLink}>
                    <Link href={"/contact"}>
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className={styles.navCTA}>
                <button>Book Appointment</button>
            </div>
            <div onClick={()=>showSideNavFunc()} className={styles.navToggle}>
                <MenuOutlined /> 

            </div>
        </div>
        <SideNav show={showSideNav} setShow={showSideNavFunc} />
    </>
  )
}

export default NavBar
