
import Image from "next/image"
import { TitleL, TitleM, Text1, Image1,TextLImage, TextRImage} from "@/components/blogLayout"
import img1 from "public/placeholder.webp"
export default function Home(){
    return(
        <>
        <TitleL>Image denoising using multiple adaptive filters based on reinforcement learning</TitleL>
        <TitleM>Hello, World!</TitleM>
        <Text1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text1>
        <Image1 src={img1}/>
        <TextLImage src={img1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TextLImage>
        <TextRImage src={img1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TextRImage>

        </>
    )
}