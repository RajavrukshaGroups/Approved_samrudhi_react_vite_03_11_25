import { useRef } from "react";
import "./journeysection.css";
import AboutIcon from "../../components/assets/planting (1).png";
import ResidentIcon from "../../components/assets/residentialfhfg.png";
import VillaIcon from "../../components/assets/villa.png";
import FadeContent from "../../utils/FadeContent.jsx";
import VariableProximity from "../../utils/VariableProximity.jsx";
import MarqueeBanner from "../non-stop-slider/non-stop-slider.jsx";
import SolarOverview from "../vision-mision/vision-mision.jsx";
import AboutUSMISSION from "../about-us-mission/about-us-mission.jsx";
import Servicescards from "../../components/services-atm-cards/services-atm-cards.jsx"

const JourneySection = () => {
  const containerRef = useRef(null);
  return (
    <>
      <MarqueeBanner />
      <Servicescards />

    
    
    </>
  );
};

export default JourneySection;
