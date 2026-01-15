import { Box } from "@mui/material";

const images = [
  "https://ik.imagekit.io/Gdragon/Portfolio/Homepage/Mask%20group-1.jpg?updatedAt=1753627738868",
  "https://ik.imagekit.io/Gdragon/Portfolio/Homepage/Mask%20group.jpg?updatedAt=1753627739215",
  "https://ik.imagekit.io/Gdragon/Portfolio/Homepage/Group%209895.jpg?updatedAt=1753627738810",
  "https://ik.imagekit.io/Gdragon/Portfolio/Homepage/Group%209841.jpg?updatedAt=1753627738822",
];

const VisualHighlightSection = ({}) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} ml="80px" gap="19px" mt="127px">
      {images.map((img, index) => (
        <Box
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
  );
};

export default VisualHighlightSection;
