import React from 'react'
import style from "./Faq.module.css"
import FaqSection from './FaqSection'
import { questions } from './questions'

export default function Faq() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Frequently Asked Questions</h1>
            {
                questions.map((q, i) => {
                    return <FaqSection question={q.question} response={q.response} key={i} />
                })
            }
        </div>
    )
}
