"use client"

interface ProjectCardProps {
  title: string
  image: string
  isSecondProject?: boolean
}

export default function ProjectCard({ title, image, isSecondProject = false }: ProjectCardProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Project Title with Green Underline */}
      <div className="mb-4">
        <h3 className="text-xl font-[Arial,Helvetica,sans-serif] font-bold text-black mb-2">{title}</h3>
        <div className="w-12 h-1 bg-green-600 rounded-full"></div>
      </div>
      {/* Project Image Container */}
      <div className={`flex-1 rounded-xl overflow-hidden mb-6 ${isSecondProject ? "overflow-hidden" : ""}`}>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`w-full h-64 object-cover ${
            isSecondProject ? "transition-transform duration-500 hover:scale-110" : ""
          }`}
        />
      </div>
      {/* View Project Details Link */}
      <div className="flex items-center justify-between  border-gray-200 p-2">
        <span className="text-gray-500 font-medium">View Project Details</span>
        <svg
          className="w-5 h-5 text-green-600 transition-transform duration-300 hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}
