import NavBtns from "./navBtns"
export default function NavList(){
    return (
        <div className="flex flex-col w-96 overflow-hidden pt-20 pl-5">
            <NavBtns link="/">HOME</NavBtns>
            <NavBtns link="/gallery">IDEAS</NavBtns>
            <NavBtns link="/">PROJECT</NavBtns>
        </div>
    )
}