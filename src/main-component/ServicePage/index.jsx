import React, { Fragment } from "react";
import Header from "../../components/header/index.jsx";
import PageTitle from "../../components/pagetitle/index.jsx";
import ServiceList from "../../components/ServiceList/index.jsx";
import Footer from "../../components/footer/index.jsx";

const ServicePage = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"SERVICE"} pagesub={"Service"} />
      <ServiceList />
      <Footer />
    </Fragment>
  );
};
export default ServicePage;
