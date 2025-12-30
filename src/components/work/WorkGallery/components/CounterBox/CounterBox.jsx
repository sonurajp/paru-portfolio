import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

const CounterBox = ({ number = 807, label = "Screens", duration = 3000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.3, // Adjust as needed
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      let start = 0;
      const increment = number / (duration / 16); // ~60fps
      const counter = setInterval(() => {
        start += increment;
        if (start >= number) {
          clearInterval(counter);
          setCount(number);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, number, duration]);

  return (
    <Box
      ref={ref}
      sx={{
        width: "426px",
        height: "550px",
        backgroundColor: "#000000",
        borderRadius: "20px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "24px",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: "80px",
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        {count}
        <Typography
          component="span"
          sx={{ fontSize: "16px", fontWeight: "normal", marginLeft: "8px" }}
        >
          {label}
        </Typography>
      </Typography>
    </Box>
  );
};

export default CounterBox;
