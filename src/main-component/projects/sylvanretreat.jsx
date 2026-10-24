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
  const title = "Managed Farm Land for Sale in Doddaballapur, North Bangalore | Samrudhi";
  const description =
    "Explore managed farm land for sale in Doddaballapur, North Bangalore, with Samrudhi. Discover your ideal farmland investment opportunity today!";
  const ogTitle = "Managed Farm Land for Sale in Doddaballapur, North Bangalore | Samrudhi";
  const ogDescription =
    "Explore managed farm land for sale in Doddaballapur, North Bangalore, with Samrudhi. Discover your ideal farmland investment opportunity today!";
  const ogUrl = "https://thesamrudhi.com/sylvan-retreat";
  const canonicalUrl = "https://thesamrudhi.com/sylvan-retreat";

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
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta property="twitter:title" content={ogTitle} />
        <meta property="twitter:description" content={ogDescription} />
        <meta property="twitter:url" content={ogUrl} />
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
