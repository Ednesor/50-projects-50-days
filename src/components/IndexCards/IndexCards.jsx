import React from 'react'
import style from "./IndexCards.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

//{ device: both-desktop-mobile, date: [1, may], title: string, description: string, url: url-route }
export default function IndexCards({ device, date, title, description, url }) {
    return (
        <Link className={style.container} href={`component/${url}`}>
            <div className={style.bodyContainer}>
                <div className={style.dateContainer}>
                    <div className={style.dateCont}>
                        <p className={style.date}>{date[0]}</p>
                        <p className={style.month}>{date[1].toUpperCase()}</p>
                    </div>
                </div>
                <div className={style.data}>
                    <h2 className={style.title}>{title}</h2>
                    <p className={style.description}>{description}</p>
                </div>
            </div>
            <div className={style.logoContainer}>
                {
                    device === "both" ?
                        <>
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                            <FontAwesomeIcon icon={faDesktop} />
                        </>
                        :
                        device === "desktop" ?
                            <FontAwesomeIcon icon={faDesktop} />
                            :
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                }
            </div>
        </Link>
    )
}
