import { Box, Typography } from "@mui/material";

const ResumeAbout = () => {
  return (
    <>
      <Box ml="158px" mt="38px">
        <Typography fontWeight={600} fontSize="32px" color="#010101">
          SENIOR UX/UI DESIGNER
        </Typography>
        <Typography
          fontWeight={400}
          fontSize="20px"
          color="#484848"
          whiteSpace="pre-wrap"
          mt="16px"
        >
          {`Creative and detail-oriented UX/UI Designer with a strong 
foundation in user-centered design, visual communication, and 
digital product strategy. Experienced in designing efficient websites,
applications, dashboards, and B2B products like the Metro Wholesale app,
with a focus on usability, accessibility, and business impact.`}
        </Typography>

        <Typography fontSize="32px" color="#010101" fontWeight="600" mt="54px">
          EXPERIENCE
        </Typography>
        <Typography
          fontSize="24px"
          color="#343434"
          fontWeight="600"
          mt="16px"
          fontStyle={"semibold"}
        >
          UX AND PRODUCT DESIGNER
        </Typography>
        <Box display={"flex"} gap="11px">
          <Typography
            fontSize="20px"
            color="#828282"
            fontWeight="500"
            whiteSpace={"pre-wrap"}
            sx={{
              fontFamily: "Inter, sans-serif",
              fontStyle: "italic",
            }}
          >
            {`Cartoon Mango Studios`}
          </Typography>
          <Box width="1px" height="15px" bgcolor="#343434" mt="8px" />
          <Typography
            fontSize="20px"
            color="#828282"
            fontWeight="500"
            whiteSpace={"pre-wrap"}
            sx={{
              fontFamily: "Inter, sans-serif",
              fontStyle: "italic",
            }}
          >
            {`2019 - 2024`}
          </Typography>
        </Box>

        <Box width="702px" height="1px" bgcolor="#000000" mt="48px" mb="50px" />
      </Box>
    </>
  );
};

export default ResumeAbout;
