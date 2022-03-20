import React, { useState, useEffect } from "react";
import LandingPageChapterBall from "../components/LandingPageChapterBall";
import LandingPageCvName from "../components/LandingPageCvName";
import LandingPageIntro from "../components/LandingPageIntro";
import LandingPageNavbar from "../components/LandingPageNavbar";
import LandingPagePhoto from "../components/LandingPagePhoto";
import { Stack, Divider, Typography } from "@mui/material";
import Datas from "../Private/contents.json";
import LandingPageResume from "../components/LandingPageResume";
import LandingPageExperience from "../components/LandingPageExperience";
import LandingPageSkills from "../components/LandingPageSkills";
import LandingPageBottom from "../components/LandingPageBottom";

//* Main Datas
const data = JSON.parse(JSON.stringify(Datas));
//* Screen size calculation
// Get screen size
function getWindowSize() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

const LandingPage = () => {
  // Screen size implementation
  const [wSize, setwSize] = useState(getWindowSize());
  useEffect(() => {
    function handleResize() {
      setwSize(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const widthLimit = wSize.width >= 1024 ? true : false;
  // Landing page const declaration
  const sectionTilteStyle = { fontSize: 30, fontWeight: 600 };
  return (
    <div className="grid-container-landing-page">
      <div className="landing-page-cv-name">
        <LandingPageCvName data={data} />
      </div>
      <div className="landing-page-navbar">
        <LandingPageNavbar data={data} />
      </div>
      <div className="landing-page-photo">
        <LandingPagePhoto data={data} screenSize={wSize} />
      </div>
      <div className="landing-page-intro">
        <Stack
          direction="column"
          justifyContent={widthLimit ? "flex-end" : "center"}
          alignItems={widthLimit ? "flex-start" : "center"}
          spacing={9}
        >
          <LandingPageIntro data={data} screenSize={wSize} />
          <LandingPageChapterBall data={data} screenSize={wSize} />
        </Stack>
      </div>
      <div className="landing-page-resume" id="resume-div">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={4}
        >
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={sectionTilteStyle}
            style={{ color: "#FFDE26" }}
          >
            Resume
          </Typography>
          <LandingPageResume data={data} number={5} screenSize={wSize} />
          <LandingPageResume data={data} number={4} screenSize={wSize} />
          <LandingPageResume data={data} number={3} screenSize={wSize} />
          <LandingPageResume data={data} number={2} screenSize={wSize} />
          <LandingPageResume data={data} number={1} screenSize={wSize} />
        </Stack>
      </div>

      <div className="landing-page-experience" id="experience-div">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={4}
        >
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={sectionTilteStyle}
            style={{ color: "#EF8354" }}
          >
            Experiences
          </Typography>
          <LandingPageExperience data={data} number={1} screenSize={wSize} />
          <LandingPageExperience data={data} number={2} screenSize={wSize} />
          <LandingPageExperience data={data} number={3} screenSize={wSize} />
          <LandingPageExperience data={data} number={4} screenSize={wSize} />
          <LandingPageExperience data={data} number={5} screenSize={wSize} />
        </Stack>
      </div>
      <div className="landing-page-skills" id="skills-div">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={4}
        >
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={sectionTilteStyle}
            style={{ color: "#EF6F6C" }}
          >
            Skills
          </Typography>
          <LandingPageSkills data={data} number={1} screenSize={wSize} />
          <LandingPageSkills data={data} number={2} screenSize={wSize} />
          <LandingPageSkills data={data} number={3} screenSize={wSize} />
          <LandingPageSkills data={data} number={4} screenSize={wSize} />
          <LandingPageSkills data={data} number={5} screenSize={wSize} />
          <LandingPageSkills data={data} number={6} screenSize={wSize} />
          <LandingPageSkills data={data} number={7} screenSize={wSize} />
        </Stack>
      </div>
      <div className="landing-page-bottom">
        <LandingPageBottom data={data} screenSize={wSize} />
      </div>
    </div>
  );
};

export default LandingPage;
