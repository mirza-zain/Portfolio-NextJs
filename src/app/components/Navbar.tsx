'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const path = usePathname()
    const [mobVisible, setMobVisible] = useState(false)

    useEffect(() => {
      if (mobVisible) {
        const timer = setTimeout(() => {
          setMobVisible(false);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [mobVisible]);

    const toggleButton = () => { setMobVisible(!mobVisible) }

    const handleClick = () => { setMobVisible(false) }

  return (
    <>
      <div className='h-16 w-full flex flex-1 text-black justify-between p-5 items-center'>
        <h1 className='font-pacifico text-3xl text-[#4A90E2]'><Link href='/' className="no-underline">MirzaZain</Link></h1>
        {mobVisible ? (
            <i className="ri-close-fill text-2xl font-bold z-50 md:hidden" onClick={toggleButton}></i>
          ) : (
            <i className="ri-menu-4-line text-2xl font-bold md:hidden" onClick={toggleButton}></i>
          )}
          <div className="hidden md:flex" >
              <nav className="flex gap-6 font-poppins text-lg font-bolder" >
                  <Link href="/" className = {path === "/" ? "text-[#D0021B]" : "text-[#4A90E2]"} >Home</Link>
                  <Link href="/about" className = {path === "/about" ? "text-[#D0021B]" : "text-[#4A90E2]"} >About</Link>
                  <Link href="/projects" className = {path === "/projects" ? "text-[#D0021B]" : "text-[#4A90E2]"} >Projects</Link>
                  <Link href="/contact" className = {path === "/contact" ? "text-[#D0021B]" : "text-[#4A90E2]"} >Contact</Link>
              </nav>
          </div>
          <div className='hidden md:flex gap-5'>
            <a className='text-2xl text-[#4A90E2] hover:text-[#D0021B] mx-3' href="#" target='_blank' title='instagram'><i className="ri-instagram-line"></i></a>
            <a className='text-2xl text-[#4A90E2] hover:text-[#D0021B] mx-3' href="#" target='_blank' title='linkedin'><i className="ri-linkedin-fill"></i></a>
            <a className='text-2xl text-[#4A90E2] hover:text-[#D0021B] mx-3' href="#" target='_blank' title='github'><i className="ri-github-fill"></i></a>
          </div>
      </div>
      {mobVisible && (
        <div className='w-full h-screen bg-[#F5F7FA] flex flex-col justify-center items-center fixed md:hidden z-40'>
          <nav className="flex flex-col justify-center items-center gap-8 font-poppins text-lg font-bold " >
            <Link href="/" onClick={handleClick} className = {path === "/" ? "text-[#D0021B]" : "text-[#4A90E2]"} >Home</Link>
            <Link href="/about" onClick={handleClick} className = {path === "/about" ? "text-[#D0021B]" : "text-[#4A90E2]"} >About</Link>
            <Link href="/projects" onClick={handleClick} className = {path === "/projects" ? "text-[#D0021B]" : "text-[#4A90E2]"} >Projects</Link>
            <Link href="/contact" onClick={handleClick} className = {path === "/contact" ? "text-[#D0021B]" : "text-[#4A90E2]"} >Contact</Link>
          </nav>
        </div>
      )
      }
    </>
  )
}

export default Navbar