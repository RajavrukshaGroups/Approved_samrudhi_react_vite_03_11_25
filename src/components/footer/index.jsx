import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-yellow-500 text-white ">
      {/* Wave SVG Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="hsl(var(--footer-primary))"
            fillOpacity="1"
            d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-footer-primary">YOUR NAME</h3>
            <p className="text-sm text-white leading-relaxed">
            We guide you in selecting the best property
            that aligns with your vision and goals
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3 pt-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10  rounded-full bg-yellow-300 border-2 border-footer-iconBg flex items-center justify-center hover:bg-footer-primary hover:border-footer-primary transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-footer-iconBg group-hover:text-yellow-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-footer-primary">Quick Links</h3>
            {/* <ul className="space-y-3">
              {["Home", "About Us", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white hover:text-footer-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-footer-primary group-hover:w-4 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul> */}
            <ul className="space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              // { name: "Services", href: "/services" },
              { name: "Projects", href: "/projects" },
              // { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white hover:text-footer-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-footer-primary group-hover:w-4 transition-all duration-300" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-footer-primary">Services</h3>
            <ul className="space-y-3">
              {[
                "Wednesday to Monday 09:30 am : 06:30 pm Weekly Off : Tuesday",
                // "Brand Identity",
                // "Web Design",
                // "Print Design",
                // "UI/UX Design",
                // "Illustration",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-footer-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-footer-primary group-hover:w-4 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-footer-primary">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-footer-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-footer-secondary" />
                </div>
                <div className="text-white">
                  <p className="text-white">123 Dummy, Lorem Ipsum</p>
                  <p>Sample Text</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-footer-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-footer-secondary" />
                </div>
                <div className="text-gray-300">
                  <p>+00 1234 5XXX 9012</p>
                  <p>+00 1234 5XXX 9013</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-footer-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-footer-secondary" />
                </div>
                <div className="text-gray-300">
                  <p>your email space 01</p>
                  <p>your email space 02</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-footer-primary flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-footer-secondary" />
                </div>
                <div className="text-gray-300">
                  <p>website address here</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} thesamrudhi. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-footer-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-footer-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-footer-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
// const Footer = () => {
//   const handleLinkClick = (type, value) => {
//     if (type === "email") {
//       window.location.href = `mailto:${value}`;
//     } else if (type === "phone") {
//       window.location.href = `tel:${value}`;
//     } else if (type === "map") {
//       const googleMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
//         value
//       )}`;
//       window.open(googleMapUrl, "_blank");
//     }
//   };
//   return (
//     <footer className="footer-area">
//       <div className="footer-top">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
//               <div className="single-footer">
//                 <p id="footer-head">About</p>
//                 <p>
//                   We guide you in selecting the best property
//                   <br />
//                   that aligns with your vision and goals
//                 </p>
//                 <div className="single-footer connect">
//                   {/* <p id="footer-connect">Connect With Us</p> */}
//                   {/* <div className="wrapper-footer">
//                     <a
//                       // href="https://www.facebook.com/RajavruskhaRealtors"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="bg-ico" id="facebook">
//                         <i className="fab fa-facebook social facebook fa-3x"></i>
//                       </div>
//                     </a>

//                     <a
//                       // href="https://www.instagram.com/rajavruksha_realtors/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="bg-ico" id="instagram">
//                         <i className="fab fa-instagram social instagram fa-3x"></i>
//                       </div>
//                     </a>

//                     <a
//                       // href="https://x.com/Rajavrukshagrps"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="bg-ico" id="twitter">
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
//                           alt="X Logo"
//                           className="social x-logo"
//                         />
//                       </div>
//                     </a>
//                     <a
//                       // href="https://www.youtube.com/@Rajavruksha_Realtors"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="bg-ico" id="youtube">
//                         <i className="fab fa-youtube social youtube fa-3x"></i>
//                       </div>
//                     </a>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
//               <div className="single-footer quick-link">
//                 <p id="footer-head">Quick Links</p>
//                 <ul className="footer_carousel unordered-list">
//                   <li className="unorderedlistlink">
//                     <Link className="unorderedlistlink" to="/about">
//                       About Us
//                     </Link>
//                   </li>
//                   <li>
//                     {/* <Link to="/projects">Our Projects</Link> */}
//                   </li>
//                   <li>
//                     {/* <Link to="/contact">Contact</Link> */}
//                   </li>
//                   <li>
//                     {/* <Link to="/careers">Careers</Link> */}
//                   </li>
//                   <li>
//                     {/* <Link to="/privacyPolicy">Privacy Policy</Link> */}
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
//               <div className="single-footer">
//                 <p id="footer-head">Office Timings</p>
//                 <ul>
//                   <li>
//                     <p>Wednesday to Monday</p>
//                   </li>
//                   <li>
//                     <p>09:30 am : 06:30 pm</p>
//                   </li>
//                   <li>
//                     <p style={{ color: "white" }}>Weekly Off : Tuesday</p>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
//               <ul className="footer-contact">
//                 <p id="footer-head">Contact Details</p>
//                 <li
//                   onClick={() => handleLinkClick("phone", "+91 8549 955 955")}
//                   className="contact-link"
//                 >
//                   {/* <i className="fas fa-phone-square-alt" /> +91 8549 955 955 */}
//                 </li>
//                 <li
//                   onClick={() =>
//                     handleLinkClick("email", "enquiry@rajavrukshagroup.in")
//                   }
//                   className="contact-link"
//                   style={{ marginTop: "10px" }}
//                 >
//                   {/* <i className="fas fa-envelope" /> enquiry@rajavrukshagroup.in */}
//                 </li>
//                 {/* <li
//                   onClick={() => {
//                     handleLinkClick("map", "Rajavruksha Groups");
//                   }}
//                   className="contact-link"
//                   style={{ marginTop: "14px" }}
//                 >
//                   <i className="fas fa-map" /> #35 A, Kowdi, 2nd Floor, 1st Main
//                   Road, Chiranjeevi Layout, Hebbal Kempapura, Bengaluru-560024
//                 </li> */}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="fade_rule" />
//       </div>
//       <div className="copyright">
//         <div className="container">
//           <div className="row align-items-center justify-content-between">
//             <div className="col-auto">
//               <p className="foote-copyright">
//                 Copyright © {new Date().getFullYear()}  All rights
//                 reserved.
//               </p>
//             </div>
//             <div className="col-auto footer-credit">
//               Designed by{" "}
//               {/* <span className="font-semibold">Digital Elite Services</span> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer;
