import { Box, Typography } from "@mui/material";
import React from "react";
import { useCaseStudyContext } from "../../../pages/CaseStudy/store/CaseStudyProvider";
import { useParams } from "react-router-dom";
import VerticalLine from "../VerticalLine/VerticalLine";
import SummaryCard from "./components/SummaryCard/SummaryCard";
const Summary = () => {
  const { id } = useParams();
  const workData = useCaseStudyContext();
  const { preTitle, title, postTitle, summaryCard } =
    workData?.summary[id] || {};

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb="100px"
        mt={id === "paradox-case-study" ? "257px" : "127px"}
        height="800px"
      >
        <Box maxWidth={"60.1875rem"} textAlign="center">
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              color: "#444444",
              mb: "47px",
            }}
          >
            {preTitle}
          </Typography>
          <Typography
            sx={{
              color: "#010101",
              fontSize: "2.5rem",
              fontWeight: 600,
              lineHeight: "50px",
              mb: "47px",
              position: "relative",
              display: "inline-block",
            }}
          >
            <VerticalLine
              height={id === "paradox-case-study" ? "130px" : "80px"}
            />
            {title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
              color: "#444444",
              width: "60.1875rem",
            }}
          >
            {postTitle}
          </Typography>
        </Box>
      </Box>

      {id === "railway-case-study" && (
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "40px",
            mt: "164px",
            color: "#010101",
            ml: "220px",
          }}
        >
          WHY IRCTC?
        </Typography>
      )}
      <Box
        display="flex"
        gap="22px"
        flexWrap="wrap"
        mt={id === "railway-case-study" ? "56px" : "100px"}
        ml="220px"
        maxWidth="60rem"
      >
        {summaryCard?.map((card, index) => (
          <SummaryCard
            key={index}
            cardTitle={card.cardTitle}
            cardDescription={card.cardDescription}
            height="22rem"
            width="19.0625rem"
            mt="62px"
            ml="40px"
          />
        ))}
      </Box>
    </>
  );
};

export default Summary;
