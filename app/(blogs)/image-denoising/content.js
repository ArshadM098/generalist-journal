
import * as C from "/components/mdxComponents";
import blockDiagram from "public/image-denoising/block-diagram.webp";

const Content = () =>{ return(
    <>
<C.TitleL>Image Denoising</C.TitleL>
<C.TitleS>Adaptive Filter Design for Image Denoising Using Reinforcement Learning</C.TitleS>
{/* <C.SocialButton>Github</C.SocialButton> */}
<C.TitleText>
<>Editor's Comment</>
<>
This is a summary of the project I did for my Image Processing Class.
The method is an experimental approach at Image Denoising using Reinforcement Learning that creates an adaptive filter for the image.
</>
</C.TitleText>
<C.TitleM>Abstract</C.TitleM>
<C.Text1>
Image denoising is one of the key operations in the field of image processing. It is well-known that images are 2D signals
and are prone to signal noise generated from various sources. The exact nature of this noise cannot be determined for
which most of the noise is modelled using stochastic functions. In this paper, we propose an approach for designing an
Adaptive Filter using Reinforcement Learning Mechanisms to perform Image denoising.
</C.Text1>
<C.TitleM>Introduction</C.TitleM>
<C.Text1 >
My approach is to build a reinforcement learning model that can learn to build an adaptive
filter for image denoising. The model is trained using a noisy image and its ground truth to, iteratively, learn the best
possible actions required to build a filter given the frequency domain components of the noisy image. Since the filter
generation is computationally expensive for real time applications, the scope of this paper only cover offline applications of this method.
</C.Text1>
<C.Image1 src={blockDiagram}/>
<C.TitleM>Method</C.TitleM>
<C.TitleS>Fast-Fourier Transform</C.TitleS>
<C.Text1>
Using the numpy.fft library to perform 2D n-point Discrete Fourier Transform using the FFT algorithm.
</C.Text1>
<C.TitleS>Adaptive Filter as an Agent</C.TitleS>
<C.Text1>
Using the mechanics of Reinforcement Learning, we define the adaptive filter as the agent in this model. In brief, the
agent i.e., the filter is tasked with minimizing the mean square error between the frequency components of the filtered
noise image and the frequency components of the ground truth by performing predefined actions, which in this case is
adding filtering window components to itself.
The internal state transition occurs when an action is performed and stops transitioning when the final state is reached,
which is a predefined training parameter.
</C.Text1>
<C.TitleS>Frequency Peak Detection</C.TitleS>
<C.Text1>
For determining the location of the center of the window filter used to design the filter component wise in a 2D grid, we
define a peak location detecting function.



To briefly explain the logic behind this method, we will look at the FFT of a 1D signal. Initially, the function can
determine the amplitude of largest peak in the frequency domain using numpy.max which is used as the upper limit for
peak detection.
</C.Text1>
<C.TitleS>Action-based Filtering</C.TitleS>
<C.Text1>
Before training epoch, we define the adaptive filter to be a 2D array of 0’s. This filter then undergoes changes as the
states changes due to the actions by the agent. The agent has a set of actions with normalized probability distribution
which the define the likelihood of choosing an action given the state.
</C.Text1>
<C.TitleS>Window Filter</C.TitleS>
<C.Text1>
We define a filter design function that can take certain parameters and provide the model with a 2D window pass-band
filter which would be used as the building blocks of the adaptive filter. Specifically, the filter takes in the parameters
(𝑁, 𝑀, 𝐾, 𝑙𝑜𝑐[𝑥, 𝑦]) to build a 2D array of size 𝑁 × 𝑀 with a window size of 𝐾 at the location 𝑙𝑜𝑐 being its center. The
function considers boundary conditions to make sure that the filter is of size 𝑁 × 𝑀 after the window creation.


</C.Text1>
<C.TitleS>Adaptive Filter Design</C.TitleS>
<C.Text1>
Using the window filter and peak detection, we design a filter design scheme which uses multiple window filters as its
components. The number of window filters used to build the adaptive filter is determined by the number of internal
states of the agent.
</C.Text1>
<C.TitleS>Cost Function/Updating Policy</C.TitleS>
<C.Text1>
The cost function compares the mean squared error between the ground truth and the filtered image of the from the
previous state with that of the new state to determine the change in direction of the action likelihood. If the action
decreases the M.S.E, the likelihood of the action is increased by a factor controlled by 𝜇. Additionally, the likelihood of
other actions decreases simultaneously.
</C.Text1>
<C.TitleS>Training Parameters</C.TitleS>
<C.Text1>
The model takes in certain parameters which have significant impact on the design of the filter.


 - 𝛼: controls the percentage decrease in maximum threshold when finding peaks in the frequency domain.
Specifically, it is used in the FindMaxN() function. 

 - 𝛽: controls the precision of the window filter components in the adaptive filter. The value of 1 defines that each
filter designed using consecutive action index would have a difference in width of 2 (due to symmetry). 𝛽 ≥ 1


- 𝛾: controls the update policy factor which determines how to reward each action depending on the
corresponding M.S.E.    

</C.Text1>
{/* <C.TitleM>Experimentation</C.TitleM>
<C.TextImage>

</C.TextImage> */}
<C.TitleM>Conclusion</C.TitleM>
<C.Text1>
We have developed a method using the principles of reinforcement learning to suggest an adaptive filter as a dynamic
agent with an internal state, which uses the frequency component of the training images to adapt itself to remove image
noise. Although, this method is computationally more expensive given the parameters, it can reach desirable solution to
image denoising. Future improvements on this method could benefit from the more complex techniques used in
reinforcement learning to improve training and computational cost of the implementing the filter
</C.Text1>


</>
)}
export default Content;

