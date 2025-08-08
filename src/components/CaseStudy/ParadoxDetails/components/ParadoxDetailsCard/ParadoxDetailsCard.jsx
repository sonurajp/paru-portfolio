import { Box, Typography } from "@mui/material";
import React from "react";
import VerticalLine from "../VerticalLine/VerticalLine";

const ParadoxDetailsCard = ({ data }) => {
  return (
    <Box display="flex" gap="97px">
      <Box display="flex" gap="32px" width={data.boxWidth}>
        <VerticalLine height="56px" />
        <Box display="flex" flexDirection="column" gap="9px">
          <Typography
            color="#FAFAFA"
            fontWeight="600"
            fontSize={"20px"}
            lineHeight={"22.6px"}
          >
            {data.title}
          </Typography>
          <Typography
            color="#DBDBDB"
            fontWeight="500"
            fontSize={"15px"}
            lineHeight={"22.6px"}
          >
            {data.subtitle}
            {}
          </Typography>
          <Typography
            color="#969696"
            fontSize={"15px"}
            lineHeight={"22.6px"}
            width={data.contentWidth}
            mt={"16px"}
          >
            {data.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ParadoxDetailsCard;
