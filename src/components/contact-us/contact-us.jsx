import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight } from 'react-icons/fa';
import Navbar from '../navbar/navbar.jsx';
import Footer from '../../components/footer/index.jsx';

export default function ContactCard() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white to-emerald-100 flex items-center justify-center py-10 pt-52">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between max-w-5xl w-full mx-4 border border-gray-100">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="mb-8">
              
              <h2 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight">
                <span className="text-[#000000] md:text-[40px]">We’re here to help you</span>{' '}
                <span className="text-yellow-500 md:text-[40px]">make the right choice</span>
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>
            
            <form className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col gap-5 w-full">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all bg-white text-gray-700 placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all bg-white text-gray-700 placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all bg-white text-gray-700 placeholder-gray-500"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all bg-white text-gray-700 placeholder-gray-500 resize-none h-32"
                />
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-white py-3.5 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
              >
                SEND INQUIRY
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* Right Section: Contact Info */}
          <div className="w-full md:w-1/2 md:pl-8 mt-10 md:mt-0 flex flex-col justify-center">
            <div className="space-y-6">
              {/* Contact Item */}
              <div className="flex items-start space-x-4 group hover:bg-gray-50 p-3 rounded-xl transition-all duration-300">
                <div className="bg-gray-100 rounded-xl p-3 group-hover:bg-gray-200 transition-all duration-300">
                  <FaMapMarkerAlt className="text-gray-700 text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wider mb-1">OUR HUB</p>
                  <p className="text-gray-800 text-sm font-medium">
                    Bengaluru, CA 90210
                  </p>
                </div>
              </div>

              {/* Contact Item */}
              <div className="flex items-start space-x-4 group hover:bg-gray-50 p-3 rounded-xl transition-all duration-300">
                <div className="bg-gray-100 rounded-xl p-3 group-hover:bg-gray-200 transition-all duration-300">
                  <FaPhoneAlt className="text-gray-700 text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wider mb-1">CALL US</p>
                  <p className="text-gray-800 text-sm font-medium">
                    +1 (555) (326-7658)
                  </p>
                </div>
              </div>

              {/* Contact Item */}
              <div className="flex items-start space-x-4 group hover:bg-gray-50 p-3 rounded-xl transition-all duration-300">
                <div className="bg-gray-100 rounded-xl p-3 group-hover:bg-gray-200 transition-all duration-300">
                  <FaEnvelope className="text-gray-700 text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold tracking-wider mb-1">EMAIL US</p>
                  <p className="text-gray-800 text-sm font-medium">
                    samrudhi@gmail.com
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-gray-100 rounded-lg p-2">
                    <FaClock className="text-gray-700" />
                  </div>
                  <h3 className="text-gray-800 font-semibold text-sm font-[Arial,Helvetica,sans-serif]">OPERATING HOURS</h3>
                </div>
                <div className="text-gray-600 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
