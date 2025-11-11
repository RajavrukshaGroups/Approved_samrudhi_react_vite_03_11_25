import { MapPin, Building2 } from "lucide-react";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import Header from "../../components/header/index.jsx";
import bg from "../../components/assets/plumeria3.webp";
import bgImg1 from "../../components/assets/aaricaone.jpg";
import bgImg2 from "../../components/assets/aaricaone.jpg";
import land_overview from "../../components/assets/land_overview.png";
import plot_overview from "../../components/assets/plot_overview.png";
import amenity_overview from "../../components/assets/amenity_overview.png";
import plumeria_1 from "../../components/assets/plumeria_1.webp";
import plumeria_2 from "../../components/assets/plumeria_2.webp";
import plumeria_3 from "../../components/assets/plumeria_3.webp";
import plumeria_4 from "../../components/assets/plumeria_4.webp";
import plumeria_5 from "../../components/assets/plumeria_5.webp";
import Navbar from "../../components/navbar/navbar.jsx";
import Hero from "../../components/Aarica-landingPage/Hero.tsx";
import Facilities from "../../components/Aarica-landingPage/Facilities.tsx";
import ProjectHighlights from "../../components/Aarica-landingPage/Highlights.tsx";
import NearByDevelopments from "../../components/Aarica-landingPage/NearbyDevelopments.tsx";

import { Helmet } from "react-helmet";
import "../AboutPage/loading.css";
import "./pro-plumeria.css";
import Loader from "../../components/Loader/loader.jsx";
import { updateMetaTags } from "../../utils/updateMetaTags";
import FadeContent from "../../utils/FadeContent.jsx";
import { ThreeDCardDemo } from "../../components/dowloadBrochure/plumeria.jsx";

const PageTitle = React.lazy(() => import("../../components/pagetitle/index.jsx"));
const Plumeria = React.lazy(() => import("../../components/Projects/plumeria.jsx"));
const ContactUs = React.lazy(() =>
  import("../../components/Projects/contactform.jsx")
);
const Footer = React.lazy(() => import("../../components/footer/index.jsx"));
const InfiniteMovingCardsDemo = React.lazy(() =>
  import("../../utils/plumeriaGallery/PlumeriaInfiniteGallary.jsx")
);

const PlumeriaAmenities = React.lazy(() =>
  import("../../components/aarika_amenities/aarika_amenities.jsx")
);
const PlumeriaOveriew = React.lazy(() =>
  import("../../components/overview/plumeria/plumeriaOverview.jsx")
);
const PlumeriaMain = () => {
  const title = "Plumeria - Residential Plots in North Bangalore";
  const description =
    "Discover Plumeria, an exclusive real estate project offering residential plots surrounded by nature. Ideal for peaceful living.";
  const ogTitle = "Plumeria - Real Estate Excellence";
  const ogDescription =
    "Explore Plumeria, an exquisite residential plots project that promises a tranquil lifestyle. Ideal for nature lovers and investment opportunities.";
  const ogUrl = "https://thesamrudhi.com/sylvan-retreat";

  const [counts, setCounts] = useState({
    acres: 3,
    plots: 1,
    amenities: 1,
  });

  useEffect(                           () => {
    updateMetaTags({
      title,
      description,
      ogTitle,
      ogDescription,
      ogUrl,
    });
  }, [title, description, ogTitle, ogDescription, ogUrl]);

  useEffect(() => {
    const incrementCounts = (key, targetValue, duration = 2000) => {
      let start = 1;
      const stepTime = Math.abs(Math.floor(duration / targetValue));
      const interval = setInterval(() => {
        start++;
        setCounts((prev) => ({ ...prev, [key]: start }));
        if ( start >= targetValue ) clearInterval(interval);
      }, stepTime);
    };

    incrementCounts("Years Of Excellence", 3);
    incrementCounts("plots", 600);
    incrementCounts("amenities", 10);
  }, []);

  const galleryImages = [
    { image: plumeria_1, alt: "Plumeria 1" },
    { image: plumeria_2, alt: "Plumeria 2" },
    { image: plumeria_3, alt: "Plumeria 3" },
    { image: plumeria_4, alt: "Plumeria 4" },
    { image: plumeria_5, alt: "Plumeria 5" },
  ];


  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        {/* <meta
          property="og:image"
          content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png"
        /> */}
        <meta property="og:url" content={ogUrl} />
      </Helmet>
      <Navbar />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
 
        <Hero/>
        <Facilities/>
        <ProjectHighlights/>
        <NearByDevelopments/>
        <div>
        
           <FadeContent
        blur={true}
        duration={900}
        easing="ease-out"
        initialOpacity={0} >
        {/* <h2 className="project-subtitle justify-center flex ">Our Services</h2> */}
            <h2 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight text-center">
              <span className="text-[#4C392C] md:text-[50px]">MILESTONES WE </span>{' '}
              <span className="text-[#8B5E3C] md:text-[50px]">ARE PROUD OF</span>
            </h2>

      </FadeContent>
        </div>

      <div className="plumeria-icons-overview">
          {[
            { img: land_overview, label: `${counts.acres} Years Of Excellence` },
            { img: plot_overview, label: `${counts.plots}+ Happy Customers` },
            { icon: MapPin, label: "Developed - Over 1.5 Mn Sqft" },
            { icon: Building2, label: "Completed Projects - 5+" },
          ].map((item, index) => {
            const Icon = item.icon; // ✅ safely store the icon
            return (
              <div key={index} className="icon-box text-center">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.label}
                    className="overview-main-icon"
                  />
                ) : Icon ? (
                  <Icon size={40} className="text-[#000000] mx-auto mb-2" />
                ) : null}
                <p className="icon-label">{item.label}</p>
              </div>
            );
          })}
        </div>
        <div>
       

           <FadeContent
        blur={true}
        duration={900}
        easing="ease-out"
        initialOpacity={0} >
        {/* <h2 className="project-subtitle justify-center flex ">Our Services</h2> */}
     <h2 className="project-subtitle-keyConcept text-[5rem] lg:text-[6rem] xl:text-[7rem] font-light mb-12 lg:mb-16 leading-tight text-center">
        <span className="text-[#4C392C] md:text-[50px]">Exclusive </span>{' '}
        <span className="text-[#8B5E3C] md:text-[50px]">Premium Plots</span>
      </h2>

      </FadeContent>
        </div>
        <div className="project-details">
          <div className="plumeria-layout">
            <div className="project-desc">
              <p>
                Plumeria is a thoughtfully designed residential project that
                blends modern comfort with natural serenity. Nestled in a prime
                location, it offers residential plots, lush green surroundings,
                and amenities. Whether you're looking for a peaceful retreat or
                a vibrant community, Plumeria provides the perfect balance of
                luxury and tranquility, making it an ideal place to call home.
              </p>
              <PlumeriaOveriew />
            </div>
          </div>
        </div>
        <div>
          <PlumeriaAmenities />
        </div>
        <div className="new-gal-plumeria">
          <InfiniteMovingCardsDemo  galleryImages={galleryImages}/>
        </div>
        <Plumeria />
        <div className="plumeria-brochure">
          <ThreeDCardDemo />
        </div>
        <div className="plumeria-contact-map row">
          <div className="plumeria-contact col-lg-12 col-sm-12 mb-5">
            <ContactUs projectPlumeria={"Plumeria"} />
          </div>
        </div>
        {/* <div>
          <ThreeDCardDemo />
        </div> */}

        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default PlumeriaMain;
