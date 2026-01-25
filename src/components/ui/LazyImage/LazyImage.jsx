import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

const LazyImage = ({ src, width, height, alt = "", rootMargin = "200px" }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <Box
      ref={imgRef}
      component="img"
      src={isVisible ? src : undefined}
      alt={alt}
      width={width}
      height={height}
      sx={{
        backgroundColor: "#f2f2f2",
        borderRadius: "8px",
        objectFit: "cover",
      }}
    />
  );
};

export default LazyImage;
