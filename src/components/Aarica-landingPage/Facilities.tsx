import { Trees, Shield, Droplets, Wind, Zap, Play, Building2, Lightbulb, Landmark, Waves, Sparkles, Home } from "lucide-react";
import { Card } from "../Aarica-landingPage/ui/card.tsx";

const facilities = [
  { icon: Home, title: "Gated Community", delay: "0s" },
  { icon: Shield, title: "24/7 Security", delay: "0.1s" },
  { icon: Landmark, title: "30ft Entrance Road", delay: "0.2s" },
  { icon: Droplets, title: "Rainwater Harvesting", delay: "0.3s" },
  { icon: Building2, title: "Blacktop Road", delay: "0.4s" },
  { icon: Waves, title: "STP Sewage", delay: "0.5s" },
  { icon: Wind, title: "Underground Drainage", delay: "0.6s" },
  { icon: Trees, title: "Park And Tree", delay: "0.7s" },
  { icon: Play, title: "Kids Play Area", delay: "0.8s" },
  { icon: Zap, title: "Underground Electricity", delay: "0.9s" },
  { icon: Lightbulb, title: "Street Light", delay: "1s" },
  { icon: Sparkles, title: "100% Vaastu", delay: "1.1s" },
];

const Facilities = () => {
  return (
    <section className="py-3 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground ">
            Premium <span className="text-primary bg-[#4C392C]">Facilities</span>
          </h2> */}
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground ">
                <span className="text-[#4C392C]">Premium</span> <span className="text-[#8F5D38]">Facilities</span>
            </h2> */}                 
          {/* <h1 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight">
              <span className="text-[#4C392C] md:text-[50px]">Premium</span>{' '}
              <span className="text-[#8F5D38] md:text-[50px]">Facilities</span>
          </h1> */}                          
          <h1 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight text-[#5C4033]">
            <span className="text-[#4C392C] md:text-[50px] font-semibold">Premium</span>{' '}
            <span className="text-[#8B5E3C] md:text-[50px] font-semibold">Facilities</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover world-class amenities designed for modern living
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center justify-center text-center bg-card hover:bg-[#ffeee7] border border-border rounded-2xl card-hover animate-scale-in"
              style={{ animationDelay: facility.delay }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10">
                <facility.icon className="w-8 h-8 text-primary" />
              </div>
              {/* <h3 className=" font-semibold bg-slate-300 text-foreground text-sm sm:text-base">
                {facility.title}
              </h3> */}
              <h3 className="font-semibold  text-foreground text-sm sm:text-base font-[Arial,Helvetica,sans-serif]">
  {facility.title}
</h3>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
