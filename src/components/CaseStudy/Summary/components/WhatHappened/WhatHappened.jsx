import { Box, Typography } from "@mui/material";
import React from "react";

const WhatHappened = ({ title, description, width, ml }) => {
  return (
    <Box sx={{ ml }}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "20px",
          color: "#010101",
        }}
      >
        {title}
      </Typography>
      <Typography fontSize="15px" width={width} color="#343434">
        {description}
      </Typography>
    </Box>
  );
};

export default WhatHappened;
