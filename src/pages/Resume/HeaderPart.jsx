import { Box, IconButton, Typography } from "@mui/material";
import DownloadImage from "../../assets/DownloadImage.png";
const HeaderPart = () => {
  return (
    <Box>
      <Box ml="158px" mt="130px">
        <Box display="flex" alignItems="baseline" gap="1">
          <Typography
            color="#010101"
            fontSize="72px"
            fontWeight="900"
            mr="24px"
          >
            PARVATHY T A
          </Typography>
          <IconButton
            // onClick={handleDownload}
            sx={{
              padding: 0,
              height: "40px",
              width: "40px",
              // Optional: Ensure the button doesn't shift the text alignment
              "&:hover": {
                backgroundColor: "#fa9f03",
                opacity: 0.7,
                height: "40px",
                width: "40px",
              },
            }}
            aria-label="download"
          >
            <img src={DownloadImage} alt="metro" />
          </IconButton>
        </Box>
      </Box>
      <Box width="870px" height="2px" bgcolor="#FF5832" mt="35px" mb="50px" />
    </Box>
  );
};

export default HeaderPart;
