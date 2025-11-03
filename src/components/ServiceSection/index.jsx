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
    color: "green",
    bgGradient: "from-green-400 to-green-600",
    shadowColor: "shadow-green-500/30",
    ringColor: "ring-green-400/20",
    cardGradient: "from-green-200 to-emerald-50",
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
    color: "emerald",
    bgGradient: "from-emerald-400 to-emerald-600",
    shadowColor: "shadow-emerald-500/30",
    ringColor: "ring-emerald-400/20",
    cardGradient: "from-emerald-200 to-teal-50",
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
    color: "teal",
    bgGradient: "from-teal-400 to-teal-600",
    shadowColor: "shadow-teal-500/30",
    ringColor: "ring-teal-400/20",
    cardGradient: "from-teal-200 to-cyan-50",
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
    bgGradient: "from-cyan-400 to-cyan-600",
    shadowColor: "shadow-cyan-500/30",
    ringColor: "ring-cyan-400/20",
    cardGradient: "from-cyan-200 to-blue-50",
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
               className={`relative bg-gradient-to-br ${service.cardGradient} rounded-2xl p-6 border border-green-400 shadow-md hover:shadow-green-400/30 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 backdrop-blur-sm h-full flex flex-col`}
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

// "use client"

// import { useEffect, useRef, useState } from "react"
// import { Search, Users, TrendingUp, Lightbulb } from "lucide-react"
// import FadeContent from "../../utils/FadeContent.jsx";

// const steps = [
//   {
//     id: "01",
//     title: "Land Procurement:",
//     description:
//       " Identifying and acquiring strategically located plots for development",
//     icon: Search,
//     color: "orange",
//     bgGradient: "from-orange-500 to-orange-600",
//     shadowColor: "shadow-orange-500/50",
//     ringColor: "ring-orange-400/30",
//   },
//   {
//     id: "02",
//     title: "Project Planning and Execution",
//     description:
//       "From conceptualization to completion, managing all phases of residential layout development",
//     icon: Users,
//     color: "red",
//     bgGradient: "from-red-500 to-red-600",
//     shadowColor: "shadow-red-500/50",
//     ringColor: "ring-red-400/30",
//   },
//   {
//     id: "03",
//     title: "Legal Documentation:",
//     description:
//       "Ensuring all necessary legal processes and documentation are meticulously handled",
//     icon: TrendingUp,
//     color: "purple",
//     bgGradient: "from-purple-600 to-purple-700",
//     shadowColor: "shadow-purple-600/50",
//     ringColor: "ring-purple-500/30",
//   },
//   {
//     id: "04",
//     title: "Marketing and Sales",
//     description:
//       "Developing and implementing effective marketing strategies to promote our projects and facilitate sales.",
//     icon: Lightbulb,
//     color: "teal",
//     bgGradient: "from-teal-500 to-teal-600",
//     shadowColor: "shadow-teal-500/50",
//     ringColor: "ring-teal-400/30",
//   },
// ]

// export default function ServiceSection() {
//   const [isVisible, setIsVisible] = useState(false)
//     const [checkedCards, setCheckedCards] = useState([false, false, false, false]);

//   const containerRef = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (containerRef.current) {
//       observer.observe(containerRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])
//    const handleCheckbox = (idx) => {
//     setCheckedCards((prev) => {
//       const updated = [...prev];
//       updated[idx] = !updated[idx];
//       return updated;
//     });
//   };

