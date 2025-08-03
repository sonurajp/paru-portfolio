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
          mt: "62px",
          ml: "40px",
        }}
      >
        {cardTitle}
      </Typography>
      <Typography
        sx={{
          fontWeight: 300,
          fontSize: "1rem",
          width: "191px",
          ml: "40px",
        }}
      >
        {cardDescription}
      </Typography>
    </Box>
  );
};

export default SummaryCard;
