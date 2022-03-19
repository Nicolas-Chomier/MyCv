import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Stack, Typography } from "@mui/material";

const LandingPageBottom = ({ data }) => {
  const cardStyle = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    maxWidth: "100%",
    borderRadius: 0,
  };
  const cardContentStyle = { p: 0, "&:last-child": { pb: 0 } };
  const botStyle = { fontSize: 12, fontWeight: 200, m: 0 };
  const email = data.generalInfos.email;
  const phone = data.generalInfos.phone;
  const madeBy = data.generalInfos.made;
  const finish = data.generalInfos.finish;
  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-end"
          spacing={28}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
          >
            <PhoneIphoneIcon fontSize="medium" color="primary" />
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
            <AlternateEmailIcon fontSize="medium" color="primary" />
            <Typography
              variant="body"
              color="text"
              component="div"
              sx={botStyle}
            >
              {email}
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
              sx={{ fontSize: 12, fontWeight: 200, m: 0, fontStyle: "italic" }}
            >
              {finish}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LandingPageBottom;
