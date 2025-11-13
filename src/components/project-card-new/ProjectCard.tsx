import { Link } from "react-router-dom";
import { cn } from "../../utils/utils";

interface ProjectCardProps {
  name: string;
  logo: string;
  backgroundImage: string;
  link: string;
  className?: string;
}
 
const ProjectCard = ({ name, logo, backgroundImage, link, className }: ProjectCardProps ) => {
  return (
    <div className={cn("group flex flex-col", className)}>
      {/* Project Name Above Card */}
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-foreground">{name}</h3>
        <div className="h-1 w-12 bg-primary mt-2 rounded-full transition-all duration-300 group-hover:w-24"></div>
      </div>

      {/* Card */}
      <Link 
        to={link}
        className="block bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1"
        style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)' }}
      >
        {/* Image Container with Logo Overlay */}
        <div 
          className="relative h-64 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40"></div>
          
          {/* Logo */}
          <img
            src={logo}  
            alt={name} 
            className="relative z-10 w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 bg-card">
          <div className="flex items-center justify-between">
            {/* <span className="text-sm text-muted-foreground">View Project Details</span> */}
            <svg 
              className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
