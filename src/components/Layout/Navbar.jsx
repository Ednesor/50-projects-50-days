import React from 'react'
import style from "./Navbar-style.module.css"
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={style.container}>
      <Link href={"/"}>
        <span className={style.name}>
          <span>
            &lt;
          </span>
          Edgardo Funes
          <span>
            /&gt;
          </span>
        </span>
      </Link>
      <ul className={style.ul_container}>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/index"}>Index</Link></li>
        <li><Link href={"/contact"}>Contact</Link></li>
      </ul>
    </nav>
  )
}
