import React from 'react'
import styles from "@/styles/component.module.css"
import Image from 'next/image'
import {PlusOutlined, ArrowRightOutlined} from "@ant-design/icons"
import Link from 'next/link'

function LuxuryProjects({projects}: {projects: {name: string, url: string, img: string}[]}) {
  return (
    <div className={styles.luxuryProjectsContainer}>
        {projects.map((e, i)=>{
            return(
                <div key={i} className={styles.imageContainer}> 
                    <Image src={e.img} alt='Spotlight' fill style={{objectFit: "cover", objectPosition: "center"}} />
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
            )
        })}

    </div>
  )
}

export default LuxuryProjects
