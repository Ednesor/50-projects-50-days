import React, { useState } from 'react'
import style from "./HiddenSearch.module.css"
import { AiOutlineSearch } from "react-icons/ai"

export default function HiddenSearch() {

    const [ search, setSearch ] = useState(false);

  return (
    <div className={style.container}>
        <input style={!search ? {width: "0px", padding: "0 0 0 0"} : null} className={style.search} type="text" name="search" id="search" placeholder='Search...' />
        <button className={style.button} onClick={() => setSearch(!search)}><AiOutlineSearch className={style.icon} /></button>
    </div>
  )
}
