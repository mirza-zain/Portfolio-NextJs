'use client'

import React, { useEffect, useState } from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import dynamic from 'next/dynamic'
import hero from './Images/Astronot.json'

// Dynamically import the Lottie component with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function Home() {
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Full Stack Dev'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-full flex flex-1">
      <div className="w-full absolute top-1/3 md:top-1/3 left-1/2 -translate-x-1/2 ">
        <h1 className="text-5xl text-center md:text-7xl font-poppins font-bold text-[#4A90E2]">Mirza Zain</h1>
        <p className='text-center absolute top-3/4 left-1/2 -translate-x-1/2 translate-y-2/3 font-bold text-sm md:text-2xl font-poppins'>
          I&apos;m a <span className='text-[#D0021B]'>{text}</span>
          <Cursor cursorColor='white' cursorStyle='|' />
        </p>
      </div>
      {isClient ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
          <Lottie animationData={hero} className="h-[250px] w-[350px] md:h-[300px] md:w-[300px]" />
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
          {/* Fallback content while Lottie is loading */}
          <p>Loading animation...</p>
        </div>
      )}
    </div>
  );
}