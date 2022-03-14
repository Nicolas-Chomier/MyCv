import React from "react";
import ExperienceTile from "../components/ExperienceTile";
import { Stack } from "@mui/material";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <ExperienceTile image={"valve.jpeg"} name={"Dalkia"} id={1} />
        <ExperienceTile image={"covid2.jpeg"} name={"Covid"} id={2} />
        <ExperienceTile image={"hl.jpeg"} name={"LAB"} id={3} />
        <ExperienceTile image={"alat.png"} name={"Air Liquide"} id={4} />
        <ExperienceTile image={"nuclear.jpg"} name={"Areva"} id={5} />
      </Stack>
    </div>
  );
};

export default LandingPage;
