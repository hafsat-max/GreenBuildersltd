"use client";

import Image from 'next/image'
import styles from "@/styles/project.module.css"
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



export default function Home() {

  return (
    <>
      <NavBar />
      {/* Hero Section */}
        <PageHero pageTag={"Catch a glimpse of our building projects here"} pageTitle={"Projects & More"} pageImage={"project"} />

      <section className={styles.portfolioSection}>
        <div className={styles.portHead}>
          <h6>PORTFOLIO</h6>
          <h1>Our Portfolio of Completed Projects Speaks Volume of Our Expertise....</h1>
          <div className={styles.heroNextButton}>
            <RightOutlined />
          </div>
        </div>
        <div className={styles.portDetails}>
          <p>Discover the remarkable portfolio of GreenBuilders Nig. Ltd., featuring outstanding projects such as Alice Court I and Alice Court II, among others. Our team of skilled professionals has consistently delivered top-quality construction services, ensuring the utmost satisfaction of our clients. From luxurious residential developments to innovative commercial ventures, our expertise and commitment to excellence shine through in every project we undertake.</p>
          <button>Learn more →</button>
        </div>
      </section>

      <section className={styles.projects}>
        <h1>Projects</h1>
        <LuxuryProjects />

      </section>
  

      <Footer />
    </>
  )
}