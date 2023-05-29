import React from 'react'
import styles from '@/styles/component.module.css'
import Image from "next/image"
import Link from 'next/link'
import {} from "antd"

function NavBar() {
  return (
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
        <div className={styles.navToggle}>

        </div>
    </div>
  )
}

export default NavBar
