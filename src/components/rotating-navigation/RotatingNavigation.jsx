import React, { useState } from 'react'
import style from "./RotatingNavigation.module.css"
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi"
import { GiCancel } from "react-icons/gi"
import { AiFillHome } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { GoMail } from "react-icons/go"

export default function RotatingNavigation() {

    const [menu, setMenu] = useState(false);


    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className={style.container}>
            <div className={style.menu} onClick={handleMenu} style={menu ? { transform: "rotate(-90deg)" } : null}>
                <GiHamburgerMenu className={style.iconMenu} />
                <GiCancel className={style.iconCancel} />
            </div>
            <ul className={style.navbar}>
                <li style={menu ? {marginLeft: "68%"} : null}>
                    <AiFillHome /><span>HOME</span>
                </li>
                <li style={menu ? {marginLeft: "70%"} : null}>
                    <BsFillPersonFill /> <span>ABOUT</span>
                </li>
                <li style={menu ? {marginLeft: "72%"} : null}>
                    <GoMail /> <span>CONTACT</span>
                </li>
            </ul>
            <div className={style.rotateDiv} style={menu ? { transform: "rotate(-20deg)" } : null}>
                <div className={style.subContainer}>
                    <h1>Amazing Article</h1>
                    <p className={style.subtitle}>Florin Pop</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>
                    <h3>My Dog</h3>
                    <Image className={style.image} src={"https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"} width={600} height={600}></Image>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
                </div>
            </div>
        </div>
    )
}
