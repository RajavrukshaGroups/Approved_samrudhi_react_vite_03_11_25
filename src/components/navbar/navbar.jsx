import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../components/assets/assets/Samrudhi_Logo.png";

const Navbar = () => {
  
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => currentPath === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar - Exact same as original */}
      <header className="hidden lg:flex absolute top-0 left-0 w-full items-center justify-between px-16 py-8 z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative">
             <img
              src={Logo}
              width="150"
              height="130"
              className=" drop-shadow-2xl"
              alt="brand_logo"
              style={{
                filter:
                  "",
              }}
            />
            {/* <img
              src={Logo}
              width="330"
              height="130"
              className="brightness-125 contrast-150 drop-shadow-2xl"
              alt="brand_logo"
              style={{
                filter:
                  "brightness(1.3) contrast(1.6) drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
              }}
            /> */}

          </div>
        </div>

        {/* Nav items */}
        <nav className="flex items-center gap-3 h-16 rounded-full bg-black/50 px-6">
          <a
            href="/"
            className={`font-medium px-4 py-2 transition hover:text-yellow-300 rounded-full ${
              isActive("/") ? "bg-white text-black" : "text-white"
            }`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`font-medium px-4 py-2 transition hover:text-yellow-300 rounded-full ${
              isActive("/about") ? "bg-white text-black" : "text-white"
            }`}
          >
            About
          </a>
          <a
            href="/projects"
            className={`font-medium px-4 py-2 transition hover:text-yellow-300 rounded-full ${
              isActive("/projects") ? "bg-white text-black" : "text-white"
            }`}
          >
            Projects
          </a>
        </nav>

        {/* Contact button */}
        <a
          href="/contact"
          className="bg-yellow-300 text-gray-900 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-yellow-400 transition flex items-center gap-2"
        >
          Get In Touch
          <span className="ml-1">→</span>
        </a>
      </header>

      {/* Mobile Navbar - Completely separate design */}
      <header className="lg:hidden absolute top-0 left-0 w-full flex items-center justify-between px-6 py-6 z-20">
        {/* Logo on Left */}
        <div className="flex items-center">
          <div className="relative">
            <img
              src={Logo}
              width="180"
              height="70"
              className="brightness-125 contrast-150 drop-shadow-2xl"
              alt="brand_logo"
              style={{
                filter:
                  "brightness(1.3) contrast(1.6) drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
              }}
            />
          </div>
        </div>

        {/* Three Dots Menu Button on Right - Smaller size */}
        {/* <button
          className="p-2 text-white hover:text-yellow-300 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-between items-center">
            <div className="w-1 h-1 bg-current rounded-full"></div>
            <div className="w-1 h-1 bg-current rounded-full"></div>
            <div className="w-1 h-1 bg-current rounded-full"></div>
          </div>
        </button> */}
        <button
          className="p-2 text-black hover:text-yellow-600 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-between items-center">
            <div className="w-1 h-1 bg-current rounded-full"></div>
            <div className="w-1 h-1 bg-current rounded-full"></div>
            <div className="w-1 h-1 bg-current rounded-full"></div>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-lg transition-all duration-500 ease-in-out z-30 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
            {/* Mobile Navigation Items */}
            <nav className="flex flex-col items-center gap-8 w-full max-w-sm">
              <a
                href="/"
                className={`w-full text-center text-2xl font-semibold py-4 px-8 transition-all duration-300 rounded-full border-2 ${
                  isActive("/")
                    ? "bg-white text-black border-white shadow-lg"
                    : "text-white border-white/30 hover:border-yellow-300 hover:text-yellow-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className={`w-full text-center text-2xl font-semibold py-4 px-8 transition-all duration-300 rounded-full border-2 ${
                  isActive("/about")
                    ? "bg-white text-black border-white shadow-lg"
                    : "text-white border-white/30 hover:border-yellow-300 hover:text-yellow-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/projects"
                className={`w-full text-center text-2xl font-semibold py-4 px-8 transition-all duration-300 rounded-full border-2 ${
                  isActive("/projects")
                    ? "bg-white text-black border-white shadow-lg"
                    : "text-white border-white/30 hover:border-yellow-300 hover:text-yellow-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
            </nav>

            {/* Mobile Contact Button */}
            <a
              href="/contact"
              className="bg-yellow-300 text-gray-900 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 flex items-center gap-3 text-xl mt-8 border-2 border-yellow-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
              <span className="ml-1 text-2xl">→</span>
            </a>
          </div>

          {/* Close Button for Mobile Menu */}
          <button
            className="absolute top-6 right-6 text-white hover:text-yellow-300 text-2xl font-light bg-black/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;



// import React from "react";
// import Logo from "../../components/assets/Samrudhi.png";

// const Navbar = () => {
//   return (
//     <header className="absolute top-0 left-0 w-full flex items-center justify-between px-16 py-8 z-10">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <div className="relative">
//           <img
//             src={Logo}
//             width="330"
//             height="130"
//             className="brightness-125 contrast-150 drop-shadow-2xl"
//             alt="brand_logo"
//             style={{
//               filter:
//                 "brightness(1.3) contrast(1.6) drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
//             }}
//           />
//         </div>
//       </div>

//       {/* Nav items */}
//       <nav className="flex items-center gap-3 h-16 rounded-full bg-black/20 px-6 ">
//         <a
//           href="/"
//           className="text-black bg-white rounded-full font-medium px-4 py-2 transition hover:text-yellow-300"
//         >
//           Home
//         </a>
//         <a
//           href="/about"
//           className="text-white font-medium px-4 py-2 transition hover:text-yellow-300"
//         >
//           About
//         </a>
//         {/* <div className="relative group">
//           <button className="text-white font-medium px-4 py-2 transition hover:text-yellow-300">
//             Pages ▾
//           </button>
//         </div>
//         <div className="relative group">
//           <button className="text-white font-medium px-4 py-2 transition hover:text-yellow-300">
//             Blog ▾
//           </button>
//         </div> */}
//       </nav>

//       {/* Contact button */}
//       <a
//         href="/"
//         className="bg-yellow-300 text-gray-900 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-yellow-400 transition flex items-center gap-2"
//       >
//         Get In Touch
//         <span className="ml-1">→</span>
//       </a>
//     </header>
//   );
// };

// export default Navbar;
