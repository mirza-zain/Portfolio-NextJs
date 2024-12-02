'use client'

import React from 'react'
// import { useTypewriter, Cursor } from "react-simple-typewriter"
// import Lottie from 'lottie-react'
// import Hero from './Images/Astronot.json'

export default function Home() {
  // const [text] = useTypewriter({
  //   words: ['Software Engineer', 'Full Stack Developer'],
  //   loop: true,
  //   typeSpeed: 100,
  //   deleteSpeed: 80
  // })
  return (
    <div className="w-full h-full flex flex-1">
      <div className="w-full absolute top-1/3 md:top-1/3 left-1/2 -translate-x-1/2 ">
        <h1 className="text-5xl text-center md:text-7xl font-poppins font-bold text-white">Mirza Zain</h1>
        {/* <p className='text-center absolute top-3/4 left-1/2 -translate-x-1/2 translate-y-2/3 font-bold text-sm md:text-2xl font-poppins'>
          I&apos;m a <span className='text-[#E40037]'>{text}</span>
          <Cursor cursorColor='white' cursorStyle='|' />
        </p> */}
      </div>
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
        <Lottie className="h-[250px] w-[350px] md:h-[300px] md:w-[300px]" animationData={Hero} />
      </div> */}
    </div>
  );
}