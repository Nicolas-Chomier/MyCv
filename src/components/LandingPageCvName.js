import React from "react";
import { Stack, Typography } from "@mui/material";
import ScienceTwoToneIcon from "@mui/icons-material/ScienceTwoTone";

const LandingPageCvName = () => {
  const gold = "#CCA43D";
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <ScienceTwoToneIcon fontSize="large" sx={{ fill: gold }} />
        <Typography variant="h5" align="center" sx={{ pt: 1 }}>
          Nicolas
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ pt: 1, fontWeight: "bold" }}
        >
          Chomier
        </Typography>
      </Stack>
    </>
  );
};

export default LandingPageCvName;
