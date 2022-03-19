import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";

const LandingPageChapterBall = ({ data }) => {
  const title1 = data.chapter.title1;
  const title2 = data.chapter.title2;
  const title3 = data.chapter.title3;
  const cardStyle = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
    maxWidth: "100%",
  };
  const cardContentStyle = { p: 0, "&:last-child": { pb: 0 } };
  const avatarSize = 118;
  const colorList = ["#fffd82", "#2b3a67", "#ff9b71"];
  const buttonStyle = { p: 0 };
  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={7}
        >
          <IconButton aria-label="anchor" href="#resume-div" sx={buttonStyle}>
            <Avatar
              sx={{
                width: avatarSize,
                height: avatarSize,
                bgcolor: colorList[0],
                color: "black",
                border: "0.1px solid black",
              }}
            >
              {title1}
            </Avatar>
          </IconButton>
          <IconButton
            aria-label="anchor"
            href="#experience-div"
            sx={buttonStyle}
          >
            <Avatar
              sx={{
                width: avatarSize,
                height: avatarSize,
                bgcolor: colorList[1],
                border: "0.1px solid black",
              }}
            >
              {title2}
            </Avatar>
          </IconButton>
          <IconButton aria-label="anchor" href="#skills-div" sx={buttonStyle}>
            <Avatar
              sx={{
                width: avatarSize,
                height: avatarSize,
                bgcolor: colorList[2],
                border: "0.1px solid black",
                color: "black",
              }}
            >
              {title3}
            </Avatar>
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LandingPageChapterBall;
