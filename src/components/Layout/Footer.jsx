import React from 'react'
import style from "./Footer-style.module.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className={style.container}>
            <ul className={style.list}>
                <li className={style.item}>
                    <Link className={style.link} href="https://github.com/Ednesor" passHref={true} target='_blank'>
                        <FontAwesomeIcon className={style.icon} icon={faGithub} />
                        <span className={style.name}>Github</span>
                    </Link>
                </li>
                <li className={style.item}>
                    <Link className={style.link} href="https://github.com/Ednesor" passHref={true} target='_blank'>
                        <FontAwesomeIcon className={style.icon} icon={faGithub} />
                        <span className={style.name}>Portfolio</span>
                    </Link>
                </li>
                <li className={style.item}>
                    <Link className={style.link} href="https://github.com/Ednesor" passHref={true} target='_blank'>
                        <FontAwesomeIcon className={style.icon} icon={faGithub} />
                        <span className={style.name}>LinkeIn</span>
                    </Link>
                </li>
            </ul>
            <p className={style.copyright}>Copyright Ednesor 2023</p>
        </footer>
    )
}
