import React from "react";
import NavBar from "../components/NavBar";
import ContentTile from "../components/ContentTile";
import ImageTile from "../components/ImageTile";
import Chart from "../components/Chart";
import { chart_1 } from "../Private/chartForDalkia";
import { chart_2 } from "../Private/chartForCovid";
import { chart_3 } from "../Private/chartForLab";
import { chart_4 } from "../Private/chartForAirLiquide";
import { chart_5 } from "../Private/chartForAreva";
import contents from "../Private/contents.json";

const cts = JSON.parse(JSON.stringify(contents));

/**
 * ! Voir pour améliorer l'import des charts, peut etre les faire gerer par le composant lui meme.
 */
const ResumePage = ({ id }) => {
  const chartList = [chart_1, chart_1, chart_2, chart_3, chart_4, chart_5];
  const expIntro = cts[`experience${id}`].intro;
  const expText = cts[`experience${id}`].text;

  return (
    <div className="grid-container-resume-page">
      <div className="header">dqzd</div>
      <div className="left-panel"></div>
      <div className="right-panel"></div>
      <div className="intro">
        <ContentTile id={id} text={expIntro} />
      </div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="texts">
        <ContentTile id={id} text={expText} />
      </div>
      <div className="graph">
        <Chart data={chartList[id]} id={id} />
      </div>
      <div className="images">
        <ImageTile id={id} />
      </div>

      <div className="bott">qdqzdzq</div>
    </div>
  );
};

export default ResumePage;
