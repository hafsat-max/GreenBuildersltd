import React from 'react'
import styles from "@/styles/component.module.css"
import Image from 'next/image'

function Testimonial() {
  return (
    <div className={styles.testimonialContainer}>
        <div className={styles.quote}>
            <div className={styles.quoteContainer}>
                <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/>
                </svg>
            </div>
        </div>
      <p>The quality of their work is simply exceptional. I was blown away by the level of craftsmanship and attention to detail that went into every aspect of the renovation. They truly exceeded my expectations in every way.</p>
      <div className={styles.user}>
        <h4>Katy Grey</h4>
        <h6>CEO Grey Industries</h6>
      </div>
      <div className={styles.slider}>
        <div className={styles.dot}></div>
        <div className={`${styles.dot} ${styles.active}`}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  )
}

export default Testimonial
