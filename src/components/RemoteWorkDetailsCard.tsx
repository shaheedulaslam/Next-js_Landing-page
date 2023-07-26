import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface imageProps {
    image: StaticImageData;
    city:string
  }
  
  export const RemoteWorkDetailsCard: React.FC<imageProps> = ({ image ,city})=>{
  return (
    <div>
    <div className="rounded-[40px] overflow-hidden" data-aos='fade-up'>
      <picture>
        <Image src={image} alt="city" className="hover:scale-110 duration-300" />
      </picture>
    </div>
    <p className="text-3xl tracking-tight text-slate-800 font-bold text-center mt-5 font-sans">{city}</p>
    <p className="text-lg text-center text-gray-500 font-light mt-2 font-sans">Remote visa for {city}</p>
  </div>
  )
}
