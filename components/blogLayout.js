import Image from "next/image"

export function Text1({children}){
    return(
        <div className="test p-2 text-2xl" >{children}</div>
    )
}
export function TitleL({children}){
    return(
        <div className="test text-7xl first-letter:text-8xl">{children}</div>
    )
    }

export function TitleM({children}){
    return(
        <div className="test text-5xl first-letter:text-6xl">{children}</div>
    )
    }

export function Image1({src}){
    return(
        <Image src={src} className="h-64 w-full test object-contain"></Image>
    )
    }

export function TextLImage({src,children}){
    return(
        <div className="flex flex-row gap-2 w-full test justify-start">
            <div className="test text-left p-2 text-2xl grow-1 w-full">{children}</div>
            <Image src={src} className="h-64 test w-fit grow-0"></Image>
        </div>
        
    )
}

export function TextRImage({src,children}){
    return(
        <div className="flex flex-row gap-2 w-full test justify-start">
            <Image src={src} className="h-64 test w-fit grow-0"></Image>
            <div className="test text-left text-2xl p-2 grow-1 w-full">{children}</div>
            
        </div>
        
    )
}


