import React from "react";

import partnerImg1 from "../../img/partner-1.png";
import partnerImg2 from "../../img/partner-2.png";
import partnerImg3 from "../../img/partner-3.png";
import partnerImg4 from "../../img/partner-4.png";
import partnerImg5 from "../../img/partner-5.png";
import partnerImg6 from "../../img/partner-6.png";
import partnerImg7 from "../../img/partner-7.png";
import FadeContent from "../../utils/FadeContent.jsx";

import "./style.css";

const Partners = () => {
  return (

<section className="bg-white py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full mb-10 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Why you should<br/>work with us
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-5">
          Aptent imperdiet lobortis iaculis ultrices euismod odio pulvinar penatibus. Convallis sagittis taciti facilisis inceptos semper ultrices. Nullam ante erat vehicula dictum iaculis cursus. Bibendum pharetra vehicula egestas elementum curabitur.
        </p>
      </div>
      <div className="flex gap-6 justify-center w-full max-w-6xl mt-4">
        {/* Card 1 */}
        <div className="flex-1 bg-amber-50 border border-yellow-200 rounded-xl p-7 flex flex-col items-start min-w-[250px] max-w-sm">
          <div className="mb-4">
            {/* Thumbs Up Icon (SVG) */}
            <svg width="32" height="32" fill="none" stroke="#3AA47E" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 11V19a2 2 0 002 2h7a2 2 0 002-2v-7.2c0-.7-.4-1.3-1-1.6l-6-3.2a2 2 0 00-2.8 1.8z"/>
              <path d="M2 11h5v10H2z"/>
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">Expertise You Can Trust</h3>
          <p className="text-gray-500">
            Inceptos amet litora, ex primis urna fusce. Taciti vestibulum praesent consectetur aliquet lacus at semper mattis augue.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-amber-50 border border-yellow-200 rounded-xl p-7 flex flex-col items-start min-w-[250px] max-w-sm">
          <div className="mb-4">
            {/* Lightning Icon (SVG) */}
            <svg width="32" height="32" fill="none" stroke="#3AA47E" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8L21 10h-8l1-8z"/>
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">Innovative Technology</h3>
          <p className="text-gray-500">
            Inceptos amet litora, ex primis urna fusce. Taciti vestibulum praesent consectetur aliquet lacus at semper mattis augue.
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex-1 bg-amber-50 border border-yellow-200 rounded-xl p-7 flex flex-col items-start min-w-[250px] max-w-sm">
          <div className="mb-4">
            {/* Sun Icon (SVG) */}
            <svg width="32" height="32" fill="none" stroke="#3AA47E" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">Commitment to Sustainability</h3>
          <p className="text-gray-500">
            Inceptos amet litora, ex primis urna fusce. Taciti vestibulum praesent consectetur aliquet lacus at semper mattis augue.
          </p>
        </div>
        {/* Card 4 */}
        <div className="flex-1 bg-amber-50 border border-yellow-200 rounded-xl p-7 flex flex-col items-start min-w-[250px] max-w-sm">
          <div className="mb-4">
            {/* Solar/Eco Icon (SVG) */}
            <svg width="32" height="32" fill="none" stroke="#3AA47E" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">Eco-Friendly Solar System</h3>
          <p className="text-gray-500">
            Inceptos amet litora, ex primis urna fusce. Taciti vestibulum praesent consectetur aliquet lacus at semper mattis augue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
