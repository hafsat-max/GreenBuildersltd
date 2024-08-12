// "use client";
// import "../project-styles.css";
// import NavBar from "@/components/NavBar";
// import Link from "next/link";
// import Footer from "@/components/Footer";
// import ProjectHero from "@/components/ProjectHero";
// import Image from "next/image";
// import LuxuryProjects from "@/components/LuxuryProjects";
// import MapContainer from "@/components/MapContainer";
// import { FaSwimmingPool } from "react-icons/fa";
// import { MdLocalLaundryService } from "react-icons/md";
// import { IoLibrarySharp } from "react-icons/io5";

// export default function AliceSprings() {
//   const imageNumber = [
//     "/alicespring-flyer.jpg",
//     "/alice-spring5.jpg",
//     "/alice-spring4.jpg",
//     "/alice-spring.jpg",
//     "/alice-spring1.jpg",
//     "/alice-spring6.jpeg",
//     "/alice-spring3.jpg",
//   ];

//   return (
//     <>
//       <NavBar />
//       {/* Hero Section */}
//       <ProjectHero
//         tag={"LUXURY, CLASS & EXCELLENCE"}
//         name={"Alice Springs"}
//         // description={"Alice springs is a property that contains"}
//         location={"Ikeja, Lagos"}
//         img="/alicespring-flyer.jpg"
//       />

//       <div className="project-details">
//         <div className="projectDetailsImage">
//           <Image
//             className="image"
//             src={"/alicespring-flyer.jpg"}
//             alt="Alice spring"
//             fill
//           />
//         </div>

//         <div className="projectDetailsText">
//           <h2>Alice Springs</h2>
//           <p>
//             This is a sophisticated project that will be built to match elegance
//             and exquisiteness. It consist of 8 units of 4 Bedrooms + a boy&aposs
//             quarters and 5 units of 5 bedrooms each, a swimming pool,gym house,
//             dedicated laundry room, study room, a box room, amongst other
//             features.
//           </p>
//           {/* <div className="projectInfo">
//             <h3>Project Info</h3>
//             <h5>
//               Client: <span>John Doe</span>
//             </h5>
//             <h5>
//               Category: <span>Construction Business</span>
//             </h5>
//             <h5>
//               Completed on: <span>20 January 2022</span>
//             </h5>
//           </div> */}
//         </div>
//       </div>
//       <div className="moreInfo">
//         <div className="info">
//           <div className="infoIcon">
//             <Image
//               src={"/svgs/projects/dimension.svg"}
//               alt="Dimension"
//               fill
//               style={{ objectFit: "contain" }}
//             />
//           </div>
//           <p>250 meters</p>
//         </div>
//         <div className="info">
//           <div className="infoIcon">
//             <Image
//               src={"/svgs/projects/bedroom.svg"}
//               alt="Dimension"
//               fill
//               style={{ objectFit: "contain" }}
//             />
//           </div>
//           <p>4 unit of 4 Bedrooms with BQ and 4 units of 5 Bedrooms with BQ</p>
//         </div>
//         <div className="info">
//           {/* <div className="infoIcon">
//             <Image
//               src={"/svgs/projects/car.svg"}
//               alt="Dimension"
//               fill
//               style={{ objectFit: "contain" }}
//             />
//           </div> */}
//           <FaSwimmingPool color="#bea23c" size={30} />
//           <p>Swimming pool</p>
//         </div>
//         <div className="info">
//           {/* <div className="infoIcon">
//             <Image
//               src={"/svgs/projects/time.svg"}
//               alt="Dimension"
//               fill
//               style={{ objectFit: "contain" }}
//             />
//           </div> */}
//           <MdLocalLaundryService color="#bea23c" size={25} />
//           <p>Laundry room</p>
//         </div>
//         <div className="info">
//           <IoLibrarySharp color="#bea23c" size={25} />
//           <p>Study room</p>
//         </div>
//       </div>
//       {/* measured in sqm 1500sqm */}

//       <div className="gallery">
//         <div className="images">
//           {imageNumber.map((e, i) => {
//             return (
//               <div key={i} className="imageContainer">
//                 <Image
//                   src={e}
//                   alt={`Alice Springs`}
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         <div className="map">
//           <MapContainer
//             src={
//               "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.352875235292!2d3.344284775030683!3d6.60299592223436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e0e421fc39%3A0x7899836724bf8ba2!2sOpebi%20awuse%20estate!5e0!3m2!1sen!2sng!4v1722246654406!5m2!1sen!2sng"
//             }
//           />
//         </div>
//       </div>
//       <div className="projectController">
//         <Link href={"/projects/alice-court-1"}>
//           <div className="ctrlGrp">
//             <div className="icon">
//               <Image
//                 src={"/svgs/prev.svg"}
//                 alt="Prev"
//                 fill
//                 className="imageContain"
//               />
//             </div>
//             <p>Previous Project</p>
//           </div>
//         </Link>
//         <Link href={"/projects/alice-court-3"}>
//           <div className="ctrlGrp">
//             <div className="icon">
//               <Image
//                 src={"/svgs/next.svg"}
//                 alt="Prev"
//                 fill
//                 className="imageContain"
//               />
//             </div>
//             <p>Next Project</p>
//           </div>
//         </Link>
//       </div>

//       <div className="projects">
//         <h1>Check Other Building Projects</h1>
//         <LuxuryProjects />
//       </div>

//       <Footer />
//     </>
//   );
// }

import React from "react";

function Page() {
  return <div></div>;
}

export default Page;
