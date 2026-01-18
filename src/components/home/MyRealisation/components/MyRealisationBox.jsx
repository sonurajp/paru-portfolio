import { Typography, Box, Chip } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const chipDataMap = {
  "Railway ticket booking": ["Research", "Userflow", "IA", "Wireframes"],
  "Paradox of choices": ["Define", "Analysis ", "Theory"],
  "Inflight Entertainment": ["Research", "Userflow", "IA", "Wireframes"],
  "Habit tracking App": ["Research", "Userflow", "IA", "Wireframes"],
  "Sustainable UX": ["Define", "Analysis ", "Theory"],
};

const MyRealisationBox = ({ headText, index, route }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        width: "78vw",
        transition: "all 0.3s ease",
        cursor: route ? "pointer" : "default",
      }}
      mb="32px"
      mt={index === 0 ? "0px" : "32px"}
      onClick={route && (() => navigate(`case-study/${route}`))}
    >
      <Typography
        fontSize="40px"
        fontWeight={600}
        textTransform="uppercase"
        lineHeight="31.4px"
        sx={{
          color: hovered ? "#FF5832" : "#343434",
          transition: "color 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        {headText}
      </Typography>

      <Box
        display="flex"
        gap={1}
        justifyContent="flex-end"
        sx={{
          flex: 1,
          pointerEvents: "none", // 👈 CRITICAL
        }}
      >
        {chipDataMap[headText]?.map((chip, index) => (
          <Chip
            key={index}
            label={chip}
            variant="outlined"
            sx={{
              padding: "0 8px",
              borderRadius: "32px",
              fontSize: "1rem",
              color: "#343434",
              fontWeight: 400,
              background:
                "linear-gradient(to right, #e8e8e8 0%, transparent 100%)",
              height: "37px",
              border: "1px solid transparent",

              opacity: hovered ? 1 : 0,
              transform: hovered ? "rotateY(0deg)" : "rotateY(90deg)",
              transition: "all 0.4s ease",
              transitionDelay: `${index * 0.08}s`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MyRealisationBox;
