"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import {
  RightOutlined,
  EnvironmentOutlined,
  CaretRightFilled,
  PlusOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import LuxuryProjects from "@/components/LuxuryProjects";
import Testimonial from "@/components/Testimonial";
import Carousels from "@/components/Carousel";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Carousel } from "@mantine/carousel";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const imageNumber = [
    "/alicespring-flyer.jpg",
    "/alice-spring5.jpg",
    "/alice-spring4.jpg",
    "/alice-spring.jpg",
    "/alice-spring1.jpg",
    "/alice-spring6.jpeg",
    "/alice-spring3.jpg",
  ];

  const companies = [
    <Image
      key={1}
      src={"/images/companies/1.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
    <Image
      key={1}
      src={"/images/companies/2.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
    <Image
      key={2}
      src={"/images/companies/3.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
    <Image
      key={2}
      src={"/images/companies/4.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
    <Image
      key={2}
      src={"/images/companies/5.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
    <Image
      key={3}
      src={"/images/companies/6.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
    <Image
      key={1}
      src={"/images/companies/1.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
    <Image
      key={1}
      src={"/images/companies/2.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
    <Image
      key={2}
      src={"/images/companies/3.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
    <Image
      key={2}
      src={"/images/companies/4.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
    <Image
      key={2}
      src={"/images/companies/5.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
    <Image
      key={3}
      src={"/images/companies/6.png"}
      alt="About1"
      fill
      style={{ objectFit: "contain" }}
    />,
  ];

  const propDev = [
    {
      name: "Alice Court I",
      url: "/projects/alice-court-1",
      img: "/images/spotlight/lux1.png",
    },
    {
      name: "Alice Court II",
      url: "/projects/alice-court-2",
      img: "/images/spotlight/lux2.png",
    },
    {
      name: "Alice Court III",
      url: "/projects/alice-court-3",
      img: "/images/spotlight/lux3.png",
    },
  ];

  return (
    <>
      <NavBar />
      {/* Hero Section */}

      {/* <ProjectHero
        tag={""}
        name={"GREEN BUILDERS LIMITED"}
        description={""}
        location={"Alice Court I, Gbagada Estate, Lagos."}
        linkBase="alice-court-1"
        project={true}
        vidLink="/videos/heroVid.mp4"
      /> */}

      <Carousel
        withIndicators
        height={800}
        loop
        plugins={[autoplay.current]}
        className="embla"
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {imageNumber.map((e, i) => {
          return (
            <Carousel.Slide
              className="embla__slide relative flex justify-center items-center"
              key={i}
            >
              <Image
                src={e}
                alt={`Alice Springs`}
                fill
                style={{
                  objectFit: "cover",
                  background: "rgba(76, 175, 80, 0.3)",
                }}
              />
              <div className=" justify-center items-center z-20 flex flex-col gap-2 ">
                <h2 className="text-secondary font-extrabold text-9xl text-center">
                  ALICE SPRINGS
                </h2>
                <p className="bg-white p-2 rounded text-center">
                  LUXURY, CLASS & EXCELLENCE
                </p>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>

      {/* We are Green Builders */}
      <section className={`${styles.weAreSection} noneTab`}>
        <h2 className={styles.sectionTitle}>We Are GreenBuilders</h2>
        <div className={styles.sectionList}>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image
                src={"/icons/building.png"}
                alt="building"
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
            <div className={styles.itemDetails}>
              <h4>Property Development</h4>
              <p>
                Trust us to handle all aspects of your property development
                needs and turn your dreams into a stunning reality.
              </p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image
                src={"/icons/repair.png"}
                alt="building"
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
            <div className={styles.itemDetails}>
              <h4>Facility Management</h4>
              <p>
                With our expertise and attention to detail, we ensure your
                facility is well managed, and optimized for maximum
                productivity.
              </p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image
                src={"/icons/management.png"}
                alt="building"
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
            <div className={styles.itemDetails}>
              <h4>Real Estate investment</h4>
              <p>
                We offer personalized advice to help you invest with confidence
                and build a profitable real estate portfolio.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.sectionList_f} ${styles.sectionList}`}>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image
                src={"/icons/decor.png"}
                alt="building"
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
            <div className={styles.itemDetails}>
              <h4>Real Estate consultant</h4>
              <p>
                Trust our expertise in consulting to navigate the complexities
                of the real estate landscape and achieve success.
              </p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image
                src={"/icons/quality.png"}
                alt="building"
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
            <div className={styles.itemDetails}>
              <h4>BuildingConstruction</h4>
              <p>
                Experience the satisfaction of working with a reliable
                construction partner dedicated to bringing your building visions
                to life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.weAreSection} noneDesktop`}>
        <h2 className={styles.sectionTitle}>We Are GreenBuilders</h2>
        <div className={styles.sectionList}>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image
                src={"/icons/building.png"}
                alt="building"
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
            <div className={styles.itemDetails}>
              <h4>Property Development</h4>
              <p>
                Trust us to handle all aspects of your property development
                needs and turn your dreams into a stunning reality.
              </p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image
                src={"/icons/repair.png"}
                alt="building"
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
            <div className={styles.itemDetails}>
              <h4>Facility Management</h4>
              <p>
                With our expertise and attention to detail, we ensure your
                facility is well managed, and optimized for maximum
                productivity.
              </p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image
                src={"/icons/management.png"}
                alt="building"
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
            <div className={styles.itemDetails}>
              <h4>Real Estate investment</h4>
              <p>
                We offer personalized advice to help you invest with confidence
                and build a profitable real estate portfolio.
              </p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image
                src={"/icons/decor.png"}
                alt="building"
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
            <div className={styles.itemDetails}>
              <h4>Real Estate consultant</h4>
              <p>
                Trust our expertise in consulting to navigate the complexities
                of the real estate landscape and achieve success.
              </p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imageContainer}>
              <Image
                src={"/icons/quality.png"}
                alt="building"
                fill
                style={{ objectFit: "contain", objectPosition: "top" }}
              />
            </div>
            <div className={styles.itemDetails}>
              <h4>BuildingConstruction</h4>
              <p>
                Experience the satisfaction of working with a reliable
                construction partner dedicated to bringing your building visions
                to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutDetails}>
          <h6>ABOUT US</h6>
          <h2>
            Green Builders Limited is a leading and highly experienced
            construction company specializing in all aspects of residential,
            commercial, and industrial
          </h2>
          <p>
            We offer a wide range of construction services to suit your needs.
            Whether you are looking to build a new home, remodel your existing
            one, or construct a commercial building, we have the skills and
            expertise to handle any project, big or small.
          </p>
          <Link href={"/about"} className="cursor-pointer">
            <button>Learn more →</button>
          </Link>
        </div>
        <div className={styles.aboutImage}>
          <div className={styles.absoluteImageContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={`/images/Alice/Alice_1.png`}
                alt="About1"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.absoluteImageContainer2}>
            <div className={styles.imageContainer}>
              <Image
                src={"/images/Alice_3/4.jpeg"}
                alt="About1"
                fill
                style={{ objectFit: "cover" }}
              />
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

      {/* Spotlight section */}
      <section className={styles.spotlightSection}>
        <h4>SPOTLIGHT PROJECTS</h4>
        <h1>We Build Luxury</h1>
        <div className={styles.spotlightContainer}>
          <div className={styles.longImageContainer}>
            <Image
              src={`/images/Alice_3/3.jpeg`}
              alt="Spotlight"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={`/images/Alice_Court_2/3.jpeg`}
                alt="Spotlight"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={`/images/Alice_Court_2/8.jpeg`}
                alt="Spotlight"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={`/images/Alice_Court_2/10.jpeg`}
                alt="Spotlight"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <Link href={"/projects/alice-court-1"}>
                <div className={styles.spotOverlay}>
                  <p>LUXURY, CLASS & EXCELLENCE</p>
                  <h4>Alice Court 2</h4>
                  <div className={styles.overlayAction}>
                    <ArrowRightOutlined />
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={"/images/Alice_Court_2/10.jpeg"}
                alt="Spotlight"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.luxSection}>
        <LuxuryProjects />
      </section>
      {/* Testimonial section */}
      <section className={styles.testimonialSection}>
        <h4>TESTIMONIAL</h4>
        <h1>Our Clients Say</h1>
        <div className={styles.testimonials}>
          <div className={styles.testimonialImage}>
            <Image
              src={"/images/testimonial.png"}
              alt="Testimonial"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <Testimonial
            message={
              "My experience so far, doing business with GREENBUILDERS, has been fantastic! The quality of work, consistent communication, and on-time delivery of my project are exceptional. This will make me recommend Greenbuilder to anyone who needs a trustworthy construction partner."
            }
            userName={"Adedeji Agbelemoge"}
            position={"CEO Mike and Juli Flat Limited"}
          />

          <Testimonial
            message={
              "Greenbuilders restored my trust in the real estate. I recommend this wonderful company without any reservation. The weekly update I get on my transactions from them is fantastic, the quality of construction work when I visited Nigeria was also impressive. So far, I am happy with delivery of service from the Greenbuilders."
            }
            userName={"Tunmise Ayodele, PhD"}
          />

          <Testimonial
            message={
              "My experience with Greenbuilders so far has been very impressive. Their service is top-notch, with good time delivery, the use of quality building materials, and great building designs. I would love to work with them again and would recommend them to anyone."
            }
            userName={"Bernadine Ikemelu"}
          />
        </div>
      </section>

      <div className={styles.landingPageVideo}></div>

      <section className={styles.companies}>
        <h1>Over the Years, We have had some Successful Partnerships</h1>
        <h4>
          Our collaborative vision for building projects has paid off with a
          number of collaborations and partnerships
        </h4>
        <Carousels items={companies} />
      </section>

      <Footer />
    </>
  );
}
