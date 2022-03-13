import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
//import Button from "@mui/material/Button";

const ExperienceTile = ({ image, name, id }) => {
  return (
    <Card sx={{ maxWidth: "20%", borderRadius: 0 }} className={"cardtest"}>
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
                color: "black",
                top: 180,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {name}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ExperienceTile;
