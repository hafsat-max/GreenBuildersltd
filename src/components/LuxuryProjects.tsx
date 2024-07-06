import React from "react";
import styles from "@/styles/component.module.css";
import Image from "next/image";
import { PlusOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

function LuxuryProjects() {
  const propDev = [
    {
      name: "Alice Court I",
      url: "/projects/alice-court-1",
      img: "/images/Alice/1.jpg",
    },
    {
      name: "Alice Court II",
      url: "/projects/alice-court-2",
      img: "/images/Alice_Court_2/10.jpeg",
    },
    {
      name: "Alice Court III",
      url: "/projects/alice-court-3",
      img: "/images/Alice_3/1.jpeg",
    },
    {
      name: "Alice Springs",
      url: "/projects/alice-springs",
      img: "/alice-spring.jpeg",
    },
  ];
  return (
    <div className={styles.luxuryProjectsContainer}>
      {propDev.map((e, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image
              src={e.img}
              alt={e.name}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className={styles.spotOverlay}>
              <p>Luxury Apartment</p>
              <h4>{e.name}</h4>
              <Link href={e.url}>
                <div className={styles.overlayAction}>
                  <ArrowRightOutlined />
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LuxuryProjects;
