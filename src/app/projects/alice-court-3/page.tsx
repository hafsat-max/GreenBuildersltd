"use client";
import "../project-styles.css"
import NavBar from '@/components/NavBar'
import Link from "next/link";
import Footer from '@/components/Footer';
import ProjectHero from '@/components/ProjectHero';
import Image from "next/image";
import LuxuryProjects from "@/components/LuxuryProjects";
import MapContainer from "@/components/MapContainer";


export default function Alice_Court_3() {

  const imageNumber = [1, 2, 3, 4]

  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <ProjectHero tag={"LUXURY, CLASS & EXCELLENCE"} name={"Alice Court III"} description={""} location={"5, Ejikeme Nzeh St, Anthony, Lagos."} />

      <div className="project-details">
        <div className="projectDetailsImage">
          <Image className="image" src={"/images/Alice_3/1.jpeg"} alt="Alice Court 3" fill />
        </div>

        <div className="projectDetailsText">
          <h2>Alice Court III</h2>
          <p>
            Alice Court  III is a premium sophisticated 4 Bedroom Duplex on ground + 2 floors in Anthony Garden City, Anthony Village, Maryland Lagos. ALICE COURT III offers a private enclave of luxury contemporary residences, defining style of living, elegance and beauty. <br /><br /> To bring this exquisite property to life, Green Builders Limited appointed renowned architects to design this elegant piece of art with beautifully proportioned floor plans.  <br /><br />These masters of contemporary design have created an exquisite beauty for the residents. It was created for the elites who are dissatisfied with just the ordinary homes.This exclusive luxurious 2 Floor condominium with features to help you live a private indoor-outdoor lifestyle. <br /><br /> Unlike other projects, each unit comes with a wraparound terrace garden designed sustainability in mind - clean air, natural light and closeness to nature.
          </p>
          {/* 
          <div className="projectInfo">
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
            <Image src={"/svgs/projects/dimension.svg"} alt="Dimension" fill style={{ objectFit: "contain" }} />
          </div>
          <p>800 Square Feet</p>
        </div>
        <div className="info">
          <div className="infoIcon">
            <Image src={"/svgs/projects/bedroom.svg"} alt="Dimension" fill style={{ objectFit: "contain" }} />
          </div>
          <p>7 units of 3 Bedrooms</p>
        </div>
        <div className="info">
          <div className="infoIcon">
            <Image src={"/svgs/projects/bedroom.svg"} alt="Dimension" fill style={{ objectFit: "contain" }} />
          </div>
          <p>2 units of 4 Bedrooms Penthouse</p>
        </div>

      </div>

      <div className="gallery">
        <div className="images">
          {imageNumber.map((e, i) => {
            return (
              <div key={i} className="imageContainer">
                <Image src={`/images/Alice_3/${e}.jpeg`} alt={`Alice_${e}`} fill style={{ objectFit: "cover" }} />
              </div>

            )
          })}
        </div>
        <div className="map">
          <MapContainer src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.694092216981!2d3.3756147!3d6.560245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d15991fbf5f%3A0xab9be6e119a964e!2sALICE%20COURTS%203!5e0!3m2!1sen!2sng!4v1689376031572!5m2!1sen!2sng" />
        </div>
      </div>
      <div className="projectController">
        <Link href={"/projects/alice-court-2"}>
          <div className="ctrlGrp">
            <div className="icon">
              <Image src={"/svgs/prev.svg"} alt="Prev" fill className="imageContain" />
            </div>
            <p>Previous Project</p>
          </div>
        </Link>
        <Link href={"/projects/alice-court-4"}>
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