import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Stack, Typography, Rating } from "@mui/material";

const LandingPageSkills = ({ data, number }) => {
  const cardStyle = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    maxWidth: "100%",
    borderRadius: 0,
  };
  const cardContentStyle = { p: 0, "&:last-child": { pb: 0 } };
  const skills = data.skills[number - 1];
  const title = skills[0];
  const mark = skills[1];
  const style = {
    fontSize: 25,
    m: 0,
    fontWeight: "bold",
  };

  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography component="div" variant="body" color="text" sx={style}>
            {title}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={mark}
            precision={0.5}
            readOnly
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LandingPageSkills;
