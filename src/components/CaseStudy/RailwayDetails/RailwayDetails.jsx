import React from "react";
import ArchBackground from "../../ArchBackground/ArchBackground";
import { Typography, Box } from "@mui/material";
import PersonaDetails from "./PersonaDetails/PersonaDetails";

const RailwayDetails = () => {
  return (
    <ArchBackground height="6207px">
      <Box
        display={"flex"}
        sx={{
          position: "absolute",
          top: "272px",
          left: "295px",
          maxWidth: "100%",
          "@media (max-width:1280px)": {
            left: "130px",
          },
        }}
      >
        <Typography
          fontWeight={600}
          fontSize={"48px"}
          lineHeight={"72px"}
          color="#FAFAFA"
        >
          Know your personas
        </Typography>
      </Box>
      <Box
        display={"flex"}
        sx={{
          position: "absolute",
          top: "521px",
          left: "295px",
          maxWidth: "100%",
          "@media (max-width:1280px)": {
            left: "130px",
          },
        }}
      >
        <PersonaDetails />
      </Box>
    </ArchBackground>
  );
};

export default RailwayDetails;
