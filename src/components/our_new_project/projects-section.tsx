import React from 'react';
import ProjectCard from "./projectCards";
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Sylvan Retreat",
    image: "https://images.pexels.com/photos/20580717/pexels-photo-20580717/free-photo-of-ivory-cottage-and-green-bushes-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: "/sylvan-retreat"
  },
  {
    id: 2,
    title: "Aarika",
    image: "https://thesamrudhi.com/assets/project_one-CFfO-9Th.jpg",
    isSecondProject: true,
    route: "/aarika-project"
  },
  {
    id: 3,
    title: "DHS Projects",
    image: "https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: "/dhs-landingpage"
  },
]

export default function ProjectsSection() {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 font-[Arial,Helvetica,sans-serif]">
            <span className="text-black">Our</span>{" "}
            <span className="text-yellow-500">Projects</span>
          </h1>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform cursor-pointer"
              onClick={() => handleCardClick(project.route)}
            >
              <ProjectCard 
                title={project.title} 
                image={project.image} 
                isSecondProject={project.isSecondProject} 
              />
            </div>
          ))}                                            
        </div>
      </div>
    </section>
  )
}


// "use client"

// import ProjectCard from "./projectCards"

// const projects = [
//   {
//     id: 1,
//     title: "Sylvan Retreat",
//     image: "https://images.pexels.com/photos/20580717/pexels-photo-20580717/free-photo-of-ivory-cottage-and-green-bushes-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 2,
//     title: "Aarika",
//     image: "https://thesamrudhi.com/assets/project_one-CFfO-9Th.jpg",
//     isSecondProject: true,
//   },
//   {
//     id: 3,
//     title: "DHS Projects",
//     image: "https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
// ]

// export default function ProjectsSection() {
//   return (
//     <section className="w-full bg-white py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           {/* <h1 className="text-5xl font-bold text-green-600 mb-4 font-[Arial,Helvetica,sans-serif] ">Our Projects</h1> */}
//          <h1 className="text-5xl font-bold mb-4 font-[Arial,Helvetica,sans-serif]">
//   <span className="text-black">Our</span>{" "}
//   <span className="text-yellow-500">Projects</span>
// </h1>

//         </div>
//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
//               <ProjectCard title={project.title} image={project.image} isSecondProject={project.isSecondProject} />
//             </div>
//           ))}                                            
//         </div>
//       </div>
//     </section>
//   )
// }
