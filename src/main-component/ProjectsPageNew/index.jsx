import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header/index.jsx";
// import bg from "../../components/assets/new_project.webp";
import bg from "../../components/assets/projects_images.jpg";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags";
import "../AboutPage/loading.css";
import Loader from "../../components/Loader/loader.jsx";
import Navabar from "../../components/navbar/navbar.jsx";
import ProjectCardContainer from "../../components/projects-cards/projects-container.jsx";
import ProjectIconic from "../../components/projects-cards/projects-iconic.jsx"
// import ProjectList from "../../../src/main-component/ProjectsPageNew/index.jsx";
const PageTitle = React.lazy(() => import("../../components/pagetitle/index.jsx"));
const ProjectListNew = React.lazy(() => import("../../components/ProjectListNew/index.jsx"));
const Footer = React.lazy(() => import("../../components/footer/index.jsx"));
import ProjectLovableCard from "../../components/project-card-new/ProjectCard.tsx"

const ProjectPageNew = () => {
  const description =
    "Discover our premium farmland and real estate projects that offer a great investment opportunity. Browse through our latest projects and find your perfect plot.";
  const ogTitle = "Our Projects - Rajavruksha Real Estate";
  const ogDescription =
    "Explore the best farmland and real estate projects with Rajavruksha. Learn about our latest developments and investment opportunities.";
  const ogUrl = "https://rajavrukshagroup.in/projects";
  const title = "Our Projects - Explore Premium Farmland and Real Estate";

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
        <meta
          property="og:image"
          content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png"
        />
        <meta property="og:url" content={ogUrl} />

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rajavruksha Projects" />
        <meta name="twitter:description" content="Explore Rajavruksha's top real estate and farmland projects." />
        <meta name="twitter:image" content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png" /> */}
     
      </Helmet>
      <Navabar />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        {/* <PageTitle PageTitle={"PROJECTS"} pagesub={"Projects"} pageImg={'https://images.pexels.com/photos/5185155/pexels-photo-5185155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} /> */}
        <ProjectCardContainer />
        <ProjectIconic />
        {/* <ProjectLovableCard /> */}
        {/* <ProjectListNew /> */}
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default ProjectPageNew;
