import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children, title, description }) {
    return (
        <div>
            <Head>
                <title>{title ? title : "50-project-50-days"}</title>
                <meta name="description" content={description ? description : ""} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar></Navbar>

            <main>{children}</main>

            <footer>footer</footer>
        </div>
    )
}
