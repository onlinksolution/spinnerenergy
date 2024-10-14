'use client'

import Image from 'next/image'
import React from 'react'
import { animateWithGsap } from '../utils/animation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { EVENTS } from '../constants'

const Events = () => {
  useGSAP(() => {
    gsap.to('#samplet', {
      y: 0, opacity: 1,
      scrollTrigger: {
        trigger: '#crack-right',
        toggleActions: 'restart none none none',
        start: 'top 85%',
      }
    })
  }, [])


  return (
    <section>
      <div className='event_sec py-20'>
        <div className='screen-max-width'>
          <h2 className='font-bebas text-6xl text-center opacity-0 translate-y-20' id='samplet'>Events</h2>

          <div className='mt-10 px-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 opacity-0 translate-y-20' id='samplet'>
            {EVENTS.map((list, i) => (
              <article className='bg-white rounded-2xl grid gap-4 ' key={i}>
                <div className='relative'>
                  <Image src={list.img} alt='event' width={0} height={0} sizes='100vw' className='w-full h-auto rounded-t-2xl' />
                  <div className='w-8 h-8 bg-[#EDEDED] rounded-3xl absolute -bottom-5 -left-5'></div>
                  <div className='w-8 h-8 bg-[#EDEDED] rounded-3xl absolute -bottom-5 -right-5'></div>
                </div>


                <div className='px-4 pb-5 grid gap-3'>
                  <h3 className='font-roboto font-bold text-xl'>{list.title}</h3>
                  <p>{list.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events