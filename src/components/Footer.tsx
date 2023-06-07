import React from 'react'
import styles from "@/styles/component.module.css"
import Image from 'next/image'
import {
    FacebookFilled,
    InstagramOutlined,
    LinkedinOutlined,
    TwitterCircleFilled
} from "@ant-design/icons"

function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
            <div className={styles.gridItem}>
                <div className={styles.brand}>
                    <Image src={"/logo_white.png"} alt='GreenBuildersLtd' fill style={{objectFit: "contain"}} />
                </div>
                <p>We believe, that your home should be your sanctuary, and we strive to make that a reality.</p>

                <div className={styles.socials}>
                    <div className={styles.social}>
                        <Image src={"/svgs/facebook.svg"} alt='Facebbok' fill style={{objectFit: "contain", objectPosition: "center"}} />
                    </div>
                    <div className={styles.social}>
                        <Image src={"/svgs/instagram.svg"} alt='instagram' fill style={{objectFit: "contain", objectPosition: "center"}} />
                    </div>
                    <div className={styles.social}>
                        <Image src={"/svgs/linkedIn.svg"} alt='Linkedin' fill style={{objectFit: "contain", objectPosition: "center"}} />
                    </div>
                    <div className={styles.social}>
                        <Image src={"/svgs/twitter.svg"} alt='Twitter' fill style={{objectFit: "contain", objectPosition: "center"}} />
                    </div>
                </div>
            </div>
            <div className={styles.gridItem}>
                <div className={styles.list}>
                    <h4 className={styles.listHead}>
                        Quick Links
                    </h4>
                    
                </div>
            </div>
            <div className={styles.gridItem}></div>
            <div className={styles.gridItem}></div>
        </div>
    </div>
  )
}

export default Footer
