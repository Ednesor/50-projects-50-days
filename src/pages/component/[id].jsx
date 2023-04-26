import React from 'react'
import { useRouter } from 'next/router';
import style from "./id.module.css"
import Layout from '@/components/Layout/Layout';
import ExpandingCards from '@/components/expanding-cards/ExpandingCards';
import ProgressSteps from '@/components/progress-steps/ProgressSteps';
import RotatingNavigation from '@/components/rotating-navigation/RotatingNavigation';

const idToString = (id = "") => {
  return id.charAt(0).toUpperCase() + id.replace("-", " ").slice(1) + " | 50 projects 50 days";
}

export default function Component() {
  const router = useRouter();
  const { id } = router.query;

  let component;
  let compTitle = idToString(id);

  switch (id) {
    case "expanding-cards":
      component = <ExpandingCards />;
      break;
    case "progress-steps":
      component = <ProgressSteps />;
      break;
    case "rotating-navigation":
      component = <RotatingNavigation />;
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
