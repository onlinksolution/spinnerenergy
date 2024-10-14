'use client'

import { useGSAP } from '@gsap/react'
import { RiInstagramLine } from '@remixicon/react'
import gsap from 'gsap'
import Link from 'next/link'
import React from 'react'

const Joinus = () => {

  useGSAP(() => {
    gsap.to('#join', {
      y: 0, opacity: 1,
      scrollTrigger: {
        trigger: '#join',
        toggleActions: 'restart none none none',
      }
    })
  }, [])

  return (
    <section className='bg-white'>
      <div className='flex main_container gap-5 flex-col justify-center items-center py-20'>
        <h3 className='font-bebas text-3xl lg:text-6xl text-center opacity-0 translate-y-20' id='join'>JOIN OUR COMMUNITY ON INSTAGRAM</h3>
        <Link href='https://www.instagram.com/spinnerenergydrink/' className='font-bebas bg-primary text-white lg:text-3xl py-3 rounded-full duration-300 transition-colors px-5 inline-flex items-center gap-2 hover:bg-[#c43682] opacity-0 translate-y-20' id='join'>@spinnerenergydrink <RiInstagramLine className='lg:w-10' /></Link>
      </div>
    </section>
  )
}

export default Joinus