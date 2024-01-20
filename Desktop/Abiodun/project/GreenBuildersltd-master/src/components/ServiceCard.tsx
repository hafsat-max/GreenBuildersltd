import React from 'react'
import styles from "@/styles/component.module.css"

function ServiceCard({service, active, onClick}: {service: string, active?: boolean, onClick: ()=>void}) {
  return (
    <div onClick={onClick} className={active ? `${styles.cardContainer} ${styles.activeCardContainer}` : `${styles.cardContainer}`}>
      <p>Explore Service</p>
      <h3>{service}</h3>
      <div className={styles.cardAction}>
        <h5>Read <span>→</span></h5>
      </div>
      <div className={styles.dash}></div>
    </div>
  )
}

export default ServiceCard
