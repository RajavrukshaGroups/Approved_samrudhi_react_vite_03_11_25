// import Image from "next/image"
import AboutImg from "../../components/assets/modernhome.jpg";

const KeyConcept = () => {

  const features = [
    {
      number: "01.",
      title: "Integrity and Transparency",
      subtitle: "We uphold the highest ethical standards in all our dealings, ensuring honesty and openness with clients, partners, and stakeholders.",
    },
    {
      number: "02.",
      title: "Client-Centric Approach",
      subtitle: "Our clients' needs and aspirations are at the forefront of our operations. We strive to exceed expectations by providing personalized and attentive service.",
    },
    {
      number: "03.",
      title: "Excellence in Execution",
      subtitle: "We are committed to delivering superior quality in every project, from land procurement to legal documentation, ensuring precision and professionalism.",
    },
    {
      number: "04.",
      title: "Innovation and Adaptability",
      subtitle: "Embracing change, we continuously seek innovative solutions and adapt to market dynamics to provide cutting-edge real estate services.",
    },
    {
      number: "05.",
      title: "Collaboration and Teamwork",
      subtitle: "We believe in the power of collective effort. Our team works synergistically, valuing each member's contribution to achieve common goals.",
    },
    {
      number: "06.",
      title: "Community Engagement",
      subtitle: "We are dedicated to contributing positively to the communities we serve, fostering development and creating lasting value.",
    },
    {
      number: "07.",
      title: "Sustainability and Responsibility",
      subtitle: "We prioritize sustainable practices, ensuring that our developments are environmentally responsible and contribute to the well-being of future generations.",
    },
    {
      number: "08.",
      title: "Continuous Improvement",
      subtitle: "We are committed to ongoing learning and development, striving to enhance our skills, services, and processes to better serve our clients",
    },
  ]
  
  return (
    <main className="min-h bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ffffff] ">
      <div className="grid lg:grid-cols-2 min-h-[450px]">
        {/* Left Section */}
        <div className="relative flex items-center justify-center p-8 lg:p-16">
          {/* Vertical "FEATURES" text */}
          <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs tracking-[0.3em] text-gray-400 [writing-mode:vertical-lr] rotate-180">
                CORE VALUES
              </span>
              <div className="w-px h-16 bg-orange-500" />
            </div>
          </div>

          <div className="max-w-2xl w-full ml-8 lg:ml-12">
            {/* Heading */}
            {/* <h1 className="project-subtitle-keyConcept  text-4xl lg:text-5xl xl:text-6xl font-light  mb-12 lg:mb-16 leading-tight">
              Empowering Values for a Better Future
            </h1> */}
            <h1 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight">
            <span className="text-yellow-300 md:text-[40px]">Empowering Values</span>{' '}
            <span className="text-[#000000] md:text-[40px]">for a Better Future</span>
          </h1>

            {/* Features Grid */}
            <div className="relative bg-gradient-to-br from-green-200 to-emerald-50 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
               
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:translate-x-2 relative z-10"
                  > 
                    <div className="space-y-3">
                      <span className="text-green-900  text-sm font-medium tracking-wide transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110 inline-block">
                        {feature.number}
                      </span>
                      <div className="transition-all duration-300 group-hover:translate-x-1">
                        <div className="relative">
                          <h3 className="text-green-900 font-[Arial,Helvetica,sans-serif]  font-medium text-base leading-snug relative z-20 group-hover:text-black">
                            {feature.title}
                          </h3>
                          {/* Enhanced Chat-style Popup for Subtitle */}
                          <div
                            className="
                              absolute left-0 top-full mt-3 hidden group-hover:block
                              w-72 text-white text-sm rounded-xl p-1 shadow-2xl
                              border border-green-900
                              z-50
                            "
                            style={{
                              backgroundColor: "#064e3b",
                              opacity: 1,
                            }}
                          >
                            <div
                              className="absolute -top-2 left-4 w-4 h-4 transform rotate-45
                                bg-green-900 border-l border-t border-green-600 z-30"
                            ></div>

                            <div className="relative z-40 p-0 bg-green-900 rounded-xl">
                              <p className="leading-relaxed text-sm text-white">{feature.subtitle}</p>
                              <div
                                className="flex justify-between items-center mt-0 pt-1
                                  border-t border-green-500 text-xs text-green-200"
                              >
                                <span>💬 Core Value</span>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="relative h-[200px] lg:h-auto overflow-hidden group">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 ">
          <img
              src={AboutImg}
              alt="Modern living space with balcony featuring two people relaxing"
              className="w-full h-full md:h-[714px] object-cover object-center pr-11 border-r pt-24"
            />
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-teal-900/0 transition-all duration-500 " />
        </div>
      </div>
    </main>
  )
}
export default KeyConcept

