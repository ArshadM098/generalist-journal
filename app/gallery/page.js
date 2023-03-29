
import DisplayCard from "@/components/displayCard"

export default function Home(){
    var img1 = '/minimal-test.jpg';
    return(
        <>
                <DisplayCard link="/image-denoising" tag="Project">Image Denoising</DisplayCard>
                <DisplayCard link="/mac-datapath" tag="Project">MAC Datapath for Neural Networks</DisplayCard>
                <DisplayCard tag="Project">Wrist Aid</DisplayCard>
                <DisplayCard tag="Research">Ground Effect Quadcopter Stabilization</DisplayCard>
                <DisplayCard tag="Knowledge">Hardware Interface Buses</DisplayCard>
                <DisplayCard tag="Project">Autonomous Snow Removal Robot</DisplayCard>
                <DisplayCard tag="Knowledge">Reinforcement Learning: Actor Critic Method</DisplayCard>
                <DisplayCard >Sorting Algorithms</DisplayCard>
                <DisplayCard >PROJECT: Frosty</DisplayCard>
                <DisplayCard >PROJECT: Extended Sight</DisplayCard>
                <DisplayCard >PROJECT: Dexterous Paws</DisplayCard>
        </>
    )
}