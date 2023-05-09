import React, { useEffect, useState } from 'react'
import style from "./SoundBoard.module.css"
import useSound from 'use-sound';
import tada from "./sounds/tada.mp3"
import wrong from "./sounds/wrong.mp3"
import applause from "./sounds/applause.mp3"
import boo from "./sounds/boo.mp3"
import gasp from "./sounds/gasp.mp3"
import victory from "./sounds/victory.mp3"


export default function SoundBoard() {
    
    const [Tada] = useSound(tada);
    const [Wrong] = useSound(wrong);
    const [Applause] = useSound(applause);
    const [Boo] = useSound(boo);
    const [Gasp] = useSound(gasp);
    const [Victory] = useSound(victory);

    return (
        <div className={style.container}>
            <button className={style.button} onClick={Tada}>Tada</button>
            <button className={style.button} onClick={Wrong}>Wrong</button>
            <button className={style.button} onClick={Applause}>Applause</button>
            <button className={style.button} onClick={Boo}>Boo</button>
            <button className={style.button} onClick={Gasp}>Gasp</button>
            <button className={style.button} onClick={Victory}>Victory</button>
        </div>
    )
}
