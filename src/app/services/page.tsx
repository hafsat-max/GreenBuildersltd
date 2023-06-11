"use client";

import Image from 'next/image'
import styles from "@/styles/services.module.css"
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
        <PageHero pageTag={"Know us, we build dream houses..."} pageTitle={"Quality and Luxury, We are Ready to Serve You"} pageImage='contact' />
        {/* Adress Sections */}


        <section className={styles.aboutSection}>
            <div className={styles.aboutDetails}>
            <h6>ABOUT US</h6>
            <h2>With our knowledge we guarantee success</h2>
            <p>We offer a wide range of construction services to suit your needs. Whether you are looking to build a new home, remodel your existing one, or construct a commercial building, we have the skills and expertise to handle any project, big or small.</p>
            <button>Learn more →</button>
            </div>
            <div className={styles.aboutImage}>
            <div className={styles.absoluteImageContainer}>
                <div className={styles.imageContainer}>
                <Image src={"/images/laptopBook.png"} alt='About1' fill style={{objectFit: "cover"}} />
                </div>
            </div>
            <div className={styles.absoluteImageContainer2}>
                <div className={styles.imageContainer}>
                <Image src={"/images/roadConstruction.png"} alt='About1' fill style={{objectFit: "cover"}} />
                </div>
            </div>
            <div className={styles.aboutCTAStyle}>
                <CaretRightFilled />
            </div>
            <div className={styles.aboutImageText}>
                <p>We Construct and Manage Places and Infrastructures </p>
            </div>
            </div>
        </section>


      <Footer />
    </>
  )
}