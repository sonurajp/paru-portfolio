import React from "react";
import ArchBackground from "../../../ui/ArchBackground/ArchBackground";
import { Box } from "@mui/material";
import CounterBox from "../components/CounterBox/CounterBox";

import SocialPlatformGalleryImage4 from "../../../../assets/SocialPlatformGalleryImage4.svg";
import SocialPlatformGalleryImage5 from "../../../../assets/SocialPlatformGalleryImage5.svg";

const SocialPlatformGallery = () => {
  return (
    <ArchBackground height="2962px">
      <Box
        sx={{
          position: "absolute",
          top: "340px",
          left: "124px",
          width: "1160px",
          "@media (max-width:1280px)": {
            left: "40px",
          },
        }}
      >
        <Box display="flex" gap="12px" mb="16px" width="100%">
          <CounterBox />
          <img src="https://ik.imagekit.io/Gdragon/Portfolio/Social%20media%20for%20students/Image%201.svg?updatedAt=1753626681620" />
        </Box>
        <Box display="flex" gap="16px" width="100%" flexDirection="column">
          <img src="https://ik.imagekit.io/Gdragon/Portfolio/Social%20media%20for%20students/Image%202.svg?updatedAt=1753627087078" />
        </Box>
        <Box display="flex" width="100%" gap="12px" mt="17px">
          <img
            src="https://ik.imagekit.io/Gdragon/Portfolio/Social%20media%20for%20students/Image%203.svg?updatedAt=1753626682162"
            style={{
              width: "753px",
              height: "600px",
            }}
          />
          <img
            src={SocialPlatformGalleryImage4}
            style={{
              width: "426px",
              height: "650px",
              objectFit: "cover",
            }}
          />
        </Box>
        <img src={SocialPlatformGalleryImage5} />
      </Box>
    </ArchBackground>
  );
};

export default SocialPlatformGallery;
