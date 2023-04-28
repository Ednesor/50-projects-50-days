import React, { useEffect, useState } from 'react'
import style from "./BlurryLoading.module.css"

export default function BlurryLoading() {

    //? Loading is a countdown
    const [loading, setLoading] = useState(100);
    
    //! used only to set percent
    useEffect(() => {
        loading > 0 && setTimeout(() => setLoading(loading - 1), 30);
    }, [loading])
    //!


    return (
        <div className={style.container}>
            <div
                style={{
                    backdropFilter: `blur(${loading * 50 / 100}px)`,
                    boxShadow: `inset 0 0 2vw rgba(184, 184, 184, ${loading * 0.342 / 50})`
                }}
                className={style.blurry}
            >
                <p
                    className={style.percent}
                    style={{
                        color: `rgba(255, 255, 255, ${loading*1.0/100})`,
                    }}
                >
                    {`${100 - loading}%`}</p>
            </div>
        </div>
    )
}
