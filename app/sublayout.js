"use client";
import { NavBar, HamBtn } from "@/components/navBar";
import { useState } from "react";

export default function SubLayout({ children}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div className="absolute flex flex-col gap-2 justify-center h-full test w-full px-2 overflow-auto z-10">
        {children}
      </div>
      <div className=" absolute right-0 h-full top-0 w-full overflow-hidden">
        <div className="z-30 absolute right-0 w-fit m-10 hover:cursor-pointer select-none" onClick={() => setShowDropdown(!showDropdown)}>
          <HamBtn />
        </div>
        <div className={`z-20 backdrop-blur-xl absolute h-full right-0 top-0 ${showDropdown ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all`}>
          <NavBar />
        </div>
      </div>
    </>
  );
}
