import React from "react";
import ArchBackground from "../../ArchBackground/ArchBackground";
import { Typography, Box } from "@mui/material";
import PersonaDetails from "./PersonaDetails/PersonaDetails";
import { useCaseStudyContext } from "../../../pages/CaseStudy/store/CaseStudyProvider";
import PersonaCard from "./PersonaCard/PersonaCard";

const RailwayDetails = () => {
  const {
    personaDetails: { persona1, persona2 },
  } = useCaseStudyContext();

  return (
    <ArchBackground height="6207px">
      <Box
        display={"flex"}
        sx={{
          position: "absolute",
          top: "272px",
          left: "295px",
          maxWidth: "100%",
          "@media (max-width:1280px)": {
            left: "130px",
          },
        }}
      >
        <Typography
          fontWeight={600}
          fontSize={"48px"}
          lineHeight={"72px"}
          color="#FAFAFA"
        >
          Know your personas
        </Typography>
      </Box>
      <Box
        display={"flex"}
        sx={{
          position: "absolute",
          top: "521px",
          left: "295px",
          maxWidth: "100%",
          "@media (max-width:1280px)": {
            left: "130px",
          },
        }}
      >
        <PersonaDetails data={persona1} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "885px",
          left: "295px",
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          "@media (max-width:1280px)": {
            left: "130px",
          },
        }}
      >
        {persona1.card.map((data, index) => {
          return <PersonaCard data={data} key={index} index={index} />;
        })}
      </Box>
      <Box
        display={"flex"}
        sx={{
          position: "absolute",
          top: "2139px",
          left: "295px",
          "@media (max-width:1280px)": {
            left: "130px",
          },
        }}
      >
        <PersonaDetails
          data={persona2}
          color="#E6E6E6"
          fontSize="20px"
          ml="92px"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "2529px",
          right: "333px",
          display: "flex",
          flexDirection: "row-reverse",
          flexWrap: "wrap",
          gap: "24px",
          "@media (max-width:1280px)": {
            left: "130px",
          },
        }}
      >
        {persona2.card.map((data, index) => {
          return <PersonaCard data={data} key={index} index={index} />;
        })}
      </Box>
    </ArchBackground>
  );
};

export default RailwayDetails;
