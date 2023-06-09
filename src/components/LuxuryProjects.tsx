import React from 'react'
import styles from "@/styles/component.module.css"
import Image from 'next/image'
import {PlusOutlined} from "@ant-design/icons"

function LuxuryProjects() {
  return (
    <div className={styles.luxuryProjectsContainer}>
        <div className={styles.imageContainer}> 
            <Image src={"/images/spotlight/lux1.png"} alt='Spotlight' fill style={{objectFit: "cover", objectPosition: "center"}} />
            <div className={styles.spotOverlay}>
                <p>Luxury Apartment</p>
                <h4>Alice Court II</h4>
                <div className={styles.overlayAction}>
                    <PlusOutlined />
                </div>
            </div>
        </div>
        <div className={styles.imageContainer}> 
            <Image src={"/images/spotlight/lux2.png"} alt='Spotlight' fill style={{objectFit: "cover", objectPosition: "center"}} />
        </div>
        <div className={styles.imageContainer}> 
            <Image src={"/images/spotlight/lux3.png"} alt='Spotlight' fill style={{objectFit: "cover", objectPosition: "center"}} />
        </div>
    </div>
  )
}

export default LuxuryProjects
