import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import MyRealisationBox from "./components/MyRealisationBox";
const MyRealisationConfigs = [
  {
    headText: "Railway ticket booking",
    route: "railway-case-study",
  },
  {
    headText: "Paradox of choices",
    route: "paradox-case-study",
  },
  {
    headText: "Inflight Entertainment",
  },
  {
    headText: "Habit tracking App",
  },
  {
    headText: "Sustainable UX",
  },
];

const MyRealisation = () => {
  const titleText = "My Realisations";

  return (
    <Box
      display="flex"
      flexDirection="column"
      // justifyContent="center"
      // alignItems="center"
      height="1260px"
    >
      <Box mt="155px" ml="150px">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          width="100%"
          gap="5px"
          mb="64px"
        >
          <Typography
            sx={{
              color: "#343434",
            }}
            fontSize="1rem"
          >
            {titleText}
          </Typography>
        </Box>
        <Box display="flex">
          <Box display="flex" flexDirection="column">
            {MyRealisationConfigs.map((config, index) => (
              <React.Fragment key={index}>
                <MyRealisationBox
                  headText={config.headText}
                  index={index}
                  route={config?.route}
                />
                <hr
                  style={{
                    height: ".5px",
                    backgroundColor: "#929292",
                    opacity: "40%",
                    border: "none",
                    // marginTop: "32px",
                    width: "78vw",
                  }}
                />
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyRealisation;
