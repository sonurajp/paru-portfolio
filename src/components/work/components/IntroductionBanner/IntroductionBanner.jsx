import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useWorkData } from "../WorkProvider/WorkProvider";
const IntroductionBanner = ({ introImage = "" }) => {
  const { id } = useParams();
  const workData = useWorkData();
  const data = workData.summaryData[id];
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "3%",
      }}
    >
      <img
        src={data.bannerImage}
        style={{
          width: "84vw",
          height: "100%",
        }}
      />
    </Box>
  );
};
export default IntroductionBanner;
