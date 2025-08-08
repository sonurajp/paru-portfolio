import { Box, Typography } from "@mui/material";
import React from "react";

const ParadoxIdeaCard = ({ data }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="304px"
      width="304px"
      backgroundColor="#272727"
      borderRadius="24px"
    >
      <Box
        display="flex"
        flexDirection={"column"}
        padding={"32px 32px 0px 32px"}
        width={"240px"}
        height={"67px"}
      >
        <Typography
          fontSize="20px"
          fontWeight={600}
          lineHeight="22.6px"
          color="#FAFAFA"
        >
          {data.title}
        </Typography>
        <Typography
          fontSize="15px"
          lineHeight="22.6px"
          color="#999999"
          mt="16px"
        >
          {data.subtitle}
        </Typography>
      </Box>
      <Box
        backgroundColor="#202020"
        padding="24px"
        height="115px"
        ml="8px"
        mb="8px"
        mr="8px"
        mt="85px"
        sx={{
          borderTopRightRadius: "4px",
          borderTopLeftRadius: "4px",
          borderBottomRightRadius: "16px",
          borderBottomLeftRadius: "16px",
        }}
      >
        <Typography fontSize="15px" lineHeight="22.6px" color="#DBDBDB">
          {data.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ParadoxIdeaCard;
