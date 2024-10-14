import { RiArrowRightSFill, RiFacebookCircleLine, RiInstagramLine, RiMailLine, RiMapLine, RiMapPinLine, RiPhoneLine, RiTiktokLine } from '@remixicon/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAVLIST } from '../constants'

const Footer = () => {
  return (
    <footer className='bg-primary'>
      <div className='pt-20 pb-10 main_container'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-7 lg:pb-6'>
          <div>
            <Image src='/logo.png' alt='logo' width={200} height={200} />
            <h3 className='font-bebas text-slate-500 translate-x-2'>Fuel Your Drive, Unleash the Spin!</h3>
          </div>

          <div>
            <h3 className='uppercase text-white'>Content</h3>
            <ul className='flex flex-col gap-3 mt-2'>
              {NAVLIST.map((list) => (
                <li key={list.key} className='inline-flex items-center group'><RiArrowRightSFill className='text-slate-400 group-hover:text-white duration-300 transition-all' /><Link href={list.href} className='text-slate-400 group-hover:text-white duration-300 transition-all'>{list.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='uppercase  text-white'>Contact</h3>
            <ul className='flex flex-col gap-3 mt-2'>
              <li className='inline-flex items-start gap-2 group'><RiMapPinLine className='text-slate-400 group-hover:text-white duration-300 transition-all' /><Link href='https://maps.app.goo.gl/BZYCYrEmQRYfwspm9' className='text-slate-400  group-hover:text-white duration-300 transition-all'>Export Processing Zone 12432 Horana, Sri Lanka</Link></li>
              <li className='inline-flex items-start gap-2 group'><RiPhoneLine className='text-slate-400 group-hover:text-white duration-300 transition-all' /><Link href='tel:+94704501501' className='text-slate-400 group-hover:text-white duration-300 transition-all'>+94 70 450 1501</Link></li>
              <li className='inline-flex items-start gap-2 group'><RiMailLine className='text-slate-400 group-hover:text-white duration-300 transition-all' /><Link href='mailto:sales@spinnerenergy.com' className='text-slate-400 group-hover:text-white duration-300 transition-all'>sales@spinnerenergy.com</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='uppercase text-white'>Social</h3>
            <ul className='flex gap-2 mt-2'>
              <Link href='/' className='text-slate-400 hover:text-white duration-300 transition-all'><RiFacebookCircleLine size={32} /></Link>
              <Link href='/' className='text-slate-400 hover:text-white duration-300 transition-all'><RiInstagramLine size={32} /></Link>
              <Link href='/' className='text-slate-400 hover:text-white duration-300 transition-all'><RiTiktokLine size={32} /></Link>
            </ul>
          </div>
        </div>

        <hr className='mt-4' />

        <div className='flex flex-col gap-4 mt-4 md:justify-between md:flex-row'>
          <p className='text-sm text-center text-slate-200'>&copy; 2024 spinner energy drink. All rights reserved.</p>
          <p className='text-slate-100 text-center text-sm'>Developed by <Link href='https://fazildev.online/' className='hover:underline duration-300 transition-all'>MHD Fazil.</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer