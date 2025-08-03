import React from "react";
import { NavBar } from "../../components/layout";
import leftArrow from "../../assets/leftArrow.svg";
import CaseStudyProvider from "./store/CaseStudyProvider";
import CaseStudyIntroduction from "../../components/CaseStudy/CaseStudyIntroduction/CaseStudyIntroduction";
import Summary from "../../components/CaseStudy/Summary/Summary";
import { Box } from "@mui/material";
const CaseStudy = () => {
  return (
    <>
      <CaseStudyProvider>
        <Box sx={{ backgroundColor: "#F6F6F6" }}>
          <NavBar type="work" logo={leftArrow} />
          <CaseStudyIntroduction />
          <Summary />
        </Box>
      </CaseStudyProvider>
    </>
  );
};

export default CaseStudy;
