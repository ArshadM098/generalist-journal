import Link from "next/link"
export default function NavBtns({children,link}){
    return (
        <p className="text-white px-5 py-2 text-3xl text-left justify-items-end test
       "><Link href={link}><span className=" hover:underline transition-all
       hover:cursor-pointer select-none">{children}</span></Link></p>
    )
}