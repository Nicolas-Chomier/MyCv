import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const LandingPageIntro = ({ data, screenSize }) => {
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
  const cardStyle2 = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    maxWidth: "70%",
    borderRadius: 0,
  };
  const cardContentStyle = { p: 0, "&:last-child": { pb: 0 } };
  const title = data.intro.title;
  const subTitle = data.intro.subTitle;
  const text = data.intro.text;
  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Stack
          direction="column"
          justifyContent={widthLimit ? "flex-end" : "center"}
          alignItems={widthLimit ? "flex-start" : "center"}
          spacing={2}
        >
          <Typography
            gutterBottom
            variant="h1"
            component="div"
            sx={{
              fontSize: widthLimit ? 95 : 70,
              m: 0,
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{ fontSize: widthLimit ? 45 : 33, mb: 1, fontWeight: 400 }}
          >
            {subTitle}
          </Typography>
          <Card sx={cardStyle2}>
            <Typography
              variant="body"
              color="text"
              sx={{ fontSize: widthLimit ? 20 : 16 }}
            >
              {text}
            </Typography>
          </Card>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LandingPageIntro;
