import NavBtns from "./navBtns"
export default function NavList(){
    return (
        <div className="flex flex-col absolute w-96 right-0 overflow-hidden">
            <NavBtns>HOME</NavBtns>
            <NavBtns>IDEAS</NavBtns>
            <NavBtns>PROJECT</NavBtns>
        </div>
    )
}