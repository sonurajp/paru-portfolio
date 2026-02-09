import { Box, IconButton, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
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
            href="/ParvathyResume.pdf"
            download="Parvathy_Resume.pdf"
            // onClick={handleDownload}
            sx={{
              padding: 0,
              height: "40px",
              width: "40px",
              color: "black",
              "&:hover": {
                color: "#FF5832",
                opacity: 1,
                height: "40px",
                width: "40px",
              },
            }}
            aria-label="download"
          >
            <FileDownloadOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <Box width="870px" height="2px" bgcolor="#FF5832" mt="35px" mb="50px" />
    </Box>
  );
};

export default HeaderPart;
