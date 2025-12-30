import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useCaseStudyContext } from "../../../pages/CaseStudy/store/CaseStudyProvider";

const CaseStudyIntroduction = () => {
  const { id } = useParams();
  const workData = useCaseStudyContext();
  const { title, subtitle, img } = workData?.caseStudyIntro[id] || {};
  return (
    <Box
      mt={"71px"}
      display="flex"
      flexDirection="column"
      // alignItems="flex-end"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography
        fontSize="4.0625rem"
        fontWeight={600}
        lineHeight={"5.0625rem"}
        color="#010101"
        maxWidth={"739px"}
        sx={{
          mr: "437px",
          "@media (max-width:1280px)": {
            ml: "40px",
            width: "90%",
            mr: "157px",
          },
        }}
      >
        {title}
        <span
          style={{
            color: "#FF5832",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "22.5px",
            marginLeft: "8px",
          }}
        >
          {subtitle}
        </span>
      </Typography>
      <Box
        component="img"
        src={img}
        alt="Case Study Banner"
        sx={{
          width: "1192px",
          height: "auto",
          maxWidth: "100%",
          objectFit: "cover",
          mt: "180px",
          // mr: "234px",
          "@media (max-width:1280px)": {
            width: "70%",
            height: "auto",
          },
        }}
      />
    </Box>
  );
};

export default CaseStudyIntroduction;
