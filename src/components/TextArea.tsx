import React from 'react'
import styles from "@/styles/component.module.css"

function TextArea({placeholder, name}: {placeholder: string, name: string}) {
  return (
    <textarea name={name} className={styles.input} placeholder={placeholder}></textarea>
  )
}

export default TextArea
