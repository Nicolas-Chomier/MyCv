import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

const LandingPagePhoto = ({ data }) => {
  const cardStyle = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
  };
  const cardContentStyle = { p: 0, "&:last-child": { pb: 0 } };
  const avatarSize = 480;
  const imagePath = data.generalInfos.idImage;
  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Avatar
          alt={imagePath}
          src={`images/${imagePath}.jpg`}
          sx={{
            width: avatarSize,
            height: avatarSize,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default LandingPagePhoto;
