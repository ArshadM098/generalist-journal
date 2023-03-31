import Link from "next/link";

export function Work({children,company=null,start=null,end=null,link=null}){
    var hasCompany = company != null;
    var hasStart = start != null;
    var hasEnd = end != null;
    var hasLink = link != null;
    return (
        <div className="relative flex flex-col bg-zinc-900 p-5 rounded-md">
            <div className=" text-2xl font-bold test mr-64 first-letter:text-3xl uppercase">{children[0]}
            {
                hasLink && <Link href={hasLink ? link : "/resume"} className="ml-2 text-3xl text-slate-500 hover:text-orange-500 transition-all cursor-pointer">&#8690;</Link>
            }
            </div>
            {hasCompany && <div className="text-slate-500 mr-64 test uppercase">{company}</div>}
            {hasStart && <div className="absolute right-0 top-0 text-right m-5">
               <span>{start}</span>
                {hasEnd && <span> - {end}</span>}
            </div>}
            
            <ul className="pl-5 mt-5 font-light border-r-[1px] border-slate-700 text-xl mr-64 list-circle ">{children[1]}</ul>
        </div>
    )
}