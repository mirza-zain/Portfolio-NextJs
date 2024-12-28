import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ProjectCardProps {
  title: string;
  imageSrc: StaticImageData;
  altText: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc, altText, description }) => {
  return (
    <div className="w-full h-full md:w-[40%] md:h-[50%] mx-auto border-4 border-[#D0021B] overflow-hidden">
      <div className="relative w-full h-full text-black bg-white group">
        <Image src={imageSrc} className="w-full h-full object-cover" alt={altText} />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-2xl font-lobster text-[#D0021B]">{title}</h3>
          <span className="text-black font-poppins font-medium">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;