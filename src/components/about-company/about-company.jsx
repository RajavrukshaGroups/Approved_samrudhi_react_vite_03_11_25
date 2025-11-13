import React from "react";
import aboutImg from "../../components/assets/assets/whuchoose.jpg"; // Replace with your image path
import SamrudhiHalfcut from "../../components/assets/samrudhi_logo_half_cut.png";

const AboutCompany = () => {
  return (
    <section className="bg-gradient-to-r from-white to-white py-16 px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="About Company Illustration"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
        {/* Right Content */}
        <div className="flex-1 text-gray-700">
            <h2 className="project-subtitle-keyConcept text-4xl md:text-5xl lg:text-6xl font-light mb-8 flex items-center leading-tight">
              <span className="text-[#000000] md:text-[50px]" >Why </span>
              <span className="md:text-yellow-400 ml-2 bg-gradient-to-r from-[#005a15] via-[#00b064] to-[#103100] bg-clip-text text-transparent">
                Choose Us  
              </span>
            </h2>
          <p className="text-base leading-relaxed mb-4">
            At Samrudhi, we are committed to delivering exceptional real estate services that prioritize your
            needs and aspirations. With a strong foundation built on years of experience, we specialize in
            land procurement, marketing, advertising, and comprehensive legal documentation, ensuring a
            seamless and transparent process for every client. Our track record speaks volumes: we've
            successfully executed over 75 acres of projects for the Defence Habitat Housing Co-operative
            Society and more than 50 acres for Rajavruksha Realtors Private Limited, all strategically
            located in the prime areas of North Bangalore. This extensive portfolio reflects our dedication to
            quality, integrity, and client satisfaction. Whether you're looking to buy, sell, or invest, we offer
            personalized solutions that align with your goals, backed by a team of professionals who are
            passionate about making your real estate journey smooth and successful.       
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
