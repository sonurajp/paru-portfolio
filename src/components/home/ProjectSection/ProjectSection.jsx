import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import uiux from "../../../assets/uiux.svg"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";
import useLazloadHook from "../../../hooks/useLazloadHook";
const ProjectSection = ({
  bgText,
  projectName,
  image,
  scrollY,
  top = "10%",
  right = "2%",
  height = "400px",
  width = "400px",
  imgHieght = "auto",
  imgWidth = "400px",
  textRight = "20%",
  routeId,
}) => {
  const [inView, setInView] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > scrollY) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const imgRef = useRef(null);
  const { loadImage } = useLazloadHook(imgRef);
  return (
    <Box
      sx={{
        position: "relative",
        height: "814px",
        overflow: "hidden",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      }}
      onMouseEnter={() => setChangeColor(true)}
      onMouseLeave={() => setChangeColor(false)}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "10%",
          left: 0,
          transform: "translateY(-50%)",
          whiteSpace: "nowrap",
          fontSize: { xs: "10rem", md: "10rem" },
          color: "#F8F8F8",
          fontWeight: 800,
          animation: "scrollText 15s linear infinite",
          zIndex: 0,
          fontFamily: "Geologica, sans-serif",
          pointerEvents: "none",
        }}
      >
        {bgText}
        {bgText}
        {bgText}
        {bgText}
        {bgText}
      </Typography>

      <Box
        sx={{
          zIndex: 1,
          transform: inView ? "translateY(0)" : "translateY(50px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.8s ease",
          ml: "120px",
          mr: "auto",
          mt: "443px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#000",
            fontFamily: "Geologica, sans-serif",
            textAlign: "left",
            whiteSpace: "nowrap",
            cursor: "pointer",
            "&:hover": { color: "#FF5832" },
            whiteSpace: "pre-wrap",
          }}
          onClick={() => {
            navigate(`/work/${routeId}`);
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          }}
          role="button"
          tabIndex={0}
        >
          {projectName}
        </Typography>

        <Box
          component="img"
          mt="24px"
          src={uiux}
          style={{
            height: "37px",
            width: "82px",
          }}
        />
      </Box>
      <Box
        className="image-wrapper"
        ref={imgRef}
        sx={{
          position: "relative",
          display: "inline-block",
        }}
        // mr={bgText === " Social Platform for Education" ? "0px" : "202px"}
        mr="auto"
        mt="89px"
      >
        {loadImage && (
          <img
            src={image}
            alt="metro"
            style={{
              height: imgHieght,
              width: imgWidth,
              display: "block",
              zIndex: 1,
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/work/${routeId}`)}
          />
        )}

        <div
          className="back-hover"
          style={{
            top,
            height,
            width,
            right,
          }}
        />
      </Box>
    </Box>
  );
};
export default ProjectSection;
