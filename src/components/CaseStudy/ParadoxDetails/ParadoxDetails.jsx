import React from "react";
import ArchBackground from "../../ui/ArchBackground/ArchBackground";
import { Box, Typography } from "@mui/material";
import ParadoxDetailsCard from "./components/ParadoxDetailsCard/ParadoxDetailsCard";
import { useParams } from "react-router-dom";
import { useCaseStudyContext } from "../../../pages/CaseStudy/store/CaseStudyProvider";
import ParadoxIdeaCard from "./components/ParadoxIdeaCard/ParadoxIdeaCard";

const ParadoxDetails = () => {
  const { id } = useParams();
  const workData = useCaseStudyContext().paradoxDetails;
  const ideaData = useCaseStudyContext().ideaBox;
  return (
    <ArchBackground height="6207px">
      {workData.map((data, index) => {
        return (
          <Box
            display={"flex"}
            sx={{
              position: "absolute",
              top: data.top,
              left: "130px",
              maxWidth: "100%",
            }}
          >
            <ParadoxDetailsCard data={data} key={index} />
          </Box>
        );
      })}
      {workData.map((data, index) => {
        return (
          <Box
            component={"img"}
            src={data.img}
            alt="AirBnB"
            width="675px"
            height="765px"
            sx={{
              position: "absolute",
              top: data.imgTop,
              left: "735px",
              maxWidth: "100%",
              "@media (max-width:1280px)": {
                height: "645px",
                width: "455px",
              },
            }}
          />
        );
      })}
      <Box position={"absolute"} top="5185px" left="237px">
        <Typography
          fontSize={"48px"}
          fontWeight={600}
          color="#FAFAFA"
          width="628px"
        >
          And several other theories support this idea:
        </Typography>
      </Box>
      <Box
        position={"absolute"}
        display={"flex"}
        left={"240px"}
        flexWrap={"wrap"}
        gap="24px"
        top="5453px"
        width={"963px"}
      >
        {ideaData.map((data, index) => {
          return <ParadoxIdeaCard data={data} key={index} />;
        })}
      </Box>
    </ArchBackground>
  );
};

export default ParadoxDetails;
