import React, { Fragment, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import bg from "../../components/assets/abouttwo.jpg";
import { updateMetaTags } from "../../utils/updateMetaTags";
import "./loading.css";
import Loader from "../../components/Loader/loader.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import AboutUsBanner from "../../components/aboutus-banner/aboutus-banner.jsx";
import ServicesSection from "../../components/services-atm-cards/servicesSection.jsx";
import AboutCompany from "../../components/about-company/about-company.jsx";
import CommitmentExcellence from "../../components/commitment-excelence/commitment-excelence.jsx";
import IntegratedTeam from "../../components/integratedTeam/integratedTeam.jsx";
import { getOrganizationSchema, getBreadcrumbSchema } from "../../utils/structuredData.js";

const About = React.lazy(() => import("../../components/about/index.jsx"));
const PageTitle = React.lazy(() => import("../../components/pagetitle/index.jsx"));
const Animation = React.lazy(() =>
  import("../../components/reactIcons/journeySection.jsx")
);
const Footer = React.lazy(() => import("../../components/footer/index.jsx"));
const aboutText = `
  At Samrudhi, we are driven by a vision: to create exceptional spaces that inspire, endure, and
elevate the way people live and invest. We are committed to shaping inspired living through
visionary developments and bespoke real estate solutions. `;

const AboutPage = () => {
  const title = "About Samrudhi | Trusted Real Estate Developer in Bangalore";
  const description = "Learn about Samrudhi, a leading real estate developer in Bangalore offering high-quality residential projects and transparent property investment solutions in Karnataka.";
  const ogTitle = "About Samrudhi | Trusted Real Estate Developer in Bangalore";
  const ogDescription = "Learn about Samrudhi, a leading real estate developer in Bangalore offering high-quality residential projects and transparent property investment solutions in Karnataka.";
  const ogUrl = "https://thesamrudhi.com/about";
  const canonicalUrl = "https://thesamrudhi.com/about";

  const organizationSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://thesamrudhi.com/" },
    { name: "About Us", url: "https://thesamrudhi.com/about" }
  ]);

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
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="real estate developer bangalore, samrudhi about, property developers karnataka, residential projects developer, about samrudhi real estate" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thesamrudhi.com/assets/Samrudhi_Logo-CqtrRrid.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content="https://thesamrudhi.com/assets/Samrudhi_Logo-CqtrRrid.png" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <Navbar />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        <AboutUsBanner />
        <About text={aboutText} image={bg} />
        <AboutCompany />
        <ServicesSection />
        <CommitmentExcellence />
        <IntegratedTeam />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default AboutPage;
