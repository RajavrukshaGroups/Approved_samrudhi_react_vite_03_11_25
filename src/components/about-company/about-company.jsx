// AboutCompany.jsx
import React from "react";
import aboutImg from "../../components/assets/assets/whuchoose.jpg"; // Replace with your image path
import SamrudhiHalfcut from "../../components/assets/samrudhi_logo_half_cut.png";

const AboutCompany = () => {
  return (
    // <section className="bg-gradient-to-r from-green-100 to-emerald-400 py-16 px-4 md:px-12">
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
          {/* Heading */}
       {/* <img style={{width:'60px',height:'60px',marginLeft:'90px'}} src={SamrudhiHalfcut} alt="logo" className="text-[#FF6B00] mr-2 text-4xl items-center pb-2"/> */}
        
            {/* <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="text-[#092811]">Why </span>
              <span className="ml-2 bg-gradient-to-r from-[#005a15] via-[#00b064] to-[#103100] bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>  */}

            <h2 className="project-subtitle-keyConcept text-4xl md:text-5xl lg:text-6xl font-light mb-8 flex items-center leading-tight">
              <span className="text-[#000000] md:text-[50px]" >Why </span>
              <span className="md:text-yellow-400 ml-2 bg-gradient-to-r from-[#005a15] via-[#00b064] to-[#103100] bg-clip-text text-transparent">
                Choose Us  
              </span>
            </h2>
          {/* Paragraph 1 */}
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
            
            {/* in <span className="font-semibold">Digital Marketing</span>,{" "}
            <span className="font-semibold">Graphic Designing</span>, and{" "}
            <span className="font-semibold">Custom Web Development</span>.
            Founded on a passion for technology and a commitment to client
            success, we work closely with businesses of all sizes to strengthen
            their online presence, enhance brand visibility, and drive measurable
            growth. */}         
          </p>

          {/* Paragraph 2 */}
          {/* <p className="text-base leading-relaxed">
            We at <span className="font-semibold">Digital Elite Services</span>{" "}
            combine creativity, strategic insight, and cutting-edge technology to
            deliver tailored solutions that meet each client’s unique objectives.
            From crafting engaging marketing campaigns and designing compelling
            visuals to developing high-performance websites and applications, our
            approach is focused on achieving real business impact.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
