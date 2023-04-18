import { Inter } from 'next/font/google'
import Layout from '@/components/Layout/Layout'
import ExpandingCards from '@/components/expanding-cards/ExpandingCards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <main>
        <ExpandingCards />
      </main>
    </Layout>
  )
}
