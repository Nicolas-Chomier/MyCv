import React from "react";
import LandingPageCvName from "../components/LandingPageCvName";
import LandingPageNavbar from "../components/LandingPageNavbar";
import Datas from "../Private/contents.json";

//* Main Datas
const data = JSON.parse(JSON.stringify(Datas));

const LandingPage = () => {
  return (
    <div className="grid-container-landing-page">
      <div className="landing-page-cv-name">
        <LandingPageCvName />
      </div>
      <div className="landing-page-navbar">
        <LandingPageNavbar data={data} />
      </div>
      <div className="landing-page-photo"></div>
      <div className="landing-page-intro"></div>
      <div className="landing-page-chapter-ball"></div>
      <div className="landing-page-resume"></div>
      <div className="landing-page-experience-1"></div>
      <div className="landing-page-experience-2"></div>
      <div className="landing-page-experience-3"></div>
      <div className="landing-page-experience-4"></div>
      <div className="landing-page-experience-5"></div>
      <div className="landing-page-bottom"></div>
    </div>
  );
};

export default LandingPage;
