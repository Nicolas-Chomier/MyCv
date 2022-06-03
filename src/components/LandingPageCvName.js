import React from "react";
import { Stack, Typography, Tooltip } from "@mui/material";
import ScienceTwoToneIcon from "@mui/icons-material/ScienceTwoTone";

const LandingPageCvName = ({ data }) => {
  //const gold = "#CCA43D";
  //const carmin = "#a63a50";
  //const red = "#EF8354";
  const black = "#000000";
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
        <Tooltip title="V2.3">
          <ScienceTwoToneIcon sx={{ fill: black, fontSize: 30 }} />
        </Tooltip>
        <Typography variant="h5" align="center" sx={{ pt: 0 }}>
          {nickname}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ pt: 0, fontWeight: "bold" }}
        >
          {name}
        </Typography>
      </Stack>
    </>
  );
};

export default LandingPageCvName;
