"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Users, TrendingUp, Lightbulb, Check } from "lucide-react"
import FadeContent from "../../utils/FadeContent.jsx";

const services = [
  {
    id: "01",
    title: "Land Procurement",
    description: "Identifying and acquiring strategically located plots for development",
    icon: Search,
    color: "yellow",
    bgGradient: "from-yellow-400 to-yellow-600",
    shadowColor: "shadow-yellow-500/30",
    ringColor: "ring-yellow-400/20",
    cardGradient: "from-yellow-200 to-green-50",
    features: [
      "Strategic location analysis",
      "Land acquisition expertise",
      "Due diligence process",
      "Market research"
    ]
  },
  {
    id: "02",
    title: "Project Planning & Execution",
    description: "From conceptualization to completion, managing all phases of residential layout development",
    icon: Users,
    color: "yellow",
    bgGradient: "from-yellow-400 to-yellow-600",
    shadowColor: "shadow-yellow-600/30",
    ringColor: "ring-yellow-400/20",
    cardGradient: "from-yellow-200 to-teal-50",
    features: [
      "Comprehensive project planning",
      "Quality construction management",
      "Timely execution",
      "Budget optimization"
    ]
  },
  {
    id: "03",
    title: "Legal Documentation",
    description: "Ensuring all necessary legal processes and documentation are meticulously handled",
    icon: TrendingUp,
    color: "yellow",
    bgGradient: "from-yellow-400 to-yellow-600",
    shadowColor: "shadow-yellow-500/30",
    ringColor: "ring-yellow-400/20",
    cardGradient: "from-yellow-200 to-cyan-50",
    features: [
      "Legal compliance assurance",
      "Document verification",
      "Regulatory approvals",
      "Title clearance"
    ]
  },
  {
    id: "04",
    title: "Marketing and Sales",
    description: "Developing and implementing effective marketing strategies to promote our projects and facilitate sales",
    icon: Lightbulb,
    color: "cyan",
    bgGradient: "from-yellow-400 to-yellow-600",
    shadowColor: "shadow-yellow-500/30",
    ringColor: "ring-yellow-400/20",
    cardGradient: "from-yellow-200 to-blue-50",
    features: [
      "Strategic marketing campaigns",
      "Sales facilitation",
      "Customer relationship management",
      "Market positioning"
    ]
  },
]

export default function ServiceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
    <div className="projects-container-new ">
      <FadeContent
        blur={true}
        duration={900}
        easing="ease-out"
        initialOpacity={0} >
        {/* <h2 className="project-subtitle justify-center flex ">Our Services</h2> */}
     <h2 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight text-center">
        <span className="text-[#000000] md:text-[50px]">Our</span>{' '}
        <span className="text-[#fde047] md:text-[50px]">Services</span>
      </h2>

      </FadeContent>
     
      <div ref={containerRef} className="w-full max-w-7xl mx-auto pt-3 pb-16 ">
        {/* Desktop Layout - 4 Cards Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative transition-all duration-700 delay-${index * 150} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}   
            >
              {/* Main Card */}
              <div
               className={`relative bg-gradient-to-br ${service.cardGradient} rounded-2xl p-6 border border-yellow-400 shadow-md hover:shadow-yellow-400/30 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 backdrop-blur-sm h-full flex flex-col`}
              >
                {/* Header with Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                  {/* Service Number */}
                  <div
                    className={`px-3 py-1 rounded-lg bg-gradient-to-r ${service.bgGradient} text-white font-bold text-sm tracking-wider shadow-md`}
                  >
                    {service.id}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500 scale-110`}
                    />
                    <div
                      className={`relative w-14 h-14 rounded-full bg-white flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 ${service.shadowColor} shadow-lg ring-4 ${service.ringColor}`}
                    >
                      <service.icon
                        className={`w-6 h-6 text-gray-700 transition-all duration-500 group-hover:scale-110`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <FadeContent
                  blur={true}
                  duration={900}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <h3 className="text-lg font-bold font-[Arial,Helvetica,sans-serif] text-gray-800 mb-3 leading-tight">
                    {service.title}
                  </h3>
                </FadeContent>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features List with Checkboxes */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-1"
                    >
                      {/* Checkbox */}
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${service.bgGradient} flex items-center justify-center shadow-sm`}
                      >
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-xs text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
                />
              </div>

              {/* Enhanced Shadow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-20 scale-105 group-hover:scale-110`}
              />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative transition-all duration-700 delay-${index * 150} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Mobile Card */}
              <div
                className={`relative bg-gradient-to-br ${service.cardGradient} rounded-xl p-5 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-102 ${service.shadowColor} backdrop-blur-sm h-full flex flex-col`}
              >
                {/* Header with Icon and Title */}
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`px-2 py-1 rounded-md bg-gradient-to-r ${service.bgGradient} text-white font-bold text-xs tracking-wider shadow-md`}
                  >
                    {service.id}
                  </div>
                  
                  <div className="relative">
                    <div
                      className={`relative w-12 h-12 rounded-full bg-white flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 ${service.shadowColor} shadow-md ring-3 ${service.ringColor}`}
                    >
                      <service.icon
                        className={`w-5 h-5 text-gray-700 transition-all duration-500`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-800 mb-2 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div
                        className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r ${service.bgGradient} flex items-center justify-center shadow-sm`}
                      >
                        <Check className="w-2 h-2 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-xs text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
