import React from "react";
import { Box, Typography } from "@mui/material";
import FooterImage from "../../../assets/FooterImage.png";
import FooterImageHover from "../../../assets/FooterImageHover.png"; // Adjust the import path as necessary
import "./Footer.css";
const email = "sonurajp49@gmail.com";
const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

const Footer = () => (
  <Box
    sx={{
      background: "#F3F2EE",
      height: "447px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {/* Slide-in Image CTA */}

    <img
      src={FooterImage}
      className="footer-image"
      onMouseEnter={(e) => {
        e.currentTarget.src = FooterImageHover;
        e.currentTarget.classList.add("footer-image-slide");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.src = FooterImage;
        e.currentTarget.classList.remove("footer-image-slide");
      }}
      onClick={() => window.open(gmailLink, "_blank")}
      style={{
        marginBottom: "79px",
        marginTop: "95px",
        // marginLeft: "80px",
        width: "90%",
      }}
    />
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
      ml="140px"
    >
      <Typography fontSize="14px" mr="198px">
        parvathy.26@outlook.com &nbsp;+91 9500485529
      </Typography>
      <Box mr="338px">
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
      <Typography sx={{ color: "rgba(118, 118, 118, 1)", fontSize: "14px" }}>
        Designed by Parvathy T A
      </Typography>
    </Box>
  </Box>
);

export default Footer;
