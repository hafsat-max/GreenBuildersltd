import React from 'react'
import Image from "next/image"
import styles from "@/styles/projecthero.module.css"
import {
  RightOutlined,
  EnvironmentOutlined,
  CaretRightFilled,
  PlusOutlined
} from "@ant-design/icons"

function ProjectHero({tag, name, description, location}: {tag: string, name: string, description: string, location: string}) {
  return (
      <section className={styles.heroSection}>
        <Image className={styles.heroImage} src={"/heroImg.png"} alt='HeroAlice' fill style={{objectFit: "cover", objectPosition: "center"}} />
        <div className={styles.heroDetails}>
          <p className={styles.heroDetailsTag}>{tag}</p>
          <h1 className={styles.heroDetailsTitle}>{name}</h1>
          <p className={styles.heroDetailsDescription}>
            {description}
          </p>
          <div className={styles.heroDetailsLocation}>
            <EnvironmentOutlined /> 
            <p>{location}</p>
          </div>
          <div className={styles.heroCTA}>
            <button>Learn more →</button>
            <div className={styles.heroCTAStyle}>
              <CaretRightFilled />
            </div>
          </div>
        </div>
        <div className={styles.heroNextButton}>
          <RightOutlined />
        </div>

        <div className={styles.extraHeroDetails}>
          <div className={styles.completedProjects}>
            <h2>147</h2>
            <p>Completed Projects</p>
          </div>
          <div className={styles.yrExp}>
            <h2>25+</h2>
            <p>Years of Experience</p>
          </div>
        </div>

      </section>
  )
}

export default ProjectHero
