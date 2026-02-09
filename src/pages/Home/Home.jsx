import React, { useEffect, useRef } from "react";
import { Footer, NavBar } from "../../components/layout";
import {
  HeroSection,
  MyRealisation,
  ProjectSection,
  VisualHighlightSection,
} from "../../components/home";

import oneMobile from "../../assets/oneMobile.png";
import logo from "../../assets/logo.svg";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const Home = () => {
  const workRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollToWork) {
      setTimeout(() => {
        workRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location]);
  return (
    <>
      {/* <NavBar logo={logo} workRef={workRef} /> */}

      <NavBar
        logo={logo}
        onWorkClick={() => {
          workRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      />
      <HeroSection />
      <div ref={workRef}>
        <ProjectSection
          bgText={" Rebuilding Wholesale Portal"}
          projectName={`Rebuilding
Wholesale 
Portal`}
          image={
            "https://ik.imagekit.io/Gdragon/Portfolio/Homepage/metro.svg?updatedAt=1753626912984"
          }
          scrollY={860}
          imgHieght="624px"
          imgWidth="487.7px"
          height="577px"
          width="577px"
          top="4%"
          right="-10%"
          textRight="294px"
          routeId="rebuild-wholesale-portal"
          mr="10.8rem"
        />
        <ProjectSection
          bgText={" Social Platform for Education"}
          projectName={`Social
Platform for
Education`}
          image={
            "https://ik.imagekit.io/Gdragon/Portfolio/Homepage/Social.svg?updatedAt=1753626915031"
          }
          scrollY={1350}
          top={"2%"}
          height={"632px"}
          width={"632px"}
          right={"10%"}
          imgHieght="680px"
          imgWidth="870px"
          textRight="90.17px"
          routeId="social-platform"
          mr="2rem"
        />
        <ProjectSection
          bgText={" Sports Application Design"}
          projectName={`Sports
Application
Design`}
          image={
            "https://ik.imagekit.io/Gdragon/Portfolio/Homepage/Nextsports.svg?updatedAt=1753626913339"
          }
          scrollY={1900}
          top={"2%"}
          height={"632px"}
          width={"632px"}
          right={"-3%"}
          imgHieght="647px"
          imgWidth="600px"
          textRight="116px"
          routeId="sports-application"
          mr="8.8rem"
        />
        <ProjectSection
          bgText={" Healthy Foods Onboarding Experience"}
          projectName={`Healthy Foods
Onboarding
Experience`}
          image={oneMobile}
          scrollY={2500}
          top={"0%"}
          height={"632px"}
          width={"632px"}
          right={"-3%"}
          imgHieght="645px"
          imgWidth="540px"
          textRight="75px"
          routeId="health-food"
          mr="8.5rem"
        />
      </div>
      <MyRealisation />
      <VisualHighlightSection />
      <Footer />
    </>
  );
};

export default Home;
