import React, { useEffect, useState } from "react";

const useLazloadHook = (ref) => {
  const [loadImage, setLoadImage] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadImage(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // preload slightly before visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { loadImage };
};

export default useLazloadHook;
