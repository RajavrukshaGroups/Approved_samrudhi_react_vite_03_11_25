import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header/index.jsx";
import bgImg1 from "../../components/assets/Sylan_retreat_new_Banner.webp";
import bgImg2 from "../../components/assets/syl-retreat-home-page.jpg";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags";
import "../AboutPage/loading.css";
import Loader from "../../components/Loader/loader.jsx";

const PageTitle = React.lazy(() => import("../../components/pagetitle/index.jsx"));
const Sylvanretreat = React.lazy(() =>
  import("../../components/Projects/sylvanretreat.jsx")
);
const ContactUs = React.lazy(() =>
  import("../../components/Projects/contactform.jsx")
);
const Carousel = React.lazy(() =>
  import("../../components/carouselImage/carousel.jsx")
);
const Footer = React.lazy(() => import("../../components/footer/index.jsx"));
const NewCarousel = React.lazy(() =>
  import("../../components/newCarousel/newCarousel.jsx")
);

function Sylvanretreats() {
 

  return (
    <Fragment>
      <Helmet>
      </Helmet>
      <Header />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        <PageTitle
          pagesub={"Project Details"}
          project_page_syl={"Sylvan-Retreat"}
          PageTitle="Sylvan-Retreat"
          bgImg1={bgImg1}
          bgImg2={bgImg2}
        />
        <Sylvanretreat />
        <ContactUs projectTitle={"Sylvan-Retreat"} />
        <Carousel />
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default Sylvanretreats;
