import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const LandingPageSkills = ({ data }) => {
  const skills = data.chart;
  //const gold = "#CCA43D";
  //const carmin = "#a63a50";
  const salmon = "#ff9b71";

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={300}
          data={skills}
          margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
        >
          <PolarGrid stroke="#515151" />

          <PolarAngleAxis
            dataKey="subject"
            style={{
              fontSize: "1.2rem",
            }}
          />

          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            stroke="#000000"
            style={{
              fontSize: "1.2rem",
            }}
          />

          <Radar
            name="Compétences"
            dataKey="A"
            stroke={salmon}
            fill={salmon}
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};

export default LandingPageSkills;
