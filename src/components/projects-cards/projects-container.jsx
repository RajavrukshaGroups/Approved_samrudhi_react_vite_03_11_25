import React from "react";
import  HomeImg from "../../components/assets/marasandra-home.png"
import "./project.css";

export default function AlumniHero() {
  return (
    <>
    <div className="w-full h-36 bg-gradient-to-r from-white to-emerald-100"></div>
    <section className="relative bg-gradient-to-r from-white to-emerald-100 min-h-[450px] h-[420px] pt-[180px]  flex items-center">
      {/* Animated SVG Wave Lines */}
      <svg
        className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
          d="M0,90 C380,200 1100,0 1440,90"
          stroke="#4FC18B"
          strokeWidth="2"
          fill="none"
          className="animate-wave"
          />
        <path
          d="M0,250 Q700,350 1440,180"
          stroke="#4FC18B80"
          strokeWidth="2"
          fill="none"
          className="animate-wave2"
        />
      </svg>
      {/* Left Content */}
      <div className="flex-1 pl-16 z-10 max-lg:pl-4">
        <h1 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight">
          <span className="text-[#000000] md:text-[50px]">Shaping Communities</span><br />
          <span className="text-yellow-500 md:text-[50px]">Through Our Current</span><br />
          <span className="text-yellow-500 md:text-[50px]">Projects</span>
        </h1>

        <p className="text-gray-900  text-1xl mb-6 max-w-xl">
          Samrudhi is dedicated to playing a pivotal role in building and nurturing sustainable communities
        </p>
      </div>

      <div className="flex-1 flex items-end justify-center relative h-[550px] z-10 max-lg:hidden">
          {/* Large yellow circle */}
        <div className="absolute left-1/4 top-14 w-[500px] h-[500px] rounded-full opacity-85 -z-10">
          <img
            src={HomeImg}
            alt="Graduate"
            className="relative drop-shadow-xl z-10"
            style={{ left: "0px", top: "100px", zIndex: 10, width: "500px" }}
            />
          </div>
        </div>

      {/* Mobile graduates */}
      <div className="lg:hidden flex justify-center items-center absolute right-0 bottom-0 left-0 z-10">
        {/* Place a single grad or stack for mobile below */}
        <img
          src={HomeImg}
          alt="Graduate"
          className="w-32 mt-10 drop-shadow-xl"
          />
      </div>

      {/* Dots on right */}
      <div className="absolute right-8 top-1/2 flex flex-col space-y-4 items-center z-20 max-lg:hidden">
        <span className="w-3 h-3 rounded-full border-2 border-[#F3EEE7]"></span>
        <span className="w-2 h-2 bg-[#F3EEE7] opacity-80 rounded-full"></span>
        <span className="w-2 h-2 bg-[#F3EEE7] opacity-60 rounded-full"></span>
        <span className="w-2 h-2 bg-[#F3EEE7] opacity-40 rounded-full"></span>
      </div>
    </section>
          </>
  );
}

/* Add this to your global CSS for wave animations */
