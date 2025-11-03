import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header/index.jsx";
import bgImg1 from "../../components/assets/eco_nest_img.jpg";
import bgImg2 from "../../components/assets/layer5.jpg";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags";
import "../AboutPage/loading.css";
import Loader from "../../components/Loader/loader.jsx";

const PageTitle = React.lazy(() => import("../../components/pagetitle/index.jsx"));
const EcoNexts = React.lazy(() => import("../../components/Projects/eco-nest.jsx"));
const Footer = React.lazy(() => import("../../components/footer/index.jsx"));
const ContactUs = React.lazy(() =>
  import("../../components/Projects/contactform.jsx")
);
const Layoutguide = React.lazy(() =>
  import("../../components/layoutGuide/layoutguide.jsx")
);

function Econext() {
  const title = "Eco-Nest - Sustainable Living & Green Farmland";
  const description =
    "Discover Eco-Nest, a sustainable real estate project offering eco-friendly farmlands and plots for green living.";
  const ogTitle = "Eco-Nest - Green Real Estate Excellence";
  const ogDescription =
    "Explore Eco-Nest, a sustainable farmland project offering eco-friendly living spaces in harmony with nature.";
  const ogUrl = "https://rajavrukshagroup.in/eco-nest";

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
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
    
       
      </Helmet>

      <Header />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        {" "}
        <PageTitle
          PageTitle={"Eco-nest"}
          pagesub={"Project Details"}
          bgImg1={bgImg1}
          bgImg2={bgImg2}
        />
        <EcoNexts />
        <div className="flex-container">
          <ContactUs page={"Eco-Nest"} contact_page_title={"Eco-Nest"} />
        </div>
        <Layoutguide />
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default Econext;