// // import Image from "next/image"
// import AboutImg from "../../components/assets/aboutusimage.jpg";

// const KeyConcept = () => {
//   const features = [
//     {
//       number: "01.",
//       title: "Integrity and Transparency",
//       subtitle: "We uphold the highest ethical standards in all our dealings, ensuring honesty and openness with clients, partners, and stakeholders.",
//     },
//     {
//       number: "02.",
//       title: "Client-Centric Approach",
//       subtitle: "Our clients' needs and aspirations are at the forefront of our operations. We strive to exceed expectations by providing personalized and attentive service.",
//     },
//     {
//       number: "03.",
//       title: "Excellence in Execution",
//       subtitle: "We are committed to delivering superior quality in every project, from land procurement to legal documentation, ensuring precision and professionalism.",
//     },
//     {
//       number: "04.",
//       title: "Innovation and Adaptability",
//       subtitle: "Embracing change, we continuously seek innovative solutions and adapt to market dynamics to provide cutting-edge real estate services.",
//     },
//     {
//       number: "05.",
//       title: "Collaboration and Teamwork",
//       subtitle: "We believe in the power of collective effort. Our team works synergistically, valuing each member's contribution to achieve common goals.",
//     },
//     {
//       number: "06.",
//       title: "Community Engagement",
//       subtitle: "We are dedicated to contributing positively to the communities we serve, fostering development and creating lasting value.",
//     },
//     {
//       number: "07.",
//       title: "Sustainability and Responsibility",
//       subtitle: "We prioritize sustainable practices, ensuring that our developments are environmentally responsible and contribute to the well-being of future generations.",
//     },
//     {
//       number: "08.",
//       title: "Continuous Improvement",
//       subtitle: "We are committed to ongoing learning and development, striving to enhance our skills, services, and processes to better serve our clients",
//     },
//   ]
  
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#4a5240] via-[#3d4436] to-[#2d3329] ">
//       <div className="grid lg:grid-cols-2 min-h-[450px]">
//         {/* Left Section */}
//         <div className="relative flex items-center justify-center p-8 lg:p-16">
//           {/* Vertical "FEATURES" text */}
//           <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2">
//             <div className="flex flex-col items-center gap-4">
//               <span className="text-xs tracking-[0.3em] text-gray-400 [writing-mode:vertical-lr] rotate-180">
//                 FEATURES
//               </span>
//               <div className="w-px h-16 bg-orange-500" />
//             </div>
//           </div>

//           <div className="max-w-2xl w-full ml-8 lg:ml-12">
//             {/* Heading */}
//             <h1 className="project-subtitle-keyConcept  text-4xl lg:text-5xl xl:text-6xl font-light  mb-12 lg:mb-16 leading-tight">
//               Empowering Values for a Better Future
//             </h1>
//             {/* Features Grid */}
//             <div className=" bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
               
//                 {features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="group cursor-pointer transition-all duration-300 hover:translate-x-2 relative"
//                   >
//                     <div className="space-y-3">
//                       <span className="text-orange-500 text-sm font-medium tracking-wide transition-all duration-300 group-hover:text-orange-600 group-hover:scale-110 inline-block">
//                         {feature.number}
//                       </span>
//                       <div className="transition-all duration-300 group-hover:translate-x-1">
//                         <div className="relative group">
//                           <h3 className="text-black font-medium text-base leading-snug">
//                             {feature.title}
//                           </h3>
//                          <div
//                             className="
//                               absolute left-0 top-full mt-3 hidden group-hover:block
//                               w-72 text-white text-sm rounded-xl p-1 shadow-2xl
//                               border border-green-900
//                               z-50 isolate
//                             "
//                             style={{
//                               backgroundColor: "#064e3b",
//                               opacity: 1,
//                               mixBlendMode: "normal",
//                             }}
//                           >
//                             <div
//                               className="absolute -top-2 left-4 w-4 h-4 transform rotate-45
//                                 bg-green-900 border-l border-t border-green-600"
//                             ></div>

//                             <div className="relative z-10 p-3 bg-green-900 rounded-xl">
//                               <p className="leading-relaxed text-sm text-white">{feature.subtitle}</p>
//                               <div
//                                 className="flex justify-between items-center mt-3 pt-2
//                                   border-t border-green-500 text-xs text-green-200"
//                               >
//                                 <span>💬 Core Value</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Right Section - Image */}
//         <div className="relative h-[400px] lg:h-auto overflow-hidden group">
//           <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 ">
//             <img
//               src={'https://images.pexels.com/photos/20580717/pexels-photo-20580717/free-photo-of-ivory-cottage-and-green-bushes-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
//               alt="Modern living space with balcony featuring two people relaxing "
//               fill
//               className="object-cover object-center pr-11 border-r pt-5"
//               priority
//             />
//           </div>
//           {/* Overlay on hover */}
//           <div className="absolute inset-0 bg-teal-900/0 transition-all duration-500 group-hover:bg-teal-900/10" />
//         </div>
//       </div>
//     </main>
//   )
// }
// export default KeyConcept


