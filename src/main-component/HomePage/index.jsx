import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header/index.jsx";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags.js";
import Loader from "../../components/Loader/loader.jsx";
import "../AboutPage/loading.css";
import KeyConcept from "../../components/keyConcept/keyConcept.jsx";
import NewHomepage from "../../components/home/homepage.jsx"
import CoreValues from "../../components/new-Core-values/CoreValues.tsx";
import { getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema } from "../../utils/structuredData.js";
const Hero = React.lazy(() => import("../../components/hero/index.jsx"));
const About = React.lazy(() => import("../../components/about/index.jsx"));
const Container = React.lazy(() => import("../Status/status.jsx"));
const ServiceSection = React.lazy(() =>
  import("../../components/ServiceSection/index.jsx")
);

const Testimonial = React.lazy(() => import("../../components/testimonial/index.jsx"));
const Footer = React.lazy(() => import("../../components/footer/index.jsx"));
const OngoingProjects = React.lazy(() =>
  import("../../components/ourOnGoingProjects/ourOnGoingProjects.jsx")
);

const HomePage = () => {
  const title = "Samrudhi | Residential Projects & Property Investment in Bangalore";
  const description = "Discover Samrudhi's premium residential projects in Bangalore. Affordable homes, luxury apartments, and smart property investment opportunities in Karnataka.";
  const ogTitle = "Samrudhi | Residential Projects & Property Investment in Bangalore";
  const ogDescription = "Discover Samrudhi's premium residential projects in Bangalore. Affordable homes, luxury apartments, and smart property investment opportunities in Karnataka.";
  const ogUrl = "https://thesamrudhi.com/";
  const canonicalUrl = "https://thesamrudhi.com/";

  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  useEffect(() => {
    updateMetaTags({
      title,
      description,
      ogTitle,
      ogDescription,
      ogUrl,
    });
  }, [title, description, ogTitle, ogDescription, ogUrl]);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Keywords */}
        <meta name="keywords" content="real estate bangalore, residential projects bangalore, samrudhi properties, affordable homes karnataka, property investment bangalore, apartments in bangalore, flats in bangalore, new projects bangalore, real estate developer karnataka, property investment india" />
        
        {/* Open Graph */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thesamrudhi.com/assets/Samrudhi_Logo-CqtrRrid.png" />
        <meta property="og:site_name" content="Samrudhi" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content="https://thesamrudhi.com/assets/Samrudhi_Logo-CqtrRrid.png" />
        
        {/* Additional SEO */}
        <meta name="author" content="Samrudhi" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }>
        <NewHomepage/>
        <CoreValues  />
        <OngoingProjects />
        <ServiceSection />
        <Testimonial />
        <Footer />
      </Suspense>
    </>
  );
};

export default HomePage;