//   return (
//     <>
//         <FadeContent blur duration={900} easing="ease-out" initialOpacity={0}>
//         <h2 className="project-subtitle justify-center flex">Our Services</h2>
//       </FadeContent>
//       <div ref={containerRef} className="w-full max-w-7xl mx-auto pt-14 pb-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {steps.map((step, idx) => (
//             <label
//               key={step.id}
//               className={`
//                 group relative flex flex-col items-center p-8 rounded-2xl border-2 transition-all cursor-pointer
//                 bg-gradient-to-br from-green-50 via-white to-green-100
//                 hover:from-green-100 hover:via-green-50 hover:to-green-200
//                 shadow-[0_8px_32px_rgba(52,199,89,0.15)] 
//                 ${checkedCards[idx] ? "border-green-500 shadow-green-300/40 scale-105" : "border-gray-200"}
//                 hover:border-green-400 hover:shadow-green-200/30
//                 duration-300
//               `}
//             >
//               {/* Custom Checkbox */}
//               <input
//                 type="checkbox"
//                 checked={checkedCards[idx]}
//                 onChange={() => handleCheckbox(idx)}
//                 className="absolute right-4 top-4 w-5 h-5 accent-green-500 rounded-full border-2 border-green-400 shadow-green-100 shadow focus:ring-2 focus:ring-green-300 outline-none"
//               />
//               {/* Badge */}
//               <div className={`px-4 py-1.5 rounded-md bg-gradient-to-r ${step.bgGradient} text-white font-bold text-sm tracking-wider shadow-lg mb-4 mt-2`}>
//                 {step.id}
//               </div>
//               {/* Icon */}
//               <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-3 border-4 border-green-200 group-hover:border-green-300 transition-all duration-300">
//                 <step.icon className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
//               </div>
//               <h3 className="mt-2 font-semibold text-lg text-gray-800 text-center">{step.title}</h3>
//               <p className="mt-2 text-base text-gray-600 text-center leading-relaxed">
//                 {step.description}
//               </p>
//             </label>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// "use client"

// import { useEffect, useRef, useState } from "react"
// import { Search, Users, TrendingUp, Lightbulb } from "lucide-react"
// import FadeContent from "../../utils/FadeContent.jsx";
// const steps = [
//   {
//     id: "01",
//     title: "PRELIMINARY RESEARCH",
//     description:
//       "In the initial phase of the project, we will conduct preliminary research to gather essential insights and information.",
//     icon: Search,
//     color: "orange",
//     bgGradient: "from-orange-500 to-orange-600",
//     shadowColor: "shadow-orange-500/50",
//     ringColor: "ring-orange-400/30",
//   },
//   {
//     id: "02",
//     title: "STAKEHOLDER ENGAGEMENT",
//     description:
//       "In the second phase, we will engage with stakeholders to identify key perspectives and ensure their input is incorporated into the process.",
//     icon: Users,
//     color: "red",
//     bgGradient: "from-red-500 to-red-600",
//     shadowColor: "shadow-red-500/50",
//     ringColor: "ring-red-400/30",
//   },
//   {
//     id: "03",
//     title: "DATA EVALUATION",
//     description:
//       "In the third phase, we will perform data analysis to identify key patterns and insights that will inform our next steps.",
//     icon: TrendingUp,
//     color: "purple",
//     bgGradient: "from-purple-600 to-purple-700",
//     shadowColor: "shadow-purple-600/50",
//     ringColor: "ring-purple-500/30",
//   },
//   {
//     id: "04",
//     title: "COMMUNICATION OPTIMIZATION",
//     description:
//       "In the fourth phase, we will communicate our findings to relevant stakeholders to share insights and recommendations.",
//     icon: Lightbulb,
//     color: "teal",
//     bgGradient: "from-teal-500 to-teal-600",
//     shadowColor: "shadow-teal-500/50",
//     ringColor: "ring-teal-400/30",
//   },
// ]

// export default function ServiceSection() {
//   const [isVisible, setIsVisible] = useState(false)
//   const containerRef = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (containerRef.current) {
//       observer.observe(containerRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <>
//        {/* <FadeContent
//         blur={true}
//         duration={900}
//         easing="ease-out"
//         initialOpacity={0}
//       >
//         <h1
//           className="work-title"
//           style={{ textAlign: "center", marginTop: "29px" }}
//         >
//           Our Working Process
//         </h1>
//       </FadeContent> */}
//         <FadeContent
//               blur={true}
//               duration={900}
//               easing="ease-out"
//               initialOpacity={0}
//             >
//               <h2 className="project-subtitle justify-center flex">Our Working Process</h2>
//             </FadeContent>
//     <div ref={containerRef} className="w-full max-w-7xl mx-auto pt-14 pb-14">
//       {/* Desktop Layout */}
//       <div className="hidden lg:flex items-start justify-center gap-0">
//         {steps.map((step, index) => (
//           <div key={step.id} className="flex items-start ">
//                {/* Step Number Badge */}
//               <div
//                 className={` mt-6 px-4 py-1.5 rounded-md bg-gradient-to-r ${step.bgGradient} text-white font-bold text-sm tracking-wider shadow-lg transform transition-all duration-500 group-hover:scale-105`}
//                 >
//                 Step {step.id}
//               </div>
//             {/* Step Card */}
//             <div
//               className={` border-2 border-blue-700 flex flex-col items-center transition-all duration-700 delay-${index * 150} ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//               >
                
