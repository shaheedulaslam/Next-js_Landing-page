import React from 'react'
import { InterviewsParagraph } from './CommonComponents'
import Image ,{ StaticImageData } from 'next/image';



interface imageProps {
    image: StaticImageData;
    head:string
  }

  export const InterviewDetailsCard: React.FC<imageProps> = ({image,head })=>{
  return (
    <div>   
      <div className="rounded-[40px] overflow-hidden" data-aos='fade-up'>
        <picture>
          <Image src={image} alt="city" className="hover:scale-110 duration-300" />   
        </picture>
       
      </div>
      <div className="px-2">
        <p className="text-lg tracking-tight text-slate-800 font-bold font-sans text-left mt-5">
          {head}
        </p>
        <InterviewsParagraph/>
      </div>
    </div>
  )
}
