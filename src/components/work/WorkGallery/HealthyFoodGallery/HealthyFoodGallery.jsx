import React from "react";
import WorkGalleryArchBackground from "../components/WorkGalleryArchBackground/WorkGalleryArchBackground";
import { Box } from "@mui/material";
const HealthyFoodGallery = () => {
  return (
    <WorkGalleryArchBackground height="1029px">
      <Box
        sx={{
          position: "absolute",
          top: "340px",
          left: "124px",
          width: "1160px",
        }}
      >
        <img
          src={
            "https://ik.imagekit.io/Gdragon/Portfolio/Nutri%20app/Image%20bg.svg?updatedAt=1753626680897"
          }
        />
      </Box>
    </WorkGalleryArchBackground>
  );
};

export default HealthyFoodGallery;
