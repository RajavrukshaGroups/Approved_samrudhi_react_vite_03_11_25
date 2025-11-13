import React, { Fragment } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/header/index.jsx'
import PageTitle from '../../components/pagetitle/index.jsx'
import ProjectSingle from '../../components/ProjectSingle/index.jsx'
import Testimonial from '../../components/testimonial/index.jsx'
import Footer from '../../components/footer/index.jsx'
import bg from "../../components/assets/careersedited.jpg";

const ProjectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { projectName, projectImage } = location.state || { projectName: 'Default Name', projectImage: 'Default Image URL' };

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={projectName} pagesub={'Project Details'} pageImg={bg} />
      <ProjectSingle projectImage={projectImage} />
      <Testimonial />
      <Footer />
    </Fragment>
  )
};

export default ProjectPage;
