
export default function RoundedButton({children}){
    return(
        <div className="block rounded-full h-fit w-fit z-auto
         px-5 py-2 pb-3 m-5
         border-white border-solid border-2
          hover:bg-red-900 transition-colors
          hover:cursor-pointer select-none
          text-1xl
          ">{children}</div>
    )
}