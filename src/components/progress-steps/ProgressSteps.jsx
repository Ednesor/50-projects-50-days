import React, { useState } from 'react'
import style from "./ProgressSteps.module.css"

const disabledButton = {
    backgroundColor: "#E0E0E0",
    cursor: "no-drop",
}

export default function ProgressSteps() {

    const [step, setStep] = useState(0);
    const maxStep = 3;

    const handlePrev = () => {
        if (step > 0) setStep(step - 1);
    }
    const handleNext = () => {
        if (step < maxStep) setStep(step + 1);
    }

    return (
        <div className={style.container}>
                <hr className={style.line} />
                <hr className={style.progress} style={{width: `${step*75/3}%`}} />
            <div className={style.steps}>
                <div className={style.stepActive} style={{border: "3px solid rgb(26, 171, 255)"}}>1</div>
                <div style={step >= 1 ? {border: "3px solid rgb(26, 171, 255)"} : null}>2</div>
                <div style={step >= 2 ? {border: "3px solid rgb(26, 171, 255)"} : null}>3</div>
                <div style={step >= maxStep ? {border: "3px solid rgb(26, 171, 255)"} : null}>4</div>
            </div>
            <div className={style.buttons}>
                <button style={step <= 0 ? disabledButton : null} onClick={handlePrev}>Prev</button>
                <button style={step >= maxStep ? disabledButton : null} onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}
