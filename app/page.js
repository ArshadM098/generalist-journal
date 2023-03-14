import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './sublayout'
import RoundedButton from "@/components/rounded-button"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Layout title="Generalist's Journal">
    <div>WORLD</div>
   <RoundedButton>Explore...</RoundedButton>
   </Layout>
  )
}
