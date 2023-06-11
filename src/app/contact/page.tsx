"use client";

import Image from 'next/image'
import styles from "@/styles/contact.module.css"
import NavBar from '@/components/NavBar'
import {
  RightOutlined,
  EnvironmentOutlined,
  CaretRightFilled,
  PlusOutlined
} from "@ant-design/icons"
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactCard from '@/components/ContactCard';
import TextField from '@/components/TextField';
import TextArea from '@/components/TextArea';


export default function Home() {

  return (
    <>
        <NavBar />
        {/* Hero Section */}
        <PageHero pageTitle={"Contact Us"} pageImage='contact' />
        {/* Adress Sections */}

        <section className={styles.contactCards}>
            <ContactCard>
                <>
                    <p>Company Address - Nigeria</p>
                    <h4>Suite B20, Unique Shopping Mall By Old Passport Office, Off Oba Akinjobi Way Ikeja GRA, Lagos</h4>
                </>
            </ContactCard>
            <ContactCard>
                <>
                    <p>Company Address - UNITED KINGDOM</p>
                    <h4>91 Kildaire Street, Middlesborough TS1 4QY</h4>
                </>
            </ContactCard>
            <ContactCard>
                <>
                    <div className={styles.contactGrp}>
                        <div className={styles.icon}>
                            <Image src={"/svgs/phone.svg"} alt='Phone' fill style={{objectFit: "contain"}} />
                        </div>
                        <div>
                            <p>Company Phones</p>
                            <h5>+234 812 041 1851</h5>
                            <h5>+234 812 041 1851</h5>
                        </div>
                    </div>
                    <div className={styles.contactGrp}>
                        <div className={styles.icon}>
                            <Image src={"/svgs/chat.svg"} alt='Phone' fill style={{objectFit: "contain"}} />
                        </div>
                        <div>
                            <p>Dustro Emails</p>
                            <h5>d.greenbuildersltd@gmail.com</h5>
                            <h5>contact@greenbuildersltd.</h5>
                        </div>
                    </div>

                </>
            </ContactCard>
        </section>

        <section className={styles.contactForm}>
            <div className={styles.contactGrp}>
                <TextField placeholder={"Your Full Name"} text={"text"} />
                <TextField placeholder={"Your Email Address"} text={"text"} />
            </div>
            <div className={styles.contactGrp}>
                <TextField placeholder={"Your Phone Number"} text={"text"} />
                <TextField placeholder={"Your Address"} text={"text"} />
            </div>
            <TextArea placeholder={"Enter Your Message Here . . ."} />
            <button>Submit Message →</button>
        </section>

        <section className={styles.mapSection}>
            <div className={styles.map}>
                <Image src={"/svgs/map.svg"} alt='map' fill style={{objectFit: "cover"}} />
            </div>
        </section>



      <Footer />
    </>
  )
}