import React from "react";

const VerticalLine = ({ height, top = 0 }) => {
  return (
    <hr
      style={{
        width: "4px",
        height,
        backgroundColor: "#FF5832",
        border: "none",
        margin: "0 auto",
        position: "absolute",
        left: "-5%",
        top: top,
        transform: "translateX(-50%)",
      }}
    />
  );
};

export default VerticalLine;
