import { Box, Typography } from "@mui/material";
import React from "react";
import RebuildWholeSaleWorkGalleryImage1 from "../../../../assets/RebuildWholeSaleWorkGalleryImage1.svg";
import RebuildWholeSaleWorkGalleryImage2 from "../../../../assets/RebuildWholeSaleWorkGalleryImage2.svg";
import RebuildWholeSaleWorkGalleryImage3 from "../../../../assets/RebuildWholeSaleWorkGalleryImage3.svg";
import WorkGalleryArchBackground from "../components/WorkGalleryArchBackground/WorkGalleryArchBackground";
import WorkGalleryText from "../components/WorkGalleryText/WorkGalleryText";
const RebuildWholeSaleWorkGallery = () => {
  return (
    <WorkGalleryArchBackground>
      <Box
        sx={{
          position: "absolute",
          top: "289px",
          left: "124px",
          width: "1160px",
        }}
      >
        <WorkGalleryText
          lineColor="linear-gradient(45deg, #3583FA, #34B5FA)"
          head="Buy later"
          content="  Designing the checkout screen was complex, needing a clear layout for
          delivery details, payment options, offers, and coupons without
          scrolling. It was vital to prominently feature discounts, METRO
          Wallet, and payment offers to maximize user engagement."
        />
        <Box display="flex" gap="17px" mt="32px" mb="24px">
          <img src={RebuildWholeSaleWorkGalleryImage1} />
          <img src={RebuildWholeSaleWorkGalleryImage2} />
        </Box>
        <img src={RebuildWholeSaleWorkGalleryImage3} />
      </Box>
    </WorkGalleryArchBackground>
  );
};

export default RebuildWholeSaleWorkGallery;
