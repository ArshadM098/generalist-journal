
import DisplayCard from "@/components/displayCard"

export default function Home(){
    var img1 = '/minimal-test.jpg';
    return(
        <>
                <DisplayCard imageUrl={img1} link="/p1">Image Denoising</DisplayCard>
                <DisplayCard imageUrl={img1}>Adaptive Thresholding</DisplayCard>
                <DisplayCard imageUrl={img1}>PROJECT: Frosty</DisplayCard>
                <DisplayCard imageUrl={img1}>PROJECT: Dexterous Paws</DisplayCard>
        </>
    )
}