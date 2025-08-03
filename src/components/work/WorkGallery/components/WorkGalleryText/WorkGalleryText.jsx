import { Box, Typography } from "@mui/material";
import React from "react";

const WorkGalleryText = ({
  head = "",
  content = "",
  lineColor = "linear-gradient(45deg, #3583FA, #34B5FA)",
}) => {
  return (
    <Box display="flex" gap="32px">
      <hr
        style={{
          height: "56px",
          width: "4px",
          background: lineColor,
          border: "none",
        }}
      />
      <Box display="flex" flexDirection="column" gap="16px">
        <Typography
          color="#FFFFFF"
          fontWeight="500"
          lineHeight="22.6px"
          fontSize="20px"
        >
          {head}
        </Typography>
        <Typography
          color="#DBDBDB"
          fontWeight="300"
          lineHeight="22.6px"
          fontSize="15px"
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkGalleryText;
