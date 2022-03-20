import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";

const LandingPageChapterBall = ({ data, screenSize }) => {
  // Screen size implementation
  const widthLimit = screenSize.width >= 1024 ? true : false;
  // Component features
  const title1 = data.chapter.title1;
  const title2 = data.chapter.title2;
  const title2Bis = "Exps";
  const title3 = data.chapter.title3;
  const cardStyle = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
    maxWidth: "100%",
  };
  const cardContentStyle = { p: 0, "&:last-child": { pb: 0 } };
  const avatarSize = widthLimit ? 120 : 0.1 * screenSize.width + 28;
  const colorList = ["#FFDE26", "#EF8354", "#EF6F6C"];
  const buttonStyle = { p: 0 };
  const avatarTextSize = screenSize.width >= 768 ? 22 : 14;
  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={widthLimit ? 7 : 4}
        >
          <IconButton aria-label="anchor" href="#resume-div" sx={buttonStyle}>
            <Avatar
              sx={{
                width: avatarSize,
                height: avatarSize,
                bgcolor: colorList[0],
                color: "black",

                fontSize: avatarTextSize,
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
                color: "black",
                fontSize: avatarTextSize,
              }}
            >
              {widthLimit ? title2 : title2Bis}
            </Avatar>
          </IconButton>
          <IconButton aria-label="anchor" href="#skills-div" sx={buttonStyle}>
            <Avatar
              sx={{
                width: avatarSize,
                height: avatarSize,
                bgcolor: colorList[2],
                /* border: "0.1px solid black", */
                color: "black",
                fontSize: avatarTextSize,
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
