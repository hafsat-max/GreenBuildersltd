"use client";

import Image from 'next/image'
import styles from "@/styles/profile.module.css"
import NavBar from '@/components/NavBar'
import {
  RightOutlined,
  EnvironmentOutlined,
  CaretRightFilled,
  PlusOutlined
} from "@ant-design/icons"
import LuxuryProjects from '@/components/LuxuryProjects';
import Testimonial from '@/components/Testimonial';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';


export default function Profile() {

  return (
    <>
      <NavBar />
      {/* Hero Section */}
        <PageHero pageTitle={"Green Builders #1"} pageImage='ceo' />
        <section className={styles.profileSection}>
            <div className={styles.ceoDetails}>
                <div className={styles.ceoImageContainer}>
                    <Image src={"/images/heroImages/ceo.png"} alt='Awonuga Oluwadamilare Timothy' fill style={{objectFit: "cover"}} />
                </div>
                <div className={styles.textDetails}>
                    <h2>Awonuga Oluwadamilare Timothy <span>(CORBON, CIOB)</span></h2>
                    <p>CEO/FOUNDER</p>
                </div>
            </div>
            <p className={styles.profileDetails}>Bldr. Damilare is a remarkable individual with a passion for construction and a commitment to excellence. He completed his education at the prestigious Obafemi Awolowo University, where he earned a degree in Building Construction Management. His dedication to professional growth and continuous learning is evident through his attainment of chartered builder status, both locally accredited by CORBON and internationally certified by CIOB.
            <br /><br />
            Over the course of 13 years, Bldr. Damilare has made significant contributions to various sectors of the construction field. He began his career as a structural engineer, working on prestigious projects like the Land Mark Towers and Vita Towers in VI. His expertise in delivering complex and innovative designs set him apart from his peers.
            <br /><br />
            With a desire to expand his horizons, Bldr. Damilare transitioned to the construction domain and joined Ospaces Construction. Here, he managed notable projects such as the Lakowe Golf Estate, Corona School in Abijo GRA, Giuliano by Sujimoto, Imota Rice Mill, Yaba & Oshodi Lag Bus Service Station, and the Union Bank Marina Refurbishment, which stands as Nigeria&apos;s tallest building. Collaborating with renowned developers like Damilare Backer, Zylus, MKH, and GMH Luxury, Bldr. Damilare showcased his leadership and management skills.
            <br /><br />
            However, his influence and reach extended far beyond Nigeria&apos;s borders. Bldr. Damilare gained international exposure by participating in major projects abroad. He played an integral role in the largest nuclear power project in the United Kingdom and contributed to England&apos;s longest and fastest rail project, valued at over £100 billion.
            Fuelled by his passion for making a lasting impact, Bldr. Damilare took a bold step and founded Green Builders Construction, a limited liability company committed to excellence in construction and development. The company&apos;s journey into property development began in October 2021, and since then, Bldr. Damilare and his team have achieved remarkable milestones.</p>
        </section>
      <Footer />
    </>
  )
}