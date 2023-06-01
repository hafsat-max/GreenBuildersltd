"use client";

import Image from 'next/image'
import styles from "../styles/Home.module.css"
import NavBar from '@/components/NavBar'
import {
  RightOutlined,
  EnvironmentOutlined,
  CaretRightFilled
} from "@ant-design/icons"

export default function Home() {
  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Image className={styles.heroImage} src={"/heroImg.png"} alt='HeroAlice' fill style={{objectFit: "cover", objectPosition: "center"}} />
        <div className={styles.heroDetails}>
          <p className={styles.heroDetailsTag}>LUXURY, CLASS & EXCELLENCE</p>
          <h1 className={styles.heroDetailsTitle}>Alice Court I</h1>
          <p className={styles.heroDetailsDescription}>
            Alice Court I is a luxury building project that offers a sophisticated living experience in a prime location. With exquisite design and state-of-the-art amenities, Alice Court I promises to provide residents with a comfortable and stylish lifestyle. The building boasts spacious and elegantly designed apartments, stunning views, and top-notch facilities .
          </p>
          <div className={styles.heroDetailsLocation}>
            <EnvironmentOutlined /> 
            <p>Alice Court I, Gbagada Estate, Lagos.</p>
          </div>
          <div className={styles.heroCTA}>
            <button>Learn more →</button>
            <div className={styles.heroCTAStyle}>
              <CaretRightFilled />
            </div>
          </div>
        </div>
        <div className={styles.heroNextButton}>
          <RightOutlined />
        </div>

        <div className={styles.extraHeroDetails}>
          <div className={styles.completedProjects}>
            <h2>147</h2>
            <p>Completed Projects</p>
          </div>
          <div className={styles.yrExp}>
            <h2>25+</h2>
            <p>Years of Experience</p>
          </div>
        </div>

      </section>

      {/* We are Green Builders */}
      <section className={styles.weAreSection}>
        <h2 className={styles.sectionTitle}>We Are GreenBuilders</h2>
        <div className={styles.sectionList}>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image src={"/icons/building.png"} alt='building' fill style={{objectFit: "contain", objectPosition: "top"}} />
            </div>
            <div className={styles.itemDetails}>
              <h4>Building Construction</h4>
              <p>We specialize in delivering construction projects to meet needs and expectations of our clients.</p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image src={"/icons/repair.png"} alt='building' fill style={{objectFit: "contain", objectPosition: "top"}} />
            </div>
            <div className={styles.itemDetails}>
              <h4>Building Repairs</h4>
              <p>We understand the importance of timely and efficient repairs, therefore, we repair to bring buildings back to good shape.</p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image src={"/icons/demolition.png"} alt='building' fill style={{objectFit: "contain", objectPosition: "top"}} />
            </div>
            <div className={styles.itemDetails}>
              <h4>Demolition</h4>
              <p>We provide professional and safe demolition services for a wide range of projects.</p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image src={"/icons/decor.png"} alt='building' fill style={{objectFit: "contain", objectPosition: "top"}} />
            </div>
            <div className={styles.itemDetails}>
              <h4>Luxury & Decor</h4>
              <p>Our team of expert designers work closely with clients to bring their vision of luxury to life with elegance and sophistication.</p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image src={"/icons/quality.png"} alt='building' fill style={{objectFit: "contain", objectPosition: "top"}} />
            </div>
            <div className={styles.itemDetails}>
              <h4>Quality Assessment</h4>
              <p>With our team of expert assessors, we can get your properties assessed and give suggestions on what to do.</p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image src={"/icons/management.png"} alt='building' fill style={{objectFit: "contain", objectPosition: "top"}} />
            </div>
            <div className={styles.itemDetails}>
              <h4>Site Management</h4>
              <p>With us, you can be sure that projects will be completed on time, within budget, and to the highest standards of quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
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
    </>
  )
}