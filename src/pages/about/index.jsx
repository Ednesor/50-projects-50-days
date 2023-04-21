import Layout from '@/components/Layout/Layout'
import React from 'react'
import style from "./about.module.css"
import Link from 'next/link'

export default function About() {
    return (
        <Layout
            title="About | 50 projects 50 days"
            description={"Description about the project"}
        >
            <div className={style.container}>
                <h1>50 projects 50 days</h1>
                <div className={style.aboutContainer}>
                    <h2 className={style.title}>About the challenge</h2>
                    <p>Welcome to my 50 projects in 50 days frontend challenge! Over the course of the next 50 days, I will be taking on the exciting challenge of building 50 unique projects from scratch. From simple apps and websites to complex interactive experiences, each project will be a new opportunity to hone my skills and experiment with cutting-edge tools and techniques.</p>
                    <p>Throughout this challenge, I will be documenting my progress and sharing my learnings with the wider developer community. Whether you're an experienced frontend developer or just starting out, I hope my journey inspires you to take on your own personal coding challenge and push your skills to the next level.</p>
                    <p>So join me on this exciting journey as I embark on my 50 projects in 50 days challenge!</p>

                    <div className={style.buttonContainer}>
                        <Link className={style.button} href={"/index"}>Go to Index</Link>
                        <Link className={style.button} href={"https://github.com/bradtraversy/50projects50days"} target='_blank'>Challenge's Github</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
