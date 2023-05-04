import React, { useEffect, useState } from 'react'
import style from "./ScrollAnimation.module.css"
import AOS from "aos"
import "aos/dist/aos.css"

export default function ScrollAnimation() {

    useEffect(() => {
      AOS.init({
        disable: 'mobile',
        duration: 500,
        offset: 150
    })
    }, [])
    

  return (
    <div className={style.top}>
        <h1 className={style.title}>Scroll to see the animation</h1>
        <div className={style.animation} data-aos="fade-left"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-right"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-left"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-right"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-left"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-right"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-left"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-right"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-left"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-right"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-left"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-right"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-left"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-right"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-left"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-right"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-left"><h1>Content</h1></div>
        <div className={style.animation} data-aos="fade-right"><h1>Content</h1></div>
    </div>
  )
}
