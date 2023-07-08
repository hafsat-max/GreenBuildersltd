import React from 'react'
import Image from "next/image"
import styles from "@/styles/component.module.css"

function PageHero({pageTitle, pageTag, pageImage}: {pageTitle: string, pageTag?: string, pageImage: string}) {
  return (
      <section className={styles.heroSection}>
        <Image className={styles.heroImage} src={`/images/heroImg.png`} alt='HeroAlice' fill style={{objectFit: "cover", objectPosition: "center"}} />
        {/* <Image className={styles.heroImage} src={`/images/HeroImages/${pageImage}.png`} alt='HeroAlice' fill style={{objectFit: "cover", objectPosition: "center"}} /> */}
        <div className={styles.heroDetails}>
          <p className={styles.heroDetailsTag}>{pageTag}</p>
          <h1 className={styles.heroDetailsTitle}>{pageTitle}</h1>
        </div>

      </section>
  )
}

export default PageHero
