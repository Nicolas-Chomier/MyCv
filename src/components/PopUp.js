import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const PopUp = ({ data }) => {
  const name = data.generalInfos.name;
  const nickname = data.generalInfos.nickname;
  const fullName = nickname + " " + name;
  const type = data.generalInfos.type;
  const email = data.generalInfos.email;
  const phone = data.generalInfos.phone;
  const age = data.generalInfos.age;
  const city = data.generalInfos.city;
  const driveInfo = data.generalInfos.driveInfo;
  const imagePath = data.generalInfos.idImage;
  //const gold = "#CCA43D";
  const carmin = "#a63a50";

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
        >
          <Typography gutterBottom variant="h4" component="div">
            {fullName}
          </Typography>
          <Avatar
            alt={imagePath}
            src={`images/${imagePath}.jpg`}
            sx={{ width: 80, height: 80 }}
          />
        </Stack>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: carmin }}
        >
          {type}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {phone}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {age}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {city}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {driveInfo}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PopUp;
