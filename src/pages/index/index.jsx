import Layout from '@/components/Layout/Layout'
import React from 'react'
import style from "./index.module.css"
import IndexCards from '@/components/IndexCards/IndexCards'
import { components } from "../../consts"

export default function Index() {
  return (
    <Layout title={"Index | 50 projects 50 days"}>
      <h1 className={style.mainTitle}>All projects</h1>
      <div className={style.container}>
        {components.map((_, i) => (
          <IndexCards key={i}
            className={style.cards}
            device={components[i].device}
            date={components[i].date}
            title={components[i].title}
            description={components[i].description}
            url={components[i].url}
          />
        ))}
      </div>
    </Layout>
  )
}
