import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useWorkData } from "../WorkProvider/WorkProvider";
import "./Summary.css";

const Summary = () => {
  const { id } = useParams();
  const workData = useWorkData();
  const data = workData.summaryData[id];
  console.log({ data });

  const {
    summaryText: [aboutClient, responsibility, overview],
  } = data;

  return (
    <Box mt="280px" width="90vw" maxWidth="1200px" ml="0">
      <div className="summary-grid">
        {/* About Client - spans 2 rows */}
        <div className="about-client">
          <Typography className="head-typo">{aboutClient.head}</Typography>
          <Typography fontSize="15px" className="content-typo">
            {aboutClient.content}
          </Typography>
        </div>

        {/* Area of Responsibility */}
        <div className="responsibility">
          <Typography className="head-typo">{responsibility.head}</Typography>
          <Typography className="content-typo">
            {responsibility.content}
          </Typography>
        </div>

        {/* Work Years */}
        <div className="work-years">
          <Typography className="head-typo">
            {responsibility.headtwo}
          </Typography>
          <Typography className="content-typo">
            {responsibility.contentTwo}
          </Typography>
        </div>

        {/* Project Overview */}
        <div className="project-overview">
          <Typography className="head-typo">{overview.head}</Typography>
          <Typography className="content-typo">{overview.content}</Typography>
        </div>

        {/* Industry */}
        <div className="industry">
          <Typography className="head-typo">{overview.headtwo}</Typography>
          <Typography className="content-typo">
            {overview.contentTwo}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Summary;
