import React from 'react'

const About = () => {
  return (
    <div className="w-full h-full flex flex-1">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-1/2">
          <h2>About Me</h2>
          <p></p>
        </div>
        <div className="w-1/2">
          <div className="w-[400px] h-[400px] bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default About