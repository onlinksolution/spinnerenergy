'use client'

import Image from "next/image"
import Link from "next/link"
import { NAVLIST } from "../constants"
import { RiCloseLine, RiMenuFill } from "@remixicon/react"
import { useEffect, useState } from "react"

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const toggleMenuShow = () => {
    const menu = document.getElementById("menu-bar");
    menu?.classList.remove("max-sm:top-[-100%]");
    menu?.classList.add("max-sm:top-0");
  }

  const toggleMenuHide = () => {
    const menu = document.getElementById("menu-bar");
    menu?.classList.add("max-sm:top-[-100%]");
    menu?.classList.remove("max-sm:top-0");
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <header className={navbar ? 'w-full px-4 py-2 fixed z-50 bg-primary transition-all duration-500' : 'w-full px-4 py-2 fixed z-50 bg-transparent transition-all duration-500'}>
      <nav className="w-full h-[3.5rem] flex justify-between items-center screen-max-width">
        <Link href='/'>
          <Image src='/logo.png' alt="logo" width={0} height={0} sizes="100vw" className="w-44" />
        </Link>

        <div id="menu-bar" className="max-sm:fixed max-sm:left-0 max-sm:top-[-100%] max-sm:w-full max-sm:h-1/2 max-sm:bg-primary max-sm:rounded-b-full flex max-sm:flex-col max-sm:text-center max-sm:justify-center max-sm:gap-10 duration-500 transition-all max-sm:py-5">
          <ul className="max-sm:gap-10 flex max-sm:flex-col sm:gap-4 md:gap-12">
            {NAVLIST.map((list) => (
              <li key={list.key}><Link href={list.href} className="text-white font-bebas max-sm:text-3xl sm:text-xl lg:text-2xl hover_effect duration-300 transition-all">{list.label}</Link></li>
            ))}
          </ul>
          <div>
            <Link href='/contact-us' className="sm:hidden font-bebas text-3xl bg-white py-3 px-5 rounded-full hover:bg-white hover:text-black transition-all duration-300" >Contact Us</Link>
          </div>

          <div>
            <RiCloseLine size={32} className="absolute top-10 text-white right-8 cursor-pointer sm:hidden" onClick={toggleMenuHide} />
          </div>
        </div>

        <div>
          <RiMenuFill size={28} className="sm:hidden text-white cursor-pointer" onClick={toggleMenuShow} />
        </div>
        <Link href='/contact-us' className="max-sm:hidden font-bebas text-xl bg-transparent border-2 sm:text-white border-white py-3 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300">Contact Us</Link>
      </nav>
    </header>
  )
}

export default Navbar