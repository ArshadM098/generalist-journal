"use client";
import NavList from "./navList"
import SocialButton from "./socialButton";

export function HamBtn({handler}){

    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" onClick={() => {handler}}>
        <g id="Group_3" data-name="Group 3" transform="translate(-1838 -25)">
          <rect id="Rectangle_1" data-name="Rectangle 1" width="32" height="8" rx="4" transform="translate(1838 37)" fill="#fff"/>
          <rect id="Rectangle_2" data-name="Rectangle 2" width="32" height="7" rx="3.5" transform="translate(1838 25)" fill="#fff"/>
          <rect id="Rectangle_3" data-name="Rectangle 3" width="32" height="7" rx="3.5" transform="translate(1838 50)" fill="#fff"/>
        </g>
    </svg>
      
    )
}
export function NavBar({}){
    return(
            <div id="navigation-bar" className=" bg-slate-800 bg-opacity-40 relative min-h-[600px] h-full right-0 btop-0 bottom-0 rounded-lg">
        <NavList></NavList>
        
            </div>
        
    )
}