import React from 'react'
import Link from "next/link"
import "./button.css"

function Button({href, text}: {href: string, text: string}) {
  return (
    <Link href={href}>
        <button className='buttonComponent'>
            {text} →
        </button>
    </Link>
  )
}

export default Button
