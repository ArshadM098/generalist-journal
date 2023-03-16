import Image from 'next/image'
import { Inter } from 'next/font/google'
import SubLayout from './sublayout'
import RoundedButton from "@/components/rounded-button"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <SubLayout>
      <div className="test text-5xl text-center lg:px-16 lg:text-left lg:text-7xl"><span className='text-7xl lg:text-8xl'>G</span><span className='uppercase'>eneralist's Journal</span></div>
      <div className="test text-md text-center px-2 lg:py-2 lg:text-left lg:text-1xl lg:px-20">A space to showcase and preserve my ideas and projects.</div>
      <div className="test px-16 self-center lg:self-auto"> <RoundedButton>Explore...</RoundedButton></div>
   </SubLayout>
  )
}
