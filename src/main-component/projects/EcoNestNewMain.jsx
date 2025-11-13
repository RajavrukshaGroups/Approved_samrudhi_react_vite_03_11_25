import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header/index.jsx";
import bgImg1 from "../../components/assets/eco_nest_img.jpg";
import bgImg2 from "../../components/assets/layer5.jpg";
import layer1 from "../../components/assets/Layer1.jpg";
import layer2 from "../../components/assets/Layer2.jpg";
import layer3 from "../../components/assets/Layer3.jpg";
import layer4 from "../../components/assets/Layer4.jpg";
import "./ecoNestNew.css";
import { updateMetaTags } from "../../utils/updateMetaTags";
import { Helmet } from "react-helmet";
import Loader from "../../components/Loader/loader.jsx";

const PageTitle = React.lazy(() => import("../../components/pagetitle/index.jsx"));
const EcoNestNewHeading = React.lazy(() =>
  import("../../components/Projects/EcoNestNew/EcoNestNewHeading.jsx")
);
const EcoNestNewDesc = React.lazy(() =>
  import("../../components/Projects/EcoNestNew/EcoNestNewDesc.jsx")
);
const InfiniteMovingCards = React.lazy(() =>
  import("../../utils/plumeriaGallery/PlumeriaInfiniteGallary.jsx")
);
const EcoNewAmenities = React.lazy(() =>
  import("../../components/Projects/EcoNestNew/EcoNewAmenities.jsx")
);
const EcoNewGallery = React.lazy(() =>
  import("../../components/Projects/EcoNestNew/EcoNewGallery.jsx")
);
const EcoNewPageContact = React.lazy(() =>
  import("../../components/Projects/EcoNestNew/EcoNewContactPage.jsx")
);
const Footer = React.lazy(() => import("../../components/footer/index.jsx"));
const EcoNestNewMain = () => {
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

  const galleryImages = [
    { image: layer1, alt: "layer 1" },
    { image: layer2, alt: "layer 2" },
    { image: layer3, alt: "layer 3" },
    { image: layer4, alt: "layer 4" },
    { image: layer2, alt: "layer 5" },
  ];
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
        <PageTitle
          PageTitle={"Eco-nest"}
          pagesub={"Project Details"}
          bgImg1={bgImg1}
          bgImg2={bgImg2}
        />{" "}
        <EcoNestNewHeading />
        <EcoNestNewDesc />
        <div className="eco-nest-new-infGal">
          <InfiniteMovingCards
            galleryImages={galleryImages}
            title="EcoNestNew"
          />
        </div>
        <EcoNewAmenities />
        <EcoNewGallery />
        <EcoNewPageContact />
        <Footer />
      </Suspense>
    </Fragment>
  );
};
0
export default EcoNestNewMain;
