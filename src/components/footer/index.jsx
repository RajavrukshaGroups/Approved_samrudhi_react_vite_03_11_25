import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative h-[400px] overflow-hidden bg-yellow-600 text-white ">
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
                <Link
                  key={label}
                  to="#"
                  aria-label={label}
                  className="w-10 h-10  rounded-full bg-yellow-300 border-2 border-footer-iconBg flex items-center justify-center hover:bg-footer-primary hover:border-footer-primary transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-footer-iconBg group-hover:text-yellow-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-footer-primary">Quick Links</h3>
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
                <Link
                  to={link.href}
                  className="text-white hover:text-footer-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-footer-primary group-hover:w-4 transition-all duration-300" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-footer-primary">Services</h3>
            <ul className="space-y-3">
              {[
                "Wednesday to Monday ",
                "09:30 am : 06:30 pm ",
                "Weekly Off : Tuesday"
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-footer-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-footer-primary group-hover:w-4 transition-all duration-300" />
                    {service}
                  </Link>
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
                  <p className="text-white">#35 A, Kowdi, 2nd Floor, 1st Main Road, Chiranjeevi Layout, Hebbal Kempapura, Bengaluru-560024</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-footer-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-footer-secondary" />
                </div>
                <div className="text-gray-800">
                  <p className="text-white">+91 1234 533 9012</p>
                  {/* <p className="text-white">+00 1234 5XXX 9013</p> */}
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-footer-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-footer-secondary" />
                </div>
                <div className="text-white">
                  <p className="text-white">samrudhi@gmail.com</p>
                  {/* <p>your email space 02</p> */}
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
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
              <Link to="#" className="hover:text-footer-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-footer-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-footer-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
