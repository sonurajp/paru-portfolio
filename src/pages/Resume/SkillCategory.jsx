import React from "react";
import { Box, Link, Typography } from "@mui/material";

const SkillCategory = ({ title, items, type }) => {
  return (
    <Box sx={{ marginBottom: "60px" }}>
      <Typography
        variant="h4"
        sx={{
          color: "#010101",
          fontWeight: 600,
          fontSize: "32px",
          textTransform: "uppercase",
          marginBottom: "24px",
          letterSpacing: "0.02em",
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {title.toUpperCase() === "PORTFOLIO" && (
              <Link
                href="https://behance.net/"
                target="_blank"
                underline="none"
                sx={{
                  color: "#484848",
                  fontWeight: 400,
                  fontSize: "20px",
                  "&:hover": {
                    color: "#ff5832",
                  },
                }}
              >
                {item}
              </Link>
            )}
            {title.toUpperCase() !== "PORTFOLIO" && (
              <Typography
                sx={{
                  color: "#484848",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: 1.5,
                }}
              >
                {item}
              </Typography>
            )}

            {/* Corrected logic: wrap in {} and use string comparison */}
            {type === "edu" && index === 0 && (
              <Typography
                whiteSpace="pre-wrap"
                color="#828282"
                fontSize="16px"
                sx={{ mb: 1 }}
              >
                {`DesignBoat Studios, Bangalore\nJune 2019 - November 2019`}
              </Typography>
            )}

            {type === "edu" && index === 1 && (
              <Typography whiteSpace="pre-wrap" color="#828282" fontSize="16px">
                {`Madras Christian College, Chennai\nJuly 2017- April 2019`}
              </Typography>
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default SkillCategory;
