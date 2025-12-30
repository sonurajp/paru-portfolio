import React, { useEffect } from "react";
import "./About.css";
import navLogo from "../../assets/logo.svg";
import NavBar from "../../components/layout/NavBar/NavBar";
import { Box, Typography } from "@mui/material";
import AboutProvider from "./store/AboutProvider";
import SkillsandExperience from "./SkillsandExperience/SkillsandExperience";

const About = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => {
    const divider = document.querySelector(".story-divider");
    const section = document.querySelector(".about-section");

    let lastScrollY = window.scrollY;
    let triggered = false;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;

      if (!scrollingDown || triggered) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInView) {
        divider.classList.add("extend");
        triggered = true;
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
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
            <Box className="story-content">
              <Typography className="story-content-typo">
                {`After completing her graduation in Visual Communication, I started 
                  my career as a Visualiser. Went on to pursue apost-graduation in
                  Communication, followed by a Diploma in UX/UI Design. In December 
                  2019, joined a design firm where she focusedon in-house experience 
                  design as part of the UX/UI team.`}
              </Typography>
              <Box className="so-far-box">
                <Typography className="so-far-typo">SO FAR</Typography>
              </Box>
            </Box>
          </Box>
          {/* <Box ml="115px"> */}
          <SkillsandExperience type="skills" />
          {/* </Box> */}
          <SkillsandExperience type="experience" />
        </Box>
      </AboutProvider>
    </>
  );
};

export default About;
