import React from 'react'
import styles from "@/styles/component.module.css"
import Image from 'next/image'
import {
    EnvironmentOutlined,
    MobileOutlined,
    MailOutlined
} from "@ant-design/icons"
import Link from 'next/link'

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

                    <div className={styles.listItems}>
                        <Link href={"#"}>Home</Link>
                        <Link href={"#"}>About Us</Link>
                        <Link href={"#"}>Blog</Link>
                        <Link href={"#"}>FAQ</Link>
                        <Link href={"#"}>Services</Link>
                    </div>
                    
                </div>
            </div>
            <div className={styles.gridItem}>
                <div className={styles.list}>
                    <h4 className={styles.listHead}>
                        Services
                    </h4>

                    <div className={styles.listItems}>
                        <Link href={"#"}>Consultancy</Link>
                        <Link href={"#"}>Property Management</Link>
                        <Link href={"#"}>Submit a Request</Link>
                        <Link href={"#"}>Appointment</Link>
                        <Link href={"#"}>Promotional Offers</Link>
                    </div>
                    
                </div>

            </div>
            <div className={styles.gridItem}>
                <div className={styles.list}>
                    <h4 className={styles.listHead}>
                        Contact
                    </h4>

                    <div className={styles.listItems}>
                        <div className={styles.contactItems}>
                            <EnvironmentOutlined />
                            <div className={styles.contactDetails}>
                                <h6>UNITED KINGDOM</h6>
                                <p>91 Kildaire Street, Middlesborough TS1 4QY</p>

                                <h6>NIGERIA</h6>
                                <p>Suite B20, Unique Shopping Mall By Old Passport Office, Off Oba Akinjobi Way Ikeja GRA, Lagos</p>
                            </div>
                            
                        </div>
                        <div className={styles.contactItems}>
                            <MobileOutlined />
                            <div className={styles.contactDetails}>
                                <p>+234 812 041 1851</p>
                            </div>
                        </div>
                        <div className={styles.contactItems}>
                            <MailOutlined />
                            <div className={styles.contactDetails}>
                                <p>contact@greenbuildersltd.com</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        <div className={styles.copyright}>
            <p>© Copyright GreenBuilders Nig. 2022 All Right Reserved.</p>
            <div className={styles.terms}>
                <p>Terms Of Use</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
