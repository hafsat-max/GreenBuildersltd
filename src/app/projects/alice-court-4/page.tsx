"use client";
import "../project-styles.css"
import NavBar from '@/components/NavBar'
import Link from "next/link";
import Footer from '@/components/Footer';
import ProjectHero from '@/components/ProjectHero';
import Image from "next/image";
import LuxuryProjects from "@/components/LuxuryProjects";


export default function Alice_Court_4() {

  const imageNumber = [1]
  const propDev = [
    {name: "Alice Court I", url: "/projects/alice-court-1", img: "/images/spotlight/lux1.png"},
    {name: "Alice Court II", url: "/projects/alice-court-2", img: "/images/spotlight/lux2.png"},
    {name: "Alice Court III", url: "/projects/alice-court-3", img: "/images/spotlight/lux3.png"},
    {name: "Alice Court IV", url: "/projects/alice-court-4", img: "/images/spotlight/lux3.png"},
  ]

  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <ProjectHero tag={"LUXURY, CLASS & EXCELLENCE"} name={"Alice Court IV"} description={"Alice Court  III is a property that contains 7 units apartments; 5 three bedroom apartments and 2 three bedroom apartments with boys' quarters. It is located in a gated  and secure estate in Gbagada. It consists of features including; central power system with 24 hours electricity, facility management and CCTV, proper waste management, and stationary security personnel."} location={"Josodat Estate, Gbagada, Lagos."} />

      <div className="project-details">
        <div className="projectDetailsImage">
          <Image className="image" src={"/images/Alice_4/1.png"} alt="Alice Court 2" fill />
        </div>

        <div className="projectDetailsText">
          <h2>Alice Court IV</h2>
          <p>
            Alice Court  IV is a property that contains 7 units apartments; 5 three bedroom apartments and 2 three bedroom apartments with boys&apos; quarters. It is located in a gated  and secure estate in Gbagada. It consists of features including; central power system with 24 hours electricity, facility management and CCTV, proper waste management, and stationary security personnel.
            <br /><br />
            Whether you are looking for a peaceful retreat or a vibrant urban living experience, Alice Court II is the perfect choice for those seeking the very best in luxury living.
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
        <div className="info">
          <div className="infoIcon">
            <Image src={"/svgs/projects/bedroom.svg"} alt="Dimension" fill style={{objectFit: "contain"}} />
          </div>
          <p>20 Bedrooms</p>
        </div>
        <div className="info">
          <div className="infoIcon">
            <Image src={"/svgs/projects/car.svg"} alt="Dimension" fill style={{objectFit: "contain"}} />
          </div>
          <p>1 Garage</p>
        </div>
        <div className="info">
          <div className="infoIcon">
            <Image src={"/svgs/projects/time.svg"} alt="Dimension" fill style={{objectFit: "contain"}} />
          </div>
          <p>24/7 Power Supply</p>
        </div>
        <div className="info">
          <div className="infoIcon">
            <Image src={"/svgs/projects/bathroom.svg"} alt="Dimension" fill style={{objectFit: "contain"}} />
          </div>
          <p>5 Bathrooms</p>
        </div>
      </div>

      <div className="gallery">
        <div className="images">
          {imageNumber.map((e, i) => {
            return(
              <div key={i} className="imageContainer">
                <Image src={`/images/Alice_4/${e}.png`} alt={`Alice_${e}`} fill style={{objectFit: "cover"}} />
              </div>

            )
          })}
        </div>
        <div className="map">
          <Image src={"/map.png"} alt={"Map"} fill className="image" />
        </div>
      </div>
      <div className="projectController">
        <Link href={"/projects/alice-court-1"}>
          <div className="ctrlGrp">
            <div className="icon">
              <Image src={"/svgs/prev.svg"} alt="Prev" fill className="imageContain" />
            </div>
            <p>Previous Project</p>
          </div>
        </Link>
        <Link href={"/projects/amazon-hotel"}>
          <div className="ctrlGrp">
            <div className="icon">
              <Image src={"/svgs/next.svg"} alt="Prev" fill className="imageContain" />
            </div>
            <p>Next Project</p>
          </div>
        </Link>
      </div>

      <div className="projects">
        <h1>Check Other Building Projects</h1>
        <LuxuryProjects />
      </div>


      <Footer />
    </>
  )
}