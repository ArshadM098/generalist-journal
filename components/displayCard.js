"use client";
import RoundedButton from "./rounded-button";
import { useState } from "react"; // Import the CSS file for DisplayCard

export default function DisplayCard({ children, imageUrl='/minimal-test.jpg', tag="Untagged", link="/" }) {
  const [isHovered, setIsHovered] = useState(false);
  var tagColor = "text-slate-700 border-slate-700";
  if(tag == "Blog") {
    tagColor = "text-green-500 border-green-500";
  }else if(tag == "Project") {
    tagColor = "text-orange-500 border-orange-500";
  }else if(tag == "Research") {
    tagColor = "text-blue-500 border-blue-500";
  }else if(tag == "Knowledge") {
    tagColor = "text-purple-500 border-purple-500";
  }
  return (
    <div
      className={`border-slate-700 border-[1px] rounded-lg border-solid overflow-hidden block w-[400px] h-[250px] bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={() => {setIsHovered(true);}}
      onMouseLeave={() => {setIsHovered(false);}}
    >
      <div className={`${isHovered ? " backdrop-brightness-[0.2]" : " backdrop-brightness-100"} relative h-full w-full backdrop-blur-[2px] transition-all`}>
        <div className="absolute text-white text-2xl font-bold m-5">{children}</div>
        <div className={`absolute text-sm bottom-0 left-0 m-5 px-3 py-1 ${tagColor} border-[1px] rounded-full bg-transparent`}>{tag}</div>
        <div className={`absolute bottom-0 right-0 transition-opacity ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <RoundedButton link={link}>
            Proceed
          </RoundedButton>
        </div>
      </div>
    </div>
  );
}
