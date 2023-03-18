import SubLayout from "../sublayout"
import DisplayCard from "@/components/displayCard"



export default function Gallery(){
    var img1 = '/minimal-test.jpg';
    return(
        <SubLayout>
            <div className="flex flex-col justify-start">
            <div className="py-8 px-5 text-5xl text-left  lg:text-left lg:text-7xl"><span className='text-7xl lg:text-8xl'>I</span><span className='uppercase'>dea Gallery</span></div>
            <div id="content_box" className=" flex flex-row flex-wrap gap-5 m-3 overflow-auto justify-start z-10">
                <DisplayCard imageUrl={img1}>Some Cool Project</DisplayCard>
                <DisplayCard imageUrl={img1}>Some Cool Project</DisplayCard>
                <DisplayCard imageUrl={img1}>Some Cool Project</DisplayCard>

                <DisplayCard imageUrl={img1}>Some Cool Project</DisplayCard>

            </div></div>

        </SubLayout>
    )
}