import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Stack, Typography } from "@mui/material";

const LandingPageResume = ({ data, number, screenSize }) => {
  // Screen size implementation
  const widthLimit = screenSize.width >= 1024 ? true : false;
  // Component features
  const cardStyle = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    maxWidth: "100%",
    borderRadius: 0,
  };
  const cardContentStyle = { p: 0, "&:last-child": { pb: 0 } };
  const year = data.resume[`row${number}`][0];
  const text = data.resume[`row${number}`][1];
  const decorator = " / ";
  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              fontSize: widthLimit ? 45 : 30,
              fontWeight: 800,
              m: 0,
            }}
          >
            {year}
          </Typography>
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: widthLimit ? 50 : 35, fontWeight: 800 }}
          >
            {decorator}
          </Typography>
          <Typography variant="body" color="text" sx={{ fontSize: 22 }}>
            {text}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LandingPageResume;
