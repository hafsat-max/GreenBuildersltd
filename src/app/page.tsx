"use client";

import Image from 'next/image'
import styles from "../styles/Home.module.css"
import NavBar from '@/components/NavBar'
import {RightOutlined} from "@ant-design/icons"

export default function Home() {
  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Image className={styles.heroImage} src={"/heroImg.png"} alt='HeroAlice' fill style={{objectFit: "cover", objectPosition: "center"}} />
        <div className={styles.heroDetails}>
          <p className={styles.heroDetailsTag}>LUXURY, CLASS & EXCELLENCE</p>
          <h1 className={styles.heroDetailsTitle}>Alice Court I</h1>
          <p className={styles.heroDetailsDescription}>
            Alice Court I is a luxury building project that offers a sophisticated living experience in a prime location. With exquisite design and state-of-the-art amenities, Alice Court I promises to provide residents with a comfortable and stylish lifestyle. The building boasts spacious and elegantly designed apartments, stunning views, and top-notch facilities
          </p>
        </div>
        <div className={styles.heroNextButton}>
          <RightOutlined />
        </div>

      </div>
    </>
  )
}