"use client";
import "../project-styles.css"
import NavBar from '@/components/NavBar'
import {
  RightOutlined,
  EnvironmentOutlined,
  CaretRightFilled,
  PlusOutlined
} from "@ant-design/icons"
import Footer from '@/components/Footer';
import ProjectHero from '@/components/ProjectHero';
import Image from "next/image";


export default function Home() {

  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <ProjectHero tag={"LUXURY, CLASS & EXCELLENCE"} name={"Alice Court I"} description={"Alice Court I is a luxury building project that offers a sophisticated living experience in a prime location. With exquisite design and state-of-the-art amenities, Alice Court I promises to provide residents with a comfortable and stylish lifestyle. The building boasts spacious and elegantly designed apartments, stunning views, and top-notch facilities ."} location={"Alice Court I, Gbagada Estate, Lagos."} />

      <div className="project-details">
        <div className="projectDetailsImage">
          <Image className="image" src={"/images/Alice/alice_main.png"} alt="Alice Court 1" fill />
        </div>

        <div className="projectDetailsText">
          <h2>Alice Court I</h2>
          <p>
            Alice Court I is a luxury building project that offers a sophisticated living experience in a prime location. With exquisite design and state-of-the-art amenities, Alice Court I promises to provide residents with a comfortable and stylish lifestyle. The building boasts spacious and elegantly designed apartments, stunning views, and top-notch facilities.
            <br /><br />
            Whether you are looking for a peaceful retreat or a vibrant urban living experience, Alice Court I is the perfect choice for those seeking the very best in luxury living.
          </p>

          <div className="projectInfo">
            <h3>Project Info</h3>
            <h5>Client: <span>John Doe</span></h5>
            <h5>Category: <span>Construction Business</span></h5>
            <h5>Completed on: <span>20 January 2022</span></h5>
          </div>
        </div>
      </div>
      <div className="moreInfo">
        <div className="info">
          <div className="infoIcon">
            <Image src={"/svgs/projects/dimension.svg"} alt="Dimension" fill style={{objectFit: "contain"}} />
          </div>
          <p>2300 Square Feet</p>
        </div>
      </div>

      <Footer />
    </>
  )
}