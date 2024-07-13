"use client";
import "../project-styles.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";
import Image from "next/image";
import LuxuryProjects from "@/components/LuxuryProjects";
import MapContainer from "@/components/MapContainer";

export default function AliceSprings() {
  const imageNumber = [2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <ProjectHero
        tag={"LUXURY, CLASS & EXCELLENCE"}
        name={"Alice Springs"}
        // description={"Alice springs is a property that contains"}
        location={"Ikeja, Lagos"}
        img="/alice-spring.jpeg"
      />

      <div className="project-details">
        <div className="projectDetailsImage">
          <Image
            className="image"
            src={"/alice-spring.jpeg"}
            alt="Alice spring"
            fill
          />
        </div>

        <div className="projectDetailsText">
          <h2>Alice Springs</h2>
          <p>
            This is a sophisticated project that will be built to match elegance
            and exquisiteness. It consist of 40 units of 4 Bedrooms + a
            boy&aposs quarters each, a swimming pool,gym house, dedicated
            laundry room, study room, a box room, amongst other features.
          </p>
          {/* <div className="projectInfo">
            <h3>Project Info</h3>
            <h5>
              Client: <span>John Doe</span>
            </h5>
            <h5>
              Category: <span>Construction Business</span>
            </h5>
            <h5>
              Completed on: <span>20 January 2022</span>
            </h5>
          </div> */}
        </div>
      </div>
      <div className="moreInfo">
        <div className="info">
          <div className="infoIcon">
            <Image
              src={"/svgs/projects/dimension.svg"}
              alt="Dimension"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* <p>750 Square Feet</p> */}
        </div>
        {/* <div className="info">
          <div className="infoIcon">
            <Image
              src={"/svgs/projects/bedroom.svg"}
              alt="Dimension"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p>4 unit of 4 Bedrooms with BQ</p>
        </div> */}
        {/* <div className="info">
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
        </div> */}
      </div>

      {/* <div className="gallery">
        <div className="images">
          {imageNumber.map((e, i) => {
            return (
              <div key={i} className="imageContainer">
                <Image
                  src={`/images/Alice_Court_2/${e}.jpeg`}
                  alt={`Alice_${e}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            );
          })}
        </div>
        <div className="map">
          <MapContainer
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.665618981596!2d3.386379099999999!3d6.563822999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d56d97d87e7%3A0x2ea347f46d41d42!2sALICE%20COURTS%202!5e0!3m2!1sen!2sng!4v1689375912621!5m2!1sen!2sng"
            }
          />
        </div>
      </div>
      <div className="projectController">
        <Link href={"/projects/alice-court-1"}>
          <div className="ctrlGrp">
            <div className="icon">
              <Image
                src={"/svgs/prev.svg"}
                alt="Prev"
                fill
                className="imageContain"
              />
            </div>
            <p>Previous Project</p>
          </div>
        </Link>
        <Link href={"/projects/alice-court-3"}>
          <div className="ctrlGrp">
            <div className="icon">
              <Image
                src={"/svgs/next.svg"}
                alt="Prev"
                fill
                className="imageContain"
              />
            </div>
            <p>Next Project</p>
          </div>
        </Link>
      </div>

      <div className="projects">
        <h1>Check Other Building Projects</h1>
        <LuxuryProjects />
      </div> */}

      <Footer />
    </>
  );
}
