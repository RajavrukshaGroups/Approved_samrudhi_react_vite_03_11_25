import { Button } from "../../components/Aarica-landingPage/ui/button.tsx";
import { ArrowRight } from "lucide-react";
import Plumeria_logo from "../../components/assets/Aarika-removebg-preview.png";

const Hero = () => {
  return (
    <>
    <section className="relative pt-52 min-h-[40vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background to-accent/5"></div>

  {/* LOGO - Centered at the top */}
  {/* <div className="relative z-10 mb-10 flex justify-center"> */}
    <img
      src={Plumeria_logo}
      alt="Plumeria"
      className="w-32 sm:w-40 md:w-72 object-contain relative z-10 mb-10 flex justify-center"
    />
  {/* </div> */}
  {/* North Bangalore , Doddaballapura */}

  {/* MAIN CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto animate-fade-in-up">
    {/* HEADING */}
    <h1 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight">
      <span className="text-[#4C392C] md:text-6xl">Your Dream Home</span>{" "}
      <span className="text-[#8F5D38] md:text-6xl">Awaits You</span>
    </h1>

    {/* SUBTEXT */}
    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
      Experience luxury living in a gated community with world-class amenities 
      and prime location connectivity
    </p>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        size="lg"
        className="bg-[#8F5D38] hover:bg-[#4C392C] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        Explore Properties
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="!border-2 !border-[#4C392C] text-[#4C392C] hover:bg-[#8F5D38] hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
      >
        Schedule a Visit
      </Button>
    </div>

    {/* STATS */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div className="animate-fade-in">
        <div className="text-3xl sm:text-4xl font-bold text-[#8F5D38] mb-2">
          5 Acres
        </div>
        <div className="text-muted-foreground">Gated Community</div>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="text-3xl sm:text-4xl font-bold text-[#8F5D38] mb-2">
          ₹3,499/-*
        </div>
        <div className="text-muted-foreground">Per Sq. Ft.</div>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="text-3xl sm:text-4xl font-bold text-[#8F5D38] mb-2">
          BMRDA
        </div>
        <div className="text-muted-foreground">Approved</div>
      </div>
    </div>
  </div>
</section>

    {/* <section className="relative pt-52 min-h-[40vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
         <div className="  items-center justify-center">
          <img
            src={
              Plumeria_logo
            }
            alt="Plumeria"
            className="logo-img"
          />
        </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background to-accent/5"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in-up">
        <h1 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight">
          <span className="text-[#4C392C] md:text-6xl">Your Dream Home</span>{" "}
          <span className="text-[#8F5D38] md:text-6xl">Awaits You</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience luxury living in a gated community with world-class amenities 
          and prime location connectivity
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <Button
            size="lg"
            className="bg-[#8F5D38] hover:bg-[#4C392C] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
            Explore Properties
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="!border-2 !border-[#4C392C] text-[#4C392C] hover:bg-[#8F5D38] hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
            Schedule a Visit
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="text-3xl sm:text-4xl font-bold text-[#8F5D38] mb-2">
              5 Acres
            </div>
            <div className="text-muted-foreground">Gated Community</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl sm:text-4xl font-bold text-[#8F5D38] mb-2">
              ₹3,499/-*
            </div>
            <div className="text-muted-foreground">Per Sq. Ft.</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-3xl sm:text-4xl font-bold text-[#8F5D38] mb-2">
              BMRDA
            </div>
            <div className="text-muted-foreground">Approved</div>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
};

export default Hero;



// import { Button } from "../../components/Aarica-landingPage/ui/button.tsx";
// import { ArrowRight } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>

//     <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in-up">
//         {/* MODIFIED HEADING */}
//         <h1 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight">
//             <span className="text-[#4C392C] md:text-6xl" >Your Dream Home</span>{' '}
//             <span className="text-[#8F5D38] md:text-6xl">Awaits You</span>
//         </h1>
//         {/* END MODIFIED HEADING */}

//         <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
//             Experience luxury living in a gated community with world-class amenities 
//             and prime location connectivity
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Button 
//                 size="lg"
//                 className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
//             >
//                 Explore Properties
//                 <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>


//             <Button
//                 size="lg"
//                 variant="outline"
//                 className="!border-2 !border-secondary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
//             >
//                 Schedule a Visit
//             </Button>

//         </div>

//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div className="animate-fade-in">
//                 <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">5 Acres</div>
//                 <div className="text-muted-foreground">Gated Community</div>
//             </div>
//             <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
//                 <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">₹3,499/-*</div>
//                 <div className="text-muted-foreground">Per Sq. Ft.</div>
//             </div>
//             <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
//                 <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">BMRDA</div>
//                 <div className="text-muted-foreground">Approved</div>
//             </div>
//         </div>
//     </div>
// </section>
  
//   );
// };

// export default Hero;
