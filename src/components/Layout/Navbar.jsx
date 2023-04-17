import React from 'react'
import style from "./Navbar-style.module.css"
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='container'>
        <ul className='ul-container'>
            <li><Link href={"#about"}>About</Link></li>
            <li><Link href={"#index"}>index</Link></li>
            <li><Link href={"#contact"}>contact</Link></li>
        </ul>
    </nav>
  )
}
