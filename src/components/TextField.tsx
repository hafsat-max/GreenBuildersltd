import React from 'react'
import styles from "@/styles/component.module.css"

function TextField({placeholder, text}: {placeholder: string, text: string}) {
  return (
    <input className={styles.input} placeholder={placeholder} type={text} />
  )
}

export default TextField
