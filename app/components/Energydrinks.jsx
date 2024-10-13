'use client'

import { useGSAP } from '@gsap/react'
import { animateWithGsap } from "../utils/animation"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import gsap from 'gsap'

const Energydrinks = () => {
  useGSAP(() => {
    animateWithGsap('#energy', {
      y: 0, opacity: 1,
    })
    gsap.to('#product', {
      y: 0, opacity: 1, delay: 0.5,
      scrollTrigger: {
        trigger: '#product',
        toggleActions: 'restart none none none',
        start: 'top 85%',
      }
    })

    gsap.to('#product2', {
      y: 0, opacity: 1, delay: 1,
      scrollTrigger: {
        trigger: '#product',
        toggleActions: 'restart none none none',
        start: 'top 85%',
      }
    })

    gsap.to('#product3', {
      y: 0, opacity: 1, delay: 1.5,
      scrollTrigger: {
        trigger: '#product',
        toggleActions: 'restart none none none',
        start: 'top 85%',
      }
    })
  }, [])

  return (
    <section>
      <div className='drinks_sec relative'>
        <div className='main_container py-24'>
          <div>
            <h2 className='font-bebas text-6xl text-center opacity-0 translate-y-20' id='energy'>Energy <span className='text-green-600 font-bebas'>Drinks</span></h2>
          </div>

          <div className='mt-10 grid md:grid-cols-3 gap-5 md:gap-7'>
            <Link href='/' className='bg-white pt-5 px-4 rounded-3xl group opacity-0 translate-y-20' id='product'>
              <h2 className='text-center font-orbitron text-2xl lg:text-3xl font-bold'>Spinner <br />Energy Drink</h2>
              <div className='overflow-hidden h-80 grid justify-center pt-8'>
                <Image src='/bluespinner.png' alt='blue-spinner' width={0} height={0} sizes='100vw' className='w-52 h-auto group-hover:-translate-y-6 transition-all duration-700' />
              </div>
            </Link>

            <Link href='/' className='bg-white pt-5 px-4 rounded-3xl group opacity-0 translate-y-20' id='product2'>
              <h2 className='text-center font-orbitron text-2xl lg:text-3xl font-bold'>Spinner <br />Watermelon</h2>
              <div className='overflow-hidden h-80 grid justify-center pt-8'>
                <Image src='/greenspinner.png' alt='blue-spinner' width={0} height={0} sizes='100vw' className='w-52 h-auto group-hover:-translate-y-6 transition-all duration-700' />
              </div>
            </Link>

            <Link href='/' className='bg-white pt-5 px-4 rounded-3xl group opacity-0 translate-y-20' id='product3'>
              <h2 className='text-center font-orbitron text-2xl lg:text-3xl font-bold'>Spinner <br />Sugar Free</h2>
              <div className='overflow-hidden h-80 grid justify-center pt-8'>
                <Image src='/whitepinner.png' alt='blue-spinner' width={0} height={0} sizes='100vw' className='w-52 h-auto group-hover:-translate-y-6 transition-all duration-700' />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Energydrinks