import fs from 'fs';
import DisplayCard from "@/components/displayCard"
import { GetMetaJSON } from "@/utils/MetaUtils";
import path from 'path';

const dirpath = './app/(blogs)';
export default function Home(){
    var img1 = '/minimal-test.jpg';
    var files = [];
    fs.readdirSync(dirpath).forEach(
        (filename) => {
            if(filename.split('.').length == 1){
                try{
                    const meta = JSON.parse(fs.readFileSync(path.join(dirpath,filename,'meta.json')));
                    if(meta.title == ""){
                        meta.title = "NO NAME";
                        meta.tag = "Untagged";
                        meta.inProgress = true;
                    }
                    files.push(
                        {
                            link:filename,
                            meta:meta
                        }
                    )
                }catch(err){
                    console.log(err);
                }
            }
        }
    );
        
    return(
        <> {files.map((blog) => {
               return <DisplayCard 
               key={blog.link} 
               inProgress={blog.meta.inProgress} 
               link={`/${blog.link}`}
               tag={blog.meta.tag}>{blog.meta.title}</DisplayCard>
            })
        }
                {/* <DisplayCard link="/image-denoising" tag="Project" inProgress={false}>Image Denoising</DisplayCard> */}
                {/* <DisplayCard link="/wrist-aid" tag="Project" inProgress={false}>Wrist Aid</DisplayCard>
                <DisplayCard link="/mac-datapath" tag="Project">MAC Datapath for Neural Networks</DisplayCard>
                <DisplayCard tag="Research">Ground Effect Quadcopter Stabilization</DisplayCard>
                <DisplayCard tag="Knowledge">Hardware Interface Buses</DisplayCard>
                <DisplayCard tag="Project">Autonomous Snow Removal Robot</DisplayCard>
                <DisplayCard tag="Knowledge">Reinforcement Learning: Actor Critic Method</DisplayCard>
                <DisplayCard >Sorting Algorithms</DisplayCard>
                <DisplayCard >PROJECT: Frosty</DisplayCard>
                <DisplayCard >PROJECT: Extended Sight</DisplayCard>
                <DisplayCard >PROJECT: Dexterous Paws</DisplayCard> */}
        </>
    )
}