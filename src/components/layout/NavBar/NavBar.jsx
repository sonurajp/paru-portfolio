import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import getInTouch from "../../../assets/getintouch.svg";
import { useNavigate } from "react-router-dom";
const NavBar = ({ type = "home", logo = "" }) => {
  const navText = ["ABOUT", "WORK", "RESUME"];
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState("#F3F2EE");
  const [navlogo, setNavLogo] = useState(logo);
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
        position: type === "home" ? "sticky" : "static",
        top: type === "home" ? 0 : "auto",
        zIndex: 1000,
      }}
    >
      <img
        src={navlogo || logo}
        alt="Parvathy logo"
        role="button"
        style={{ marginLeft: "124px", marginTop: "18px", cursor: "pointer" }}
        onClick={() => {
          // always go to homepage when logo is clicked
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
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => {
              if (text === "RESUME") {
                navigate("/resume");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              } else if (text === "WORK") {
                navigate("/work");
              } else if (text === "ABOUT") {
                navigate("/about");
              }
            }}
          >
            {text}
          </Typography>
        ))}
        <Box display="flex" justifyContent="center" mt="3px">
          <div
            className="blink-dot"
            style={{ marginTop: "3px", marginRight: "4px" }}
          />
          <img
           src={getInTouch}
            alt="Get in Touch"
            style={{ width: "97px", height: "14px", cursor: "pointer" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
