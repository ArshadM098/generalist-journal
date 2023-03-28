import Link from "next/link"
export default function RoundedButton({children, link="/"}){
    return(<>
        <Link href={link}>
        <div className=" block relative rounded-full h-fit w-fit z-auto
         px-5 py-2 pb-3 m-2
         border-white border-solid border-2
         bg-black
         hover:bg-gradient-to-br    hover:from-orange-500 hover:to-red-700 shadow-2xl transition-colors
        active:bg-orange-900
        hover:cursor-pointer select-none
        text-1xl
        backdrop-brightness-50
          "
          style={{boxshadow: `28px 28px 56px #e6733a, 
          -28px -28px 56px #ff8d46`}}
          >{children}</div></Link>
          </>
    )
}