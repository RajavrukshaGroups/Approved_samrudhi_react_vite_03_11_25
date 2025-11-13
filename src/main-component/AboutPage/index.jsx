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

const About = React.lazy(() => import("../../components/about/index.jsx"));
const PageTitle = React.lazy(() => import("../../components/pagetitle/index.jsx"));
const Animation = React.lazy(() =>
  import("../../components/reactIcons/journeySection.jsx")
);
const Footer = React.lazy(() => import("../../components/footer/index.jsx"));
const aboutText = `
  At Samrudhi, we are driven by a vision: to create exceptional spaces that inspire, endure, and
elevate the way people live and invest. We are committed to shaping inspired living through
visionary developments and bespoke real estate solutions. 
`;

const AboutPage = () => {
  useEffect(() => {
    updateMetaTags({
      title: "About Us - Samrudhi",
    });
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>About Us - Samrudhi</title>
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
