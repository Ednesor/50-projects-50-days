import { Inter } from 'next/font/google'
import style from "../styles/index.module.css"
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.flashlight}></div>
      </div>
      <h1 className={style.title}>Welcome to my <span className={style.subtitle}>personal challenge</span></h1>
      <Link className={style.button} href={"/index"}>Get started</Link>
    </Layout>
  )
}
