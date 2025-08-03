import React from "react";
import { Box, Typography } from "@mui/material";
import getInTouch from "../../../assets/getintouch.svg";
import { useNavigate } from "react-router-dom";
const NavBar = ({ type = "home", logo = "" }) => {
  const navText = ["ABOUT", "WORK", "RESUME"];
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      backgroundColor={type === "home" ? "#F3F2EE" : ""}
      sx={{
        // position: "sticky",
        // top: 0,
        zIndex: 1000,
      }}
    >
      <img
        src={logo}
        style={{ marginLeft: "124px", marginTop: "18px", cursor: "pointer" }}
        onClick={() => {
          type === "work" ? navigate(-1) : "";
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
              "&:hover": {
                cursor: "pointer",
              },
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
