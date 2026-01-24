import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Footer, NavBar } from "../../components/layout";
import WorkIntro from "../../components/work/WorkIntro";
import "./Work.css";

import leftArrow from "../../assets/leftArrow.svg";
import WorkProvider from "../../components/work/components/WorkProvider/WorkProvider";
import { ProjectShowcase } from "../../components/work/components";
import {
  RebuildWholeSaleWorkGallery,
  SocialPlatformGallery,
  SportsApplicationGallery,
  HealthyFoodGallery,
} from "../../components/work";
import useScrollToTop from "../../hooks/useScrollToTop";

const Work = () => {
  const { id } = useParams();
  useScrollToTop();

  const showWorkGalleryByRoute = () => {
    switch (id) {
      case "rebuild-wholesale-portal":
        return <RebuildWholeSaleWorkGallery />;
      case "social-platform":
        return <SocialPlatformGallery />;
      case "sports-application":
        return <SportsApplicationGallery />;
      case "health-food":
        return <HealthyFoodGallery />;
      default:
        return;
    }
  };
  return (
    <WorkProvider>
      <NavBar type="work" logo={leftArrow} />
      <Box className="content">
        <WorkIntro id={id} />
      </Box>
      <ProjectShowcase />
      {showWorkGalleryByRoute()}
      <Footer />
    </WorkProvider>
  );
};
export default Work;
