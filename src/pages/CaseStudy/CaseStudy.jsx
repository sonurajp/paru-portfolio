import React from "react";
import { Footer, NavBar } from "../../components/layout";
import leftArrow from "../../assets/leftArrow.svg";
import CaseStudyProvider from "./store/CaseStudyProvider";
import CaseStudyIntroduction from "../../components/CaseStudy/CaseStudyIntroduction/CaseStudyIntroduction";
import Summary from "../../components/CaseStudy/Summary/Summary";
import { Box } from "@mui/material";
import ParadoxDetails from "../../components/CaseStudy/ParadoxDetails/ParadoxDetails";
import { useParams } from "react-router-dom";
const CaseStudy = () => {
  const { id } = useParams();
  console.log({ id });
  return (
    <>
      <CaseStudyProvider>
        <Box sx={{ backgroundColor: "#F6F6F6" }}>
          <NavBar type="work" logo={leftArrow} />
          <CaseStudyIntroduction />
          <Summary />
          {id === "paradox-case-study" && <ParadoxDetails />}
        </Box>
        <Footer />
      </CaseStudyProvider>
    </>
  );
};

export default CaseStudy;
