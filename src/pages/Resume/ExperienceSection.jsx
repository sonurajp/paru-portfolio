import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
// import CircleIcon from "@mui/icons-material/Circle";

const ExperienceSection = ({ heading, subHeading, points }) => {
  return (
    <Box
      sx={{
        textAlign: "left",
        marginLeft: "156px",
        marginTop: "40px",
        marginBottom: heading.toUpperCase() === "OTHER PROJECTS:" ? "10%" : 0,
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          fontSize: "20px",
          textTransform: "uppercase",
          color: "#010101", // Changed from background to color based on typical UI patterns
          fontStyle: "normal", // "Bold" is a weight, not a style, setting to normal
        }}
      >
        {heading}
      </Typography>

      {/* Sub Heading (Years) */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 400,
          fontSize: "20px",
          color: "#484848",
          marginTop: "8px",
        }}
      >
        {subHeading}
      </Typography>

      {/* List of Contents */}
      <List sx={{ marginTop: "28px", padding: 0 }}>
        {points.map((point, index) => (
          <ListItem
            key={index}
            disableGutters
            sx={{
              alignItems: "flex-start",
              marginBottom: "20px", // Spacing between points
              "&:last-child": { marginBottom: 0 },
            }}
          >
            <Box
              sx={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#979797",
                marginTop: "12px", // Aligns bullet with the first line of text
                marginRight: "15px",
                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "20px",
                whiteSpace: "pre-wrap",
              }}
            >
              {point.segments.map((part, i) => (
                <Box
                  component="span"
                  key={i}
                  sx={{
                    color: part.highlight ? "#010101" : "#979797",
                  }}
                >
                  {part.text}
                </Box>
              ))}
            </Typography>
          </ListItem>
        ))}
      </List>
      {heading.toUpperCase() !== "OTHER PROJECTS:" && (
        <Box
          width="702px"
          height="1px"
          bgcolor="#000000"
          mt="48px"
          sx={{ opacity: "10%" }}
          mb={"8%"}
        />
      )}
    </Box>
  );
};

export default ExperienceSection;
