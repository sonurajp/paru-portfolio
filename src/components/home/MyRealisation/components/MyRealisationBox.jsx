import { Typography, Box, Chip } from "@mui/material";
import React, { useState } from "react";

const chipDataMap = {
  "Railway ticket booking": ["Research", "Userflow", "IA", "Wireframes"],
  "Paradox of choices": ["Define", "Analysis ", "Theory"],
  "Inflight Entertainment": ["Research", "Userflow", "IA", "Wireframes"],
  "Habit tracking App": ["Research", "Userflow", "IA", "Wireframes"],
  "Sustainable UX": ["Define", "Analysis ", "Theory"],
};

const MyRealisationBox = ({ headText, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{ width: "1000px", transition: "all 0.3s ease" }}
      mb="32px"
      mt={index === 0 ? "0px" : "32px"}
    >
      <Typography
        fontSize="40px"
        fontWeight={600}
        textTransform="uppercase"
        lineHeight="31.4px"
        sx={{
          color: hovered ? "#FF5832" : "#343434",
          transition: "color 0.3s ease",
        }}
      >
        {headText}
      </Typography>

      {hovered && chipDataMap[headText] && (
        <Box display="flex" gap={1} justifyContent="flex-end">
          {chipDataMap[headText].map((chip, index) => (
            <Chip
              key={index}
              label={chip}
              variant="outlined"
              sx={{
                padding: " 0 8px",
                borderRadius: "32px",
                fontSize: "1rem",
                color: "#343434",
                fontWeight: 400,
                background:
                  "linear-gradient(to right, #e8e8e8 0%, transparent 100%)",
                height: "37px",
                border: "1px solid transparent",
                opacity: 0,
                transform: "rotateY(90deg)",
                animation: "flipIn 0.4s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MyRealisationBox;
