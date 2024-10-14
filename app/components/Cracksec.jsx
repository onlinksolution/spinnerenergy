'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { animateWithGsap } from '../utils/animation'

gsap.registerPlugin(ScrollTrigger);

const Cracksec = () => {
  useEffect(() => {
    gsap.set('#main', {
      backgroundColor: '#15528B'
    })
    gsap.to('#main', {
      backgroundColor: 'black',
      scrollTrigger: {
        trigger: '#crack',
        start: "top top",   // Animation starts when section hits the top of the viewport
        end: "bottom top",  // Animation ends when the section leaves the viewport
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    })

    animateWithGsap('#fuel', {
      y: 0, opacity: 1,
    })

    gsap.to('#crack-img', {
      y: 0, opacity: 1, ease: 'power4.in', delay: 0.1,
      scrollTrigger: {
        trigger: '#crack-img',
        toggleActions: 'play none none none',
        start: 'bottom 85%',
      }
    })

    gsap.to('#crack-left', {
      x: 0, opacity: 1, ease: 'back.in',
      scrollTrigger: {
        trigger: '#crack-left',
        toggleActions: 'restart reverse restart reverse',
        start: 'bottom 85%',
      }
    })

    gsap.to('#crack-right', {
      x: 0, opacity: 1, ease: 'back.in', delay: 1,
      scrollTrigger: {
        trigger: '#crack-right',
        toggleActions: 'restart reverse restart reverse',
        start: 'top 85%',
      }
    })

    animateWithGsap('#sample', {
      y: 0, opacity: 1
    })
  }, [])

  return (
    <>
      <section id='main'>
        <div className='crack_sec relative' id='crack'>
          <h2 className='pt-20 text-center uppercase text-transparent font-roboto crack_topic font-700 text-5xl md:text-6xl lg:text-7xl opacity-0 translate-y-20' id='fuel'>Fuel Your Drive</h2>
          <Image src='/spinner-crack-without-bg.png' alt='crack-img' unoptimized draggable='false' width={0} height={0} sizes='100vw' className='w-full h-full absolute bottom-0 object-cover opacity-0 -translate-y-96' id='crack-img' />
          <div className='main_container max-md:hidden mt-16'>
            <div className='flex justify-start opacity-0 translate-x-20' id='crack-left'>
              <p className='text-[#EBFF00] font-roboto text-center uppercase text-2xl mt-5'>Ready for<br /><span className='text-white'>Day parties</span></p>
              <Image src='/yellow-arrow.png' alt='arrow' width={150} height={150} className='rotate-45' />
            </div>
            <div className='flex justify-end opacity-0 -translate-x-20' id='crack-right'>
              <Image src='/yellow-arrow.png' alt='arrow' width={150} height={150} className='rotate-180 translate-y-7' />
              <p className='text-[#EBFF00] font-roboto text-center uppercase text-2xl mt-5'>Ready for <br /><span className='text-white'>WEEKENDS</span></p>
            </div>
            <div className='flex justify-start opacity-0 translate-x-20' id='crack-left'>
              <p className='text-[#EBFF00] font-roboto text-center uppercase text-2xl mt-5'>Ready for <br /><span className='text-white'>KICK-OFFS</span></p>
              <Image src='/yellow-arrow.png' alt='arrow' width={150} height={150} className='rotate-45 translate-x-5' />
            </div>
            <div className='flex justify-end opacity-0 -translate-x-20' id='crack-right'>
              <Image src='/yellow-arrow.png' alt='arrow' width={150} height={150} className='rotate-180 translate-y-1 -translate-x-3' />
              <p className='text-[#EBFF00] font-roboto text-center uppercase text-2xl mt-5'>Ready for <br /><span className='text-white'>OVERNIGHTS</span></p>
            </div>
          </div>
        </div>

        <div className='h-full main_container py-32'>
          <div className='relative border bg-transparent border-white py-20 rounded-3xl sm:grid sm:grid-cols-2'>
            <div className='flex justify-center items-center flex-col gap-5 sm:items-start sm:px-10'>
              <Image src="/logo.png" alt='logo' width={150} height={150} className='opacity-0 translate-y-20' id='sample' />
              <h3 className='text-white text-center uppercase font-orbitron font-bold lg:text-2xl opacity-0 translate-y-20' id='sample'>Power to Keep You Spinning</h3>

              <div className='grid grid-cols-2 items-center mt-4 sm:hidden'>
                <div className='w-full flex justify-center'>
                  <Image src='/dark-bluespinner.png' alt='dark-cane' width={120} height={200} className='opacity-0 translate-y-20' id='sample' />
                </div>
                <p className='text-gray-400 opacity-0 translate-y-20' id='sample'>Fuel your day with the unstoppable energy of Spinner. Packed with revitalizing ingredients to boost your stamina, focus, and performance, Fuel your best self with Spinner today!</p>
              </div>

              <div className='max-sm:hidden'>
                <p className='text-gray-400 opacity-0 translate-y-20' id='sample'>Fuel your day with the unstoppable energy of Spinner. Packed with revitalizing ingredients to boost your stamina, focus, and performance, Spinner Energy Drink helps you conquer challenges, stay active, and keep moving. Whether you're powering through your workout, staying sharp at work, or pushing your limits, Spinner is your perfect companion for lasting energy and peak performance. Embrace the spin – fuel your best self with Spinner today!</p>
                <button className='text-white bg-transparent border border-white rounded-full py-4 px-6 hover:bg-white hover:text-black hover:font-bold transition-all mt-5 duration-300 opacity-0 translate-y-20' id='sample'>See More</button>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <Image src='/dark-bluespinner.png' alt='dark-cane' width={200} height={200} className='max-sm:hidden absolute w-[18rem] opacity-0 translate-y-20' id='sample' />
            </div>
          </div>
        </div>

      </section>


    </>
  )
}

export default Cracksec