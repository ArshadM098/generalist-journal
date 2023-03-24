'use client';
import Image from "next/image"

function Text1({children}){
    return(
        <div className="test p-2 text-2xl" >{children}</div>
    )
}
function TitleL({children}){
    return(
        <div className="test pt-20 text-7xl first-letter:text-8xl capitalize">{children}</div>
    )
    }

function TitleM({children}){
    return(
        <div className="test text-5xl first-letter:text-6xl">{children}</div>
    )
    }

function Image1({src}){
    return(
        <Image src={src} className="h-64 w-fit test object-contain rounded-md overflow-hidden m-auto"></Image>
    )
    }

function TextImage({ src, children, reverseOrder = false }) {
    const imageOrder = reverseOrder ? "lg:order-1" : "lg:order-2";
    const textOrder = reverseOrder ? "lg:order-2" : "lg:order-1";
  
    return (
      <div className="flex flex-row gap-2 w-full test justify-start flex-wrap">
        <Image src={src} className={`h-64 test w-fit object-contain rounded-md ${imageOrder} order-2`} />
        <div className={`test text-left p-2 text-2xl grow-1 max-w-[750px] ${textOrder} order-1`}>
          {children}
        </div>
      </div>
    );
  }
  

import { useEffect } from "react"
function CodeBlock({ children }) {
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
  
  function SkillBlock({ children }) {
    return (
      <div className=" inline relative w-fit border-[1px] px-2 py-2 text-white  border-orange-800 border-solid text-center">
       {children}
      </div>
    );
  }
  export function useMDXComponents(components){
    return {CodeBlock,TitleL,TitleM,Text1,TextImage,Image1, SkillBlock,...components};
  }


