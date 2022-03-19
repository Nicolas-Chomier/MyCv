import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const LandingPageIntro = ({ data }) => {
  const cardStyle = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    maxWidth: "100%",
    borderRadius: 0,
  };
  const cardContentStyle = { p: 0, "&:last-child": { pb: 0 } };
  const title = data.intro.title;
  const subTitle = data.intro.subTitle;
  const text = data.intro.text;
  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Typography
          gutterBottom
          variant="h1"
          component="div"
          sx={{
            fontSize: 95,
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
          sx={{ fontSize: 45, mb: 1, fontWeight: 400 }}
        >
          {subTitle}
        </Typography>
        <Typography variant="body" color="text" sx={{ fontSize: 20 }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LandingPageIntro;
