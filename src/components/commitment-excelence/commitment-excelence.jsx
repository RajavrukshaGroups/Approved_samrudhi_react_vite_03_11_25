import React from "react";
import CommitmentImg from "../../components/assets/commitmentsimage.jpg"

export default function TrustSection() {
  return (
    <section className="bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        <div className="flex-1 w-full max-w-2xl animate-fade-in-right">
          <h2 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight text-center">
            <span className="text-[#000000] md:text-[50px]">Our Commitment to </span>
            <span className="text-yellow-400 md:text-[50px]">Excellence</span>
          </h2>
          <div className="mt-10 space-y-6 lg:space-y-8">
            {/* Feature 01 */}
            <div className="group transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-yellow-500/60 font-bold text-xl sm:text-2xl transition-colors duration-300 group-hover:text-yellow-600">
                  01
                </span>
                <h3 className="font-bold text-xl font-[Arial,Helvetica,sans-serif] sm:text-2xl text-gray-900">
                  Ethical Practices and Compliance
                </h3>
              </div>
              <div className="ml-0 sm:ml-11 border-2 border-gray-200 rounded-xl p-4 sm:p-5 bg-gray-100 transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-md">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We adhere strictly to industry regulations and ethical standards, ensuring all transactions are conducted fairly and transparently. This commitment helps in building a reputable brand that clients and partners trust, reducing legal risks, and setting a positive example for the entire team.
                </p>
              </div>
            </div>
            {/* Feature 02 */}
            <div className="group transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-yellow-500/60 font-bold text-xl sm:text-2xl transition-colors duration-300 group-hover:text-yellow-600">
                  02
                </span>
                <h3 className="font-bold text-xl font-[Arial,Helvetica,sans-serif] sm:text-2xl text-gray-900">
                  Continuous Professional Development
                </h3>
              </div>
              <div className="ml-0 sm:ml-11 border-2 border-gray-200 rounded-xl p-4 sm:p-5 bg-gray-100 transition-all duration-300 group-hover:border-teal-300 group-hover:shadow-md">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Recognizing the dynamic nature of the real estate industry, we invest in ongoing training and development for our team. This ensures that our professionals are equipped with the latest knowledge and skills to serve our clients effectively.
                </p>
              </div>
            </div>
            {/* Feature 03 */}
            <div className="group transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-yellow-500/60 font-bold text-xl sm:text-2xl transition-colors duration-300 group-hover:text-yellow-600">
                  03
                </span>
                <h3 className="font-bold text-xl font-[Arial,Helvetica,sans-serif] sm:text-2xl text-gray-900">
                  Advanced Technology Integration
                </h3>
              </div>
              <div className="ml-0 sm:ml-11 border-2 border-gray-200 rounded-xl p-4 sm:p-5 bg-gray-100 transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-md">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We leverage state-of-the-art technology to streamline operations, enhance client interactions, and manage projects efficiently. Our team is trained on the latest tools to maintain a competitive edge in the market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image and Stats */}
        <div className="flex-1 w-full flex justify-center items-center animate-fade-in-up">
          <div className="relative w-full max-w-md lg:max-w-lg lg:mt-56">
            {/* Image Container */}
            <div className=" relative rounded-3xl bg-gradient-to-br from-emerald-200/60 via-teal-200/50 to-cyan-200/60 p-1 sm:p-4 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 animate-pulse-slow"></div>
              <img
                src={CommitmentImg}
                alt="Professional team member representing our commitment to excellence"
                className="relative rounded-2xl w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-center shadow-lg"
              />
            </div>
            {/* Floating Stats - Desktop */}
            <div className="hidden lg:block">
              <div className="absolute -left-8 top-20 bg-white rounded-xl shadow-lg px-4 py-3 border-2 border-emerald-200 animate-fade-in-up backdrop-blur-sm bg-white/95">
                <span className="text-emerald-600 font-bold text-sm">✨ Enhance client interactions</span>
              </div>
              <div className="absolute -right-10 top-36 bg-white rounded-xl shadow-lg px-4 py-3 border-2 border-teal-200 animate-fade-in-up [animation-delay:200ms] backdrop-blur-sm bg-white/95">
                <span className="text-teal-600 font-bold text-sm">🚀 Advanced technology</span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-white rounded-xl shadow-lg px-4 py-3 border-2 border-cyan-200 animate-fade-in-up [animation-delay:400ms] backdrop-blur-sm bg-white/95">
                <span className="text-cyan-600 font-bold text-sm">⚡ Competitive edge</span>
              </div>
            </div>
            {/* Floating Stats - Mobile */}
            <div className="lg:hidden flex flex-col gap-3 mt-6">
              <div className="bg-white/95 rounded-xl shadow-md px-4 py-3 border-2 border-emerald-200 backdrop-blur-sm">
                <span className="text-emerald-600 font-bold text-sm flex items-center justify-center gap-2">
                  ✨ Enhance client interactions
                </span>
              </div>
              <div className="bg-white/95 rounded-xl shadow-md px-4 py-3 border-2 border-teal-200 backdrop-blur-sm">
                <span className="text-teal-600 font-bold text-sm flex items-center justify-center gap-2">
                  🚀 Advanced technology solutions
                </span>
              </div>
              <div className="bg-white/95 rounded-xl shadow-md px-4 py-3 border-2 border-cyan-200 backdrop-blur-sm">
                <span className="text-cyan-600 font-bold text-sm flex items-center justify-center gap-2">
                  ⚡ Competitive market edge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
