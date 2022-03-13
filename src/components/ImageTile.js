import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const ImageTile = ({ id }) => {
  return (
    <Card
      sx={{ maxWidth: "98%", borderRadius: 0 }}
      className={"experience-image-content"}
    >
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        <CardMedia
          component="img"
          className="image-tile-card-media"
          image={`images/exp-${id}.jpg`}
          alt={"Illustration"}
        />
      </CardContent>
    </Card>
  );
};

export default ImageTile;
