import React, { useEffect, useState } from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import research from "../../../../public/assets/research.svg";
import userStories from "../../../../public/assets/userStories.svg";
import appDesign from "../../../../public/assets/appDesign.svg";
import ecommerce from "../../../../public/assets/ecommerce.svg";
import userflow from "../../../../public/assets/userFlow.svg";
import Wireframing from "../../../../public/assets/Wireframing.svg";
const tags = [
  "Research",
  "Userflow",
  "Wireframing",
  "User stories",
  "E-commerce",
  "Application Design",
];

const HeroSection = () => {
  const [scale, setScale] = useState(1);
  const [zIndex, setZIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [opacityTwo, setOpacityTwo] = useState(1);
  const [bgColor, setBgColor] = useState("#F3F2EE");
  const images = [
    research,
    userflow,
    Wireframing,
    userStories,
    ecommerce,
    appDesign,
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Zoom effect for "parvathy"
      const newScale = Math.min(1 + scrollY / 200, 20);
      // const newScale = Math.min(1 + scrollY / 500, 10);
      setScale(newScale);
      // Bring to front after scrolling
      // Fade out foreground gradually (optional)
      const newOpacity =
        scrollY > 100 ? Math.max(1 - (scrollY - 300) / 300, 0) : 1;
      const newOpacityTwo = scrollY > 1 ? 0 : 1;

      setOpacity(newOpacity);
      setOpacityTwo(newOpacityTwo);
      if (newOpacity <= 0.9) {
        setBgColor("#ffffff");
      } else {
        setBgColor("#F3F2EE");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        height: "150vh",
        backgroundColor: bgColor,
        position: "relative",
        textAlign: "center",
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity,
          zIndex,
          pointerEvents: "none",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "80px", sm: "150px", md: "200px", lg: "237px" }, // responsive font
            fontWeight: 600,
            color: "#FFFFFF",
            transform: `scale(${scale})`,
            transition:
              "transform 0.2s ease-out, z-index 0.3s ease, opacity 0.3s ease",
            fontFamily: "Geologica, sans-serif",
            textTransform: "lowercase",
            marginTop: "70px",
          }}
        >
          parvathy
        </Typography>
      </Box>

      {/* Sticky Foreground Content */}
      <Box
        sx={{
          position: "sticky",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          opacity: opacityTwo,
          transition: "opacity 0.3s ease",
        }}
        mt="-70px"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: "90px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: "80px",
              color: "#010101",
              fontFamily: "Geologica, sans-serif",
              lineHeight: "64px",
            }}
          >
            I DESIGN
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: "80px",
              color: "#010101",
              fontFamily: "Geologica, sans-serif",
            }}
          >
            EXPERIENCE
          </Typography>
        </div>
        <Box display="flex" mr="10px" mt="171px" gap="12px">
          {images.map((image, index) => (
            <img
              loading="lazy"
              key={index}
              src={image}
              alt={`design-${index}`}
            />
          ))}
        </Box>

        {/* <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: "124px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {tags.map((label) => (
            <Chip
              key={label}
              label={label}
              sx={{
                backgroundColor: "#f0f0f0",
                fontSize: "12px",
                fontWeight: 400,
                borderRadius: "20px",
                px: 2,
                py: 1,
                fontFamily: "Geologica, sans-serif",
              }}
            />
          ))}
        </Stack> */}
      </Box>
    </Box>
  );
};
export default HeroSection;
