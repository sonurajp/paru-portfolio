import React, { useEffect } from "react";
import "./About.css";
import navLogo from "../../assets/logo.svg";
import NavBar from "../../components/layout/NavBar/NavBar";
import { Box, Typography } from "@mui/material";
import AboutProvider from "./store/AboutProvider";
import Skills from "./Skills/Skills";

const About = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => {
    const divider = document.querySelector(".story-divider");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          divider.classList.add("extend");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(divider);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AboutProvider>
        <NavBar type="about" logo={navLogo} />
        <Box className="about-content">
          <Box className="about-section">
            <div className="story-trigger" />

            <Typography className="thestory">THE STORY</Typography>
            <div className="story-divider" />
            <Typography className="so-far-typo">SO FAR</Typography>
          </Box>
          <Skills />
        </Box>
      </AboutProvider>
    </>
  );
};

export default About;
