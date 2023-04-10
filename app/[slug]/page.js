import { GeneratePaths,GetMDX } from "@/utils/MDXGetter";
import path from 'path';

const dirPath = './mdxcontent/'

export async function generateStaticParams() {
    const posts = await GeneratePaths('./mdxcontent');
    
    console.log(posts);
    return posts.map(async(post) => ({
        slug:post.slug,
    }));
  }
  

  // using the `params` returned by `generateStaticParams`
  export default function Page({ params }) {
    const { slug } = params;
    console.log('slug data:' + slug);
    console.
    // ...
    return (
        <>{slug}</>
    )
  }