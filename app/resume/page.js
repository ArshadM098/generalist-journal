import { Work } from "@/components/resumeComponents"

export default function Home(){
    return (
        <>
            <Work company="UIC Department of ECE" start="Jan 2023" end="March 2023" link="/image-denoising">
                <>NSF Research Experience for Undergraduates</>
                <>
                <li>Developed and implemented a quadcopter flight stabilization algorithm on the FRDM-KL25Z board.</li>
                <li>Utilizing scheduled callbacks and software interrupts in C++ for improved performance.</li>
                </>
            </Work>
            <Work>
                <>NSF Research Experience for Undergraduates</>
                <>
                <li>Developed and implemented a quadcopter flight stabilization algorithm on the FRDM-KL25Z board.</li>
                <li>Utilizing scheduled callbacks and software interrupts in C++ for improved performance.</li>
                </>
            </Work>
        </>
    )
}