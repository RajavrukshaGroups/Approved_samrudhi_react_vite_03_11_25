import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header/index.jsx";
import bg from "../../components/assets/new_project.webp";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags";
import "../AboutPage/loading.css";
import Loader from "../../components/Loader/loader.jsx";
import { getOrganizationSchema, getBreadcrumbSchema, getRealEstateAgentSchema } from "../../utils/structuredData.js";

const PageTitle = React.lazy(() => import("../../components/pagetitle/index.jsx"));
const ProjectList = React.lazy(() => import("../../components/ProjectList/index.jsx"));
const Footer = React.lazy(() => import("../../components/footer/index.jsx"));

const ProjectPage = () => {
  const title = "Samrudhi Projects | Residential & Investment Properties in Bangalore";
  const description = "Explore Samrudhi's ongoing and upcoming residential projects in Bangalore. Premium apartments, affordable homes, and investment-ready properties across Karnataka.";
  const ogTitle = "Samrudhi Projects | Residential & Investment Properties in Bangalore";
  const ogDescription = "Explore Samrudhi's ongoing and upcoming residential projects in Bangalore. Premium apartments, affordable homes, and investment-ready properties across Karnataka.";
  const ogUrl = "https://thesamrudhi.com/projects";
  const canonicalUrl = "https://thesamrudhi.com/projects";

  const organizationSchema = getOrganizationSchema();
  const realEstateSchema = getRealEstateAgentSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://thesamrudhi.com/" },
    { name: "Projects", url: "https://thesamrudhi.com/projects" }
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
        <meta name="keywords" content="samrudhi projects, residential projects bangalore, apartments bangalore, property investment bangalore, upcoming projects karnataka, new housing projects bangalore" />
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
          {JSON.stringify(realEstateSchema)}
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
        <PageTitle PageTitle={"PROJECTS"} pagesub={"Projects"} pageImg={bg} />
        <ProjectList />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default ProjectPage;
