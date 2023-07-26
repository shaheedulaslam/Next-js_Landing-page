import React from 'react'
import { BodyButton } from './CommonComponents'
import italy from '../../public/italy.png'
import dubai from '../../public/dubai.png'
import germany from '../../public/germany.png'
import { RemoteWorkDetailsCard } from './RemoteWorkDetailsCard'
import { InterviewDetailsCard } from './InterviewDetailsCard'
import int1 from '../../public/v.png'
import int2 from '../../public/download.svg'
import int3 from '../../public/v2.png'


export default function StoryCard() {
  return (
    <><div data-aos='fade-up'>
      <h1 className="mt-20 text-4xl font-bold text-dark-blue lg:ml-auto lg:mr-0 font-sans">Remote work visa</h1>
      <p className='text-gray-500 mt-3 font-sans text-lg'>Digital nomad visas (or remote work visas) allow you to live in a country as a normal resident while you work remotely.</p>
      <p className='text-gray-500 font-sans text-lg'>These generally last a year or so and can normally be extended</p>

      <div className='grid gap-5 lg:mb-0 sm:grid-cols-3 mt-8 font-sans'>
        <RemoteWorkDetailsCard image={italy} city={'Italy'} />
        <RemoteWorkDetailsCard image={dubai} city={'Dubai'} />
        <RemoteWorkDetailsCard image={germany} city={'Germany'} />
      </div>
      <div className="flex justify-center mt-8 font-sans">
          <BodyButton value='Explore all Visas' />
        </div>
    </div>

      {/* interview.....content */}
      <div>
        <h1 className="mt-20 text-4xl font-bold text-dark-blue lg:ml-auto lg:mr-0 font-sans">Interviews</h1>
        <p className='text-gray-500 mt-3 text-lg'>Get our exclusive interviews & blogs in your inbox</p>

        <div className='grid gap-5 lg:mb-0 sm:grid-cols-3 mt-8 font-sans'>
          <InterviewDetailsCard image={int1} head={'How I created a graphic design tool for non-designers'} />
          <InterviewDetailsCard image={int2} head={'Think about how many people can you help - Story of Euphorya..'} />
          <InterviewDetailsCard image={int3} head={'How I started a $1.5K MMR Payment service - Story of Payhere.'} />
        </div>
        <div className="flex justify-center mt-8 font-sans">
          <BodyButton value='Explore all Interviews' />
        </div>
      </div></>

  )
}


