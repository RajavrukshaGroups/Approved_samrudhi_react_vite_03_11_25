// import Backgour
import React, { Fragment, Suspense, useEffect, useState } from "react";
import "../../main-component/AboutPage/loading.css";

import LocationIMg from "../../components/assets/locationimg.jpg";
import Navbar from "../navbar/navbar.jsx";
import Loader from "../../components/Loader/loader.jsx";
import DHSimg from "../../components/assets/dhsgemini.png"
const LandingPage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
<>
 <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
<Navbar/>
    <div className="font-sans text-gray-800">
      <section
          style={{
            backgroundImage: `url(${DHSimg})`,
            backgroundSize: "cover",       // ensures the image covers the section
            backgroundPosition: "center",  // centers the image
            backgroundRepeat: "no-repeat", // prevents repeating
            backgroundAttachment: "fixed", // optional: gives a nice parallax effect
          }}
          className="relative flex items-center justify-center text-center text-white min-h-screen"
              >
        <div className="absolute inset-0 bg-black bg-opacity-10 "></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="bg-black/80  ">

          <h1 className="text-4xl p-2 font-[Arial,Helvetica,sans-serif] md:text-6xl font-bold mb-6 leading-tight text-gray-200">
            Defence Habitat Society
          </h1>
          </div>
       
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-[#F3C64E] text-[#18473F] font-bold text-lg rounded-full hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg">
              Join Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-[#18473F] transition">
              Learn More
            </button>
          </div>

        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-gray-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-[Arial,Helvetica,sans-serif] font-bold text-center mb-12 text-[#18473F] relative">
            About Us
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#F3C64E] mt-2"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Defence Personnel"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Defence Habitat Society is registered under the{" "}
                <strong className="text-[#18473F]">Karnataka Co-operative Societies Act, 1960</strong>. 
                It is a social service organization with the primary objective of promoting 
                and facilitating services to both serving and retired Armed/Defence Forces 
                as well as Para Military personnel.
              </p>
              <p className="text-lg leading-relaxed">
                The society is managed and headed by{" "}
                <strong className="text-[#18473F]">retired officers from the Indian Defence Services</strong>,
                with active support from experienced professionals from various relevant fields.
              </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-6 md:px-20 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-[Arial,Helvetica,sans-serif] text-center mb-12 text-[#18473F] relative">
            Location & Strategic Importance
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#F3C64E] mt-2"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                The project is located around <strong className="text-[#18473F]">4 km from Yelahanka Indian
                Airforce Camp</strong> in North Bangalore — an exclusive and rapidly
                developing area where land value continues to appreciate.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#F3C64E] rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-[#18473F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Prime location in North Bangalore's growth corridor</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#F3C64E] rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-[#18473F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Excellent connectivity to major IT hubs and infrastructure</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#F3C64E] rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-[#18473F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Rapidly appreciating property values</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={LocationIMg}
                alt="Bangalore Location"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20 bg-gray-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold font-[Arial,Helvetica,sans-serif] text-center mb-12 text-[#18473F] relative">
            Our Ongoing Projects
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#F3C64E] mt-2"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Project 1 */}
            <div className="bg-white shadow-2xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-[#18473F] text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
                PHASE 2 OPEN
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[Arial,Helvetica,sans-serif] text-[#18473F]">
                Defence Habitat Tapasihalli
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-semibold">Status:</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Active</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-semibold">Price:</span>
                  <span className="text-lg font-bold text-[#18473F]">₹1,099 / sq ft</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Phase 1:</span>
                  <span className="text-red-600 font-medium">Booking Closed</span>
                </div>
              </div>
              <a
            href="https://defencehousingsociety.com/projects/tapasihalli"           
            target="_blank"                     
            rel="noopener noreferrer"           
            className="w-full px-6 py-3 bg-[#F3C64E] text-[#18473F] font-bold rounded-full hover:bg-[#e2b843] transition transform hover:scale-105"
          >
            Learn More
          </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white shadow-2xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-[#18473F] text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
                BOOKING CLOSED
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[Arial,Helvetica,sans-serif] text-[#18473F]">
                Defence Habitat Marasandra
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-semibold">Status:</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Active</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-semibold">Price:</span>
                  <span className="text-lg font-bold text-[#18473F]">₹1,399 / sq ft</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Availability:</span>
                  <span className="text-red-600 font-medium">Fully Booked</span>
                </div>
              </div>
              <a
            href="https://defencehousingsociety.com/projects/marasandra"           
            target="_blank"                     
            rel="noopener noreferrer"           
            className="w-full px-6 py-3 bg-[#F3C64E] text-[#18473F] font-bold rounded-full hover:bg-[#e2b843] transition transform hover:scale-105"
          >
            Learn More
          </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="news" className="py-20 px-6 md:px-20 bg-white scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center font-[Arial,Helvetica,sans-serif] mb-12 text-[#18473F] relative">
            Latest News & Updates
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#F3C64E] mt-2"></div>
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4">
              {[
                "Defence Habitat Marasandra - ₹1,399/sqft (Booking Closed)",
                "Defence Habitat Tapasihalli - ₹949/sqft (Booking Closed)",
                "Applications for new membership are open now. Hurry up and contact us for more information!",
                "Defence Habitat Marasandra Phase-2 launched - ₹1,399/sqft",
                "Defence Habitat Tapasihalli Phase-2 launched - ₹1,099/sqft",
                "DHS-Tapasihalli: DPA/BMRDA approval in process",
                "With the launch of Phase 2, new amenities await our cherished members!"
            ].map((news, index) => (
                <li key={index} className="flex items-start space-x-3 p-3 hover:bg-white rounded-lg transition">
                  <div className="bg-[#F3C64E] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-[#18473F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{news}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 bg-[#ffffff] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-[Arial,Helvetica,sans-serif]">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            Become part of the Defence Habitat Society and secure your future with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://defencehousingsociety.com/online_application"          
              target="_blank"                    
              rel="noopener noreferrer"          
              className="inline-block px-8 py-4 bg-[#F3C64E] text-[#18473F] font-bold text-lg rounded-full hover:bg-yellow-400 transition transform hover:scale-105"
            >
              Apply for Membership
            </a>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-[#18473F] transition">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f352f] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white font-[Arial,Helvetica,sans-serif]">Defence Habitat Society</h3>
              <p className="text-gray-300">
                Serving those who serve the nation. Building communities for our brave defence personnel.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p className="text-gray-300">📍  Behind Swathi Garden Hotel, E Block, Sahakarnagar, Bangalore - 560092, Karnataka</p>
                <p className="text-gray-300">📞 +91-8884 735 735</p>
                <p className="text-gray-300">✉️  info@defencehousingsociety.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
            <p  className="text-gray-200">
              © {new Date().getFullYear()} Defence Habitat Society | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
          </Suspense>
    
</>
  );
};

export default LandingPage;
