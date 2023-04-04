
// import DisplayCard from "@/components/displayCard"

export default function Gallery({children}){
    // var img1 = '/minimal-test.jpg';
    return(
        <>
            
            <div className="top-0 fixed z-10 w-full">
                <div className=" text-5xl first-letter:text-6xl text-left px-5 pt-5 bg-black pb-5 w-full uppercase lg:text-left lg:text-7xl lg:first-letter:text-8xl">Idea Gallery</div>
                <div className="w-full bg-gradient-to-b from-black to-transparent h-5 " ></div>
                </div>
            <div id="content_box" className=" flex flex-row flex-wrap gap-5 m-3 mt-32 overflow-auto justify-start z-10">
                {children}
            </div>
        </>
    )
}