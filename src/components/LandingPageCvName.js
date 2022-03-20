import React from "react";
import { Stack, Typography, Tooltip } from "@mui/material";
import ScienceTwoToneIcon from "@mui/icons-material/ScienceTwoTone";

const LandingPageCvName = ({ data }) => {
  //const gold = "#CCA43D";
  //const carmin = "#a63a50";
  const red = "#EF8354";
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
        <Tooltip title="V2.1">
          <ScienceTwoToneIcon fontSize="large" sx={{ fill: red }} />
        </Tooltip>
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
