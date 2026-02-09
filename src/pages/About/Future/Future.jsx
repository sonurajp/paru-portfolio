import React from "react";
import { useAbout } from "../store/AboutProvider";
import "./Future.css";
const Future = () => {
  const aboutData = useAbout();
  const data = aboutData?.future;
  return (
    <div className="future-div">
      {Object.entries(data).map(([key, value]) => (
        <>
          <div key={key} className="future-heading">
            {key}
          </div>
          <div className="future-content-typo">{value}</div>
        </>
      ))}
    </div>
  );
};
export default Future;
