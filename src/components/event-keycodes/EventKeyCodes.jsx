import React, { useState } from 'react'
import style from "./EventKeyCodes.module.css"

export default function EventKeyCodes() {

    const [key, setKey] = useState([]);

    return (
        <>
            <div className={style.wrapper} onKeyDown={(e) => setKey([e.key, e.keyCode, e.code])} tabIndex="0"></div>
            {
                key.length !== 0 ?
                    <div className={style.container}>
                        <section className={style.section}>
                            <p className={style.name}>event.key</p>
                            <p className={style.value}>{key[0]}</p>
                        </section>
                        <section className={style.section}>
                            <p className={style.name}>event.keyCode</p>
                            <p className={style.value}>{key[1]}</p>
                        </section>
                        <section className={style.section}>
                            <p className={style.name}>event.code</p>
                            <p className={style.value}>{key[2]}</p>
                        </section>
                    </div>
                    :
                    <h3 className={style.msg}>Press any key to get the keyCode</h3>
            }
        </>
    )
}
