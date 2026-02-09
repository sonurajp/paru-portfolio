import React, { useEffect } from "react";
import "./About.css";
import navLogo from "../../../public/assets/logo.svg";
import NavBar from "../../components/layout/NavBar/NavBar";
import { Box, Typography } from "@mui/material";
import AboutProvider from "./store/AboutProvider";
import SkillsandExperience from "./SkillsandExperience/SkillsandExperience";
import Future from "./Future/Future";
import Footer from "./../../components/layout/Footer/Footer";

const About = () => {
  useEffect(() => {
    const divider = document.querySelector(".story-divider");
    const section = document.querySelector(".about-section");
    const content = document.querySelector(".story-content-typo");

    let triggered = false;
    let scrollUnlocked = false;

    const onWheel = (e) => {
      if (!scrollUnlocked) {
        e.preventDefault(); // 🚨 HARD STOP SCROLL
      }

      if (triggered) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInView) {
        divider.classList.add("extend");
        content.classList.add("visible");

        triggered = true;

        // 🔓 Unlock scroll AFTER animation
        setTimeout(() => {
          scrollUnlocked = true;
          window.removeEventListener("wheel", onWheel);
        }, 800);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    const divider = document.querySelector(".story-divider");
    const section = document.querySelector(".about-section");
    const content = document.querySelector(".story-content-typo");

    let triggered = false;

    const onScroll = () => {
      if (triggered) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInView) {
        // 🔥 Trigger animation
        divider.classList.add("extend");
        content.classList.add("visible");

        triggered = true;

        // ⛔ Stop scroll temporarily
        document.body.style.overflow = "hidden";

        // ✅ Re-enable scroll after animation
        setTimeout(() => {
          document.body.style.overflow = "";
        }, 800); // match your CSS animation duration

        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: false });

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
                {`After completing my graduation in Visual Communication, I started 
                  my career as a Visualiser. Went on to pursue a post-graduation in
                  Communication, followed by a Diploma in UX/UI Design. In December 
                  2019, joined a design firm where she focusedon in-house experience 
                  design as part of the UX/UI team.`}
              </Typography>
              <Box className="so-far-box">
                <Typography className="so-far-typo">SO FAR</Typography>
              </Box>
            </Box>
          </Box>
          <SkillsandExperience type="skills" />
          <SkillsandExperience type="experience" />

          <Box className="strength-box">
            <Typography className="strength-typo">STRENGTHS</Typography>
            <Box
              sx={{ display: "flex", gap: 2, flexDirection: "column", ml: 2 }}
            >
              {[
                "Deep understanding of user needs and behaviors",
                "Crafting intuitive solutions to complex challenges",
                "Aligning user goals with business objectives",
                "Powerful use of iconography, layout, and illustration",
              ].map((data, index) => (
                <Box key={index} sx={{ display: "flex" }}>
                  <Typography
                    className="strength-content-typo"
                    sx={{ display: "flex", gap: 2 }}
                  >
                    <span>•</span>
                    {data}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="future-box">
            <Typography className="future-typo">FUTURE</Typography>
            <Future />
          </Box>
        </Box>
      </AboutProvider>
      <Footer type="about" />
    </>
  );
};

export default About;
