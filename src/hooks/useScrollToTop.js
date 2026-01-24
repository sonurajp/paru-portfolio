import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // use "smooth" if you want animation
    });
  }, []);
};

export default useScrollToTop;
