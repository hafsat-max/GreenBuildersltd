import React from 'react'
import styles from "@/styles/component.module.css"


function ContactCard({children} : {children: JSX.Element}) {
  return (
    <div className={styles.contactCardContainer}>
      {children}
    </div>
  )
}

export default ContactCard
