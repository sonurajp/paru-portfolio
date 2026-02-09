import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import getInTouchSmiley from "../../../assets/getInTouchSmiley.svg";

import { useNavigate } from "react-router-dom";
const NavBar = ({ type = "home", logo = "", onWorkClick = () => {} }) => {
  const navText = ["ABOUT", "WORK", "RESUME"];
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState("#F3F2EE");
  const [navlogo, setNavLogo] = useState(logo);
  const email = "parvathy.26@outlook.com";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust this threshold based on your HeroSection height
      const heroHeight = 10;

      if (scrollY < heroHeight) {
        setBgColor("#F3F2EE");
        // ensure logo is visible when near top
        setNavLogo(logo);
      } else {
        setBgColor("transparent");
        setNavLogo("");
      }
    };

    handleScroll(); // Initialize on mount
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [logo]); // re-run if logo prop changes
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      backgroundColor={type === "home" ? bgColor : "transparent"}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <img
        src={navlogo || logo}
        alt="Parvathy logo"
        role="button"
        style={{ marginLeft: "124px", marginTop: "18px", cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      />
      <Box display="flex" gap={3} mr="124px" mt="30px">
        {navText.map((text, index) => (
          <Typography
            key={index}
            fontSize="12px"
            fontWeight="medium"
            sx={{
              color: "#000",
              fontWeight: "600",
              "&:hover": { cursor: "pointer", color: "#ff5832" },
            }}
            onClick={() => {
              if (text === "RESUME") {
                navigate("/resume");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              } else if (text === "WORK") {
                navigate("/", { state: { scrollToWork: true } });
              } else if (text === "ABOUT") {
                navigate("/about");
              }
            }}
          >
            {text}
          </Typography>
        ))}
        <Box
          display="flex"
          justifyContent="center"
          onClick={() => window.open(gmailLink, "_blank")}
        >
          <div
            className="blink-dot"
            style={{ marginTop: "5px", marginRight: "4px" }}
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={"4px"}
            sx={{
              color: "#000",
              "&:hover": { cursor: "pointer", color: "#ff5832" },
            }}
          >
            <Typography
              fontSize="12px"
              fontWeight="medium"
              sx={{
                fontWeight: "600",
              }}
              onClick={() => window.open(gmailLink, "_blank")}
            >
              GET IN{" "}
            </Typography>

            <img
              src={getInTouchSmiley}
              alt="Get in Touch"
              style={{ width: "10px", height: "10px", cursor: "pointer" }}
            />
            <Typography
              fontSize="12px"
              fontWeight="medium"
              sx={{
                fontWeight: "600",
              }}
              onClick={() => window.open(gmailLink, "_blank")}
            >
              TOUCH
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
