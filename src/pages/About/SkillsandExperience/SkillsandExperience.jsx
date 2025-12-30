import React from "react";
import { Box, Typography } from "@mui/material";
import "./SkillsandExperience.css";
import { useAbout } from "../store/AboutProvider";
const SkillsandExperience = ({ type }) => {
  const aboutData = useAbout();
  const data =
    type === "skills"
      ? {
          aboutTitle: aboutData?.skillTitle,
          aboutSubTitle: aboutData?.skillSubTitle,
          aboutContent: aboutData?.skillContent,
        }
      : {
          aboutTitle: aboutData?.experieneTitle,
          aboutSubTitle: aboutData?.expYears,
          aboutContent: aboutData?.expContent,
        };

  return (
    <Box className="skill-section">
      <Typography className="title">
        {type === "skills" ? "SKILLS" : "EXPERIENCE"}
      </Typography>
      <Box className="skills-container">
        {data.aboutTitle.map((title) => (
          <>
            <Typography className="skill-card-title" key={title}>
              {title}
            </Typography>
            <Box className="skill-card-subtitle">
              {data.aboutSubTitle[title] &&
                data.aboutSubTitle[title].map((subTitle) => (
                  <Typography className="subtitle-item" key={subTitle}>
                    {subTitle}
                  </Typography>
                ))}
            </Box>
            {data.aboutContent[title] && (
              <Typography className="skill-card-content">
                {data.aboutContent[title]}
              </Typography>
            )}
          </>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsandExperience;
