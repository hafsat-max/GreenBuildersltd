import React from 'react'
import styles from "@/styles/component.module.css"

function TextArea({placeholder}: {placeholder: string}) {
  return (
    <textarea className={styles.input} placeholder={placeholder}></textarea>
  )
}

export default TextArea
