"use client";
import "../project-styles.css"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer';
import ProjectHero from '@/components/ProjectHero';
import Image from "next/image";
import LuxuryProjects from "@/components/LuxuryProjects";
import Link from "next/link";
import MapContainer from "@/components/MapContainer";


export default function Alice_Court_1() {

  const imageNumber = [2, 3, 4, 5, 6, 7, 8, 9]
  const propDev = [
    {name: "Alice Court I", url: "/projects/alice-court-1", img: "/images/spotlight/lux1.png"},
    {name: "Alice Court II", url: "/projects/alice-court-2", img: "/images/spotlight/lux2.png"},
    {name: "Alice Court III", url: "/projects/alice-court-3", img: "/images/spotlight/lux3.png"},
  ]

  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <ProjectHero tag={"LUXURY, CLASS & EXCELLENCE"} name={"Alice Court I"} description={"Alice Court I is a luxury building project that offers a sophisticated living experience in a prime location. With exquisite design and state-of-the-art amenities, Alice Court I promises to provide residents with a comfortable and stylish lifestyle. The building boasts spacious and elegantly designed apartments, stunning views, and top-notch facilities ."} location={"Alice Court I, Gbagada Estate, Lagos."} />

      <div className="project-details">
        <div className="projectDetailsImage">
          <Image className="image" src={`/images/Alice/1.jpg`} alt="Alice Court 1" fill />
        </div>

        <div className="projectDetailsText">
          <h2>Alice Court I</h2>
          <p>
            Alice Court I is a luxury building project that offers a sophisticated living experience in a prime location. With exquisite design and state-of-the-art amenities, Alice Court I promises to provide residents with a comfortable and stylish lifestyle. The building boasts spacious and elegantly designed apartments, stunning views, and top-notch facilities.
            <br /><br />
            Whether you are looking for a peaceful retreat or a vibrant urban living experience, Alice Court I is the perfect choice for those seeking the very best in luxury living.
          </p>

          {/* <div className="projectInfo">
            <h3>Project Info</h3>
            <h5>Client: <span>John Doe</span></h5>
            <h5>Category: <span>Construction Business</span></h5>
            <h5>Completed on: <span>20 January 2022</span></h5>
          </div> */}
        </div>
      </div>
      <div className="moreInfo">
        <div className="info">
          <div className="infoIcon">
            <Image src={"/svgs/projects/dimension.svg"} alt="Dimension" fill style={{objectFit: "contain"}} />
          </div>
          <p>720 Square Feet</p>
        </div>
        <div className="info">
          <div className="infoIcon">
            <Image src={"/svgs/projects/bedroom.svg"} alt="Dimension" fill style={{objectFit: "contain"}} />
          </div>
          <p>1 unit of 4 Bedrooms fully detached house</p>
        </div>
        <div className="info">
          <div className="infoIcon">
            <Image src={"/svgs/projects/bedroom.svg"} alt="Dimension" fill style={{objectFit: "contain"}} />
          </div>
          <p>2 unit of 4 Bedrooms semi-detached house</p>
        </div>

      </div>

      <div className="gallery">
        <div className="images">
          {imageNumber.map((e, i) => {
            return(
              <div key={i} className="imageContainer">
                <Image src={`/images/Alice/${e}.jpg`} alt={`Alice court I`} fill style={{objectFit: "cover"}} />
              </div>

            )
          })}
        </div>
        <div className="map">
          <MapContainer src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.653578065015!2d3.3884818!3d6.565335500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ddc9b3a5481%3A0x335edecc3d1d81aa!2sALICE%20COURTS%201!5e0!3m2!1sen!2sng!4v1689375718287!5m2!1sen!2sng"} />
        </div>
      </div>
      <div className="projectController">
        <Link href={"/projects/alice-court-3"}>
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