// // import Image from "next/image"
// import AboutImg from "../../components/assets/aboutusimage.jpg";

// const  KeyConcept=()=> {
//   const features = [
//     {
//       number: "01.",
//       title: "Integrity and Transparency",
//       subtitle: "We uphold the highest ethical standards in all our dealings, ensuring honesty and openness with clients, partners, and stakeholders.",
//     },
//     {
//       number: "02.",
//       title: "Client-Centric Approach",
//       subtitle: "Our clients' needs and aspirations are at the forefront of our operations. We strive to exceed expectations by providing personalized and attentive service.",
//     },
//     {
//       number: "03.",
//       title: "Excellence in Execution",
//       subtitle: "We are committed to delivering superior quality in every project, from land procurement to legal documentation, ensuring precision and professionalism.",
//     },
//     {
//       number: "04.",
//       title: "Innovation and Adaptability",
//       subtitle: "Embracing change, we continuously seek innovative solutions and adapt to market dynamics to provide cutting-edge real estate services.",
//     },
//     {
//       number: "05.",
//       title: "Collaboration and Teamwork",
//       subtitle: "We believe in the power of collective effort. Our team works synergistically, valuing each member's contribution to achieve common goals.",
//     },
//     {
//       number: "06.",
//       title: "Community Engagement",
//       subtitle: "We are dedicated to contributing positively to the communities we serve, fostering development and creating lasting value.",
//     },
//     {
//       number: "07.",
//       title: "Sustainability and Responsibility",
//       subtitle: "We prioritize sustainable practices, ensuring that our developments are environmentally responsible and contribute to the well-being of future generations.",
//     },
//     {
//       number: "08.",
//       title: "Continuous Improvement",
//       subtitle: "We are committed to ongoing learning and development, striving to enhance our skills, services, and processes to better serve our clients",
//     },
//   ]
  
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#4a5240] via-[#3d4436] to-[#2d3329] ">
//       <div className="grid lg:grid-cols-2 min-h-[450px]">
//         {/* Left Section */}
//         <div className="relative flex items-center justify-center p-8 lg:p-16">
//           {/* Vertical "FEATURES" text */}
//           <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2">
//             <div className="flex flex-col items-center gap-4">
//               <span className="text-xs tracking-[0.3em] text-gray-400 [writing-mode:vertical-lr] rotate-180">
//                 FEATURES
//               </span>
//               <div className="w-px h-16 bg-orange-500" />
//             </div>
//           </div>

//           <div className="max-w-2xl w-full ml-8 lg:ml-12">
//             {/* Heading */}
//             <h1 className="project-subtitle-keyConcept  text-4xl lg:text-5xl xl:text-6xl font-light  mb-12 lg:mb-16 leading-tight">
//               Empowering Values for a Better Future
//             </h1>
//             {/* Features Grid */}
//             <div className=" bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
               
//                 {features.map((feature, index) => (
//   <div
//     key={index}
//     className="group cursor-pointer transition-all duration-300 hover:translate-x-2 relative"
//   >
//     <div className="space-y-3">
//       <span className="text-orange-500 text-sm font-medium tracking-wide transition-all duration-300 group-hover:text-orange-600 group-hover:scale-110 inline-block">
//         {feature.number}
//       </span>
//       <div className="transition-all duration-300 group-hover:translate-x-1">
//         <div className="relative group">
//           <h3 className="text-bla font-medium text-base leading-snug">
//             {feature.title}
//           </h3>

//           {/* Hover Popup for Subtitle */}
//           <div className="absolute left-0 top-full mt-2 hidden w-64 group-hover:block z-20 
//                           bg-green-900/80 text-white text-sm rounded-lg border border-green-400 
//                           p-3 shadow-lg backdrop-blur-md transition-opacity duration-300">
//             {feature.subtitle}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// ))}

//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Right Section - Image */}
//         <div className="relative h-[400px] lg:h-auto overflow-hidden group">
//           <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 ">
//             <img
//               src={'https://images.pexels.com/photos/20580717/pexels-photo-20580717/free-photo-of-ivory-cottage-and-green-bushes-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
//               alt="Modern living space with balcony featuring two people relaxing "
//               fill
//               className="object-cover object-center pr-11 border-r pt-5"
//               priority
//             />
//           </div>
//           {/* Overlay on hover */}
//           <div className="absolute inset-0 bg-teal-900/0 transition-all duration-500 group-hover:bg-teal-900/10" />
//         </div>
//       </div>
//     </main>
//   )
// }
// export default KeyConcept