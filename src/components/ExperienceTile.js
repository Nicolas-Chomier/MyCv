import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
//import Button from "@mui/material/Button";

const ExperienceTile = ({ image, name, id }) => {
  return (
    <Card
      sx={{ maxWidth: "20%", borderRadius: 0 }}
      className={"exp-tile-landing-page"}
    >
      <div>
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <div style={{ position: "relative" }}>
            <Link to={`page-${id}`}>
              <CardMedia
                component="img"
                className="image-tile-card-media"
                image={`images/${image}`}
                alt={name}
              />
            </Link>
            <div
              style={{
                position: "absolute",
                color: "#F8F8F8",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Typography variant="h3" align="center">
                {name}
              </Typography>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ExperienceTile;
