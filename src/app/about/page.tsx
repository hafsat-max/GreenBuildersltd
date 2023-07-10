"use client";

import Image from 'next/image'
import styles from "@/styles/about.module.css"
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
import Button from '@/components/Button';


export default function Home() {

  const staffs = [
    {
      name: "Oluwadamilare Awonuga",
      image: "ceo.png",
      position: "CEO"
    },
    {
      name: "Iyinoluwa Awonuga",
      image: "coo.png",
      position: "COO"
    },
    {
      name: "Ibrahim Tola",
      image: "site_engr.png",
      position: "Site Engineer"
    },
    {
      name: "Barr. Ayo Shoderu",
      image: "legal_rep.png",
      position: "Legal Representative"
    },
    {
      name: "Engr. Solarin Babajide",
      image: "civil_engr.png",
      position: "Civil/ Structural Engineer"
    },
    {
      name: "Akintonde Adebisi A.",
      image: "quality_control_personnel.png",
      position: "Quality Control Personnel"
    },
  ]

  return (
    <>
      <NavBar />
      {/* Hero Section */}
        <PageHero pageTag={"Know us, we build dream houses..."} pageTitle={"All About GreenBuilders"} pageImage='about' />

        <section className={styles.aboutSection}>
            <h2>“We are a Young, Vibrant & Innovative brand changing the face of the  real estate industry....”</h2>
          <div className={styles.aboutImage}>
            <Image src={"/images/HeroImages/ceo.png"} alt='CEO' fill style={{objectFit: "cover"}} />
            <div className={styles.yrsOfExperience}>
              <h1>12+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
          </div>
          <div className={styles.aboutText}>
            <h2>“We are a Young, Vibrant & Innovative brand changing the face of the  real estate industry....”</h2>
            <div className={styles.aboutDetails}>
              <p>Experience the excellence of GreenBuilders Nig. Ltd., the leading option for superior construction solutions. Our skilled team of professionals is committed to delivering outstanding service to each and every customer. Whether it&apos;s residential or commercial undertakings, we possess the proficiency, abilities, and know-how to ensure successful project completion.</p>
              <h5>Oluwadamilare Awonuga <span className={styles.qualifications}>(PMP, Prince2, CIOB,CORBON, MNIOB)</span></h5>
              <h6>CEO</h6>
            </div>
            <Button href='/profile' text='Show Bio' />
          </div>
        </section>

        <section className={styles.missionSection}>
          <Image className={styles.missionImage} src={"/images/mission.png"} alt='mission' fill style={{objectFit: "cover"}} />
          <div className={styles.missionDetails}>
            <h1>Our Mission & Vission</h1>
            <div className={`${styles.goals} ${styles.mission}`}>
              <h6>We know where we are going....</h6>
              <h2>Our Mission</h2>
              <p>Our mission is to provide profitable investment plans and affordable housing to all income earners conveniently.</p>
            </div>
            <div className={`${styles.goals} ${styles.vission}`}>
              <h6>We have dreams, they are hoooooge...</h6>
              <h2>Our Vission</h2>
              <p>Our goal to be the leading real estate service provider. We are dedicated to providing you with excellent, professional, and reliable services.</p>
            </div>
          </div>
        </section>

        {/* Meet Us Section */}
        <section className={styles.staffsSection}>
          <h1>Meet the GreenBuilders</h1>
          <p>With our committed team of experts, we have successfully delivered  top-notch building projects</p>

          <div className={styles.staffs}>
            {staffs.map((staff, index)=> {
              return(
                <div key={index} className={styles.staff}>
                  <div className={styles.staffImage}>
                    <Image src={`/images/staffs/${staff.image}`} alt={staff.position} fill style={{objectFit: "cover", objectPosition: "top"}} />
                  </div>
                  <h4>{staff.name}</h4>
                  <p>{staff.position}</p>
                </div>
              )
            })}
            <div className={styles.staff}>
              <p>Want to Join Our Team at GreenBuilders Nigeria....?</p>
              <button>Check Openings →</button>
            </div>
          </div>
        </section>


      <Footer />
    </>
  )
}