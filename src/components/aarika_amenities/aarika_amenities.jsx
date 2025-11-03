// import { Badge } from "../aarika_amenities/badge.jsx";
// import { Card } from "../aarika_amenities/card.jsx";
import { Diamond, Users, MapPin, Building2, ShieldCheck, Home, TreePine, Zap, Hexagon, Router, ParkingSquare } from "lucide-react";
// import VariableProximity from "../../../utils/VariableProximity";
import VariableProximity from "../../utils/VariableProximity.jsx"
import React, {  useRef } from "react";

const Index = () => {
    const containerRef = useRef(null);
  
  const milestones = [
    {
      icon: Diamond,
      value: "3 Years",
      label: "of Excellence",
    },
    {
      icon: Users,
      value: "600+",
      label: "Happy Customers",
    },
    {
      icon: MapPin,
      value: "Over 1.5 Mn Sqft",
      label: "Developed",
    },
    {
      icon: Building2,
      value: "5+",
      label: "Completed Projects",
    },
  ];

  const amenities = [
    { icon: Home, name: "Gated Community" },
    { icon: ShieldCheck, name: "Security" },
    { icon: Router, name: "40ft Entrance Road" },
    { icon: ParkingSquare, name: "Blacktop Road" },
    { icon: Building2, name: "Kids Play" },
    { icon: TreePine, name: "Park And Tree" },
    { icon: Zap, name: "Underground Electricity" },
    { icon: Hexagon, name: "100% Vaastu" },
  ];

  return (
    <main className="min-h- bg-gradient from-background to-secondary">
     
      <section className="px-4 py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 md:mb-12">
            {/* <div ref={containerRef} style={{ position: "relative" }}>
              <VariableProximity
                label={"Amenities"}
                className={"variable-proximity-demo"}
                fromFontVariationSettings="'wght' 800, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div> */}
            <h1 className="plumeria-title">
                   <div ref={containerRef} style={{ position: "relative" }}>
                     <VariableProximity
                       label={"Amenities"}
                       className={"variable-proximity-demo"}
                       fromFontVariationSettings="'wght' 800, 'opsz' 9"
                       toFontVariationSettings="'wght' 1000, 'opsz' 40"
                       containerRef={containerRef}
                       radius={100}
                       falloff="linear"
                     />
                   </div>
                 </h1>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-3 p-4 md:p-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="p-3 bg-white border border-gray-300 rounded-lg group-hover:bg-gray-100 group-hover:border-gray-400 transition-all duration-300">
                    <Icon 
                      className="w-8 h-8 md:w-10 md:h-10 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" 
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                    {amenity.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default Index;


// // import { Badge } from "../aarika_amenities/badge.jsx";
// // import { Card } from "../aarika_amenities/card.jsx";
// import { Diamond, Users, MapPin, Building2, ShieldCheck, Home, TreePine, Zap, Hexagon, Router, ParkingSquare } from "lucide-react";
// // import VariableProximity from "../../../utils/VariableProximity";
// import VariableProximity from "../../utils/VariableProximity.jsx"
// import React, {  useRef } from "react";

// const Index = () => {
//     const containerRef = useRef(null);
//   const milestones = [
//     {
//       icon: Diamond,
//       value: "3 Years",
//       label: "of Excellence",
//     },
//     {
//       icon: Users,
//       value: "600+",
//       label: "Happy Customers",
//     },
//     {
//       icon: MapPin,
//       value: "Over 1.5 Mn Sqft",
//       label: "Developed",
//     },
//     {
//       icon: Building2,
//       value: "5+",
//       label: "Completed Projects",
//     },
//   ];

//   const amenities = [
//     { icon: Home, name: "Gated Community" },
//     { icon: ShieldCheck, name: "Security" },
//     { icon: Router, name: "40ft Entrance Road" },
//     { icon: ParkingSquare, name: "Blacktop Road" },
//     { icon: Building2, name: "Kids Play" },
//     { icon: TreePine, name: "Park And Tree" },
//     { icon: Zap, name: "Underground Electricity" },
//     { icon: Hexagon, name: "100% Vaastu" },
//   ];

//   return (
//     <main className="min-h- bg-gradient from-background to-secondary">
     
//       <section className="px- py-1 md:py-24 bg-white from-secondary to-background">
//         <div className="container mx-auto max-w-6xl">
//           {/* <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
//             AMENITIES
//           </h2>
//            */}
//            <h1 className="plumeria-title">
//                    <div ref={containerRef} style={{ position: "relative" }}>
//                      <VariableProximity
//                        label={"Amenities"}
//                        className={"variable-proximity-demo"}
//                        fromFontVariationSettings="'wght' 800, 'opsz' 9"
//                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
//                        containerRef={containerRef}
//                        radius={100}
//                        falloff="linear"
//                      />
//                    </div>
//                  </h1>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//             {amenities.map((amenity, index) => {
//               const Icon = amenity.icon;
//               return (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center space-y-4 p-6 rounded-2xl hover:bg-card transition-all duration-300 hover:shadow-lg group cursor-pointer"
//                   style={{ animationDelay: `${index * 50}ms` }}
//                 >
//                   <div className="p-5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary group-hover:to-accent transition-all duration-300">
//                     <Icon 
//                       className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:text-primary-foreground transition-colors duration-300" 
//                       strokeWidth={1.5}
//                     />
//                   </div>
//                   <span className="text-sm md:text-base font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300">
//                     {amenity.name}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Index;
