'use client';
import { useState, useRef, useEffect } from 'react';
import './globals.css';
import { NavBar, HamBtn } from "@/components/navBar";
import Script from 'next/script';
import Head from 'next/head';

export default function RootLayout({ children }) {
  
  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <html lang="en">
      <Script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TBTW8D4');`,
            }}></Script>
      <body className='bg-black text-white overflow-scroll-y overflow-x-hidden'>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TBTW8D4"
         height="0" width="0" className='hidden'>
        </iframe></noscript>
        
        <div  className='z-10 py-24'>{children}</div>
        <div className={`fixed top-0 left-0 bg-black -z-10 transition-all h-full w-full ${showDropdown ? 'z-30 opacity-70 ':'-z-10 opacity-0'}`} onClick={()=> setShowDropdown(false)}></div>
        <div className={`z-40 fixed backdrop-blur-xl h-full right-0 top-0
         ${showDropdown ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all`}
         onClick={()=> setShowDropdown(false)}
         >
          <NavBar />
        </div>
        {/* <div className={`test fixed bg-black opacity-0 w-full h-full ${showDropdown ? 'opacity-[0.25] z-30':'-z-10'} transition-all`}></div> */}
        <div className="z-50 fixed top-0 right-0 w-auto h-auto m-10 hover:cursor-pointer select-none" onClick={() => setShowDropdown(!showDropdown)}>
          <HamBtn />
        </div>
      </body>
    </html>
  );
}
