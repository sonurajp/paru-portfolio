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
              // Optional: Ensure the button doesn't shift the text alignment
              "&:hover": { backgroundColor: "transparent", opacity: 0.7 },
            }}
            aria-label="download"
          >
            <img src={DownloadImage} alt="metro" height="14px" width="12.6px" />
          </IconButton>
        </Box>
      </Box>
      <Box width="870px" height="2px" bgcolor="#FF5832" mt="35px" mb="50px" />
    </Box>
  );
};

export default HeaderPart;
