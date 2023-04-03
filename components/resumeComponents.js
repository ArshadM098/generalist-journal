'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
                {hasCompany && <div className="text-orange-400 test uppercase">{company}</div>}
                <ul className=" px-5 font-light  text-xl list-circle space-y-4 w-full">{children[1]}</ul>
                { hasSkills && <div id="skills" className=" w-full  p-2 flex flex-row flex-wrap gap-2">
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
      <div className=" select-none  inline text-sm relative w-fit border-[1px] rounded-full px-4 pt-[1px] uppercase pb-[3px]  text-orange-400  border-orange-400 border-solid">
       {children}
      </div>
    );
  }

  export function Education({children,hasGraduated = "false", GraduationDate = ""}){
    const [isCollapsed, setIsCollapsed] = useState(true);
    var skillTags = "";
    var hasSkills = children[2] != undefined;
    console.log(JSON.stringify(children[2]));
    if(hasSkills){
        skillTags= JSON.stringify(children[2]).split(',');
        // skillTags= JSON.parse(children[2]);
    }
  
    return(
        <div className="relative flex flex-col bg-zinc-900 mr-5 rounded-md p-5">
            <div className=" absolute text-right top-2 -right-5 min-w-64 min-w-fit bg-orange-700 px-3 py-1 shadow-sm shadow-black">{hasGraduated ? "Graduated on " : "Expected Graduation: "}{GraduationDate}</div>
            <div id="degree" className="text-3xl font-bold first-letter:text-5xl uppercase">{children[0]}</div>
            <div id="institute" className=" first-letter:text-2xl font-light text-orange-400 uppercase">{children[1]}
            </div>
            
            { hasSkills && <div id="skills" className=" w-full flex flex-row flex-wrap gap-2 text-xl">
                <span onClick={()=>{ setIsCollapsed(!isCollapsed)}} className="hover:text-orange-400">Techinical Courses:</span>
                <div className={`${isCollapsed ? "h-0 pt-0 opacity-0" : "h-fit"}`}>
                {skillTags.map((skillTag) => (
                        <SkillTags key={skillTag}>{skillTag}</SkillTags>
                    ))}</div>
                </div>}
        </div>
    );
  }