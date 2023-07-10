"use client";

import React, {useState} from "react"
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
import ServiceCard from '@/components/ServiceCard';
import Link from "next/link";


export default function Home() {
  const [activeCard, setActiveCard] = useState("dev")

  return (
    <>
        <NavBar />
        {/* Hero Section */}
        <PageHero pageTag={"Know us, we build dream houses..."} pageTitle={"Quality and Luxury, We are Ready to Serve You"} pageImage='contact' />
        {/* Adress Sections */}


        <section className={styles.aboutSection}>
            <div className={styles.aboutDetails}>
            <h6>OUR SERVICES</h6>
            <h2>We are always Ready to Serve You Better...</h2>
            <p>We offer a wide range of construction services to suit your needs. Whether you are looking to build a new home, remodel your existing one, or construct a commercial building, we have the skills and expertise to handle any project, big or small.</p>
            <Link href={"/projects"}>
              <button>Learn more →</button>
            </Link>
            </div>
            <div className={styles.aboutImage}>
            <div className={styles.absoluteImageContainer}>
                <div className={styles.imageContainer}>
                <Image src={`/images/Alice/Alice_1.png`} alt='About1' fill style={{objectFit: "cover"}} />
                </div>
            </div>
            <div className={styles.absoluteImageContainer2}>
                <div className={styles.imageContainer}>
                <Image src={"/images/Alice_3/4.jpg"} alt='About1' fill style={{objectFit: "cover"}} />
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

        {/* Other Services */}
        <section className={styles.otherServices}>
          <h2>Other Services</h2>
          <div className={styles.cardContainer}>
            <ServiceCard onClick={()=>setActiveCard("dev")} active={activeCard === "dev"}  service={"Property Development"} />
            <ServiceCard onClick={()=>setActiveCard("PrM")} active={activeCard === "PrM"} service={"Property Management"} />
            <ServiceCard onClick={()=>setActiveCard("CoS")} active={activeCard === "CoS"} service={"Consultancy Service"} />
          </div>

          {activeCard === "dev" && <div className={styles.serviceDetails}>
            <div className={styles.devText}>
              <h2>Development</h2>
              <p>We specialize in residential and commercial properties, and we take pride in our ability to deliver on-time and on-budget while maintaining the highest standards of quality. Our expert team of developers, architects, and designers work together to create properties that not only meet the needs of our clients but exceed their expectations.

              <br />
              <br />
                
              We understand that every construction project is unique, and we approach each one with the utmost attention to detail and a commitment to excellence. From the initial planning stages to the final touches, we work closely with our clients to ensure that their vision is brought to life.</p>
              <button>View Projects →</button>  
            </div>
            <div className={styles.devImage}>
              <Image src={`/images/Alice/Alice_1.png`} alt="Development" fill style={{objectFit: "cover"}} />
            </div>

            <div className={styles.sideImg}>
              <div className={styles.sideImgContainer}>
                <Image src={"/images/services/development/sideImg.png"} alt="Development" fill style={{objectFit: "cover"}} />
              </div>
            </div>

            <div className={styles.devAction}>
              <h2>Get an appointment with our Expert</h2>
              <p>Get in touch with someone from our wide arrays of consultants. Your building projects need the best hands.</p>
              <button>
                <Image src={"/svgs/button_right.svg"} alt="Button_Right" fill style={{objectFit: "contain"}}  />
              </button>
            </div>
          </div>}
          {activeCard === "CoS" && <div className={styles.serviceDetails}>
            <div className={styles.devText}>
              <h2>Consultancy Service</h2>
              <p>With our deep understanding of the construction industry and years of experience, we offer consultancy services that cover various aspects of the project lifecycle. Whether you are planning a new construction project, seeking to optimize an existing development, or facing specific challenges within your real estate portfolio, our team of experienced consultants is ready to assist you.
              <br /><br />
              Our consultancy services encompass a wide range of areas, including project feasibility analysis, design review, cost estimation, and construction planning. We collaborate closely with our clients to gain a thorough understanding of their goals, objectives, and constraints, enabling us to provide tailored solutions that align with their vision and requirements.</p>
              <button>View Projects →</button> 
            </div>
            <div className={styles.devImage}>
              <Image src={"/images/Alice_Court_2/2.jpg"} alt="Development" fill style={{objectFit: "cover"}} />
            </div>

            <div className={styles.sideImg}>
              <div className={styles.sideImgContainer}>
                <Image src={"/images/services/consultancy/sideImg.png"} alt="Development" fill style={{objectFit: "cover"}} />
              </div>
            </div>

            <div className={styles.devAction}>
              <h2>Get an appointment with our Expert</h2>
              <p>Get in touch with someone from our wide arrays of consultants. Your building projects need the best hands.</p>
              <button>
                <Image src={"/svgs/button_right.svg"} alt="Button_Right" fill style={{objectFit: "contain"}}  />
              </button>
            </div>
          </div>}
          {activeCard === "PrM" && <div className={styles.serviceDetails}>
            <div className={styles.devText}>
              <h2>Property Management</h2>
              <p>At GreenBuilders Nig. Ltd., we take pride in delivering professional and personalized property management services. With our extensive knowledge, attention to detail, and commitment to excellence, you can trust us to protect your investment and ensure its long-term success. Experience the difference of our real estate property management services and let us help you unlock the full potential of your properties.
              <br /><br />
              Our dedicated team of property management professionals understands the importance of effective property oversight. We handle all aspects of property management, starting from marketing and tenant screening to lease management, maintenance, and financial reporting. Our goal is to ensure a seamless and profitable experience for property owners, while also ensuring tenant satisfaction.</p>
              <button>View Projects →</button> 
            </div>
            <div className={styles.devImage}>
              <Image src={"/images/Alice_4/1.png"} alt="Development" fill style={{objectFit: "cover"}} />
            </div>

            <div className={styles.sideImg}>
              <div className={styles.sideImgContainer}>
                <Image src={"/images/services/property/sideImg.png"} alt="Development" fill style={{objectFit: "cover"}} />
              </div>
            </div>

            <div className={styles.devAction}>
              <h2>Get an appointment with our Expert</h2>
              <p>Get in touch with someone from our wide arrays of consultants. Your building projects need the best hands.</p>
              <button>
                <Image src={"/svgs/button_right.svg"} alt="Button_Right" fill style={{objectFit: "contain"}}  />
              </button>
            </div>
          </div>}
        </section>


      <Footer />
    </>
  )
}