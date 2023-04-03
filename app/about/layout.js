
// import DisplayCard from "@/components/displayCard"

export default function About({children}){
    // var img1 = '/minimal-test.jpg';
    return(
        <>
            <div className="flex flex-col flex-wrap gap-5 m-3 overflow-auto justify-start z-10">
                {children}
            </div>
        </>
    )
}