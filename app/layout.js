'use client';
import { useState, useRef, useEffect } from 'react';
import './globals.css';
import { NavBar, HamBtn } from "@/components/navBar";

export default function RootLayout({ children }) {
  
  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <html lang="en">
      <body className='bg-black text-white overflow-scroll-y overflow-x-hidden'>
        
        <div  className='overflow-scroll z-10'>{children}</div>
        <div className={`fixed top-0 left-0 bg-black -z-10 transition-all h-full w-full ${showDropdown ? 'z-30 opacity-70 ':'-z-10 opacity-0'}`} onClick={()=> setShowDropdown(false)}></div>
        <div className={`z-40 fixed backdrop-blur-xl h-full right-0 top-0
         ${showDropdown ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all`}
         onClick={()=> setShowDropdown(false)}
         >
          <NavBar />
        </div>
        {/* <div className={`test fixed bg-black opacity-0 w-full h-full ${showDropdown ? 'opacity-[0.25] z-30':'-z-10'} transition-all`}></div> */}
        <div className="z-50 fixed top-0 right-0 w-fit m-10 hover:cursor-pointer select-none" onClick={() => setShowDropdown(!showDropdown)}>
          <HamBtn />
        </div>
      </body>
    </html>
  );
}
