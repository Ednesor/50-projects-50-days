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
          device={"desktop"}
          date={["24", "april"]}
          title={"Expanding Cards"}
          description={"This component allows you to preview several images by expanding the ones you want to see"}
          url={"expanding-cards"}
        />
        <IndexCards className={style.cards}
          device={"desktop"}
          date={["25", "april"]}
          title={"Progress Steps"}
          description={"This component allows to move in a menu through steps"}
          url={"progress-steps"}
        />
      </div>
    </Layout>
  )
}
