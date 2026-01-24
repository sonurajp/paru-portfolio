import React from "react";
import { Footer, NavBar } from "../../components/layout";
import leftArrow from "../../assets/leftArrow.svg";
import CaseStudyProvider from "./store/CaseStudyProvider";
import CaseStudyIntroduction from "../../components/CaseStudy/CaseStudyIntroduction/CaseStudyIntroduction";
import Summary from "../../components/CaseStudy/Summary/Summary";
import { Box } from "@mui/material";
import ParadoxDetails from "../../components/CaseStudy/ParadoxDetails/ParadoxDetails";
import { useParams } from "react-router-dom";
import RailwayDetails from "../../components/CaseStudy/RailwayDetails/RailwayDetails";
import WireFraming from "../../components/CaseStudy/RailwayDetails/components/WireFraming/WireFraming";
import useScrollToTop from "../../hooks/useScrollToTop";
const CaseStudy = () => {
  const { id } = useParams();
  useScrollToTop();
  return (
    <>
      <CaseStudyProvider>
        <Box sx={{ backgroundColor: "#F6F6F6" }}>
          <NavBar type="work" logo={leftArrow} />
          <CaseStudyIntroduction />
          <Summary />
          {id === "paradox-case-study" && <ParadoxDetails />}
          {id === "railway-case-study" && (
            <Box mt={"144px"}>
              <RailwayDetails />
            </Box>
          )}
          {id === "railway-case-study" && <WireFraming />}
          <Footer />
        </Box>
      </CaseStudyProvider>
    </>
  );
};

export default CaseStudy;
