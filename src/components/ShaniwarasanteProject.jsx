import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from '../components/navbar/navbar.jsx'
import Footer from '../components/footer'


gsap.registerPlugin(ScrollTrigger);

const LuxuryLanding = () => {
  const heroRef = useRef(null);
  const gridPatternRef = useRef(null);
  const storyCardsRef = useRef([]);
  const plotRefs = useRef([]);
  const amenityRefs = useRef([]);

  useEffect(() => {
    // Hero animations (same as before)
    gsap.from(".hero-badge", { duration: 0.8, y: -30, opacity: 0, ease: "back.out(0.6)" });
    gsap.from(".hero-title", { duration: 1, y: 40, opacity: 0, delay: 0.2, ease: "power3.out" });
    gsap.from(".price-tag", { duration: 0.7, scale: 0.9, opacity: 0, delay: 0.4, ease: "elastic.out(1,0.4)" });
    gsap.from(".hero-text p, .hero-buttons .btn-primary, .hero-buttons .btn-outline", {
      duration: 0.7,
      opacity: 0,
      stagger: 0.12,
      delay: 0.6,
    });
    gsap.from(".hero-image-container", { duration: 1.2, scale: 0.92, opacity: 0, ease: "back.out(0.8)", delay: 0.3 });

    // 🎯 Animated grid pattern: continuous horizontal drift
    if (gridPatternRef.current) {
      const pattern = gridPatternRef.current.querySelector("pattern");
      if (pattern) {
        // Infinite animation: move pattern horizontally
        gsap.to(pattern, {
          duration: 20,
          repeat: -1,
          ease: "none",
          attr: { patternTransform: "translateX(40px)" }, // shift by one grid unit
          modifiers: {
            patternTransform: (x) => {
              // loop translation to avoid jump
              let val = parseFloat(x.split("translateX(")[1]) || 0;
              val = (val + 1) % 40;
              return `translateX(${val}px)`;
            },
          },
        });
      }
    }

    // Story cards
    storyCardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        y: 45,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
      });
    });

    // Masterplan plots stagger
    if (plotRefs.current.length) {
      gsap.from(plotRefs.current, {
        scrollTrigger: { trigger: "#svgLayoutMaster", start: "top 75%" },
        scale: 0,
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        transformOrigin: "center center",
        ease: "back.out(0.7)",
      });
    }

    gsap.from(".park-area", {
      scrollTrigger: { trigger: "#svgLayoutMaster", start: "top 75%" },
      scale: 0,
      opacity: 0,
      duration: 0.9,
      ease: "elastic.out(0.6)",
    });

    amenityRefs.current.forEach((icon) => {
      gsap.from(icon, {
        scrollTrigger: { trigger: icon, start: "top 90%" },
        scale: 0.4,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(0.8)",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#FEFCF5] font-sans text-[#1F2A2E] overflow-x-hidden ">
      {/* Navigation (unchanged) */}
      <Header />

      <main>
        {/* Hero Section with Animated Grid Background */}
        <section
        ref={heroRef}
        className="relative min-h-auto flex items-center mt-12 pt-24 md:pt-32 bg-gradient-to-br from-[#FCF9F2] to-[#F9F5EA] overflow-hidden"
        >
        {/* ✨ Animated Grid SVG Background */}
        <div
            ref={gridPatternRef}
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern
                id="movingGrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                >
                <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    className="text-[#1A4E44]"
                />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#movingGrid)" />
            </svg>
        </div>

        {/* Hero Content - Centered */}
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
            <div>
            <div className="hero-badge inline-block bg-[#1A4E44]/10 backdrop-blur-sm rounded-full px-5 py-1.5 text-sm font-semibold border-l-4 border-[#D4AF6A] mb-6">
                <i className="fas fa-check-circle text-[#D4AF6A] mr-2"></i> KUDA Approved | DC Converted
            </div>
            {/* <h1 className="hero-title font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-[#0E332C]">
                ನೈಸರ್ಗಿಕ ಸೌಂದರ್ಯ ಮತ್ತು <br />
                ನೆಮ್ಮದಿ ಜೀವನಕ್ಕೆ{" "}
                <span className="text-[#D4AF6A]">ನಿಮ್ಮ ಹೊಸ ವಿಳಾಸ</span>
            </h1>
            <div className="price-tag text-4xl md:text-5xl font-extrabold text-[#1A4E44] mt-8 mb-2">
                ₹1699/<small className="text-xl font-normal">sq.ft*</small>
            </div>
            <p className="text-[#5B6E6F] mb-6 max-w-md mx-auto">
                ಶನಿವಾರಸಂತೆ – ಚಂಗಡಹಳ್ಳಿ ರಸ್ತೆ | Premium Plots with 30ft roads,
                Park & Modern Infrastructure
            </p> */}

            <h1 className="hero-title font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-[#0E332C]">
              Natural Beauty & <br />
              Peaceful Living{" "}
              <span className="text-[#D4AF6A]">Your New Address</span>
            </h1>
            <div className="price-tag text-4xl md:text-5xl font-extrabold text-[#1A4E44] mt-8 mb-2">
              ₹1699/<small className="text-xl font-normal">sq.ft*</small>
            </div>
            <p className="text-[#5B6E6F] mb-6 max-w-md mx-auto">
              Shanivarsanthe – Changadahalli Road | Premium Plots with 30ft roads,
              Park & Modern Infrastructure
            </p>
            
            {/* Main Buttons Row */}
            <div className="hero-buttons flex flex-wrap gap-4 justify-center">
                <a href="#masterplan" className="btn-primary bg-[#1A4E44] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-[#0E332C] hover:-translate-y-1 transition-all">
                <i className="fas fa-map-marked-alt"></i> Explore Masterplan
                </a>
                <a href="#contact" className="btn-outline border border-[#1A4E44] text-[#1A4E44] px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#1A4E44] hover:text-white transition">
                <i className="fas fa-calendar-check"></i> Schedule Visit
                </a>
            </div>

            {/* Secondary Buttons Row - Enquiry & Brochure */}
            <div className="flex flex-row gap-4 justify-center ">
                <a 
                href="#contact" 
                className="bg-[#D4AF6A] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-[#C49B4A] hover:-translate-y-1 transition-all duration-300"
                >
                <i className="fas fa-envelope"></i> Enquiry Now
                </a>
                <a 
                href="/Brochure.pdf" 
                download
                className="bg-white border-2 border-[#1A4E44] text-[#1A4E44] px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-[#1A4E44] hover:text-gold hover:border-gold hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                <i className="fas fa-download"></i> Download Brochure
                </a>
            </div>

            {/* Features Row */}
            <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm">
                <span><i className="fas fa-road text-[#D4AF6A] mr-1"></i> 9.0M & 6.0M Roads</span>
                <span><i className="fas fa-tree text-[#D4AF6A] mr-1"></i> Children's Play Area</span>
                <span><i className="fas fa-water text-[#D4AF6A] mr-1"></i> 24/7 Water</span>
            </div>
            </div>
        </div>
        </section>

        {/* Rest of sections remain identical to previous version */}
        {/* Storytelling Section */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 md:px-8 text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D4AF6A] tracking-wider">THE LEGACY</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A4E44] mt-2">
              Where Heritage Embraces <span className="text-[#D4AF6A]">Modern Opulence</span>
            </h2>
            {/* <p className="text-[#5F6E6E] mt-4">
              ಶನಿವಾರಸಂತೆಯ ಪ್ರಶಾಂತತೆ, ನಗರ ಸಂಪರ್ಕದ ಅನುಕೂಲ.
              KUDA Approved layout where nature & luxury co-exist.
            </p> */}
            <p className="text-[#5F6E6E] mt-4">
              The tranquility of Shanivarsanthe, with the convenience of city connectivity.
              KUDA Approved layout where nature & luxury co-exist.
            </p>
          </div>
          <div className="container mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-leaf",
                title: "Natural Serenity",
                desc: "Shaniwarasante – Changadahalli road. Wake up to lush greenery, pure air, and tranquil mornings while remaining connected to urban arteries.",
              },
              {
                icon: "fas fa-building",
                title: "KUDA Approved | DC Converted",
                desc: "Government-approved layout with clear titles, legal compliance, and bank loan eligibility. A secure investment for generations.",
              },
              {
                icon: "fas fa-road",
                title: "World-Class Infrastructure",
                desc: "30ft wide carpet roads, underground drainage, 24/7 electricity, dedicated drinking water & grand entrance arch.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={(el) => (storyCardsRef.current[idx] = el)}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md border border-[#D4AF6A]/20 hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <i className={`${item.icon} text-5xl text-[#1A4E44]`}></i>
                <h3 className="text-2xl font-semibold mt-5 mb-3">{item.title}</h3>
                <p className="text-[#5B6E6F]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Price & Approval Banner */}
        <section className="py-16 bg-gradient-to-r from-[#F7F4EA] to-[#FFFBF5]">
          <div className="container mx-auto px-6 md:px-8 flex flex-wrap justify-between items-center gap-8">
            <div>
              <div className="inline-block bg-[#1A4E44] text-white rounded-full px-5 py-1.5 text-sm font-semibold border-l-4 border-[#D4AF6A]">
                PREMIUM PLOTS
              </div>
              <div className="text-5xl font-extrabold mt-5">₹1699/<span className="text-2xl">sq.ft*</span></div>
              <p className="mt-2 text-[#5B6E6F]">Inclusive of development charges. Limited inventory.</p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#1A4E44] text-white px-6 py-3 rounded-full font-semibold mt-6 hover:bg-[#0E332C] transition">
                <i className="fas fa-hand-holding-usd"></i> Request Price List
              </a>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-md min-w-[240px]">
              <i className="fas fa-file-signature text-4xl text-[#D4AF6A]"></i>
              <h4 className="text-xl font-bold mt-2">KUDA Approved Layout</h4>
              <p className="text-sm">RERA | DC Converted | No Legal Hurdles</p>
              <hr className="my-4" />
              <i className="fas fa-map-pin text-[#D4AF6A]"></i> Shaniwarasante – Changadahalli Road
            </div>
          </div>
        </section>

        {/* Masterplan Section */}
        {/* <section id="masterplan" className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-8 text-center mb-12">
            <span className="text-[#D4AF6A]">DESIGNED FOR EXCELLENCE</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A4E44]">Layout Plan 32A</h2>
            <p>9.00M & 6.00M arterial roads | Children's park | 36 Premium residential plots</p>
          </div>
          <div className="container mx-auto px-4 md:px-8">
            <div className="bg-[#F1EDE2] rounded-3xl p-4 md:p-6 shadow-2xl" id="svgLayoutMaster">
              <svg viewBox="0 0 800 520" className="w-full h-auto rounded-2xl">
                <rect width="800" height="520" fill="#E3DBCC" rx="20" />
                <rect x="0" y="180" width="800" height="28" fill="#9BA88D" opacity="0.9" />
                <text x="320" y="198" fontFamily="Inter" fill="#1F2A2E" fontSize="12" fontWeight="bold">9.00M Main Road</text>
                <rect x="350" y="0" width="22" height="520" fill="#9BA88D" opacity="0.9" />
                <rect x="0" y="380" width="800" height="20" fill="#B2BBA2" opacity="0.8" />
                <text x="30" y="394" fontFamily="Inter" fill="#2B3B32" fontSize="11">6.00M Service Lane</text>
                <rect x="470" y="220" width="140" height="120" fill="#BED5B2" rx="14" stroke="#D4AF6A" strokeWidth="2.5" className="park-area" />
                <text x="505" y="285" fontFamily="Inter" fill="#2C4B32" fontWeight="bold" fontSize="14">PARK</text>
                <circle cx="540" cy="260" r="12" fill="#D4AF6A" />
                <g>
                  {[
                    { x: 30, y: 50, label: "Plot 12" },
                    { x: 120, y: 50, label: "Plot 4" },
                    { x: 210, y: 50, label: "Plot 33" },
                    { x: 30, y: 240, label: "Plot 20" },
                    { x: 120, y: 240, label: "Plot 2" },
                    { x: 210, y: 240, label: "Plot 23" },
                    { x: 600, y: 240, label: "Plot 36" },
                    { x: 690, y: 240, label: "Plot 26" },
                  ].map((plot, idx) => (
                    <g key={idx} ref={(el) => (plotRefs.current[idx] = el)}>
                      <rect x={plot.x} y={plot.y} width="70" height="58" fill="#FEF6E8" stroke="#9B7E4A" strokeWidth="1.5" rx="6" />
                      <text x={plot.x + 18} y={plot.y + 35} fontSize="10" fill="#1A4E44">{plot.label}</text>
                    </g>
                  ))}
                </g>
                <circle cx="740" cy="460" r="16" fill="#DED0AF" stroke="#1A4E44" strokeWidth="2" />
                <text x="726" y="466" fill="#1A4E44" fontSize="9">Entrance</text>
                <rect x="30" y="420" width="110" height="55" fill="#DACCAE" rx="16" stroke="#D4AF6A" strokeWidth="1.8" />
                <text x="58" y="455" fontSize="12" fill="#4E3E28">🎡 Play Area</text>
              </svg>
            </div>
          </div>
        </section> */}

        {/* Amenities Section */}
        <section className="py-20 bg-[#FAF8F2]">
          <div className="container mx-auto px-6 md:px-8 text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A4E44]">Signature Amenities</h2>
            <p>Designed for a life of comfort, joy, and modern convenience.</p>
          </div>
          <div className="container mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { icon: "fas fa-road", title: "30ft & 20ft Roads", desc: "Vastu aligned" },
              { icon: "fas fa-bolt", title: "Underground Electricity", desc: "3-phase power" },
              { icon: "fas fa-water", title: "Drinking Water", desc: "Cauvery + Borewell" },
              { icon: "fas fa-dumpster-fire", title: "Underground Drainage", desc: "STP ready" },
              { icon: "fas fa-tree", title: "Central Park + Play Area", desc: "Children's zone" },
              { icon: "fas fa-door-open", title: "Grand Entrance Arch", desc: "Security & landmark" },
            ].map((item, idx) => (
              <div key={idx} ref={(el) => (amenityRefs.current[idx] = el)}>
                <div className="bg-[#F3EFE6] w-20 h-20 rounded-3xl flex items-center justify-center text-3xl text-[#1A4E44] mx-auto">
                  <i className={item.icon}></i>
                </div>
                <h4 className="font-semibold mt-4">{item.title}</h4>
                <small className="text-[#5B6E6F]">{item.desc}</small>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-[#D4AF6A]"><i className="fas fa-map-marker-alt"></i> PRIME CONNECTIVITY</span>
              {/* <h2 className="text-3xl md:text-4xl font-serif mt-4 leading-tight">ಶನಿವಾರಸಂತೆ – ಚಂಗಡಹಳ್ಳಿ ರಸ್ತೆ</h2> */}
              <h2 className="text-xl md:text-3xl font-serif mt-4 leading-tight">Shanivarsanthe – Changadahalli Road</h2>
              <p className="text-[#5B6E6F] mt-4">Perfectly nestled between natural beauty and city access. Close to schools, hospitals, and upcoming commercial hubs.</p>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-md mt-8 border border-[#D4AF6A]/20">
                <i className="fas fa-phone-alt text-2xl text-[#D4AF6A]"></i>
                <h3 className="text-xl font-semibold mt-2">Book Your Exclusive Tour</h3>
                <div className="flex gap-5 my-4">
                  <a href="tel:+919945646095" className="font-bold text-[#1A4E44]">+91 99456 46095</a>
                  <a href="tel:+918058060320" className="font-bold text-[#1A4E44]">+91 80580 60320</a>
                </div>
                <button className="bg-[#1A4E44] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#0E332C] transition">
                  <i className="fab fa-whatsapp"></i> Call Now
                </button>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <i className="fas fa-building text-5xl text-[#1A4E44]"></i>
              <p className="mt-2">Pioneers in premium plotted developments. "KUDA Approved Layout" with modern amenities, transparent processes & 100% customer satisfaction.</p>
              <p className="mt-3"><i className="fas fa-check-double text-[#D4AF6A]"></i> DC Converted & No Litigation</p>
              <p><i className="fas fa-hand-holding-heart"></i> Flexible payment plans</p>
              <hr className="my-4" />
              <i className="fas fa-solar-panel"></i> Sustainable design | Rainwater harvesting
            </div>
          </div>
        </section>
      </main>

       <Footer />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </div>
  );
};

export default LuxuryLanding;