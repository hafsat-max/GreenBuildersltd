import React from 'react'
import Image from "next/image"
import styles from "@/styles/component.module.css"

function PageHero() {
  return (
      <section className={styles.heroSection}>
        <Image className={styles.heroImage} src={"/images/HeroImages/project.png"} alt='HeroAlice' fill style={{objectFit: "cover", objectPosition: "center"}} />
        <div className={styles.heroDetails}>
          <p className={styles.heroDetailsTag}>Catch a glimpse of our building projects here</p>
          <h1 className={styles.heroDetailsTitle}>Projects & More</h1>
        </div>

      </section>
  )
}

export default PageHero
