import { Box, Typography } from "@mui/material";
import React from "react";

const SummaryCard = ({
  cardTitle,
  cardDescription,
  height = "100%",
  width = "100%",
  backgroundColor = "#FAFAFA",
}) => {
  return (
    <Box
      sx={{
        backgroundColor,
        borderRadius: "24px",
        height,
        width,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "1.5rem",
          mt: "40px",
          ml: "40px",
          mb: "16px",
          color: "#444444",
        }}
      >
        {cardTitle}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          width: "225px",
          ml: "40px",
          color: "#555555",
        }}
      >
        {cardDescription}
      </Typography>
    </Box>
  );
};

export default SummaryCard;
