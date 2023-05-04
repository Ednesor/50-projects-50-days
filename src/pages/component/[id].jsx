import React from 'react'
import { useRouter } from 'next/router';
import {
  EXPADING_CARDS,
  PROGRESS_STEPS,
  ROTATING_NAVIGATION,
  HIDDEN_SEARCH,
  BLURRY_LOADING,
  SCROLL_ANIMATION
} from "../../consts"
import style from "./id.module.css"
import Layout from '@/components/Layout/Layout';
import ExpandingCards from '@/components/expanding-cards/ExpandingCards';
import ProgressSteps from '@/components/progress-steps/ProgressSteps';
import RotatingNavigation from '@/components/rotating-navigation/RotatingNavigation';
import HiddenSearch from '@/components/hidden-search/HiddenSearch';
import BlurryLoading from '@/components/blurry-loading/BlurryLoading';
import ScrollAnimation from '@/components/scroll-animation/ScrollAnimation';

const idToString = (id = "") => {
  return id.charAt(0).toUpperCase() + id.replace("-", " ").slice(1) + " | 50 projects 50 days";
}

export default function Component() {
  const router = useRouter();
  const { id } = router.query;

  let component;
  let compTitle = idToString(id);

  switch (id) {
    case EXPADING_CARDS:
      component = <ExpandingCards />;
      break;
    case PROGRESS_STEPS:
      component = <ProgressSteps />;
      break;
    case ROTATING_NAVIGATION:
      component = <RotatingNavigation />;
      break;
    case HIDDEN_SEARCH:
      component = <HiddenSearch />;
      break;
    case BLURRY_LOADING:
      component = <BlurryLoading />;
      break;
    case SCROLL_ANIMATION:
      component = <ScrollAnimation />;
      break;

    default:
      component = (<div><h1>The component doesn't exists</h1></div>)
      break;
  }

  return (
    <Layout title={compTitle}>
      <div className={style.container}>
        {component}
      </div>
    </Layout>
  )
}
