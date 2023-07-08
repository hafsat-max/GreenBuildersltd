import React from 'react'
import styles from "@/styles/component.module.css"

function Carousel({items} : {items: React.ReactNode[]}) {
  return (
    <div className={styles.carouselContainer}>
        {items.map((item, index) => <div key={index} className={styles.carouselItem}>{item}</div>)}
    </div>
  )
}

export default Carousel
