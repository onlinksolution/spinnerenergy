import { RiArrowUpLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'

const Scrollup = () => {
  return (
    <Link href='/' className='fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-white p-3 rounded-full shadow-sm shadow-slate-300 hover:bg-primary hover:text-white duration-300 transition-all'><RiArrowUpLine /></Link>
  )
}

export default Scrollup