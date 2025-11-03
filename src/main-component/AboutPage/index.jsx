import React, { Fragment, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
// import Header from "../../components/header/index.jsx";
import bg from "../../components/assets/abouttwo.jpg";
import { updateMetaTags } from "../../utils/updateMetaTags";
import "./loading.css";
import Loader from "../../components/Loader/loader.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import AboutUsBanner from "../../components/aboutus-banner/aboutus-banner.jsx";
import ServicesSection from "../../components/services-atm-cards/servicesSection.jsx";
import AboutCompany from "../../components/about-company/about-company.jsx";
import CommitmentExcellence from "../../components/commitment-excelence/commitment-excelence.jsx";
// import InnovationFaces from "../../components/teamMember/innovation_faces.tsx";
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
      // description:
      //   "Discover Rajavruksha's mission to connect people with nature through serene farm plots near Bangalore.",
      // ogTitle: "About Us - Rajavruksha",
      // ogDescription:
      //   "Discover Rajavruksha's mission to connect people with nature.",
      // ogUrl: "https://rajavrukshagroup.in/about",
    });
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>About Us - Samrudhi</title>
        {/* <meta
          name="description"
          content="Discover S's mission to connect people with nature through serene farm plots near Bangalore."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us - Rajavruksha" />
        <meta
          property="og:description"
          content="Discover Rajavruksha's mission to connect people with nature through serene farm plots near Bangalore."
        />
        <meta
          property="og:image"
          content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png"
        /> */}
      </Helmet>

      {/* <Header /> */}
      <Navbar />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        {/* <PageTitle PageTitle="About Us" pagesub="About" pageImg={bg} /> */}
        <AboutUsBanner />
        <About text={aboutText} image={bg} />
        {/* <Animation /> */}
        <AboutCompany />
        <ServicesSection />
        <CommitmentExcellence />
        {/* <InnovationFaces /> */}
        <IntegratedTeam />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default AboutPage;
