import { Experience,Education } from "@/components/resumeComponents"
import Image from "next/image";
import img1 from "public/temp-portrait.jpg";
export default function Home(){
    return (
        <>  
            <Education hasGraduated={true} GraduationDate="Dec 2022">
                <>Master of Science in Electrical Engineering</>
                <>University of Illinois at Chicago</>
                <>C1,C2,C3</>
                <>C1,C2,C3</>

                <>C1,C2,C3</>

            </Education>
                
            <Experience start="Sep 2022" end="Dec 2022" link="/image-denoising">
                <>Adaptive Filter Design for Image Denoising Using Reinforcement Learning</>
                <>
                    <li>Proposed an approach for designing an Adaptive Filter using Reinforcement Learning
                    Mechanisms to perform image denoising utilizing the principles of digital signal processing.</li>
                    <li>Developed a reinforcement learning model that can learn to build an adaptive 
                    filter for image denoising by modeling the problem to fit an agent-environment scenario.</li>
                    <li>Utilized DSP operations such as Fast-Fourier Transform and Frequency Peak Detection to
                         achieve the expected results of Image denoising.</li>
                </>
                <>Python,C++,Arduino,Linux,JavaScript</>
            </Experience>

            <Experience start="Mar 2022" end="May 2022">
                <>Multiplication and Accumulation Datapath for Neural Networks</>
                <>
                    <li>Designed MAC datapath in cadence utilizing CMOS logic gates to develop 8-bit Adder, Multiplier, Flip-Flops, Register, SRAM cell and Decoder.</li>
                    <li>Performed extensive simulation and testing to determine the effects of change in environment on logic gates.</li>
                </>
            </Experience>
            
            <Experience start="Nov 2021" end="Dec 2021">
                <>Wrist-Aid (Medical Aid Device)</>
                <>
                    <li>Developed a novel medical aid device for the prevention of repetitive strain injuries using flex resistors.</li>
                    <li>Implemented wireless data transmission between wearable and main system to enable real-time UI.</li>
                    <li>Created an application using Processing 3 (Java) to extrapolate sensor data and provide a visual guide for the wearable and its health statistics.</li>
                </>
            </Experience>

            <Experience start="Aug 2021" end="Dec 2021" >
                <>AnSRR (Autonomous Snow Removal Robot)</>
                <>
                    <li>Led AGILE development of autonomous snow removal robots with a senior design engineering team.</li>
                    <li>Successfully demonstrated path finding algorithm in Gazebo simulation using ROS.</li>
                </>
            </Experience>

            <Experience company="UIC Department of ECE"  start="May 2019" end="Aug 2019">
                <>NSF Research Experience for Undergraduates</>
                <>
                    <li>Developed and implemented a quadcopter flight stabilization algorithm on the FRDM-KL25Z board.</li>
                    <li>Utilizing scheduled callbacks and software interrupts in C++ for improved performance.</li>
                </>
            </Experience>
            {/* 
            <Experience company="UIC Department of ECE" start="Jan 2023" end="March 2023" link="/image-denoising">
                <>NSF Research Experience for Undergraduates</>
                <>
                <li>Developed and implemented a quadcopter flight stabilization algorithm on the FRDM-KL25Z board.</li>
                <li>Utilizing scheduled callbacks and software interrupts in C++ for improved performance.</li>
                </>
            </Experience> */}
        </>
    )
}