import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header/index.jsx";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags";
import contact_us from "../../components/assets/Contact_us_new.webp";
import "../AboutPage/loading.css";
import Loader from "../../components/Loader/loader.jsx";
import { getOrganizationSchema, getBreadcrumbSchema, getLocalBusinessSchema } from "../../utils/structuredData.js";

const PageTitle = React.lazy(() => import("../../components/pagetitle/index.jsx"));
const Contactpage = React.lazy(() => import("../../components/Contactpage/index.jsx"));
const Footer = React.lazy(() => import("../../components/footer/index.jsx"));

const ContactPage = () => {
  const title = "Contact Samrudhi | Enquire About Residential Projects in Bangalore";
  const description = "Get in touch with Samrudhi for project details, site visits, pricing, and property investment guidance in Bangalore, Karnataka.";
  const ogTitle = "Contact Samrudhi | Enquire About Residential Projects in Bangalore";
  const ogDescription = "Get in touch with Samrudhi for project details, site visits, pricing, and property investment guidance in Bangalore, Karnataka.";
  const ogUrl = "https://thesamrudhi.com/contact";
  const canonicalUrl = "https://thesamrudhi.com/contact";

  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://thesamrudhi.com/" },
    { name: "Contact Us", url: "https://thesamrudhi.com/contact" }
  ]);

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
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="contact samrudhi, samrudhi bangalore contact, property enquiry bangalore, real estate contact karnataka" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thesamrudhi.com/assets/Samrudhi_Logo-CqtrRrid.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content="https://thesamrudhi.com/assets/Samrudhi_Logo-CqtrRrid.png" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
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
          PageTitle={"CONTACT"}
          pagesub={"Contact"}
          pageImg={contact_us}
          title={title}
        />
        <Contactpage ContactClasss="contact-container" />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default ContactPage;
