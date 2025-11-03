import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Homepage from "../HomePage/index.jsx";
import AboutPage from "../AboutPage/index.jsx";
import ProjectPage from "../ProjectPage/index.jsx";
import ProjectSinglePage from "../ProjectSinglePage/index.jsx";
import ServicePage from "../ServicePage/index.jsx";
import ContactPage from "../../components/contact-us/contact-us.jsx";
import ErrorPage from "../ErrorPage/index.jsx";
import ExperienceSection from "../../components/demo/experienceSection.jsx";
import SylvanRetreat from "../../main-component/projects/sylvanretreat.jsx";
import PlumeriaMain from "../../main-component/projects/plumeria.jsx"
import Econest from "../projects/eco-nest.jsx";
import JourneySection from "../../components/reactIcons/journeySection.jsx";
import Status from "../Status/status.jsx";
import Amenities from "../../components/Amenities/amenities.jsx";
// import BdeCareerMain from "../careers/bdeCareer.jsx";
import BdeInternCareerMain from "../careers/bdeInternCareer.jsx";
import ScrollToTop from "../../utils/utils.jsx";
import MainPrivacyPolicy from "../PrivacyPolicy/index.jsx";
import CareerMainFooterComp from "../CareerMainFooter/index.jsx"; 
import FloatingIcons from "../../components/FloatingIcons/FloatingIcons.jsx";
import Loader from "../../components/Loader/loader.jsx";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import MainTermsCondition from "../TermsConditions/index.jsx";
import CareerDetails from "../careers/careerDetails.jsx";
import  HeroScrollDemo  from "../../components/BlogList/index.jsx";
import SylvanRetreatNew from "../projects/sylvanRetreatNew.jsx";
import ProjectPageNew from "../ProjectsPageNew/index.jsx";
import EcoNestNewMain from "../projects/EcoNestNewMain.jsx";
import DhsLandingPage from "../../components/dhs_landingpage/dhs_landingpage.jsx";
// import SamrudhiAboutUs from "../../components/samrudhi-aboutus/AboutUs.tsx"
import AaricaPopup from "../../components/aarica-popup/aaricapopup.tsx"
import CelebrationModal from "../../components/aarica-popup/CelebrationModal.tsx";


const RoutesWithLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();  
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   console.log("location", location.pathname);
  //   setLoading(true);
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Adjust delay to match your content loading time
  //   return () => clearTimeout(timer);
  // }, [location.pathname]);
  
useEffect(() => {
  console.log("Current path:", location.pathname);
  setLoading(true);

  const allowedModalRoutes = ["/", "/home", "/about", "/projects", "/contact"];
  const isAllowed = allowedModalRoutes.includes(location.pathname);

  if (isAllowed) {
    setShowModal(true);
  } else {
    setShowModal(false);
  }

  // const timer = setTimeout(() => {
  //   setLoading(false);
  //   // Optional: Auto close after a few seconds
  //   setShowModal(false);
  // }, 30000);

  // return () => clearTimeout(timer);
}, [location.pathname]);

  return (
    <>
      {/* {loading && (
        <Loader logo={true} color="#C1933C" secondaryColor="#C1933C" />
      )} */}                  
      <Routes>
        {/* <Route path="/toatify" element={<ToastContainer />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/projects" element={<ProjectPage />} /> */}
        <Route path="/projects" element={<ProjectPageNew />} />
        <Route path="/projects-single" element={<ProjectSinglePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/experienceSection" element={<ExperienceSection />} />
        <Route path="/careers" element={<CareerMainFooterComp />} />
        <Route path="/careerDetails/:id" element={<CareerDetails />} />
        {/* <Route path="/sylvan-retreat" element={<SylvanRetreat />} /> */}
        <Route path="/sylvan-retreat" element={<SylvanRetreatNew/>} />
        {/* <Route path="/eco-nest" element={<Econest />} /> */}
        {/* <Route path="/eco-nest" element={<EcoNestNewMain />} /> */}
        <Route path="/aarika-project" element={<PlumeriaMain />} />
        <Route path="/journeySection" element={<JourneySection />} />
        <Route path="/status" element={<Status />} />
        {/* <Route path="/amenities" element={<Amenities />} /> */}
        <Route path="/privacyPolicy" element={<MainPrivacyPolicy />} />
        <Route path="/aceternity" element={<HeroScrollDemo />} />
        <Route path="/dhs-landingpage" element={<DhsLandingPage />} />
        {/* <Route path="/samrudhi-aboutus" element={<SamrudhiAboutUs />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
        <CelebrationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

      const AllRoute = () => {
        // const notify = () => toast("Wow so easy!");
        return (
          <>
          <div>
              {/* <FloatingIcons /> */}
               <Router>
              {/* <button onClick={notify}>Notify!</button> */}
              {/* <TawkMessengerReact
                          propertyId="66d2d5ab50c10f7a00a26593"
                          widgetId="1i70srim4"
                          /> */}                 
                  <ScrollToTop />
                  <RoutesWithLoader />
            </Router>
          </div>
           </>
        );
      };
      export default AllRoute;
