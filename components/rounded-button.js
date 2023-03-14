
export default function RoundedButton({children}){
    return(
        <div className="block rounded-full h-fit w-fit
         px-5 py-2 pb-3 m-5
         border-white border-solid border-2
          hover:bg-slate-900 transition-colors
          text-2xl
          ">{children}</div>
    )
}