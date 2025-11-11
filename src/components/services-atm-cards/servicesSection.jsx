"use client";
import React from "react";
import { Search, Users, TrendingUp, Lightbulb, Check } from "lucide-react"
import { Link } from "react-router-dom";
// Define the SVG icons exactly as used in your static code
const icons = {
  house: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-14 w-14 text-[#F3C64E]" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l9-7.5 9 7.5M4.5 10.5V21h5.25v-6h4.5v6H19.5V10.5" />
    </svg>
  ),
  building: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-14 w-14 text-[#F3C64E]" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M6 21V5.25A1.5 1.5 0 0 1 7.5 3.75h6A1.5 1.5 0 0 1 15 5.25V21M9.75 8.25h1.5m-1.5 3h1.5m-1.5 3h1.5M15 9.75h3v8.25" />
    </svg>
  ),
  battery: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-14 w-14 text-[#F3C64E]" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h1.125a1.875 1.875 0 0 1 1.875 1.875V15a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5V9.375A1.875 1.875 0 0 1 6.375 7.5H7.5M9.75 12l2.25-3v2.25h2.25l-2.25 3V12H9.75zM16.5 7.5V6a.75.75 0 0 0-.75-.75h-7.5A.75.75 0 0 0 7.5 6v1.5" />
    </svg>
  ),
  sun: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-14 w-14 text-[#F3C64E]" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
};

const investorCards = [
  {
    id: 1,
    icon: "house",
    title: "Transparent Communication",
    description: "We prioritize transparency by offering regular updates on project progress, financial performance, and market trends. Our investors have direct access to our team for inquiries, ensuring they are well-informed and confident in their investments.",
    features: [
      "Customer Service & Client Relations",
    ]
  },
  {
    id: 2,
    icon: "building",
    title: "Tailored Investment Opportunity",
    description: "Understanding that each investor has unique goals, we offer customized investment solutions, including joint ventures and fractional ownership models. This flexibility allows investors to choose opportunities that align with their risk tolerance and return expectations.",
    features: [
      "Property Offerings & Customer Service"
    ]
  },
  {
    id: 3,
    icon: "battery",
    title: "Competitive Financial Terms",
    description: "We offer attractive returns on investment, clearly outlining timelines and exit strategies. Our financial terms are structured to align with market expectations, providing investors with confidence in the profitability of their investments.",
    features: [
      " Pricing, Deal Terms & Conditions",
    ]
  },
  {
    id: 4,
    icon: "sun",
    title: "Ongoing Support and Engagement",
    description: "Our commitment extends beyond the initial investment. We maintain regular communication with our investors, providing updates and addressing any concerns promptly. This ongoing support fosters long-term relationships and encourages continued investment.",
    features: [
      "Continuous help with property visits and buying .",
    ]
  },
];

const InvestorCard = ({ card, onReadMore }) => (
  <article className="w-full lg:min-w-[280px] lg:flex-1 rounded-[28px] bg-[#18473F] p-6 lg:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
    <div className="flex items-center justify-center">{icons[card.icon]}</div>
    <h5 className="mt-4 lg:mt-6 text-center text-base md:text-lg lg:text-xl md:w-[247px] font-extrabold leading-snug text-[#F3C64E] font-[Arial,Helvetica,sans-serif]">
      {card.title}
    </h5>
    <div className="mt-4 lg:mt-6 space-y-3">
      {card.features?.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#F3C64E] flex items-center justify-center mt-0.5">
            <Check className="w-2 h-2 lg:w-3 lg:h-3 text-[#18473F]" strokeWidth={3} />
          </div>
          <span className="text-xs  lg:text-sm text-white/90 leading-relaxed">
            {feature}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-6 lg:mt-8 flex justify-center">
      <button
        onClick={() => onReadMore(card)}
        className="inline-flex items-center rounded-full bg-[#F3C64E] px-5 py-2 lg:px-6 lg:py-3 font-semibold text-[#18473F] shadow hover:bg-[#e2b843] text-sm lg:text-base"
      >
        Read More <span className="ml-2">→</span>
      </button>
    </div>
  </article>
);

const ServicesSection = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleReadMore = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <section className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white to-white"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight text-center">
            <span className="text-[#000000] md:text-[50px]">Investor-Centric </span>
            <span className="text-yellow-400 md:text-[50px]">Approach</span>
          </h2>
                  <p className="font-normal pl-8 text-black">At Samrudhi, we recognize that our investors are pivotal to our success. We are
          committed to fostering transparent, mutually beneficial relationships by providing clear
          communication, tailored investment opportunities, and consistent returns</p>
        <div className="mt-8 sm:mt-10 rounded-[28px] border border-white/40 bg-white/10 p-3 sm:p-4">
          {/* Changed this container to use grid for mobile and flex for desktop */}
          <div className="grid grid-cols-1 gap-4 lg:flex lg:flex-row lg:gap-6 lg:overflow-x-auto">
            {investorCards.map((card) => (
              <InvestorCard key={card.id} card={card} onReadMore={handleReadMore} />
            ))}
          </div>
        </div>

        {modalOpen && selectedCard && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div 
              className="bg-gradient-to-br from-[#18473F] to-[#0e3b01] rounded-3xl shadow-2xl relative max-w-2xl w-full max-h-[90vh] overflow-hidden border border-[#F3C64E]/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with decorative elements */}
              <div className="relative bg-[#18473F] p-6 border-b border-[#F3C64E]/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold text-white">{selectedCard.title}</h3>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F3C64E] text-[#18473F] flex items-center justify-center hover:bg-[#e2b843] transition-colors font-semibold text-lg"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {/* Description */}
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {selectedCard.description}
                </p>
              </div>
              {/* Footer with CTA */}
              <div className="bg-[#18473F] p-6 border-t border-[#F3C64E]/20">
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                  <div className="flex gap-3">
                   <Link 
                        to="/contact"
                        className="px-6 py-2 bg-[#F3C64E] text-[#18473F] font-semibold rounded-full hover:bg-[#e2b843] transition-colors"
                      >
                        Get Started
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
