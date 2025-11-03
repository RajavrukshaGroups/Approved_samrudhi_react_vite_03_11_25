import React, { Suspense } from "react";
import { Fragment } from "react";
import Header from "../../components/header/index.jsx";
import bg from "../../components/assets/privacy_policy.webp";
import Loader from "../../components/Loader/loader.jsx";

const Footer = React.lazy(() => import("../../components/footer/index.jsx"));
const PageTitle = React.lazy(() => import("../../components/pagetitle/index.jsx"));
const PrivacyPolicy = React.lazy(() =>
  import("../../components/PrivacyPolicy/index.jsx")
);

const MainPrivacyPolicy = () => {
  return (
    <Fragment>
      <Header />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        <PageTitle PageTitle={"Privacy Policy"} pageImg={bg} />
        <PrivacyPolicy />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default MainPrivacyPolicy;
