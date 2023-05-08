import React, { useState } from 'react'
import style from "./FormWave.module.css"

const styleForm = {
        color: "black",
        transform: "translateY(-25px)"
}

export default function FormWave() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePass = (e) => {
        setPassword(e.target.value)
    }

    return (
        <form action='' className={style.container}>
            <h1 className={style.title}>Please Login</h1>
            <div className={style.formControl}>
                <input onChange={handleChangeEmail} value={email} className={style.input} type="text" name="email" id="email" required={true} />
                <label htmlFor="email" className={style.label}>
                    <span style={{transitionDelay: "0ms"}}>E</span>
                    <span style={{transitionDelay: "50ms"}}>m</span>
                    <span style={{transitionDelay: "100ms"}}>a</span>
                    <span style={{transitionDelay: "150ms"}}>i</span>
                    <span style={{transitionDelay: "200ms"}}>l</span>
                </label>
            </div>
            <div className={style.formControl}>
                <input onChange={handleChangePass} value={password} className={style.input} type="password" name="password" id="password" required={true} />
                <label htmlFor="password" className={style.label}>
                    <span style={{transitionDelay: "0ms"}}>P</span>
                    <span style={{transitionDelay: "50ms"}}>a</span>
                    <span style={{transitionDelay: "100ms"}}>s</span>
                    <span style={{transitionDelay: "150ms"}}>s</span>
                    <span style={{transitionDelay: "200ms"}}>w</span>
                    <span style={{transitionDelay: "250ms"}}>o</span>
                    <span style={{transitionDelay: "300ms"}}>r</span>
                    <span style={{transitionDelay: "350ms"}}>d</span>
                </label>
            </div>
            <button type="submit" className={style.button}>Login</button>
            <p className={style.text}>Don't have an account? <span><a className={style.link} href="#">Register</a></span></p>
        </form>
    )
}
