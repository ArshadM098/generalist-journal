
import * as C from "/components/mdxComponents";
import { GetMetaJSON } from "@/utils/MetaUtils";
const Content = () =>{ 
return(
<>
<C.TitleL>Wristaid</C.TitleL>
<C.TitleS>Wearable device designed to prevent the development of RSI.</C.TitleS>

<C.TitleText>
<>Editor's Comment</>
<>
This is an overview of a project for the Wearable Technology Course. I was part of a 
group of four engineers of varied disciplines
</>
</C.TitleText>
<C.TitleS>Introduction</C.TitleS>
<C.Text1>
The objective of the project was to design a wearable device
that can prevent Repetitive Strain Injury by monitoring the user’s wrist activity while
the user performs actions consisting of repititive motions. ur wearable is an arm sleeve
that extends from the user’s wrist to the elbow.
</C.Text1>

<C.TitleS>Device Description</C.TitleS>
<C.TextImage>
It consists of four flex sensors that are instrumental in measuring and
recording the strain. They are positioned on the sleeve such that they 
cover the four sides of the sleeve - above, below, right and left. 
The flex sensors are directly connected to an arduino board, which 
itself is enclosed within a 3-D printed box and consists of two LEDs,
one buzzer and a lithium battery.
</C.TextImage>
<C.TitleS>Features</C.TitleS>
<C.TextImage>
<li>Notification system using buzzer and LEDs</li>
<li>Sesssion tracking</li>
<li>Activity analytics</li>
<li>Real-time stress heatmap</li>
</C.TextImage>
<C.TitleS>Prototype Design</C.TitleS>
<C.Image1>
</C.Image1>
<C.TitleS>User Interface Design</C.TitleS>
<C.Image1>
</C.Image1>
<C.TitleS>Future Developments</C.TitleS>
<C.TextImage>
To improve the design of our wearable device and increase its functionality,
we plan on inserting more flex sensors to record strain at multiple points 
 on the wrist where RSI occur. 
 Our plan also includes creating two sleeves instead of one to accommodate both hands.
 Additionally, we plan on enhancing the user interface by providing more instructional 
videos on various exercises/stretches that can be performed to prevent RSI.  In the future, we envision a seamless
ring device that replaces the need for a sleeve. 
</C.TextImage>
<C.TitleText>
<>Revisiting this project</>
<>
While this project was a great learning experience, I would like to revisit it in the future with
a more holistic approach. I would like to focus on the user experience and the design of the device.
</>
</C.TitleText>
</>
)};export default Content;



