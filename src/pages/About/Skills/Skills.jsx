import React from "react";
import { Box, Typography } from "@mui/material";
import "./Skills.css";
import { useAbout } from "../store/AboutProvider";
import { s } from "framer-motion/client";
const Skills = () => {
  const skillData = useAbout();
  const { skillTitle, skillSubTitle, skillContent } = skillData || {};
  console.log(skillSubTitle["Collaboration and Communication"]);
  return (
    <Box className="skill-section">
      <Typography className="title">SKILLS</Typography>
      <Box className="skills-container">
        {skillTitle.map((title) => (
          <>
            <Typography className="skill-card-title" key={title}>
              {title}
            </Typography>
            <Box className="skill-card-subtitle">
              {skillSubTitle[title].map((subTitle) => (
                <Typography className="subtitle-item" key={subTitle}>
                  {subTitle}
                </Typography>
              ))}
            </Box>
            {skillContent[title] && (
              <Typography className="skill-card-content">
                {skillContent[title]}
              </Typography>
            )}
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
