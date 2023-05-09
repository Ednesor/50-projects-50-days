import React, { useState } from 'react'
import style from "./FaqSection.module.css"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineDown } from "react-icons/ai"

export default function FaqSection({ question, response }) {

    const [show, setShow] = useState(false)

    return (
        <section
            className={style.container}
            style={
                show ? { 
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)" 
                } : null
            }
        >
            <button onClick={() => setShow(!show)} className={style.button}>
                {
                    show ?
                        <AiOutlineClose
                            className={style.icon}
                            style={{
                                backgroundColor: "#808080",
                                color: "white"
                            }}
                        />
                        :
                        <AiOutlineDown className={style.icon} />
                }
            </button>
            <p className={style.question}>{question}</p>
            {show ?
                <p className={style.response}>{response}</p>
                :
                null}
        </section>
    )
}
