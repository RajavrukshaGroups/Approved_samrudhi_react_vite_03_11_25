import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar.jsx";
import Loader from "../Loader/loader.jsx"; 

const titles = [
  <>
    PLOTS THAT PROMISE A{" "}
    <span className="text-yellow-300 border-b-4 border-yellow-300">
      PROSPEROUS TOMORROW
    </span>
  </>,
  <>
    GROW YOUR WEALTH STEADILY{" "}
    <span className="text-yellow-300 border-b-4 border-yellow-300">
      WITH LAND INVESTMENTS
    </span>
  </>,
];

const HeroSection = () => {
  const [visibleTitle, setVisibleTitle] = useState(0);
  const [fade, setFade] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  // ✅ Check if user already loaded video before
  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem("videoLoadedOnce");
    if (hasLoadedBefore) {
      setVideoLoaded(true); // Skip loader
    } else {
      setFirstLoad(true); // First time load
    }
  }, []);

  // ✅ Title animation
  useEffect(() => {
    const showDuration = 3000;
    const fadeDuration = 400;

    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setVisibleTitle((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, fadeDuration);
    }, showDuration);

    return () => clearTimeout(timer);
  }, [visibleTitle]);

  // ✅ Fallback loader timeout (3 sec max)
  useEffect(() => {
    if (firstLoad) {
      const fallback = setTimeout(() => {
        setVideoLoaded(true);
        localStorage.setItem("videoLoadedOnce", "true"); // Remember it
      }, 3000);
      return () => clearTimeout(fallback);
    }
  }, [firstLoad]);

  // ✅ Disable scroll when loader active
  useEffect(() => {
    document.body.style.overflow = !videoLoaded ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [videoLoaded]);

  return (
    <>
      {!videoLoaded ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white w-full h-full z-[9999]">
          <Loader logo={true} />
        </div>
      ) : (
        <>
          <Navbar/>
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-1000 ease-in-out opacity-100">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                onCanPlayThrough={() => {
                  if (firstLoad) {
                    setTimeout(() => {
                      setVideoLoaded(true);
                      localStorage.setItem("videoLoadedOnce", "true");
                    }, 1000);
                  }
                }}
                onError={() => {
                  setVideoLoaded(true);
                  localStorage.setItem("videoLoadedOnce", "true");
                }}
              >
                <source
                  src="https://res.cloudinary.com/den0iz8zn/video/upload/v1761550156/video_27_1_cl99cn.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-left max-w-5xl w-full mx-auto mt-32 px-4 min-h-[140px]">
              <h1
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                className={`text-5xl font-bold text-white leading-tight transition-opacity duration-500 ease-in-out ${
                  fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                } transform w-full`}
              >
                {titles[visibleTitle]}
              </h1>

              <div className="mt-8 flex items-center gap-6">
                <a
                  href="/projects"
                  className="bg-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition flex items-center gap-3"
                >
                  Explore Plots <span>→</span>
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default HeroSection;




// import React, { useEffect, useState } from "react";
// import HeroVideo from "../../components/assets/banner_video_compressed.mp4";
// import Navbar from "../navbar/navbar.jsx";

// const titles = [
//   <>
//     PLOTS THAT PROMISE A{" "}
//     <span className="text-yellow-300 border-b-4 border-yellow-300">
//       PROSPEROUS TOMORROW
//     </span>
//   </>,
//   <>
//     GROW YOUR WEALTH STEADILY{" "}
//     <span className="text-yellow-300 border-b-4 border-yellow-300">
//       WITH LAND INVESTMENTS
//     </span>
//   </>,
// ];

// const HeroSection = () => {
//   const [visibleTitle, setVisibleTitle] = useState(0);
//   const [fade, setFade] = useState(true);
//   const [videoLoaded, setVideoLoaded] = useState(false);  // ✅ track video load state

//   // ✅ Change title animation
//   useEffect(() => {
//     const showDuration = 3000;
//     const fadeDuration = 400;

//     const timer = setTimeout(() => {
//       setFade(false);
//       setTimeout(() => {
//         setVisibleTitle((prev) => (prev + 1) % titles.length);
//         setFade(true);
//       }, fadeDuration);
//     }, showDuration);

//     return () => clearTimeout(timer);
//   }, [visibleTitle]);

//   // ✅ Fallback if video takes too long (after 5 seconds)
//   useEffect(() => {
//     const fallback = setTimeout(() => {
//       setVideoLoaded(true);
//     }, 6000);
//     return () => clearTimeout(fallback);
//   }, []);

//   return (
//     <>
//       {!videoLoaded ? (
//         // ✅ Show loader before video is ready
//         <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-2xl">
//           <div className="loader mb-4 border-4 border-t-yellow-400 rounded-full w-12 h-12 animate-spin"></div>
//           <p>Loading video...</p>
//         </div>
//       ) : (
//         // ✅ Show full page after video load
//         <>
//           <Navbar />
//           <section className="relative min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-1000 ease-in-out opacity-100">
//             {/* Background Video */}
//             <div className="absolute inset-0 z-0">
//               <video
//                 className="w-full h-full object-cover"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 onCanPlayThrough={() => setVideoLoaded(true)} // ✅ once ready
//                 onError={() => setVideoLoaded(true)} // ✅ fallback if error
//               >
//                 <source
//                   src={
//                     "https://res.cloudinary.com/den0iz8zn/video/upload/v1761287495/banner_video_new_compressed_w6cmwu.mp4"
//                   }
//                   type="video/mp4"
//                 />
//                 Your browser does not support the video tag.
//               </video>
//               <div className="absolute inset-0 bg-black/30"></div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 text-left max-w-5xl w-full mx-auto mt-32 px-4 min-h-[140px]">
//               <h1
//                 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
//                 className={`text-5xl font-bold text-white leading-tight transition-opacity duration-500 ease-in-out ${
//                   fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
//                 } transform w-full`}
//               >
//                 {titles[visibleTitle]}
//               </h1>

//               <div className="mt-8 flex items-center gap-6">
//                 <a
//                   href="/projects"
//                   className="bg-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition flex items-center gap-3"
//                 >
//                   Explore Plots
//                   <span>→</span>
//                 </a>
//               </div>
//             </div>
//           </section>
//         </>
//       )}
//     </>
//   );
// };

// export default HeroSection;


// import React, { useEffect, useState } from "react";
// import HeroVideo from "../../components/assets/banner_video_compressed.mp4";
// import Navbar from "../navbar/navbar.jsx";

// const titles = [
//   <>
//     PLOTS THAT PROMISE A{" "}
//     <span className="text-yellow-300 border-b-4 border-yellow-300">
//       PROSPEROUS TOMORROW
//     </span>
//   </>,
//   <>
//     GROW YOUR WEALTH STEADILY{" "}
//     <span className="text-yellow-300 border-b-4 border-yellow-300">
//       WITH LAND INVESTMENTS
//     </span>
//   </>,
// ];

// const HeroSection = () => {

//   const [visibleTitle, setVisibleTitle] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const showDuration = 3000;
//     const fadeDuration = 400;

//     const timer = setTimeout(() => {
//       setFade(false);
//       setTimeout(() => {
//         setVisibleTitle((prev) => (prev + 1) % titles.length);
//         setFade(true);
//       }, fadeDuration);
//     }, showDuration);

//     return () => clearTimeout(timer);
//   }, [visibleTitle]);                                                    

//   return (
//     <>
//     <Navbar/>

//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           className="w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline >
//           <source src={'https://res.cloudinary.com/den0iz8zn/video/upload/v1761287495/banner_video_new_compressed_w6cmwu.mp4'} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 text-left max-w-5xl w-full mx-auto mt-32 px-4 min-h-[140px]">
//         {/* <h1
//           className={`text-6xl font-extrabold text-white leading-tight transition-opacity duration-500 ease-in-out ${
//             fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
//           } transform w-full`}
//         >
//           {titles[visibleTitle]}
//         </h1> */}            
//         <h1
//           style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
//           className={`text-5xl font-bold text-white leading-tight transition-opacity duration-500 ease-in-out ${
//             fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
//           } transform w-full`}
//         >
//           {titles[visibleTitle]}
//         </h1>

//         <div className="mt-8 flex items-center gap-6">
//           <a
//             href="/projects"
//             className="bg-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition flex items-center gap-3"
//             >
//             Explore Plots
//             <span>→</span>
//           </a>
//         </div>
//       </div>
//     </section>
//             </>
//   );
// };

// export default HeroSection;


// import React, { useEffect, useState } from "react";
// import HeroVideo from "../../components/assets/banner_video_compressed.mp4";
// import Navbar from "../navbar/navbar.jsx";

// const titles = [
//   <>
//     PLOTS THAT PROMISE A{" "}
//     <span className="text-yellow-300 border-b-4 border-yellow-300">
//       PROSPEROUS TOMORROW
//     </span>
//   </>,
//   // <>
//   //   GROW YOUR WEALTH STEADILY{" "}
//   //   <span className="text-yellow-300 border-b-4 border-yellow-300">
//   //     WITH LAND INVESTMENTS
//   //   </span>
//   // </>,
// ];

// const HeroSection = () => {

//   const [visibleTitle, setVisibleTitle] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const showDuration = 3000;
//     const fadeDuration = 400;

//     const timer = setTimeout(() => {
//       setFade(false);
//       setTimeout(() => {
//         setVisibleTitle((prev) => (prev + 1) % titles.length);
//         setFade(true);
//       }, fadeDuration);
//     }, showDuration);

//     return () => clearTimeout(timer);
//   }, [visibleTitle]);                                                    

//   return (
//     <>
//     <Navbar/>

//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           className="w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline >
//           <source src={'https://res.cloudinary.com/den0iz8zn/video/upload/v1761287495/banner_video_new_compressed_w6cmwu.mp4'} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 text-left max-w-5xl w-full mx-auto mt-32 px-4 min-h-[140px]">
//         {/* <h1
//           className={`text-6xl font-extrabold text-white leading-tight transition-opacity duration-500 ease-in-out ${
//             fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
//           } transform w-full`}
//         >
//           {titles[visibleTitle]}
//         </h1> */}            
//         <h1
//           style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
//           className={`text-5xl font-bold text-white leading-tight transition-opacity duration-500 ease-in-out ${
//             fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
//           } transform w-full`}
//         >
//           {titles[visibleTitle]}
//         </h1>

//         <div className="mt-8 flex items-center gap-6">
//           <a
//             href="/projects"
//             className="bg-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition flex items-center gap-3"
//             >
//             Explore Plots
//             <span>→</span>
//           </a>
//         </div>
//       </div>
//     </section>
//             </>
//   );
// };

// export default HeroSection;
