import NavBtns from "./navBtns"
import SocialButton from "./socialButton"
export default function NavList(){
    var img1 = '/github-mark-white.png';
    return (
        <div className="flex flex-col w-96 overflow-hidden pt-20 pl-5">
            <NavBtns link="/">About</NavBtns>
            <NavBtns link="/">Home</NavBtns>
            <NavBtns link="/gallery">Idea Gallery</NavBtns>
            <NavBtns link="/resume">R&eacute;sume</NavBtns>
            <NavBtns link="https://github.com/ArshadM098" external={true}>GitHub</NavBtns>
            <NavBtns link="https://www.linkedin.com/in/marsha6/" external={true}>LinkedIn</NavBtns>
        </div>
    )
}