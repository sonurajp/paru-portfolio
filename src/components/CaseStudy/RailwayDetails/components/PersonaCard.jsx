import React from "react";
import { Box, Typography } from "@mui/material";

const PersonaCard = ({ data, index }) => {
  return (
    <Box
      padding={"32px"}
      width="384px"
      backgroundColor={data.bgColor}
      borderRadius={"21.33px"}
      ml={index % 2 !== 0 && "67px"}
    >
      <Typography color="#010101" fontWeight={"500"} fontSize={"19px"}>
        {data.title}
      </Typography>
      <Typography
        color="#343434"
        fontWeight={400}
        fontSize={"16px"}
        width={"320px"}
        lineHeight={"24px"}
      >
        {data.desc}
      </Typography>
    </Box>
  );
};

export default PersonaCard;
