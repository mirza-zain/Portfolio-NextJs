import Image from 'next/image'
import Demo from '../Images/demo.png'

const Project = () => {
  return (
    <div className="w-full h-full flex flex-col flex-1 p-8">
      <h2 className="text-5xl font-lobster font-bold m-5 text-center">My Work</h2>
      <div className="w-[22%] h-3 bg-[#E40037] m-5 translate-x-1/2 "></div>
      <div className="w-[45%] h-[55%] mx-auto border-4 border-[#E40037]">
        <div className="relative w-full h-full text-black bg-white group">
          <Image src={Demo} className="w-full h-full object-cover" alt="demo" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#E40037] bg-white bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-2xl font-lobster">Demo Project</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, soluta.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project