import { useRef, useEffect } from "react";

const marqueeItems = [
  "R",
  <span className="mx-6" key="bamboo1">
    {/* Bamboo Icon SVG */}
    <svg width="40" height="40" viewBox="0 0 40 40" className="inline-block align-middle">
      <path d="M18 5 L18 35" stroke="#262626" strokeWidth="3" strokeLinecap="round"/>
      <path d="M22 5 L22 35" stroke="#262626" strokeWidth="3" strokeLinecap="round"/>
      <path d="M16 10 L24 10" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 18 L25 18" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 26 L24 26" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 32 L25 32" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </span>,
  "ECO-FRIENDLY",
  <span className="mx-6" key="bamboo2">
    {/* Repeat Bamboo Icon SVG */}
    <svg width="40" height="40" viewBox="0 0 40 40" className="inline-block align-middle">
      <path d="M18 5 L18 35" stroke="#262626" strokeWidth="3" strokeLinecap="round"/>
      <path d="M22 5 L22 35" stroke="#262626" strokeWidth="3" strokeLinecap="round"/>
      <path d="M16 10 L24 10" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 18 L25 18" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 26 L24 26" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 32 L25 32" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </span>,
  "Excellence in Execution",
  <span className="mx-6" key="bamboo3">
    <svg width="40" height="40" viewBox="0 0 40 40" className="inline-block align-middle">
      <path d="M18 5 L18 35" stroke="#262626" strokeWidth="3" strokeLinecap="round"/>
      <path d="M22 5 L22 35" stroke="#262626" strokeWidth="3" strokeLinecap="round"/>
      <path d="M16 10 L24 10" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 18 L25 18" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 26 L24 26" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 32 L25 32" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </span>,
  "Tailored Investment Opportunities",
];

export default function MarqueeBanner() {
  const trackRef = useRef(null);

  // Force two sets of items for seamless looping
  return (
    <div className="w-full overflow-hidden bg-[#fee07a] py-4">
      <div
        className="flex whitespace-nowrap animate-marquee"
        ref={trackRef}
        style={{ animation: "marquee 6s linear infinite" }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="text-[60px] font-bold tracking-wide mx-4 text-transparent"
            style={{
              WebkitTextStroke: "2px #262626",
              color: "transparent",
              letterSpacing: "4px",
              fontFamily: "sans-serif",
              lineHeight: 1,
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <style>
        {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      `}
      </style>
    </div>
  );
}

// import { useRef, useEffect } from "react";

// const marqueeItems = [
//   "R",
//   <span className="mx-6" key="sun1">
//     {/* Sun Icon SVG */}
//     <svg width="40" height="40" viewBox="0 0 40 40" className="inline-block align-middle">
//       <circle cx="20" cy="20" r="8" fill="none" stroke="#262626" strokeWidth="2"/>
//       {/* Sun Rays */}
//       <g stroke="#262626" strokeWidth="2">
//         <line x1="20" y1="3" x2="20" y2="10"/>
//         <line x1="20" y1="30" x2="20" y2="37"/>
//         <line x1="3" y1="20" x2="10" y2="20"/>
//         <line x1="30" y1="20" x2="37" y2="20"/>
//         <line x1="8" y1="8" x2="13" y2="13"/>
//         <line x1="32" y1="8" x2="27" y2="13"/>
//         <line x1="8" y1="32" x2="13" y2="27"/>
//         <line x1="32" y1="32" x2="27" y2="27"/>
//       </g>
//     </svg>
//   </span>,
//   "ECO-FRIENDLY",
//   <span className="mx-6" key="sun2">
//     {/* Repeat Sun Icon SVG */}
//     <svg width="40" height="40" viewBox="0 0 40 40" className="inline-block align-middle">
//       <circle cx="20" cy="20" r="8" fill="none" stroke="#262626" strokeWidth="2"/>
//       <g stroke="#262626" strokeWidth="2">
//         <line x1="20" y1="3" x2="20" y2="10"/>
//         <line x1="20" y1="30" x2="20" y2="37"/>
//         <line x1="3" y1="20" x2="10" y2="20"/>
//         <line x1="30" y1="20" x2="37" y2="20"/>
//         <line x1="8" y1="8" x2="13" y2="13"/>
//         <line x1="32" y1="8" x2="27" y2="13"/>
//         <line x1="8" y1="32" x2="13" y2="27"/>
//         <line x1="32" y1="32" x2="27" y2="27"/>
//       </g>
//     </svg>
//   </span>,
//   "Excellence in Execution",
//   <span className="mx-6" key="sun3">
//     <svg width="40" height="40" viewBox="0 0 40 40" className="inline-block align-middle">
//       <circle cx="20" cy="20" r="8" fill="none" stroke="#262626" strokeWidth="2"/>
//       <g stroke="#262626" strokeWidth="2">
//         <line x1="20" y1="3" x2="20" y2="10"/>
//         <line x1="20" y1="30" x2="20" y2="37"/>
//         <line x1="3" y1="20" x2="10" y2="20"/>
//         <line x1="30" y1="20" x2="37" y2="20"/>
//         <line x1="8" y1="8" x2="13" y2="13"/>
//         <line x1="32" y1="8" x2="27" y2="13"/>
//         <line x1="8" y1="32" x2="13" y2="27"/>
//         <line x1="32" y1="32" x2="27" y2="27"/>
//       </g>
//     </svg>
//   </span>,
//   "Tailored Investment Opportunities",
// ];

// export default function MarqueeBanner() {
//   const trackRef = useRef(null);

//   // Force two sets of items for seamless looping
//   return (
//     <div className="w-full overflow-hidden bg-[#fee07a] py-4">
//       <div
//         className="flex whitespace-nowrap animate-marquee"
//         ref={trackRef}
//         style={{ animation: "marquee 18s linear infinite" }}
//       >
//         {[...marqueeItems, ...marqueeItems].map((item, i) => (
//           <span
//             key={i}
//             className="text-[60px] font-bold tracking-wide mx-4 text-transparent"
//             style={{
//               WebkitTextStroke: "2px #262626",
//               color: "transparent",
//               letterSpacing: "4px",
//               fontFamily: "sans-serif",
//               lineHeight: 1,
//             }}
//           >
//             {item}
//           </span>
//         ))}
//       </div>
//       <style>
//         {`
//       @keyframes marquee {
//         0% { transform: translateX(0); }
//         100% { transform: translateX(-50%); }
//       }
//       `}
//       </style>
//     </div>
//   );
// }
