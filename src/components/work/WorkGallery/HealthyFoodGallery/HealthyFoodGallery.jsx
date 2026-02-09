import React from "react";
import { Box } from "@mui/material";
import ArchBackground from "../../../ui/ArchBackground/ArchBackground";
const HealthyFoodGallery = () => {
  return (
    <ArchBackground height="1029px">
      <Box
        sx={{
          position: "absolute",
          top: { xs: "150px", sm: "250px", md: "340px" },
          left: { xs: "16px", sm: "64px", md: "124px" },
          width: { xs: "90%", sm: "80%", md: "1160px" },
          maxWidth: "100%",
          "@media (max-width:1280px)": {
            left: "40px",
          },
        }}
      >
        <Box
          component="img"
          src="https://ik.imagekit.io/Gdragon/Portfolio/Nutri%20app/Image%20bg.svg?updatedAt=1753626680897"
          alt="Nutri App Background"
          sx={{
            height: "auto",
          }}
        />
      </Box>
    </ArchBackground>
  );
};

export default HealthyFoodGallery;
