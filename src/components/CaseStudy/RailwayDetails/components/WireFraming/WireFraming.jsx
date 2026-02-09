import { Box, Typography } from "@mui/material";
import React from "react";
import VerticalLine from "../../../../ui/VerticalLine/VerticalLine";
import LazyImage from "../../../../ui/LazyImage/LazyImage";

const WireFraming = () => {
  return (
    <Box ml="240px" mt="119px">
      <Typography fontWeight={600} fontSize="40px" mb="88px">
        Wireframing...
      </Typography>

      {/* AUTHENTICATION */}
      <Box position="relative" ml="5%">
        <VerticalLine height="56px" top="8%" />
        <Typography fontWeight={600} fontSize="20px">
          Authentication
        </Typography>
        <Typography maxWidth="587px" fontWeight={300} mt="16px">
          Simple yet important to verify users with mobile number and
          minimalistic captcha. Selection and register process for foreigners
          are important.
        </Typography>
      </Box>

      <Box mt="52px" display="flex" flexWrap="wrap" gap="33px" width="90%">
        {[
          "Frame%2026.svg",
          "Frame%2027.svg",
          "Frame%2029.svg",
          "Frame%2030.svg",
          "Frame%2031.svg",
          "Frame%2032.svg",
        ].map((img, i) => (
          <LazyImage
            key={i}
            src={`https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/${img}`}
            width="290px"
            height="570px"
          />
        ))}
      </Box>

      {/* HOMEPAGE */}
      <Box position="relative" mt="263px" ml="5%">
        <VerticalLine height="56px" />
        <Typography fontWeight={600} fontSize="20px">
          Homepage
        </Typography>
        <Typography maxWidth="587px" fontWeight={300} mt="16px">
          First time and regular user homepages define how customizable it is to
          help users feel home.
        </Typography>
      </Box>

      <Box mt="52px" display="flex" flexWrap="wrap" gap="33px" width="90%">
        <LazyImage
          src="https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/Frame%2028.svg"
          width="290px"
          height="1336px"
        />
        <LazyImage
          src="https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/Frame%20103.svg"
          width="290px"
          height="1486px"
        />
      </Box>

      {/* SEARCH TRAIN */}
      <Box position="relative" mt="168px" ml="5%">
        <VerticalLine height="56px" />
        <Typography fontWeight={600} fontSize="20px">
          Search Train
        </Typography>
        <Typography maxWidth="587px" fontWeight={300} mt="16px">
          Search experience optimized for first-time and frequent users.
        </Typography>
      </Box>

      <Box mt="52px" display="flex" flexWrap="wrap" gap="74px" width="90%">
        {["33", "34", "35", "37", "38"].map((id) => (
          <LazyImage
            key={id}
            src={`https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/Frame%20${id}.svg`}
            width="290px"
            height="655px"
          />
        ))}
      </Box>

      {/* SELECTION PROCESS */}
      <Box position="relative" mt="183px" ml="5%">
        <VerticalLine height="56px" />
        <Typography fontWeight={600} fontSize="20px">
          Selection process
        </Typography>
        <Typography maxWidth="587px" fontWeight={300} mt="16px">
          Step-by-step selection flow designed to minimize cognitive load.
        </Typography>
      </Box>

      <Box
        mt="52px"
        display="flex"
        flexWrap="wrap"
        gap="75px"
        width="90%"
        mb="472px"
      >
        {["113", "105", "114", "105", "106"].map((id, i) => (
          <LazyImage
            key={i}
            src={`https://ik.imagekit.io/Gdragon/Portfolio/IRCTC/Frame%20${id}.svg`}
            width="290px"
            height="570px"
          />
        ))}
      </Box>
    </Box>
  );
};

export default WireFraming;
