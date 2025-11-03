import React from "react";
// import CommitmentImg from "./assets/commitmentsimage.jpg";
import CommitmentImg from "../../components/assets/commitmentsimage.jpg"

export default function TrustSection() {
  return (
    <section className="bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        {/* Left: Headings & Features */}
        <div className="flex-1 w-full max-w-2xl animate-fade-in-right">
          {/* <h2 className="text-black text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-[length:200%_auto] bg-clip-text text-transparent bg-text-gradient animate-gradient-shift">
            Our Commitment to Excellence
          </h2> */}
          <h2 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight text-center">
            <span className="text-[#054b16] md:text-[50px]">Our Commitment to </span>
            <span className="text-green-500 md:text-[50px]">Excellence</span>
          </h2>
          <div className="mt-10 space-y-6 lg:space-y-8">
            {/* Feature 01 */}
            <div className="group transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-emerald-500/60 font-bold text-xl sm:text-2xl transition-colors duration-300 group-hover:text-emerald-600">
                  01
                </span>
                <h3 className="font-bold text-xl font-[Arial,Helvetica,sans-serif] sm:text-2xl text-gray-900">
                  Ethical Practices and Compliance
                </h3>
              </div>
              <div className="ml-0 sm:ml-11 border-2 border-gray-200 rounded-xl p-4 sm:p-5 bg-gray-100 transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-md">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We adhere strictly to industry regulations and ethical standards, ensuring all transactions are conducted fairly and transparently. This commitment helps in building a reputable brand that clients and partners trust, reducing legal risks, and setting a positive example for the entire team.
                </p>
              </div>
            </div>
            {/* Feature 02 */}
            <div className="group transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-teal-500/60 font-bold text-xl sm:text-2xl transition-colors duration-300 group-hover:text-teal-600">
                  02
                </span>
                <h3 className="font-bold text-xl font-[Arial,Helvetica,sans-serif] sm:text-2xl text-gray-900">
                  Continuous Professional Development
                </h3>
              </div>
              <div className="ml-0 sm:ml-11 border-2 border-gray-200 rounded-xl p-4 sm:p-5 bg-gray-100 transition-all duration-300 group-hover:border-teal-300 group-hover:shadow-md">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Recognizing the dynamic nature of the real estate industry, we invest in ongoing training and development for our team. This ensures that our professionals are equipped with the latest knowledge and skills to serve our clients effectively.
                </p>
              </div>
            </div>
            {/* Feature 03 */}
            <div className="group transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-cyan-500/60 font-bold text-xl sm:text-2xl transition-colors duration-300 group-hover:text-cyan-600">
                  03
                </span>
                <h3 className="font-bold text-xl font-[Arial,Helvetica,sans-serif] sm:text-2xl text-gray-900">
                  Advanced Technology Integration
                </h3>
              </div>
              <div className="ml-0 sm:ml-11 border-2 border-gray-200 rounded-xl p-4 sm:p-5 bg-gray-100 transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-md">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We leverage state-of-the-art technology to streamline operations, enhance client interactions, and manage projects efficiently. Our team is trained on the latest tools to maintain a competitive edge in the market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image and Stats */}
        <div className="flex-1 w-full flex justify-center items-center animate-fade-in-up">
          <div className="relative w-full max-w-md lg:max-w-lg lg:mt-56">
            {/* Image Container */}
            <div className=" relative rounded-3xl bg-gradient-to-br from-emerald-200/60 via-teal-200/50 to-cyan-200/60 p-1 sm:p-4 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 animate-pulse-slow"></div>
              <img
                src={CommitmentImg}
                alt="Professional team member representing our commitment to excellence"
                className="relative rounded-2xl w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-center shadow-lg"
              />
            </div>
            {/* Floating Stats - Desktop */}
            <div className="hidden lg:block">
              <div className="absolute -left-8 top-20 bg-white rounded-xl shadow-lg px-4 py-3 border-2 border-emerald-200 animate-fade-in-up backdrop-blur-sm bg-white/95">
                <span className="text-emerald-600 font-bold text-sm">✨ Enhance client interactions</span>
              </div>
              <div className="absolute -right-10 top-36 bg-white rounded-xl shadow-lg px-4 py-3 border-2 border-teal-200 animate-fade-in-up [animation-delay:200ms] backdrop-blur-sm bg-white/95">
                <span className="text-teal-600 font-bold text-sm">🚀 Advanced technology</span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-white rounded-xl shadow-lg px-4 py-3 border-2 border-cyan-200 animate-fade-in-up [animation-delay:400ms] backdrop-blur-sm bg-white/95">
                <span className="text-cyan-600 font-bold text-sm">⚡ Competitive edge</span>
              </div>
            </div>
            {/* Floating Stats - Mobile */}
            <div className="lg:hidden flex flex-col gap-3 mt-6">
              <div className="bg-white/95 rounded-xl shadow-md px-4 py-3 border-2 border-emerald-200 backdrop-blur-sm">
                <span className="text-emerald-600 font-bold text-sm flex items-center justify-center gap-2">
                  ✨ Enhance client interactions
                </span>
              </div>
              <div className="bg-white/95 rounded-xl shadow-md px-4 py-3 border-2 border-teal-200 backdrop-blur-sm">
                <span className="text-teal-600 font-bold text-sm flex items-center justify-center gap-2">
                  🚀 Advanced technology solutions
                </span>
              </div>
              <div className="bg-white/95 rounded-xl shadow-md px-4 py-3 border-2 border-cyan-200 backdrop-blur-sm">
                <span className="text-cyan-600 font-bold text-sm flex items-center justify-center gap-2">
                  ⚡ Competitive market edge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import CommitmentImg from "../../components/assets/commitmentsimage.jpg"

// export default function TrustSection() {
//   return (
//     // <section className="bg-gradient-to-r from-green-100 to-emerald-300 py-16 px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12 pl-56">
//       <section className="bg-gradient-to-r from-white to-white py-16 px-6 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 pl-4 sm:pl-6 md:pl-20 lg:pl-56">
//       {/* Left: Headings & Features */}
//       <div className="flex-1 w-full max-w-xl">
//         <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-gray-900 mb-5">
//           Our Commitment to Excellence
//         </h2>
//         <div className="mt-8 space-y-6 lg:space-y-10">
//           {/* Feature */}
//           <div>
//             <div className="flex flex-col sm:flex-row items-baseline sm:gap-2 gap-1">
//               <span className="text-gray-400 font-semibold text-lg">01</span>
//               <span className="font-bold text-xl sm:text-2xl text-gray-900">
//                 Ethical Practices and Compliance
//               </span>
//             </div>
//             <p className="text-gray-500 text-sm sm:text-base ml-0 sm:ml-10 max-w-lg">
//               We adhere strictly to industry regulations and ethical standards, ensuring all transactions are conducted fairly and transparently. This commitment helps in building a reputable brand that clients and partners trust, reducing legal risks, and setting a positive example for the entire team
//             </p>
//           </div>

//           {/* Feature */}
//           <div>
//             <div className="flex flex-col sm:flex-row items-baseline sm:gap-2 gap-1">
//               <span className="text-gray-400 font-semibold text-lg">02</span>
//               <span className="font-bold text-xl sm:text-2xl text-gray-900">
//                 Continuous Professional Development
//               </span>
//             </div>
//             <p className="text-gray-500 text-sm sm:text-base ml-0 sm:ml-10 max-w-lg">
//               Recognizing the dynamic nature of the real estate industry, we invest in ongoing training and development for our team. This ensures that our professionals are equipped with the latest knowledge and skills to serve our clients effectively
//             </p>
//           </div>

//           {/* Feature */}
//           <div>
//             <div className="flex flex-col sm:flex-row items-baseline sm:gap-2 gap-1">
//               <span className="text-gray-400 font-semibold text-lg">03</span>
//               <span className="font-bold text-xl sm:text-2xl text-gray-900">
//                 Advanced Technology Integration
//               </span>
//             </div>
//             <p className="text-gray-500 text-sm sm:text-base ml-0 sm:ml-10 max-w-lg">
//               We leverage state-of-the-art technology to streamline operations, enhance client interactions, and manage projects efficiently. Our team is trained on the latest tools to maintain a competitive edge in the market.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right: Image and Stats */}
//       <div className="flex-1 w-full flex justify-center items-center relative mt-10 lg:mt-0">
//         <div className="rounded-3xl bg-gradient-to-tr from-gray-300/50 via-emerald-100/40 to-amber-100/80 p-2 lg:p-4 relative max-w-[320px] w-full">
//           <img
//             src={CommitmentImg}
//             alt="Team Member"
//             className="rounded-2xl w-full h-auto max-h-[700px] object-cover object-top"
//           />

//           {/* Floating Stats only show on large screens */}
//           <div className="hidden lg:flex absolute -left-16 top-16 bg-white rounded-xl shadow-md px-4 py-1 flex items-center border border-gray-100">
//             <span className="text-green-600 font-bold text-sm">Enhance client interactions</span>
//           </div>
//           <div className="hidden lg:flex absolute right-[-60px] top-32 bg-white rounded-xl shadow-md px-4 py-1 flex items-center border border-gray-100">
//             <span className="text-green-600 font-bold text-sm">Advanced technology solutions</span>
//           </div>
//           <div className="hidden lg:flex absolute left-1/2 -bottom-6 -translate-x-1/2 bg-white rounded-xl shadow-md px-4 py-1 flex items-center border border-gray-100">
//             <span className="text-green-600 font-bold text-sm">Competitive market edge</span>
//           </div>

//           {/* Mobile: place floating stats vertically below image */}
//           <div className="lg:hidden flex flex-col gap-3 mt-4">
//             <div className="bg-white rounded-xl shadow-md px-4 py-2 border border-gray-100 flex items-center justify-center text-center">
//               <span className="text-green-600 font-bold text-sm">Enhance client interactions</span>
//             </div>
//             <div className="bg-white rounded-xl shadow-md px-4 py-2 border border-gray-100 flex items-center justify-center text-center">
//               <span className="text-green-600 font-bold text-sm">Advanced technology solutions</span>
//             </div>
//             <div className="bg-white rounded-xl shadow-md px-4 py-2 border border-gray-100 flex items-center justify-center text-center">
//               <span className="text-green-600 font-bold text-sm">Competitive market edge</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
