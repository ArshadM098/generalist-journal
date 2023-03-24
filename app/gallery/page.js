
import DisplayCard from "@/components/displayCard"

export default function Home(){
    var img1 = '/minimal-test.jpg';
    return(
        <>
                <DisplayCard imageUrl={img1} link="/p1">Some Cool Project</DisplayCard>
                <DisplayCard imageUrl={img1}>Some Cool Project</DisplayCard>
                <DisplayCard imageUrl={img1}>Some Cool Project</DisplayCard>
                <DisplayCard imageUrl={img1}>Some Cool Project</DisplayCard>
        </>
    )
}