export default function NavBtns({children}){
    return (
        <p className="text-white px-5 py-2 text-2xl text-left justify-items-end test
       "><span className=" hover:underline transition-all
       hover:cursor-pointer select-none">{children}</span></p>
    )
}