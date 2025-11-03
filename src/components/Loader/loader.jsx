


// import React from "react";
// import { Oval } from "react-loader-spinner";
// import RRPL_logo from "../../components/assets/Samrudhi_Logo.png";
// import "./loader.css";

// const Loader = ({ color = "#FFC107", secondaryColor = "#FFD54F", logo }) => {
//   return (
//     <div
//       className={`loader ${logo ? "loader-with-logo" : "loader-default-bg"}`}
//     >
//       {!!logo ? (
//         <div className="spinner-with-logo">
//           <img src={RRPL_logo} alt="rrpl_logo" className="loader-logo" />

//           <Oval
//             visible={true}
//             height="120"
//             width="120"
//             color="#FFC107"            // ✨ light yellowish orange (amber)
//             secondaryColor="#FFD54F"   // 🌟 soft pastel yellow-orange
//             ariaLabel="oval-loading"
//             wrapperStyle={{ position: "absolute" }}
//             wrapperClass=""
//           />
//         </div>
//       ) : (
//         <Oval
//           visible={true}
//           height="120"
//           width="120"
//           color="#FFC107"            // ✨ light yellowish orange
//           secondaryColor="#FFD54F"   // 🌟 lighter tone
//           ariaLabel="oval-loading"
//           wrapperStyle={{ position: "absolute" }}
//           wrapperClass=""
//         />
//       )}
//     </div>
//   );
// };

// export default Loader;

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const Loader = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const duration = 3000; // 3 seconds
//     const interval = 20; // Update every 20ms
//     const steps = duration / interval;
//     const increment = 100 / steps;

//     const timer = setInterval(() => {
//       setProgress((prev) => {
//         const next = prev + increment;
//         if (next >= 100) {
//           clearInterval(timer);
//           return 100;
//         }
//         return next;
//       });
//     }, interval);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-white via-secondary to-white">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="flex flex-col items-center gap-8"
//       >
//         {/* Spinner */}
//         <div className="relative">
//           {/* Outer glow ring */}
//           <motion.div
//             animate={{
//               rotate: 360,
//             }}
//             transition={{
//               duration: 3,
//               ease: "linear",
//               repeat: Infinity,
//             }}
//             className="w-16 h-16 rounded-full border-2 border-transparent border-t-accent shadow-glow"
//             style={{
//               background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, hsl(var(--accent)), hsl(var(--gold-glow))) border-box",
//             }}
//           />
          
//           {/* Inner subtle pulse */}
//           <motion.div
//             animate={{
//               scale: [1, 1.1, 1],
//               opacity: [0.5, 0.8, 0.5],
//             }}
//             transition={{
//               duration: 2,
//               ease: "easeInOut",
//               repeat: Infinity,
//             }}
//             className="absolute inset-0 rounded-full bg-accent/10 blur-sm"
//           />
//         </div>

//         {/* Brand Name */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="text-center"
//         >
//           <h1 className="font-playfair text-4xl font-semibold text-foreground tracking-wide">
//             Samrudhi
//           </h1>
//           <p className="font-inter text-sm text-muted-foreground mt-2 tracking-wider uppercase">
//             Luxury Real Estate
//           </p>
//         </motion.div>

//         {/* Progress Bar */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="w-64 h-1 bg-secondary rounded-full overflow-hidden shadow-soft"
//         >
//           <motion.div
//             className="h-full bg-gradient-to-r from-accent via-gold-glow to-accent rounded-full shadow-glow"
//             initial={{ width: "0%" }}
//             animate={{ width: `${progress}%` }}
//             transition={{
//               duration: 0.1,
//               ease: "easeOut",
//             }}
//           />
//         </motion.div>

//         {/* Progress Percentage */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="font-inter text-sm text-muted-foreground tabular-nums"
//         >
//           {Math.round(progress)}%
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Loader;
import { motion } from "framer-motion";

export default function SamrudhiLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Small circular loader */}
      <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4"></div>

      {/* Text */}
      <h1 className="text-3xl font-semibold font-[Arial,Helvetica,sans-serif] text-gray-800 tracking-wide ">Samrudhi</h1>
      <p className="text-sm text-yellow-500">our expertice your prosperity</p>

      {/* Loading line */}
      <div className="w-40 h-1 bg-gray-200 rounded-full overflow-hidden mt-2">
        <motion.div
          className="h-full bg-yellow-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
