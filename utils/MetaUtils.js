import fs from 'fs';
import path from 'path';

export function GetMetaJSON(dir){
    const new_path = path.join(dir,'meta.json');
    try{
        const meta = JSON.parse(fs.readFileSync(new_path));
        return meta
        
    }catch(e){
        console.log(e);
        return{
            
        }
    }
    
}