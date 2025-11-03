import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SylRetreatImg from "../../components/assets/Sylvan_retreat_single_banner_img.webp";
import EcoNestImg from "../../components/assets/eco-nest_pro_det_img.webp";
import PlumeriaImg from "../../components/assets/plumeria1.webp";
import Sylvan_logo from "../../components/assets/Sylvan-official-logo.png";
import EcoNest_logo from "../../components/assets/Econest-official-logo.png";
import Plumeria_logo from "../../components/assets/Plumeria_new_logo.png";
import Brochure from "../../components/assets/RRPL_Brochure_new.pdf";
import PHSBgImg from "../../components/assets/protwo.jpg"
import ContactModal from "../Modal/contactModal.jsx";
// import DHS_Logo from "../../components/assets/"
import ProjectCard from "../projects-cards/projects-cards.jsx";
import "./style.css";

const ProjectListNew = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleDownloadBrochure = () => {
    window.open(Brochure, "_blank");
  };
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate(`/${project.toLowerCase().replace(" ", "-")}`);
  };

  const projects = [
    {
      title: "Sylvan Retreat",
      img: SylRetreatImg,
      logo: Sylvan_logo,
      description: "Farm Land",
    },
    // {
    //   title: "Eco Nest",
    //   img: EcoNestImg,
    //   logo: EcoNest_logo,
    //   description: "Eco Acres",
    // },
    {
      title: "Plumeria",
      img: PlumeriaImg,
      logo: Plumeria_logo,
      description: "Residential Plots",
    },
    {
      title: "DHS Websites",
      img: PHSBgImg,
      logo: 'https://digitaleliteservices.in/assets/DHS.png',
      description: "Real Estate",
    },
  ];

  return (
    <>
    <ProjectCard/>
    </>
     );
};

export default ProjectListNew;
