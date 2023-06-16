"use client";
import "../project-styles.css"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer';
import ProjectHero from '@/components/ProjectHero';
import Image from "next/image";
import LuxuryProjects from "@/components/LuxuryProjects";
import Link from "next/link";


export default function Alice_Court_1() {

  const imageNumber = [2, 3, 4, 5, 6, 7, 8, 9]

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
                <Image src={`/images/Alice/Alice_${e}.png`} alt={`Alice_${e}`} fill style={{objectFit: "cover"}} />
              </div>

            )
          })}
        </div>
        <div className="map">
          <Image src={"/map.png"} alt={"Map"} fill className="image" />
        </div>
      </div>
      <div className="projectController">
        <Link href={"/projects/swimming-pool"}>
          <div className="ctrlGrp">
            <div className="icon">
              <Image src={"/svgs/prev.svg"} alt="Prev" fill className="imageContain" />
            </div>
            <p>Previous Project</p>
          </div>
        </Link>
        <Link href={"/projects/alice-court-2"}>
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