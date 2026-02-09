import React from "react";
import { Box, Typography } from "@mui/material";
import FooterImage from "../../../assets/FooterImage.png";
import FooterImageHover from "../../../assets/FooterImageHover.png"; // Adjust the import path as necessary
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
    <Typography
      fontSize={"160px"}
      mt="150px"
      sx={{
        color: "#010101",
        ml: "72px",
        "&:hover": { cursor: "pointer", color: "#ff5832" },
      }}
    >
      GET IN TOUCH
    </Typography>
    {/* <img
      src={FooterImageHover}
      onClick={() => window.open(gmailLink, "_blank")}
      style={{
        // marginBottom: "79px",
        marginTop: "112px",
        marginBottom: "54px",
        width: "90%",
      }}
    /> */}
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
        <a
          href="https://behance.net/"
          target="_blank"
          style={{
            color: "#111",
            textDecoration: "none",
            marginRight: 16,
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Behance
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          style={{
            color: "#111",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Linkedin
        </a>
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
