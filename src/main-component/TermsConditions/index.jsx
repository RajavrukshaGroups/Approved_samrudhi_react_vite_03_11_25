import React from "react";
import { Fragment } from "react";
import Header from "../../components/header/index.jsx";
import PageTitle from "../../components/pagetitle/index.jsx";
import Footer from "../../components/footer/index.jsx";
import TermsConditions from "../../components/TermsCondition/termsCondition.jsx";
import bg from "../../components/assets/terms-conditions.webp";

const MainTermsCondition = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle PageTitle={"Terms And Conditions"} pageImg={bg} />
      <TermsConditions />
      <Footer />
    </Fragment>
  );
};

export default MainTermsCondition;
