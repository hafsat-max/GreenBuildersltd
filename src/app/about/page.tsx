"use client";

import Image from 'next/image'
import styles from "@/styles/Home.module.css"
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
        <PageHero pageTag={"Know us, we build dream houses..."} pageTitle={"All About GreenBuilders"} pageImage='about' />

      {/* Spotlight section */}
      <section className={styles.luxSection}>
        <h1>Property Development</h1>
        <LuxuryProjects />
      </section>

      <div className={styles.landingPageVideo}>

      </div>

      <Footer />
    </>
  )
}