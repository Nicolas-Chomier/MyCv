import React from "react";
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

const LandingPage = () => {
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
        <LandingPagePhoto data={data} />
      </div>
      <div className="landing-page-intro">
        <Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-start"
          spacing={9}
        >
          <LandingPageIntro data={data} />
          <LandingPageChapterBall data={data} />
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
          >
            Resume
          </Typography>
          <LandingPageResume data={data} number={5} />
          <LandingPageResume data={data} number={4} />
          <LandingPageResume data={data} number={3} />
          <LandingPageResume data={data} number={2} />
          <LandingPageResume data={data} number={1} />
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
          >
            Experiences
          </Typography>
          <LandingPageExperience data={data} number={1} />
          <LandingPageExperience data={data} number={2} />
          <LandingPageExperience data={data} number={3} />
          <LandingPageExperience data={data} number={4} />
          <LandingPageExperience data={data} number={5} />
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
          >
            Skills
          </Typography>
          <LandingPageSkills data={data} number={1} />
          <LandingPageSkills data={data} number={2} />
          <LandingPageSkills data={data} number={3} />
          <LandingPageSkills data={data} number={4} />
          <LandingPageSkills data={data} number={5} />
          <LandingPageSkills data={data} number={6} />
          <LandingPageSkills data={data} number={7} />
        </Stack>
      </div>
      <div className="landing-page-bottom">
        <LandingPageBottom data={data} />
      </div>
    </div>
  );
};

export default LandingPage;
