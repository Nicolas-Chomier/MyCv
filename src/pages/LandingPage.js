import React /* useState, useEffect, useRef */ from "react";
import ExperienceTile from "../components/ExperienceTile";
import { Stack } from "@mui/material";
//import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <ExperienceTile
          image={"valve.jpeg"}
          name={"Dalkia Air Solution"}
          id={1}
        />
        <ExperienceTile image={"covid2.jpeg"} name={"Confinements"} id={2} />
        <ExperienceTile image={"hl.jpeg"} name={"LAB"} id={3} />
        <ExperienceTile image={"alat.png"} name={"Air Liquide"} id={4} />
        <ExperienceTile image={"npp.jpeg"} name={"Areva"} id={5} />
      </Stack>
    </div>
  );
};

export default LandingPage;
