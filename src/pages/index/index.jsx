import Layout from '@/components/Layout/Layout'
import React from 'react'
import style from "./index.module.css"
import IndexCards from '@/components/IndexCards/IndexCards'

export default function Index() {
  return (
    <Layout title={"Index | 50 projects 50 days"}>
      <h1 className={style.mainTitle}>All projects</h1>
      <div className={style.container}>
        <IndexCards className={style.cards}
          device={"both"}
          date={["01", "may"]}
          title={"Proyecto 1"}
          description={"Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD. amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD.amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD, Este proyecto fue realizado con mucho amor XD."}
          url={"proyecto-formato-url"}
        />
        <IndexCards
          device={"both"}
          date={["01", "may"]}
          title={"Proyecto 1"}
          description={"Este proyecto fue realizado con mucho amor XD"}
          url={"proyecto-formato-url"}
        />
      </div>
    </Layout>
  )
}
