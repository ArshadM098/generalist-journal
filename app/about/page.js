
import DisplayCard from "@/components/displayCard"

export default function Home(){
    var img1 = '/minimal-test.jpg';
    return(
        <>
        <div className="text-7xl mx-5 uppercase first-letter:text-8xl">M. <span className="first-letter:text-8xl">Arshad</span></div>
        <div className="text-2xl mx-5"> 
            <div className="uppercase  font-bold">About this website</div>
            <div className="text-xl font-light mt-3 text-zinc-400">
                The primary purpose of this website is to act as my portfolio to give everyone an insight
                of my skills and experience. A simple one page resume is unable to encompass the
                variety of projects that I have worked, therefore, this would the place where all my projects
                will be displayed, regardless of the projects alignment with a certain discipline. Additionally,
                I wish to also include certain blog posts that help me review my knowlegde.
                <br/>
                <br/>
                Another reason for the development - Practice Web Development. 
                With only limited HTML/CSS/JS knowledge until 2022, This is my website and I have been actively learning new concepts with NextJS
                as the base framework. The development mindset for this website Functionality Over Content.  
            </div>
        </div>
        
        </>
    )
}