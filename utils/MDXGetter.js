"use server";
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'v8';

export async function GeneratePaths(path){
    return new Promise((resolve,reject) =>{
        
        fs.readdir(path,(err,filenames) => { // Read all the files in the directory
            if(err){
                reject(err);
            }else{
                var output = [];
                filenames.forEach(
                    (filename) => {
                        if(filename.slice(-4) == ".mdx"){
                            output.push(filename);
                        }
                    }
                );
                console.log("Resolved in GeneratePaths: "+ output);
                resolve(output);
            }
        })
        
    });
}

export async function GetMDX(path){
    return new Promise(async(resolve,reject) => {
        fs.readFile(path,(err, files) =>{
            if(err){
                reject(err);
                console.log(err);
            }else{
                const {data, content} = matter(fileContents);
                console.log("Resolved in GetMDX: "+data);
                resolve({data,content});
            }
        });
    });
}