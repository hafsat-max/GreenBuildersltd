"use client";

import Image from 'next/image'
import styles from "@/styles/contact.module.css"
import NavBar from '@/components/NavBar'
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
            <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfnD7WxtLwIHYxRO-pzR5iFYNPXV5Brl_o1m_kNdmpswdrYBQ/formResponse">
                <div className={styles.contactGrp}>
                    <TextField name='entry.1120761330' placeholder={"Your Full Name"} text={"text"} />
                    <TextField name='entry.915676961' placeholder={"Your Email Address"} text={"text"} />
                </div>
                <div className={styles.contactGrp}>
                    <TextField name='entry.174219344' placeholder={"Your Phone Number"} text={"text"} />
                    <TextField name='entry.993730882' placeholder={"Your Address"} text={"text"} />
                </div>
                <TextArea name='entry.261272310' placeholder={"Enter Your Message Here . . ."} />
                <button type='submit' >Submit Message →</button>

            </form>
        </section>

        <section className={styles.mapSection}>
            <div className={styles.map}>
                {/* <Image src={"/svgs/map.svg"} alt='map' fill style={{objectFit: "cover"}} /> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4826840290193!2d3.3430708105118194!3d6.586764793379338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92213a1785c1%3A0xfbca096bb8cb53fc!2sUnique%20Shopping%20Mall!5e0!3m2!1sen!2sng!4v1686741477397!5m2!1sen!2sng" width="600" height="450" style={{border: "0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>



      <Footer />
    </>
  )
}