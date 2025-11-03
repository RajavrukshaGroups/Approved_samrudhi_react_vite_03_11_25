import { Building, School, Hospital, ShoppingBag, Plane, Train } from "lucide-react";
import { Card } from "../Aarica-landingPage/ui/card.tsx";

const developments = [
  {
    icon: Building,
    text: "10 minute from Foxconn & Tech Park – major industrial hub",
  },
  {
    icon: Building,
    text: "Close to Kwin City – fast-growing township in North Bangalore",
  },
  {
    icon: Train,
    text: "5 minute from Doddaballapur Railway Station",
  },
  {
    icon: Plane,
    text: "25 minute from Kempegowda International Airport",
  },
  {
    icon: School,
    text: "Nearby schools and colleges – Sterling School, Presidency University, NM",
  },
  {
    icon: Hospital,
    text: "Hospitals within 15 minutes – Akash Hospital, Leena Multispeciality Hospital",
  },
  {
    icon: ShoppingBag,
    text: "Close to Dmart, local markets, and malls",
  },
  {
    icon: Building,
    text: "Excellent connectivity via Bangalore–Doddaballapur–Hindupur Highway",
  },
];

// const NearbyDevelopments = () => {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-background bg-background">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2
//             className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight 
//                        bg-gradient-to-r from-primary via-green-700 to-secondary 
//                        bg-clip-text text-transparent animate-gradient-shift"
//           >
//             Nearby <span className="text-primary">Developments</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 font-medium">
//             Strategically located with excellent connectivity to key areas
//           </p>
//         </div>

//         {/* Development Cards */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {developments.map((development, index) => (
//             <Card
//               key={index}
//               className="p-6 flex items-start gap-4 bg-card border border-border 
//                          rounded-2xl card-hover animate-fade-in hover:shadow-lg 
//                          transition-transform duration-300 hover:scale-[1.02]"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10">
//                 <development.icon className="w-6 h-6 text-primary" />
//               </div>
//               <p
//                 className="text-lg font-semibold text-foreground leading-relaxed 
//                            bg-gradient-to-r from-primary to-green-800 
//                            bg-clip-text text-transparent"
//               >
//                 {development.text}
//               </p>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// import { Building, School, Hospital, ShoppingBag, Plane, Train } from "lucide-react";
// import { Card } from "../Aarica-landingPage/ui/card.tsx";

// const developments = [
//   { icon: Building, text: "10 minute from Foxconn & Tech Park – major industrial hub" },
//   { icon: Building, text: "Close to Kwin City – fast-growing township in North Bangalore" },
//   { icon: Train, text: "5 minute from Doddaballapur Railway Station" },
//   { icon: Plane, text: "25 minute from Kempegowda International Airport" },
//   { icon: School, text: "Nearby schools and colleges – Sterling School, Presidency University, NM" },
//   { icon: Hospital, text: "Hospitals within 15 minutes – Akash Hospital, Leena Multispeciality Hospital" },
//   { icon: ShoppingBag, text: "Close to Dmart, local markets, and malls" },
//   { icon: Building, text: "Excellent connectivity via Bangalore–Doddaballapur–Hindupur Highway" },
// ];

const NearbyDevelopments = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-background bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          {/* <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight 
                       bg-gradient-to-r from-[#8B5E3C] via-[#4C392C] to-[#8B5E3C]
                       bg-clip-text text-transparent animate-gradient-shift"
          >
            Nearby <span className="text-[#4C392C]">Developments</span>
          </h2> */}
             <h1 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight text-[#5C4033]">
  <span className="text-[#4C392C] md:text-[50px] font-semibold">Nearby</span>{' '}
  <span className="text-[#8B5E3C] md:text-[50px] font-semibold">Developments</span>
</h1>
          <p className="text-lg text-[#5C4033] max-w-2xl mx-auto mt-4 font-medium">
            Strategically located with excellent connectivity to key areas
          </p>
        </div>

        {/* Development Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {developments.map((development, index) => (
            <Card
              key={index}
              className="p-6 flex items-start gap-4 bg-card border border-border 
                         rounded-2xl card-hover animate-fade-in hover:shadow-lg 
                         transition-transform duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#8B5E3C]/10">
                <development.icon className="w-6 h-6 text-[#8B5E3C]" />
              </div>

              {/* Text */}
              <p
                className="text-lg font-semibold leading-relaxed 
                           bg-gradient-to-r from-[#8B5E3C] to-[#4C392C]
                           bg-clip-text text-transparent"
              >
                {development.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// export default NearbyDevelopments;



// const NearbyDevelopments = () => {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background bg-background">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
//             Nearby <span className="text-primary">Developments</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Strategically located with excellent connectivity to key areas
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {developments.map((development, index) => (
//             <Card
//               key={index}
//               className="p-6 flex items-start gap-4 bg-card border border-border rounded-2xl card-hover animate-fade-in"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10">
//                 <development.icon className="w-6 h-6 text-primary" />
//               </div>
//               <p className="text-foreground leading-relaxed">
//                 {development.text}
//               </p>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

export default NearbyDevelopments;
