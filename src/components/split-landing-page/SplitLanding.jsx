import React, { useState } from 'react'
import style from "./SplitLanding.module.css"


export default function SplitLanding() {

    const [hover, setHover] = useState("none");

    return (
        <div className={style.container}>
            <div
                className={style.left}
                onMouseEnter={() => setHover("left")}
                onMouseLeave={() => setHover("none")}
                style={
                    hover === "left" ? { width: "80%" } :
                        hover === "right" ? { width: "20%" }
                            :
                            { width: "50%" }
                }
            >
                <div className={style.contLeft}>
                <h1 className={style.title}>Playstation 5</h1>
                <button className={style.buttonLeft}><h3>BUY NOW</h3></button>
                </div>
            </div>
            <div className={style.right}
                onMouseEnter={() => setHover("right")}
                onMouseLeave={() => setHover("none")}
                style={
                    hover === "right" ? { width: "80%" } :
                        hover === "left" ? { width: "20%" }
                            :
                            { width: "50%" }
                }
            >
                <div className={style.contRight}>
                    <h1 className={style.title}>XBox Series X</h1>
                    <button className={style.buttonRight}><h3>BUY NOW</h3></button>
                </div>
            </div>
        </div>
    )
}
