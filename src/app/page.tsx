import Image from "next/image";
import Hero from './Images/circle.png'

export default function Home() {
  return (
    <div className="w-full h-full flex flex-1 ">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 ">
        <h1 className="text-7xl font-poppins font-bold text-white pb-8 hover:">Mirza Zain</h1>
        <Image src={Hero} height={250} width={350}  alt="Hero Image"/>
      </div>
    </div>
  );
}
