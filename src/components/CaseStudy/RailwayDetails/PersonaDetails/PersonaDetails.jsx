import { Box, Typography } from "@mui/material";
import React from "react";
import { useCaseStudyContext } from "../../../../pages/CaseStudy/store/CaseStudyProvider";

const PersonaDetails = () => {
  const { personaDetails } = useCaseStudyContext();
  const TitleandDescription = ({ sub, desc }) => {
    return (
      <Box display={"flex"} flexDirection={"column"} gap="8px">
        <Typography fontWeight={700} fontSize={"22px"} color="#FFFFFF">
          {sub}
        </Typography>
        <Typography fontSize={"15px"} color="#969696" whiteSpace="pre-line">
          {desc}
        </Typography>
      </Box>
    );
  };

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        fonyWeight={700}
        fontSize={"32px"}
        lineHeight={"72px"}
        color="#8A8A8A"
      >
        {personaDetails.title}
      </Typography>
      <Box display={"flex"} mt={"40px"} gap="92px">
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap="23px"
          maxWidth={"262px"}
        >
          {TitleandDescription({
            sub: personaDetails.sub1,
            desc: personaDetails.desc1,
          })}
          {TitleandDescription({
            sub: personaDetails.sub2,
            desc: personaDetails.desc2,
          })}
        </Box>
        <Box maxWidth={"314px"}>
          {TitleandDescription({
            sub: personaDetails.sub3,
            desc: personaDetails.desc3,
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default PersonaDetails;
