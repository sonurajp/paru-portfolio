import { Box, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import ScrollImageThree from "../../../assets/ScrollImageThree.png";

const images = [
  "https://ik.imagekit.io/Gdragon/Portfolio/Homepage/Mask%20group.jpg?updatedAt=1753627739215",
  ScrollImageThree,
  "https://ik.imagekit.io/Gdragon/Portfolio/Homepage/Group%209895.jpg?updatedAt=1753627738810",
  "https://ik.imagekit.io/Gdragon/Portfolio/Homepage/Mask%20group-1.jpg?updatedAt=1753627738868",
  "https://ik.imagekit.io/Gdragon/Portfolio/Homepage/Group%209841.jpg?updatedAt=1753627738822",
];
const subText = [
  "Hotel Amenities Icon",
  "Location icons",
  "Coffee App Illustrations",
  "Weather Icons",
  "Publishing Wensite Illustrations",
];

const VisualHighlightSection = ({}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const [subTextIndex, SetSubTextIndex] = useState(0);

  const debouncedNextImage = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
    timeoutRef.current = setTimeout(() => {
      if (!isTransitioning) {
        // Check if we're at the last image
        if (currentImageIndex >= images.length - 1) {
          // Navigate to next page - scroll down to next section
          window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          });
          return;
        }

        setIsTransitioning(true);

        setTimeout(() => {
          setCurrentImageIndex((prev) => prev + 1);
          SetSubTextIndex((prev) => prev + 1);

          setTimeout(() => {
            setIsTransitioning(false);
          }, 50);
        }, 200);
      }
      timeoutRef.current = null;
    }, 40);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        e.preventDefault();
        debouncedNextImage();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        debouncedNextImage();
      }
    };

    const handleMouseEnter = () => {
      container.focus();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("keydown", handleKeyDown);
    container.setAttribute("tabindex", "0");

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("keydown", handleKeyDown);

      // Clear timeout on cleanup
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isTransitioning, currentImageIndex]); // Added currentImageIndex to dependencies

  return (
    <Box
      ref={containerRef}
      display="flex"
      justifyContent="flex-end"
      // alignItems="center"
      height="864px"
      sx={{
        cursor: "pointer",
        userSelect: "none",
        outline: "none",
        "&:focus": {
          outline: "none",
        },
      }}
    >
      <div>
        <Box mt="293px" ml="150px">
          <Typography
            fontSize="65px"
            fontWeight={700}
            color="#FF5832"
            lineHeight="81px"
            whiteSpace="pre-line"
          >
            SELECTED
            {"\n"}
            VISUAL
            {"\n"}
            ELEMENTS
          </Typography>
          {/* {["SELECTED", "VISUAL", "ELEMENTS"].map((words, index) => (
            <Typography
              fontSize="64px"
              fontWeight={600}
              color="#FF5832"
              key={index}
              textAlign="left"
            >
              {words}
            </Typography>
          ))} */}
        </Box>
        <Box sx={{ overflow: "hidden", height: "20px" }} ml="150px">
          <Typography
            fontSize="14px"
            fontWeight={400}
            sx={{
              transform: isTransitioning
                ? "translateY(-100%)"
                : "translateY(0%)",
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {subText[subTextIndex]}
          </Typography>
        </Box>
      </div>

      <Box
        sx={{
          width: "668px",
          height: "816px",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
        }}
        mt="24px"
        ml="300px"
        mr="30px"
      >
        <Box
          component="img"
          src={images[currentImageIndex]}
          alt="Visual Highlight"
          sx={{
            width: "668px",
            height: "816px",
            objectFit: "cover",
            transform: isTransitioning ? "translateY(-100%)" : "translateY(0%)",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </Box>
    </Box>
  );
};

export default VisualHighlightSection;
