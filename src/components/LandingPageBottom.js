import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Stack, Typography } from "@mui/material";

const LandingPageBottom = ({ data, screenSize }) => {
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
  const botStyle = { fontSize: 12, fontWeight: 600, mx: 10 };
  const email = data.generalInfos.email;
  const phone = data.generalInfos.phone;
  const madeBy = data.generalInfos.made;
  const finish = data.generalInfos.finish;
  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Stack
          direction={widthLimit ? "row" : "column"}
          justifyContent={widthLimit ? "space-evenly" : "center"}
          alignItems="center"
          spacing={widthLimit ? 28 : 5}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
          >
            <PhoneIphoneIcon fontSize="medium" color="black" />
            <Typography
              variant="body"
              color="text"
              component="div"
              sx={botStyle}
            >
              {phone}
            </Typography>
          </Stack>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
          >
            <Typography
              variant="body"
              color="text"
              component="div"
              sx={botStyle}
            >
              {madeBy}
            </Typography>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ fontSize: 12, fontWeight: 600, m: 0, fontStyle: "italic" }}
            >
              {finish}
            </Typography>
          </Stack>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
          >
            <AlternateEmailIcon fontSize="medium" color="black" />
            <Typography
              variant="body"
              color="text"
              component="div"
              sx={botStyle}
            >
              {email}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LandingPageBottom;
