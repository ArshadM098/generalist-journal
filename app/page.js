import Image from 'next/image'
import { Inter } from 'next/font/google'
import RoundedButton from "@/components/rounded-button"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="absolute flex flex-col gap-2  h-fit test w-full my-auto top-0 bottom-0 px-2 z-10">
      <div className=" uppercase test text-5xl first-letter:text-6xl text-center lg:px-16 lg:text-left lg:text-7xl lg:first-letter:text-8xl">Engineer's Journal</div>
      <div className="test text-md text-center px-2 lg:py-2 lg:text-left lg:text-1xl lg:px-20">A space to showcase and preserve my ideas and projects.</div>
      <div className="test px-16 self-center lg:self-auto"> <RoundedButton link='/gallery'>Explore...</RoundedButton></div>


    </div>
    
  )
}
