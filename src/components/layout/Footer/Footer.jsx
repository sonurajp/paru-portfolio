import React from "react";
import { Box, Typography } from "@mui/material";
import FooterArrow from "../../../../public/assets/FooterArrow.png";
import RightOrange from "../../../../public/assets/RightOrange.svg";
import "./Footer.css";
const email = "parvathy.26@outlook.com";
const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

const Footer = () => (
  <Box
    sx={{
      background: "#F3F2EE",
      height: "460px",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Slide-in Image CTA */}
    <Box
      display="flex"
      alignItems={"center"}
      mt="150px"
      gap="45px"
      onClick={() => window.open(gmailLink, "_blank")}
      sx={{
        ".rightOrange": {
          display: "none",
        },
        "&:hover .rightOrange": {
          display: "block",
        },
        "&:hover .footerArrow": {
          display: "none", // optional if you want to hide first arrow
        },
      }}
    >
      <Typography
        fontSize={"160px"}
        sx={{
          color: "#010101",
          ml: "72px",
          "&:hover": { cursor: "pointer", color: "#ff5832" },
        }}
      >
        GET IN TOUCH
      </Typography>
      <img
        src={FooterArrow}
        onClick={() => window.open(gmailLink, "_blank")}
        className="footerArrow"
        style={{
          width: "115px",
          height: "94px",
        }}
      />
      <img
        src={RightOrange}
        onClick={() => window.open(gmailLink, "_blank")}
        className="rightOrange"
        style={{
          width: "115px",
          height: "94px",
        }}
      />
    </Box>

    <Box
      sx={{
        width: "100%",
        display: "flex",
        ml: "90px",
        mt: "-1%",
      }}
    >
      <Typography fontSize="14px">
        parvathy.26@outlook.com &nbsp;+91 9500485529
      </Typography>
      <Box ml={1} mt="-.2%">
        <Typography
          component="a"
          href="https://behance.net/"
          target="_blank"
          sx={{
            color: "#111",
            textDecoration: "none",
            marginRight: 2,
            fontSize: "14px",
            fontWeight: 500,
            "&:hover": { color: "#ff5832", cursor: "pointer" },
          }}
        >
          Behance
        </Typography>
        <Typography
          component="a"
          href="https://www.linkedin.com/in/parvathy-t-a-148a43104/"
          target="_blank"
          sx={{
            color: "#111",
            textDecoration: "none",
            marginRight: 2,
            fontSize: "14px",
            fontWeight: 500,
            "&:hover": { color: "#ff5832", cursor: "pointer" },
          }}
        >
          Linkedin
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "rgba(118, 118, 118, 1)",
          fontSize: "14px",
        }}
        ml="640px"
      >
        Designed by Parvathy T A
      </Typography>
    </Box>
  </Box>
);

export default Footer;
