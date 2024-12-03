import Image from 'next/image'
import Profile from '../Images/profile.png'

const About = () => {
  return (
    <div className="w-full h-full flex flex-1 p-4 md:p-8">
      <div className="w-full flex flex-col md:flex-row mt-5 overflow-hidden">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold font-lobster mb-6 mt-5">About Me</h2>
          <p className="text-lg md:text-xl font-semibold font-poppins w-full md:w-4/5 text-left md:text-justify">Dedicated front-end web developer with a strong foundation in HTML, CSS, JavaScript, React and Next JS. 
            Currently pursuing a Software Engineering degree at SMIU University. 
            Proven ability to create intuitive user interfaces and collaborate effectively within teams. 
            Passionate about problem-solving and contributing to innovative web development projects.</p>
        </div>
        <div className="w-full md:w-1/2 mt-8 flex flex-col md:flex-row justify-center items-center">
          <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] border-t-8 border-b-0 border-r-8 border-l-0 border-[#E40037] bg-[#E40037] rounded-md">
            <Image className="w-[290px] h-[300px] md:w-[340px] md:h-[350px] object-cover rounded-lg" src={Profile} alt='my profile' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About