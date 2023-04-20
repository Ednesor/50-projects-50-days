import React from 'react'
import { useRouter } from 'next/router';
import ExpandingCards from '@/components/expanding-cards/ExpandingCards';
import Layout from '@/components/Layout/Layout';

const idToString = (id) => {
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
  
    default:
      component = (<div><h1>The component doesn't exists</h1></div>)
      break;
  }

  return (
    <Layout title={compTitle}>
        {component}
    </Layout>
  )
}
