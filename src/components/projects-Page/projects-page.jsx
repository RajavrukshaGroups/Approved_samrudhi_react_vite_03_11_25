// SolarPage.jsx
import React from "react";
import ProjectPage from "../../main-component/ProjectPage/index.jsx";
export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex-1">
          <img
            src="/solar-panels.jpg"  // replace with actual image URL
            alt="Solar Panels"
            className="w-full h-72 object-cover rounded-xl mb-8"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Innovative Projects Inspired Results
          </h1>
          <p className="text-gray-700 mb-5">
            Brighter Future with Solar Energy. Vestibulum pulvinar congue tempus et commodo risus pulvinar imperdiet. Maximus fringilla laoreet faucibus pulvinar leo tortor enim consectetur viverra. Conubia egestas dignissim fringilla magnis gravida euismod interdum. Fermentum dui dictum purus ex potenti class odio himenaeos. Primis id molestie justo per pellentesque vestibulum ullamcorper cursus. Fringilla tempus suscipit aliquam felis sodales justo augue.
          </p>
          <p className="text-gray-700 mb-6">
            Habitasse mollis consectetur massa venenatis proin habitasse vehicula. Fames litora fermentum urna sit aptent. Gravida consequat semper curae ligula adipiscing convallis habitant euismod.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-green-800 font-medium">
              <span className="mr-2 text-green-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </span>
              Sun-Powered Innovation for Homes & Businesses
            </li>
            <li className="flex items-center text-green-800 font-medium">
              <span className="mr-2 text-green-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </span>
              Clean, Renewable, and Sustainable: The Solar Revolution
            </li>
          </ul>
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-8 lg:w-[350px]">
          {/* Our Solution Card */}
          <div className="bg-[#f7f8f2] rounded-2xl p-7 shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h2>
            <div className="space-y-3">
              {[
                "Energy Cost Savings",
                "Sustainable Living",
                "Energy Independence",
                "Switch to Solar",
                "The Solar Revolution"
              ].map((item, idx) => (
                <button
                  key={item}
                  className="w-full flex justify-between items-center bg-white rounded-lg px-4 py-2 text-gray-900 shadow hover:bg-gray-100 focus:outline-none transition"
                >
                  {item}
                  <svg className="h-5 w-5 text-gray-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          {/* Contact Card */}
          <div className="bg-[#264634] rounded-2xl px-7 py-8 shadow-md flex flex-col items-center text-white relative">
            <div className="absolute top-5 left-5 opacity-30">
              <svg className="h-20 w-20" fill="none" viewBox="0 0 100 100">
                {/* Stylized hand icon or abstract icon */}
                <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="5" />
              </svg>
            </div>
            <div className="mb-2 font-semibold text-lg text-white">Need Help?</div>
            <div className="mb-4 text-xl font-bold text-white">+91 123-4568-90</div>
            <div className="mb-5 text-2xl font-semibold text-white text-center">We Provide Best Services</div>
            <button className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-xl px-5 py-3 font-semibold shadow transition">
              Contact Us Now! <span className="ml-1">&#8599;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
