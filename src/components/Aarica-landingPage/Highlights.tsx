import { MapPin, IndianRupee, CheckCircle2, TreePine } from "lucide-react";
import { Card } from "../Aarica-landingPage/ui/card.tsx";

const highlights = [
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Doddaballapur – Attached to Highway",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Starting at ₹3,499/-* per sq. ft.",
  },
  {
    icon: CheckCircle2,
    title: "BMRDA Approved",
    description: "Legally approved project",
  },
  {
    icon: TreePine,
    title: "Landscaped Area",
    description: "Beautiful parks and green spaces",
  },
];

const Highlights = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="animate-fade-in-up text-[#4C392C]">
            {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Project <span className="text-[#8F5D38]">Highlights</span>
            </h2> */}
               <h1 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight text-[#5C4033]">
                <span className="text-[#4C392C] md:text-[50px] font-semibold">Project</span>{' '}
                <span className="text-[#8B5E3C] md:text-[50px] font-semibold">Highlights</span>
              </h1>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8F5D38] mt-2 flex-shrink-0"></div>
                <p className="text-lg">Location: Doddaballapur – Attached to Highway</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8F5D38] mt-2 flex-shrink-0"></div>
                <p className="text-lg">Price: ₹3,499/-* per sq. ft.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8F5D38] mt-2 flex-shrink-0"></div>
                <p className="text-lg">Approval: BMRDA Approved</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8F5D38] mt-2 flex-shrink-0"></div>
                <p className="text-lg">Total Area: 5 Acres Gated Community</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8F5D38] mt-2 flex-shrink-0"></div>
                <p className="text-lg">
                  Amenities: Lavish lifestyle features, landscaped parks,
                  clubhouse, children's play area & more
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#8F5D38]/10 rounded-2xl border border-[#8F5D38]/30">
              <h3 className="text-xl font-semibold mb-4 text-[#4C392C]">
                Why Choose Us?
              </h3>
              <p className="leading-relaxed text-[#4C392C]/80">
                Experience the perfect blend of luxury and convenience in a 
                thoughtfully planned community that offers everything you need 
                for a comfortable lifestyle.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="grid sm:grid-cols-2 gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 bg-[#fffaf6] border border-[#8F5D38]/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-[#8F5D38]/10">
                  <highlight.icon className="w-6 h-6 text-[#8F5D38]" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#4C392C] font-[Arial,Helvetica,sans-serif]">
                  {highlight.title}
                </h3>
                <p className="text-sm text-[#4C392C]/80">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;


// import { MapPin, IndianRupee, CheckCircle2, TreePine } from "lucide-react";
// import { Card } from "../Aarica-landingPage/ui/card.tsx";

// const highlights = [
//   {
//     icon: MapPin,
//     title: "Prime Location",
//     description: "Doddaballapur – Attached to Highway",
//   },
//   {
//     icon: IndianRupee,
//     title: "Affordable Pricing",
//     description: "Starting at ₹3,499/-* per sq. ft.",
//   },
//   {
//     icon: CheckCircle2,
//     title: "BMRDA Approved",
//     description: "Legally approved project",
//   },
//   {
//     icon: TreePine,
//     title: "Landscaped Area",
//     description: "Beautiful parks and green spaces",
//   },
// ];

// const Highlights = () => {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <div className="animate-fade-in-up">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
//               Project <span className="text-primary">Highlights</span>
//             </h2>
            
//             <div className="space-y-4 text-foreground">
//               <div className="flex items-start gap-3">
//                 <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
//                 <p className="text-lg">Location: Doddaballapur – Attached to Highway</p>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
//                 <p className="text-lg">Price: ₹3,499/-* per sq. ft.</p>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
//                 <p className="text-lg">Approval: BMRDA Approved</p>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
//                 <p className="text-lg">Total Area: 5 Acres Gated Community</p>
//               </div>
              
//               <div className="flex items-start gap-3">
//                 <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
//                 <p className="text-lg">
//                   Amenities: Lavish lifestyle features, landscaped parks, 
//                   clubhouse, children's play area & more
//                 </p>
//               </div>
//             </div>

//             <div className="mt-8 p-6 bg-secondary rounded-2xl border border-border">
//               <h3 className="text-xl font-semibold mb-4 text-foreground">
//                 Why Choose Us?
//               </h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 Experience the perfect blend of luxury and convenience in a 
//                 thoughtfully planned community that offers everything you need 
//                 for a comfortable lifestyle.
//               </p>
//             </div>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
//             {highlights.map((highlight, index) => (
//               <Card
//                 key={index}
//                 className="p-6 bg-card border border-border rounded-2xl card-hover"
//               >
//                 <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-primary/10">
//                   <highlight.icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="font-semibold text-lg mb-2 text-foreground">
//                   {highlight.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm">
//                   {highlight.description}
//                 </p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Highlights;
