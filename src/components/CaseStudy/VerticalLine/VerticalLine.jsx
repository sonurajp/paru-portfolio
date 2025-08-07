import React from "react";

const VerticalLine = ({ height }) => {
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
        top: "8%",
        transform: "translateX(-50%)",
      }}
    />
  );
};

export default VerticalLine;
