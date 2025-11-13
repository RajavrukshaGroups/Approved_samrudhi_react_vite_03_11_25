import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header/index.jsx";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags.js";
import Loader from "../../components/Loader/loader.jsx";
import "../AboutPage/loading.css";
import KeyConcept from "../../components/keyConcept/keyConcept.jsx";
import NewHomepage from "../../components/home/homepage.jsx"
import CoreValues from "../../components/new-Core-values/CoreValues.tsx";
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
  return (
    <>
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
