import React, { useState, useEffect } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data, id }) => {
  const [color, setColor] = useState("#F3F3F3");

  useEffect(() => {
    const colorList = [
      "#F3F3F3",
      "#8884d8",
      "#FA8529",
      "#FAD129",
      "#ABFA29",
      "#4690FB",
    ];
    // Met à jour la couleur du chart
    setColor(colorList[id]);
  }, [id]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={200} data={data} fill="#FFFFFF">
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} domain={[0, 200]} />
        <Radar
          name="Compétences"
          dataKey="A"
          stroke={color}
          fill={color}
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
export default Chart;
