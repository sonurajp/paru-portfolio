import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useWorkData } from "../WorkProvider/WorkProvider";

const ProjectShowcase = () => {
  const { id } = useParams();
  const workData = useWorkData();
  const data = workData.projectShowcaseData[id].summaryText;

  if (!data || !Array.isArray(data)) return null;

  return (
    <>
      {data.map((prjctData, index) => (
        <Box
          key={index}
          mt="247px"
          display="flex"
          mb="300px"
          justifyContent="flex-end"
        >
          <Box display="flex" gap="32px" mt="320px">
            <Box
              sx={{
                width: "5px",
                height: "56px",
                backgroundColor: "#FF5832",
              }}
            />
            <Box display="flex" flexDirection="column" gap="16px" width="395px">
              <Typography fontSize="20px" fontWeight={600} lineHeight="22.6px">
                {prjctData.head}
              </Typography>
              <Typography
                fontSize="15px"
                fontWeight={300}
                lineHeight="22.5px"
                whiteSpace="pre-line"
              >
                {prjctData.content}
              </Typography>
            </Box>
          </Box>
          <img
            src={prjctData.bannerImage}
            loading="lazy"
            alt="Project Banner"
            style={{
              height: "100%",
              width: prjctData.width,
              objectFit: "cover",
              marginRight: "30px",
              marginLeft: "235px",
            }}
          />
        </Box>
      ))}
    </>
  );
};

export default ProjectShowcase;
