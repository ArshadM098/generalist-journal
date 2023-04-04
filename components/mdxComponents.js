'use client';
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";

const bodyText = "font-light text-2xl";

export function Text1({children}){
    return(
        <div className={`test p-2 px-5  leading-8 ${bodyText}`} >{children}</div>
    )
}
export function TitleL({children}){
  return(
    <div className="test text-7xl font-bold first-letter:text-8xl uppercase">{children}</div>
)
}

export function TitleM({children}){
    return(
        <div className="test text-5xl first-letter:text-6xl uppercase">{children}</div>
    )
    }

export function TitleS({children}){
    return(
        <div className="test text-3xl first-letter:text-4xl text-zinc-400 uppercase">{children}</div>
        )
        }

export function Image1({src}){
    return(
        <Image src={src} className="h-64 w-fit test object-contain rounded-md overflow-hidden m-auto"></Image>
    )
    }
import img1 from "public/placeholder.webp";
export function TextImage({ src=img1, children, reverseOrder = false }) {
    const imageOrder = reverseOrder ? "lg:order-1" : "lg:order-2";
    const textOrder = reverseOrder ? "lg:order-2" : "lg:order-1";
  
    return (
      <div className="flex flex-row gap-2 w-full test flex-wrap">
        <Image src={src} className={`h-64 test w-fit object-scale-down grow-0 rounded-md ${imageOrder} order-2`} />
        <div className={`test text-left py-2 px-5 font-light text-2xl justify-self-stretch max-w-[750px] w-full ${textOrder} order-1  leading-8`}>
          {children}
        </div>
      </div>
    );
  }
  

import { useEffect } from "react"
export function CodeBlock({ children }) {
    useEffect(() => {
      const parentDiv = document.getElementById("container");
      const child2 = document.getElementById("code_box");
  
      const combinedHeight = child2.offsetHeight + 40;
      parentDiv.style.height = `${combinedHeight}px`;
    }, []);
  
    return (
      <div id="container" className="test relative h-auto mr-2 font-mono">
        <div id="code_box1" className="top-7 left-2 absolute w-full border-slate-500 border-[1px] border-solid px-5 py-5 text-opacity-0 ">
          {children[1]}
        </div>
        <div id="code_box" className="top-5 absolute w-full border-slate-500 border-[1px] border-solid  px-5 py-5  bg-black">
          {children[1]}
        </div>
  
        <div id="title" className="absolute border-top-0 border-slate-500 border-[1px] border-solid border-y-0 top-3 bg-black px-5 m-auto w-fit text-center left-10 right-10">
          {children[0]}
        </div>
      </div>
    );
  }
  
export function SkillBlock({ children }) {
    return (
      <div className=" inline relative w-fit border-[1px] px-4 py-2 text-orange-500  border-orange-500 border-solid text-center">
       {children}
      </div>
    );
  }

export function TitleText({children}){
  useEffect(() => {
    const parentDiv = document.getElementById("containerTitleText");
    const child2 = document.getElementById("text_box");

    // const combinedHeight = child2.offsetHeight + 40;
    // parentDiv.style.height = `${combinedHeight}px`;
  }, []);
  return (
    <div id="containerTitleText" className="relative">
      <div id="text_box" className="relative font-light text-2xl top-0 h-auto w-full p-5 pt-16 pb-6 border-slate-500 rounded-md border-solid border-[1px] leading-8">{children[1]}</div>
      <div className="absolute font-bold bg-orange-700 text-white p-1 px-4 -left-4 w-fit text-3xl top-2">{children[0]}</div>
      
    </div>
  )
}

export function SocialButton({children,link="/"}){
  return(
      <Link href={link} className="group relative cursor-pointer">
          <div className="px-2 py-1 absolute pb-2 pr-3 border-t-0 border-l-0 border-2 border-solid border-slate-500 text-transparent w-fit group-hover:border-white transition-all">{children}</div>
          <div className="px-2 py-1 absolute border-[1px] border-solid border-slate-500 w-fit bg-black group-hover:active:text-slate-500 transition-all">{children}</div>
      </Link>)
      }

export function ExpandingBox({children}){
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="relative h-auto min-h-[20px]">
      <div className={`
      border-0 bg-gradient-to-br from-gray-800 to-gray-900 shadow-inner shadow-black inset-y-0 pt-8
      transition-all origin-top z-0 border-white rounded-md  w-full  mt-6 inset-0
      ${isCollapsed ? "h-0 pt-0 opacity-0" : "h-96"}`}>{children[1]}</div>
      <div className="absolute top-0 px-6 py-2 left-3 bg-orange-500 text-white w-fit z-10 cursor-pointer select-none"
       onClick={()=>{ setIsCollapsed(!isCollapsed)}}>
      {children[0]}
      </div>

    </div>
  )
};