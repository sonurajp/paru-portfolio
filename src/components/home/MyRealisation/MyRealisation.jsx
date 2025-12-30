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
  const [animatedChars, setAnimatedChars] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);
  const titleText = "MY REALISATIONS";
  const characters = titleText.split(""); // Split into characters instead of words

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it comes into view
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Start animation after component becomes visible
    const startTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 300); // 300ms delay after becoming visible

    return () => clearTimeout(startTimer);
  }, [isVisible]);

  useEffect(() => {
    if (!startAnimation) return;

    const timer = setInterval(() => {
      setAnimatedChars((prev) => {
        if (prev < characters.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 100); // 100ms between each character (adjust for speed)

    return () => clearInterval(timer);
  }, [startAnimation, characters.length]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      // justifyContent="center"
      // alignItems="center"
      height="1260px"
      sx={{
        background: "#F3F3F3",
        // padding: "5rem",
      }}
    >
      <Box mt="155px" ml="150px">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          width="100%"
          gap="5px"
          mb="80px"
        >
          <Typography
            fontSize="32px"
            fontWeight={600}
            ref={titleRef}
            sx={{
              fontFamily: "inherit", // Maintain consistent font
              letterSpacing: "normal", // Maintain letter spacing
            }}
          >
            {characters.map((char, index) => (
              <span
                key={index}
                style={{
                  color: index < animatedChars ? "#000000" : "#FF5832",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "inline-block",
                  transform:
                    index < animatedChars ? "translateY(0)" : "translateY(3px)",
                  opacity: index < animatedChars ? 1 : 0.7,
                  // Preserve spaces
                  whiteSpace: char === " " ? "pre" : "normal",
                  // minWidth: char === " " ? "0.3em" : "auto",
                }}
              >
                {char === " " ? "\u00A0" : char}{" "}
                {/* Use non-breaking space for better spacing */}
              </span>
            ))}
          </Typography>
          <Typography
            sx={{
              opacity: animatedChars >= characters.length ? 1 : 0,
              transition: "opacity 0.8s ease-in-out 0.2s", // Fade in subtitle after title completes
              color: "#343434",
            }}
            fontSize="1rem"
          >
            in creating relevant and simple experiences
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
