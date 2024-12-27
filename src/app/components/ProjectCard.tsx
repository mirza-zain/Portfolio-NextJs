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
    <div className="w-full h-full md:w-[40%] md:h-[50%] mx-auto border-4 border-[#E40037] overflow-hidden">
      <div className="relative w-full h-full text-black bg-white group">
        <Image src={imageSrc} className="w-full h-full object-cover" alt={altText} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#E40037] bg-white bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-2xl font-lobster">{title}</h3>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;