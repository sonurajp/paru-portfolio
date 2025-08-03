import React from "react";
import WorkGalleryArchBackground from "../components/WorkGalleryArchBackground/WorkGalleryArchBackground";
import { Box } from "@mui/material";
import CounterBox from "../components/CounterBox/CounterBox";
import SportsApplicationGallery3 from "../../../../assets/SportsApplicationGallery3.svg";
import WorkGalleryText from "../components/WorkGalleryText/WorkGalleryText";
const SportsApplicationGallery = () => {
  return (
    <WorkGalleryArchBackground height="4063px">
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
        <WorkGalleryText
          head="School Admin"
          content="Designed an intuitive admin dashboard for school administrators to efficiently manage teachers and students within their institution. The interface enables easy assignment of teachers to specific classes and organization of student groups, streamlining administrative tasks and enhancing user management."
          lineColor="#FF5832"
        />
        <Box display="flex" gap="12px" mt="32px" mb="125px" width="100%">
          {/* <CounterBox /> */}
          <img
            src={
              "https://ik.imagekit.io/Gdragon/Portfolio/Sports%20app/School%20admin%201.svg?updatedAt=1753627334803"
            }
          />
          <img
            src={
              "https://ik.imagekit.io/Gdragon/Portfolio/Sports%20app/School%20admin%202.svg?updatedAt=1753627335084"
            }
          />
        </Box>
        <WorkGalleryText
          head="Super Admin"
          content="Designed a centralized admin dashboard for efficient user management and compliance monitoring. Super Admins oversee other admins, ensuring security and platform integrity."
          lineColor="#FF5832"
        />
        <Box display="flex" gap="16px" width="100%" mt="32px" mb="240px">
          <img src={SportsApplicationGallery3} />
        </Box>
        <Box display="flex" width="102%" gap="14px" mb="16px">
          <CounterBox number="766" />
          <img
            src={
              "https://ik.imagekit.io/Gdragon/Portfolio/Sports%20app/Black%20bg%20image%201.svg?updatedAt=1753626663565"
            }
            style={{
              width: "753px",
              height: "600px",
              objectFit: "cover",
            }}
          />
        </Box>
        <img
          src={
            "https://ik.imagekit.io/Gdragon/Portfolio/Sports%20app/Black%20bg%20image%202.svg?updatedAt=1753627336653"
          }
        />
        <Box display="flex" gap="16px" width="100%" mt="16px">
          <img
            src={
              "https://ik.imagekit.io/Gdragon/Portfolio/Sports%20app/Black%20bg%20image%203.svg?updatedAt=1753626663934"
            }
          />
          <img
            src={
              "https://ik.imagekit.io/Gdragon/Portfolio/Sports%20app/Black%20bg%20image%204.svg?updatedAt=1753626663677"
            }
          />
        </Box>
      </Box>
    </WorkGalleryArchBackground>
  );
};

export default SportsApplicationGallery;
