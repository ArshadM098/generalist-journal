import Link from "next/link";
export function Experience({children,company=null,start=null,end=null,link=null}){
    var hasCompany = company != null ;
    var hasStart = start != null;
    var hasEnd = end != null;
    var hasLink = link != null;
    var hasSkills = children[2] != undefined; 
    var skillTags = [];
    if (hasSkills){
        skillTags= children[2].props.children.split(',');
    }  
    return (
        <div className="relative mr-5 ">
        
        <div className="relative flex bg-zinc-900 p-5 rounded-md flex-row flex-wrap gap-2">
                <div className=" text-2xl font-bold test first-letter:text-3xl uppercase lg:mr-40 lg:mt-0 mt-10 w-full">{children[0]}
                {hasLink && <Link href={hasLink ? link : "/resume"}
                className="ml-2 text-3xl text-slate-500 hover:text-orange-500 transition-all cursor-pointer">&#8690;</Link>}
                </div>
                {hasCompany && <div className="text-slate-500 test uppercase">{company}</div>}
                <ul className=" test px-5 font-light border-r-[1px] border-slate-700 text-xl list-circle space-y-4 w-full">{children[1]}</ul>
                { hasSkills && <div id="skills" className=" w-full border-zinc-800 p-2 border-[1px] rounded-md flex flex-row flex-wrap gap-2">
                {skillTags.map((skillTag) => (
                        <SkillTags key={skillTag}>{skillTag}</SkillTags>
                    ))}
                </div>}

        </div>
        {hasStart && <div className=" absolute text-right top-2 -right-5 min-w-64 min-w-fit bg-orange-700 px-3 py-1 shadow-sm shadow-black">
               <span>{start}{hasEnd && ` - ${end}`}</span>
            </div>}
        </div>
    )
}


export function SkillTags({ children }) {
    return (
      <div className=" inline text-sm relative w-fit border-[1px] rounded-full px-4 pt-[1px] uppercase pb-[3px]  text-orange-400  border-orange-400 border-solid">
       {children}
      </div>
    );
  }