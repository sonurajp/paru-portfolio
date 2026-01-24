import React from "react";
import ArchBackground from "../../ArchBackground/ArchBackground";
import { Typography, Box } from "@mui/material";
import PersonaDetails from "./components/PersonaDetails/PersonaDetails";
import { useCaseStudyContext } from "../../../pages/CaseStudy/store/CaseStudyProvider";
import PersonaCard from "./components/PersonaCard";

const RailwayDetails = () => {
  const {
    personaDetails: {
      persona1,
      persona2,
      thinkEmpathyData1,
      thinkEmpathyData2,
      thinkEmpathyData3,
      thinkEmpathyData4,
      thinkEmpathyData5,
      thinkEmpathyData6,
      thinkEmpathyData7,
      thinkEmpathyData8,
    },
  } = useCaseStudyContext();

  return (
    <>
      <ArchBackground height="7307px">
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
            right: "150px",

            display: "flex",
            flexDirection: "row-reverse",
            flexWrap: "wrap",
            gap: "24px",
            "@media (max-width:1280px)": {
              right: "0px",
              left: "120px",
              flexDirection: "row",
            },
          }}
        >
          {persona2.card.map((data, index) => {
            return <PersonaCard data={data} key={index} index={index} />;
          })}
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "3690px",
            left: "295px",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
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
            Think Empathy - lakshmi
          </Typography>
          <Box display={"flex"} flexWrap="wrap" gap="24px" mt="80px">
            {thinkEmpathyData1.map((data, index) => {
              return <PersonaCard data={data} key={index} index={index} />;
            })}
          </Box>
          <Box display={"flex"} flexWrap="wrap" gap="24px" mt="84px">
            {thinkEmpathyData2.map((data, index) => {
              return <PersonaCard data={data} key={index} index={index} />;
            })}
          </Box>
          <Box display={"flex"} flexWrap="wrap" gap="24px" mt="75px">
            {thinkEmpathyData3.map((data, index) => {
              return <PersonaCard data={data} key={index} index={index} />;
            })}
          </Box>
          <Box display={"flex"} flexWrap="wrap" gap="24px" mt="65px">
            {thinkEmpathyData4.map((data, index) => {
              return <PersonaCard data={data} key={index} index={index} />;
            })}
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "5570px",
            left: "295px",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
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
            Think Empathy - Akhil
          </Typography>
          <Box display={"flex"} flexWrap="wrap" gap="24px" mt="80px">
            {thinkEmpathyData5.map((data, index) => {
              return <PersonaCard data={data} key={index} index={index} />;
            })}
          </Box>
          <Box display={"flex"} flexWrap="wrap" gap="24px" mt="84px">
            {thinkEmpathyData6.map((data, index) => {
              return <PersonaCard data={data} key={index} index={index} />;
            })}
          </Box>
          <Box display={"flex"} flexWrap="wrap" gap="24px" mt="75px">
            {thinkEmpathyData7.map((data, index) => {
              return <PersonaCard data={data} key={index} index={index} />;
            })}
          </Box>
          <Box display={"flex"} flexWrap="wrap" gap="24px" mt="65px">
            {thinkEmpathyData8.map((data, index) => {
              return <PersonaCard data={data} key={index} index={index} />;
            })}
          </Box>
        </Box>
      </ArchBackground>
    </>
  );
};

export default RailwayDetails;
