import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Stack, Typography, Avatar } from "@mui/material";

const LandingPageExperience = ({ data, number }) => {
  const cardStyle = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    maxWidth: "90%",
    borderRadius: 0,
  };
  const cardContentStyle = { p: 0, "&:last-child": { pb: 0 } };
  const companyName = data.jobExp[`experience${number}`].company;
  const titleJob = data.jobExp[`experience${number}`].job;
  const intro = data.jobExp[`experience${number}`].intro;
  const description = data.jobExp[`experience${number}`].description;
  const avatarSize = 300;

  return (
    <Card sx={cardStyle}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={10}
      >
        <CardContent sx={cardContentStyle}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{ fontSize: 25, fontWeight: 800, m: 0, color: "#2b3a67" }}
            >
              {companyName}
            </Typography>
            <Typography component="div" sx={{ fontSize: 18, fontWeight: 800 }}>
              {titleJob}
            </Typography>
            <Typography
              component="div"
              variant="body"
              color="text"
              sx={{ fontSize: 15, fontStyle: "italic" }}
            >
              {intro}
            </Typography>
            <Typography
              component="div"
              variant="body"
              color="text"
              sx={{ fontSize: 15 }}
            >
              {description}
            </Typography>
          </Stack>
        </CardContent>
        <CardContent sx={cardContentStyle}>
          <Avatar
            alt={"imagePath"}
            src={`images/exp-${number}.jpg`}
            variant="rounded"
            sx={{
              width: avatarSize,
              height: avatarSize,
              border: "0.1px solid grey",
            }}
          />
        </CardContent>
      </Stack>
    </Card>
  );
};

export default LandingPageExperience;
