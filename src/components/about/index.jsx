import { useRef } from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import AboutImg from "../../components/assets/about-1.e32a7109.webp";
import AboutImg from "../../components/assets/homeforsamrudhi.jpg";
import AboutBgImg from "../../components/assets/about-bg-home-page.png";
import "./style.css";
import FadeContent from "../../utils/FadeContent.jsx";
import ShinyText from "../../utils/shinyButtons.jsx";
import BlurText from "../../utils/BlurText.jsx";
import VariableProximity from "../../utils/VariableProximity.jsx";
import MarqueeBanner from "../non-stop-slider/non-stop-slider.jsx";
import SolarOverview from "../vision-mision/vision-mision.jsx";
import AboutUSMISSION from "../about-us-mission/about-us-mission.jsx";
import AboutUsImageModern from "../../components/assets/modernhomeaboutus.jpg";

const About = ({ text, readMore }) => {
  const disableContextMenu = (e) => {
    e.preventDefault();
  };
  const containerRef = useRef(null);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
   <div
      className="about-area bg-gradient-to-r from-white to-gray-100"
      style={{
        userSelect: "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
      <div className="container ">
        <div className="row align-items-center">
          {/* <div className="col-lg-5 col-md-6"> */}
            {/* <div
              className="about-left"
              data-aos="fade-right"
              data-aos-offset="100"
            > */}
              {/* <div className="site-heading">
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <h2 className="explore-title text-capitalize ">
                    We strive to uncover the perfect choice for you
                  </h2>
                </FadeContent>
                <div>
                  <p>{text}</p>
                </div>
              </div> */}
              {/* <div
                className="content"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
              </div> */}
            {/* </div> */}
          {/* </div> */}
          {/* <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-counter"></div>
            <div
              className="about-right"
              data-aos="fade-left"
              data-aos-offset="100"
              onContextMenu={disableContextMenu}
            >
              <img style={{width:'400px'}} className="about_img_2" src={AboutUsImageModern} alt="img" />
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-6 col-md-12 vision-new">
              <div
                className="about-left"
                data-aos="fade-right"
                data-aos-offset="100"
              >
                {!readMore && (
                  <div className="vision">
                    <h2 ref={containerRef} style={{ position: "relative" }}>
                      <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                          label={"Vision"}
                          className={"variable-proximity-demo"}
                          fromFontVariationSettings="'wght' 800, 'opsz' 9"
                          toFontVariationSettings="'wght' 1000, 'opsz' 40"
                          containerRef={containerRef}
                          radius={100}
                          falloff="linear"
                        />
                      </div>
                    </h2>
                    <p>

                      <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                          label={
                            "As aspiring trailblazers in innovative real estate development, we seek to integrate avant-garde design, sustainability, and strategic planning to create environments that inspire connection through environmentally conscious building technologies, nurture growth, and foster investments that yield perpetual growth and prosperity."
                          }
                          className={"variable-proximity-demo"}
                          fromFontVariationSettings="'wght' 350, 'opsz' 9"
                          toFontVariationSettings="'wght' 1000, 'opsz' 40"
                          containerRef={containerRef}
                          radius={100}
                          falloff="linear"
                        />
                      </div>
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mission-new">
              <div
                className="about-left"
                data-aos="fade-left"
                data-aos-offset="100"
              >
                {!readMore && (
                  <div className="mission">
                    <FadeContent
                      blur={true}
                      duration={1000}
                      easing="ease-out"
                      initialOpacity={0}
                    >
                      <h2>
                        <div
                          ref={containerRef}
                          style={{ position: "relative" }}
                        >
                          <VariableProximity
                            label={"Mission"}
                            className={"variable-proximity-demo"}
                            fromFontVariationSettings="'wght' 800, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff="linear"
                          />
                        </div>
                      </h2>
                    </FadeContent>
                    <p>
                      <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                          label={
                            "At Samrudhi, our mission is to be the catalyst for realizing the dreams and aspirations of our clients, creating value through expert guidance, innovative solutions, and unwavering integrity. We are committed to redefining the real estate experience by providing personalized service, fostering community growth, and embracing sustainable practices."
                          }
                          className={"variable-proximity-demo"}
                          fromFontVariationSettings="'wght' 350, 'opsz' 9"
                          toFontVariationSettings="'wght' 1000, 'opsz' 40"
                          containerRef={containerRef}
                          radius={100}
                          falloff="linear"
                        />
                      </div>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
