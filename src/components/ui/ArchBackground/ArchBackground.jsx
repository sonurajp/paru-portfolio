import React from "react";
import Arch from "../../../../public/assets/Arch.svg";

const ArchBackground = ({ children, height = "100%" }) => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={Arch}
        style={{
          height,
          width: "100vw",
          objectFit: "cover", // Use objectFit instead of background properties
          objectPosition: "top",
        }}
      />
      {children}
    </div>
  );
};

export default ArchBackground;
