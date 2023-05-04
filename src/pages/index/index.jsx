import Layout from '@/components/Layout/Layout'
import React from 'react'
import style from "./index.module.css"
import IndexCards from '@/components/IndexCards/IndexCards'
import {
  EXPADING_CARDS,
  PROGRESS_STEPS,
  ROTATING_NAVIGATION,
  HIDDEN_SEARCH,
  BLURRY_LOADING,
  SCROLL_ANIMATION,
  SPLIT_LANDING
} from "../../consts"

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
          url={EXPADING_CARDS}
        />
        <IndexCards className={style.cards}
          device={"desktop"}
          date={["25", "april"]}
          title={"Progress Steps"}
          description={"This component allows to move in a menu through steps"}
          url={PROGRESS_STEPS}
        />
        <IndexCards className={style.cards}
          device={"desktop"}
          date={["26", "april"]}
          title={"Rotating Navigation Animation"}
          description={"A very nice and striking navbar"}
          url={ROTATING_NAVIGATION}
        />
        <IndexCards className={style.cards}
          device={"both"}
          date={["27", "april"]}
          title={"Hidden search"}
          description={"A search bar that expands and collapses"}
          url={HIDDEN_SEARCH}
        />
        <IndexCards className={style.cards}
          device={"both"}
          date={["28", "april"]}
          title={"Blurry Loading"}
          description={"A page load component that turns its content from blurry to sharp depending on the load percentage"}
          url={BLURRY_LOADING}
        />
        <IndexCards className={style.cards}
          device={"both"}
          date={["01", "may"]}
          title={"Scroll animation"}
          description={"Cards that are displayed according to the scroll"}
          url={SCROLL_ANIMATION}
        />
        <IndexCards className={style.cards}
          device={"desktop"}
          date={["02", "may"]}
          title={"Split landing page"}
          description={"A landing page with a nice animation for two images"}
          url={SPLIT_LANDING}
        />
      </div>
    </Layout>
  )
}