//               {/* Circle Badge with 3D Effect */}
//               <div className="relative group">
//                 {/* Outer ring for hover effect */}
//                 <div
//                   className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-110`}
//                   />
//                 {/* Main circle container with 3D shadow */}
//                 <div className="relative">
//                   {/* Bottom shadow layer */}
//                   <div
//                     className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} translate-y-2 blur-md ${step.shadowColor} shadow-2xl`}
//                     />

//                   {/* Middle shadow layer */}
//                   <div
//                     className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} translate-y-1 opacity-60`}
//                     />

//                   {/* Top circle with white background */}
//                   <div
//                     className={`relative w-40 h-40 rounded-full bg-white flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 ${step.shadowColor} shadow-xl ring-8 ${step.ringColor} ring-offset-4`}
//                     >
//                     {/* Icon */}
//                     <step.icon
//                       className={`w-16 h-16 text-gray-700 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
//                       strokeWidth={1.5}
//                       />
//                   </div>
//                 </div>
//               </div>

           

//               {/* Title */}
//               <h3 className="mt-4 text-sm font-bold text-gray-800 tracking-wide text-center max-w-[200px] transition-colors duration-300 group-hover:text-gray-900">
//                 {step.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-3 text-xs text-gray-600 text-center max-w-[220px] leading-relaxed">{step.description}</p>
//             </div>

//             {/* Arrow Connector */}
//             {index < steps.length - 1 && (
//               <div
//               className={`flex items-center justify-center mt-20 mx-4 transition-all duration-700 delay-${
//                 index * 150 + 300
//               } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
//               >
//                 <div className="relative">
//                   {/* Animated arrow */}
//                   <svg width="60" height="40" viewBox="0 0 60 40" className="animate-pulse-slow">
//                     <defs>
//                       <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
//                         <stop
//                           offset="0%"
//                           className={`text-${steps[index].color}-500`}
//                           stopColor="currentColor"
//                           stopOpacity="0.6"
//                           />
//                         <stop
//                           offset="100%"
//                           className={`text-${steps[index + 1].color}-500`}
//                           stopColor="currentColor"
//                           stopOpacity="0.6"
//                           />
//                       </linearGradient>
//                     </defs>
//                     {/* Arrow line */}
//                     <line
//                       x1="0"
//                       y1="20"
//                       x2="45"
//                       y2="20"
//                       stroke={`url(#gradient-${index})`}
//                       strokeWidth="3"
//                       className="animate-draw-line"
//                       />
//                     {/* Arrow head */}
//                     <polygon
//                       points="45,12 60,20 45,28"
//                       className={`fill-${steps[index + 1].color}-500`}
//                       fill="currentColor"
//                       fillOpacity="0.6"
//                       />
//                   </svg>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Mobile/Tablet Layout */}
//       <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-12">
//         {steps.map((step, index) => (
//           <div
//           key={step.id}
//           className={`flex flex-col items-center transition-all duration-700 delay-${index * 150} ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//           >
//             {/* Circle Badge with 3D Effect */}
//             <div className="relative group">
//               <div
//                 className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-110`}
//               />

//               <div className="relative">
//                 <div
//                   className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} translate-y-2 blur-md ${step.shadowColor} shadow-2xl`}
//                   />

//                 <div
//                   className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} translate-y-1 opacity-60`}
//                   />

//                 <div
//                   className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 ${step.shadowColor} shadow-xl ring-8 ${step.ringColor} ring-offset-4`}
//                   >
//                   <step.icon
//                     className={`w-12 h-12 md:w-16 md:h-16 text-gray-700 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
//                     strokeWidth={1.5}
//                     />
//                 </div>
//               </div>
//             </div>

//             <div
//               className={`mt-6 px-4 py-1.5 rounded-md bg-gradient-to-r ${step.bgGradient} text-white font-bold text-sm tracking-wider shadow-lg transform transition-all duration-500 group-hover:scale-105`}
//               >
//               {step.id}
//             </div>

//             <h3 className="mt-4 text-sm font-bold text-gray-800 tracking-wide text-center max-w-[200px]">
//               {step.title}
//             </h3>

//             <p className="mt-3 text-xs text-gray-600 text-center max-w-[220px] leading-relaxed">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//         </>
//   )
// }



