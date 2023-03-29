export default function Layout({children}){
    return (<div className="test flex flex-col justify-start max-w-[1200px] m-auto pl-5 p-2 gap-y-10 overflow-hidden">
        {children}
    </div>)
}