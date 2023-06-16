import React from 'react'
import styles from "@/styles/component.module.css"

function TextField({placeholder, text, name}: {placeholder: string, text: string, name: string}) {
  return (
    <input name={name} className={styles.input} placeholder={placeholder} type={text} />
  )
}

export default TextField
