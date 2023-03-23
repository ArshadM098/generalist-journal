"use client";
import RoundedButton from "./rounded-button";
import { useState } from "react"; // Import the CSS file for DisplayCard

export default function DisplayCard({ children, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border-slate-700 border-[1px] rounded-lg border-solid overflow-hidden block w-[400px] h-[250px] bg-cover bg-center bg-no-repeat display-card`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={() => {setIsHovered(true);}}
      onMouseLeave={() => {setIsHovered(false);}}
    >
      <div className="relative h-full w-full backdrop-blur-[2px] transition-all">
        <div className="absolute text-white text-2xl font-bold m-5">{children}</div>
        <div className={`absolute bottom-0 right-0 transition-opacity ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <RoundedButton c>
            Proceed
          </RoundedButton>
        </div>
      </div>
    </div>
  );
}
