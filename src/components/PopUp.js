import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const PopUp = () => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
        >
          <Typography gutterBottom variant="h4" component="div">
            Nicolas CHOMIER
          </Typography>
          <Avatar
            alt="Nicolas Chomier"
            src="images/moi.jpg"
            sx={{ width: 80, height: 80 }}
          />
        </Stack>
        <Typography gutterBottom variant="h6" component="div">
          Ingénieur Généraliste E.I CESI
        </Typography>
        <Typography variant="body1" color="text.secondary">
          nicolaschomier.pro@gmail.com
        </Typography>
        <Typography variant="body1" color="text.secondary">
          07-61-77-78-65
        </Typography>
        <Typography variant="body1" color="text.secondary">
          35 ans
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Permis B + Véhicule
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lyon
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PopUp;
