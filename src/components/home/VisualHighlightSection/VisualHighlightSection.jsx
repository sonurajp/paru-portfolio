import { Box } from "@mui/material";
import useLazloadHook from "../../../hooks/useLazloadHook";
import { useRef } from "react";

const images = [
  "https://ik.imagekit.io/Gdragon/Portfolio/images%20footer/Mask%20group-3.png?updatedAt=1768590150029",
  "https://ik.imagekit.io/Gdragon/Portfolio/images%20footer/Mask%20group-1.png?updatedAt=1768590151328",
  "https://ik.imagekit.io/Gdragon/Portfolio/images%20footer/Mask%20group.png?updatedAt=1768751939150",
  "https://ik.imagekit.io/Gdragon/Portfolio/images%20footer/Mask%20group-3.png?updatedAt=1768590150029",
];

const VisualHighlightSection = ({}) => {
  const imgRef = useRef(null);

  const { loadImage } = useLazloadHook(imgRef);
  return (
    <Box
      ref={imgRef}
      // mt="127px"
      // mb="484px"
      sx={{ backgroundColor: "#F3F2EE" }}
      height={"2360px"}
    >
      <Box ml="80px" display={"flex"} flexWrap={"wrap"} gap="19px">
        {loadImage &&
          images.map((img, index) => (
            <Box
              mt={index === 0 || index === 1 ? "80px" : ""}
              component="img"
              key={index}
              src={img}
              alt="Visual Highlight"
              sx={{
                width: "631px",
                height: "722px",
                objectFit: "cover",
              }}
            />
          ))}
      </Box>
    </Box>
  );
};

export default VisualHighlightSection;
