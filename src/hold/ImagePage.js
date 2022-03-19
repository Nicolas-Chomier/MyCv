import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const ImagePage = ({ id }) => {
  return (
    <Card
      sx={{ maxWidth: "98%", borderRadius: 0 }}
      className={"experience-image-page"}
    >
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        <CardMedia
          component="img"
          className="image-page-card-media"
          image={`images/exp-${id}.jpg`}
          alt={"Illustration"}
        />
      </CardContent>
    </Card>
  );
};

export default ImagePage;
