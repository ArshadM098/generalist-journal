import NavBtns from "./navBtns"
export default function NavList(){
    return (
        <div className="flex flex-col w-96 overflow-hidden pt-20 pl-5">
            <NavBtns>HOME</NavBtns>
            <NavBtns>IDEAS</NavBtns>
            <NavBtns>PROJECT</NavBtns>
        </div>
    )
}