// import React from "react";
// import targetIcon from "../../components/assets/focus (1).png";
// import identification from "../../components/assets/document.png";
// import Check from "../../components/assets/check (1).png";
// import Management from "../../components/assets/management (1).png";
// import Plant from "../../components/assets/plant-1-new.png";
// import FadeContent from "../../utils/FadeContent.jsx";

// import "./style.css";

// const ServiceSection = () => {
//   const disableContextMenu = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <section className="service-area -mt-10">
//       <div
//         className="service-area-container"
//         onContextMenu={disableContextMenu}
//       >
//         <span style={{ marginRight: "15px", color: "#c6993e" }}>
//           ....................
//         </span>{" "}
//         <img style={{ width: "40px", height: "40px" }} src={Plant} alt="" />{" "}
//         <span style={{ marginLeft: "15px", color: "#c6993e" }}>
//           ....................
//         </span>
//       </div>
//       <FadeContent
//         blur={true}
//         duration={900}
//         easing="ease-out"
//         initialOpacity={0}
//       >
//         <h1
//           className="work-title"
//           style={{ textAlign: "center", marginTop: "29px" }}
//         >
//           Our Working Process
//         </h1>
//       </FadeContent>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-3 col-md-6">
//             <div
//               className="service-box"
//               data-aos="fade-up"
//               data-aos-delay="200"
//               style={{ height: "91%" }}
//             >
//               <div
//                 className="step-header-container"
//                 style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
//               >
//                 <div
//                   className="step-header"
//                   style={{ backgroundColor: "#c6993e", width: "100px" }}
//                 >
//                   STEP 01{" "}
//                 </div>
//               </div>
//               <div className="service-icon">
//                 <img
//                   src={targetIcon}
//                   alt="img"
//                   onContextMenu={disableContextMenu}
//                 />
//               </div>
//               <div className="service-text">
//                 <p className="service-steps">Aim on Independent Assessments</p>
//                 <p>
//                   We aim to provide an independent assessment that examines all
//                   aspects of a proposed project, including technical, economic,
//                   financial, legal and environmental considerations.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <div
//               className="service-box"
//               data-aos="fade-up"
//               data-aos-delay="350"
//               style={{ height: "91%" }}
//             >
//               <div
//                 className="step-header-container"
//                 style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
//               >
//                 <div
//                   className="step-header"
//                   style={{ backgroundColor: "#c6993e", width: "100px" }}
//                 >
//                   STEP 02{" "}
//                 </div>
//               </div>
//               <div className="service-icon">
//                 <img src={identification} alt="img" />
//               </div>
//               <div className="service-text">
//                 <p className="service-steps">
//                   Land Identification and Acquisition
//                 </p>
//                 <p>
//                   Specializing in pinpointing ideal land prospects, we
//                   meticulously evaluate for suitability, fertility, and
//                   strategic value. Our process ensures precise acquisition,
//                   securing prime plots for diverse agricultural pursuits.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <div
//               className="service-box"
//               data-aos="fade-up"
//               data-aos-delay="500"
//               style={{ height: "91%" }}
//             >
//               <div
//                 className="step-header-container"
//                 style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
//               >
//                 <div
//                   className="step-header"
//                   style={{ backgroundColor: "#c6993e", width: "100px" }}
//                 >
//                   STEP 03{" "}
//                 </div>
//               </div>
//               <div className="service-icon">
//                 <img src={Check} alt="img" />
//               </div>
//               <div className="service-text">
//                 <p className="service-steps">Project Delivery</p>
//                 <p>
//                   We assure to deliver more than just a project, we deliver a
//                   vision realized, a dream fulfilled and projects where every
//                   detail has been crafted to perfection.
//                   <br />
//                   <br />
//                   <br />
//                   <br />
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <div
//               className="service-box"
//               data-aos="fade-up"
//               data-aos-delay="650"
//               style={{ height: "91%" }}
//             >
//               <div
//                 className="step-header-container"
//                 style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
//               >
//                 <div
//                   className="step-header"
//                   style={{ backgroundColor: "#c6993e", width: "100px" }}
//                 >
//                   STEP 04{" "}
//                 </div>
//               </div>
//               <div className="service-icon">
//                 <img src={Management} alt="img" />
//               </div>
//               <div className="service-text">
//                 <p className="service-steps">
//                   Property Management & Maintenance
//                 </p>
//                 <p>
//                   Our team focuses on maintenance of the Projects to retain its
//                   aesthetic appearance in order to ensure that your investment
//                   retains and appreciates its value.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;
