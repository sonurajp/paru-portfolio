import { Box, Typography } from "@mui/material";
import React from "react";

const Competitors = ({ data }) => {
  return (
    <Box display={"flex"} flexDirection="column" gap={"80px"} ml="240px">
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: 600,
          color: "#010101",
        }}
      >
        Competitors
      </Typography>
      <Box display={"flex"} gap="116px" flexWrap="wrap">
        {data?.map((item, index) => (
          <Box component={"img"} src={item} key={index} sx={{}} />
        ))}
      </Box>
    </Box>
  );
};

export default Competitors;
