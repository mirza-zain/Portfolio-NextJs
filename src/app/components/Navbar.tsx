'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const path = usePathname()
    const [mobVisible, setMobVisible] = useState(false)

    const toggleButton = () => { setMobVisible(!mobVisible) }

  return (
    <>
      <div className='h-16 w-full flex text-white justify-between p-5 items-center'>
        <h1 className='font-pacifico text-3xl text-[#E40037]'>MirzaZain</h1>
        {mobVisible ? (
            <i className="ri-close-fill text-2xl font-bold z-50 md:hidden" onClick={toggleButton}></i>
          ) : (
            <i className="ri-menu-4-line text-2xl font-bold md:hidden" onClick={toggleButton}></i>
          )}
          <div className="hidden md:flex" >
              <nav className="flex gap-6 font-poppins text-lg font-bold" >
                  <Link href="/" className = {path === "/" ? "text-[#E40037]" : "text-white"} >Home</Link>
                  <Link href="/about" className = {path === "/about" ? "text-[#E40037]" : "text-white"} >About</Link>
                  <Link href="/projects" className = {path === "/projects" ? "text-[#E40037]" : "text-white"} >Projects</Link>
                  <Link href="/contact" className = {path === "/contact" ? "text-[#E40037]" : "text-white"} >Contact</Link>
              </nav>
          </div>
          <div className='hidden md:flex gap-5'>
            <a className='text-xl text-white hover:text-[#E40037] mx-3' href="#" target='_blank' title='instagram'><i className="ri-instagram-line"></i></a>
            <a className='text-xl text-white hover:text-[#E40037] mx-3' href="#" target='_blank' title='linkedin'><i className="ri-linkedin-fill"></i></a>
            <a className='text-xl text-white hover:text-[#E40037] mx-3' href="#" target='_blank' title='github'><i className="ri-github-fill"></i></a>
          </div>
      </div>
      {mobVisible && (
        <div className='w-full h-screen bg-black flex flex-col justify-center items-center fixed md:hidden z-40'>
          <nav className="flex flex-col justify-center items-center gap-8 font-poppins text-lg font-bold" >
            <Link href="/" className = {path === "/" ? "text-[#E40037]" : "text-white"} >Home</Link>
            <Link href="/about" className = {path === "/about" ? "text-[#E40037]" : "text-white"} >About</Link>
            <Link href="/projects" className = {path === "/projects" ? "text-[#E40037]" : "text-white"} >Projects</Link>
            <Link href="/contact" className = {path === "/contact" ? "text-[#E40037]" : "text-white"} >Contact</Link>
          </nav>
        </div>
      )
      }
    </>
  )
}

export default Navbar