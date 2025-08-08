import { Box, Typography } from "@mui/material";
import React from "react";
import { useCaseStudyContext } from "../../../../../pages/CaseStudy/store/CaseStudyProvider";

const PersonaDetails = ({
  data,
  color = "#969696",
  fontSize = "15px",
  ml = "92px",
}) => {
  const TitleandDescription = ({ sub, desc }) => {
    return (
      <Box display={"flex"} flexDirection={"column"} gap="8px">
        <Typography fontWeight={700} fontSize={"22px"} color="#FFFFFF">
          {sub}
        </Typography>
        <Typography fontSize={fontSize} color={color} whiteSpace="pre-line">
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
        {data.title}
      </Typography>
      <Box display={"flex"} mt={"40px"} gap="92px">
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap="23px"
          maxWidth={"262px"}
        >
          {TitleandDescription({
            sub: data.sub1,
            desc: data.desc1,
          })}
          {TitleandDescription({
            sub: data.sub2,
            desc: data.desc2,
          })}
        </Box>
        <Box maxWidth={"314px"}>
          {TitleandDescription({
            sub: data.sub3,
            desc: data.desc3,
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default PersonaDetails;
