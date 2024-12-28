import ProjectCard from '../components/ProjectCard';
import Pro1 from '../Images/pro1.png'; 
import Pro2 from '../Images/pro2.png';
import Pro3 from '../Images/pro3.png';
import "./pro.css"

const projects = [
  { title: 'Resume Builder', imageSrc: Pro1, altText: 'pro 1', description: "lorem2" },
  { title: 'My Hero Academia Fan Web', imageSrc: Pro2, altText: 'pro 2', description: "lorem2" },
  { title: 'One Piece Fan Web', imageSrc: Pro3, altText: 'pro 3', description: "lorem2" },
  // Add more projects as needed
];

const Project = () => {
  return (
    <div className="w-full h-full flex flex-col flex-1 p-8 overflow-hidden scrollbar-hide">
      <h2 className="text-3xl md:text-6xl font-lobster font-bold m-6 text-center text-[#4A90E2]">My Work</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            altText={project.altText}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;