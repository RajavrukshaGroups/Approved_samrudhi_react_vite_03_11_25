import React, { useState, useEffect } from "react";
import AboutUsImageModern from "../../components/assets/modernhomeaboutus.jpg";
import "../../components/ourOnGoingProjects/ourOnGoingProjects.css";


// Custom hook for window width
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

export default function SustainableEnergyHero() {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth === undefined || windowWidth >= 768;

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-white to-emerald-100 px-6 md:px-12 pt-10 md:pt-28">
      {/* Left Content */}
      {/* <div className="max-w-lg space-y-6 ml-14 mt-5"> */}
      <div className="max-w-4xl space-y-6 ml-14 mt-5">

      
        <h1 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight">
          <span className="text-[#054b16] md:text-[60px]">We strive to uncover the </span>
          <span className="text-green-500 md:text-[60px]">perfect choice for you</span>
        </h1>
        <p className="text-gray-900 text-1xl mt-8">
          At Samrudhi, we are driven by a vision: to create exceptional spaces that inspire, endure, and elevate the way people live and invest. We are committed to shaping inspired living through visionary developments and bespoke real estate solutions.
        </p>
      </div>
      {/* Conditionally render image+svg only on desktop */}
      {isDesktop && (
        <div className="relative flex justify-center items-center w-[400px] h-[400px] mr-28">
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none rotate-lines">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="195" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
              <circle cx="200" cy="200" r="170" stroke="white" strokeOpacity="0.10" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="145" stroke="white" strokeOpacity="0.07" strokeWidth="1" />
              <circle cx="200" cy="200" r="120" stroke="white" strokeOpacity="0.06" strokeWidth="0.7" />
            </svg>
          </span>
          <img
            src={AboutUsImageModern}
            alt="Sustainable Energy Globe"
            className="w-[330px] h-[330px] rounded-full object-cover z-10 border-4 border-[#172917] shadow-2xl"
            style={{ boxShadow: "0 0 40px 10px #0008" }}
          />
        </div>
      )}
      {/* Custom CSS for rotating animation */}
      <style jsx>{`
        .rotate-lines {
          animation: rotate 8s linear infinite;
        }
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

// import React from "react";
// import AboutUsImageModern from "../../components/assets/modernhomeaboutus.jpg";

// export default function SustainableEnergyHero() {
//   return (
//     // <div className="flex items-center justify-between min-h-screen bg-gradient-to-r from-white to-gray-100 px-12 pt-16">
//     <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-gradient-to-r  px-6 md:px-12 pt-10 md:pt-16">
  
//     {/* Left Content */}
//       <div className="max-w-lg space-y-6 ml-14 mt-5">
//         {/* <h2 className="text-white text-3xl font-light mb-2">Save the world!</h2> */}
//         <h1 className="font-bold text-6xl leading-tight ">
//           <span className="text-[#054b16] ">We strive to uncover the </span>
//           {/* <br /> */}  
//           <span className="text-green-500">perfect choice for you</span>
//         </h1>
//         <p className="text-gray-900 text-1xl mt-8">
//            At Samrudhi, we are driven by a vision: to create exceptional spaces that inspire, endure, and
// elevate the way people live and invest. We are committed to shaping inspired living through
// visionary developments and bespoke real estate solutions.
//         </p>
        
//       </div>

//       {/* Right Globe + Rotating Lines */}
//       <div className="relative flex justify-center items-center w-[400px] h-[400px] mr-28">
//         {/* Rotating SVG Concentric Circles */}
//         <span className="absolute inset-0 flex items-center justify-center pointer-events-none rotate-lines">
//           <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
//             <circle cx="200" cy="200" r="195" stroke="white" strokeOpacity="0.15" strokeWidth="2"/>
//             <circle cx="200" cy="200" r="170" stroke="white" strokeOpacity="0.10" strokeWidth="1.5"/>
//             <circle cx="200" cy="200" r="145" stroke="white" strokeOpacity="0.07" strokeWidth="1"/>
//             <circle cx="200" cy="200" r="120" stroke="white" strokeOpacity="0.06" strokeWidth="0.7"/>
//           </svg>
//         </span>
//         {/* Globe Image */}
//         <img
//           src={AboutUsImageModern}
//           alt="Sustainable Energy Globe"
//           className="w-[330px] h-[330px] rounded-full object-cover z-10 border-4 border-[#172917] shadow-2xl"
//           style={{ boxShadow: "0 0 40px 10px #0008" }}
//         />
//       </div>
//       {/* Custom CSS for rotating animation */}
//       <style jsx>{`
//         .rotate-lines {
//           animation: rotate 8s linear infinite;
//         }
//         @keyframes rotate {
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// "use client"

// import type React from "react"

// export default function HeroSustainable() {
//   // Local CSS variables keep colors tidy without touching your global tokens.
//   // You can move these into your theme later if desired.
//   return (
//     <section
//       className="relative w-full"
//       style={
//         {
//           // deep forest green background + lime accent
//           // Feel free to tune the shades to your brand.
//           ["--hero-bg" as any]: "#0f2a1c",
//           ["--hero-accent" as any]: "#9BEB65",
//           ["--hero-accent-strong" as any]: "#7CE34E",
//           ["--hero-text" as any]: "white",
//           ["--hero-muted" as any]: "rgba(255,255,255,0.75)",
//           ["--ring-color" as any]: "rgba(155,235,101,0.18)",
//         } as React.CSSProperties
//       }
//     >
//       <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-12 lg:px-8 lg:py-20">
//         {/* Left copy */}
//         <div className="text-left">
//           <p className="text-balance text-lg font-medium" style={{ color: "var(--hero-muted)" }}>
//             Save the world!
//           </p>

//           <h1 className="text-balance mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//             <span
//               className="block"
//               style={{
//                 color: "var(--hero-accent)",
//                 filter: "saturate(110%)",
//               }}
//             >
//               Sustainable
//             </span>
//             <span
//               className="block"
//               style={{
//                 color: "var(--hero-accent-strong)",
//               }}
//             >
//               Energy.
//             </span>
//           </h1>

//           <p
//             className="text-pretty mt-6 max-w-xl text-sm leading-relaxed sm:text-base"
//             style={{ color: "var(--hero-muted)" }}
//           >
//             Well & Able Supported Living specializes in nurturing self‑assurance, imparting crucial life skills, and
//             cultivating independence in individuals facing vulnerabilities such as mental health needs and learning
//             difficulties. Join us on our mission to create a lasting and positive impact on lives.
//           </p>

//           <div className="mt-8">
//             <a
//               href="#explore"
//               className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
//               style={{
//                 backgroundColor: "var(--hero-accent)",
//                 color: "#0e2016",
//                 boxShadow: "0 8px 20px rgba(155,235,101,0.25)",
//               }}
//             >
//               EXPLORE NOW!
//               <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" className="-mr-0.5">
//                 <path
//                   d="M5 12h14M13 5l7 7-7 7"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Right image with concentric rings */}
//         <div className="relative">
//           <div className="relative mx-auto aspect-square w-72 sm:w-80 md:w-[22rem] lg:w-[26rem]">
//             {/* Concentric rings */}
//             <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
//               <div className="absolute h-full w-full rounded-full" style={{ border: "1px solid var(--ring-color)" }} />
//               <div
//                 className="absolute h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 top-1/2"
//                 style={{ border: "1px solid var(--ring-color)" }}
//               />
//               <div
//                 className="absolute h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 top-1/2"
//                 style={{ border: "1px solid var(--ring-color)" }}
//               />
//               <div
//                 className="absolute h-[185%] w-[185%] -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 top-1/2"
//                 style={{ border: "1px solid var(--ring-color)" }}
//               />
//             </div>

//             {/* Orb image */}
//             <img
//               src="/images/sustainable-sphere.png"
//               alt="Glossy green world with trees and a waterfall inside a sphere"
//               className="h-full w-full rounded-full object-cover shadow-2xl ring-1"
//               style={{
//                 ringColor: "var(--hero-accent-strong)",
//                 boxShadow: "0 8px 30px rgba(0,0,0,0.45), inset 0 0 40px rgba(255,255,255,0.08)",
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Section background */}
//       <div className="absolute inset-0 -z-20" style={{ background: "var(--hero-bg)" }} />
//     </section>
//   )
// }
