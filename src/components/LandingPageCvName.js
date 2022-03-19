import React from "react";
import { Stack, Typography } from "@mui/material";
import ScienceTwoToneIcon from "@mui/icons-material/ScienceTwoTone";

const LandingPageCvName = ({ data }) => {
  //const gold = "#CCA43D";
  const carmin = "#a63a50";
  const name = data.generalInfos.name;
  const nickname = data.generalInfos.nickname;
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <ScienceTwoToneIcon fontSize="large" sx={{ fill: carmin }} />
        <Typography variant="h5" align="center" sx={{ pt: 1 }}>
          {nickname}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ pt: 1, fontWeight: "bold" }}
        >
          {name}
        </Typography>
      </Stack>
    </>
  );
};

export default LandingPageCvName;
