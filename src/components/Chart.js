import React, { useState, useEffect } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
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
    <RadarChart outerRadius={90} width={730} height={250} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        name="Compétences"
        dataKey="A"
        stroke={color}
        fill={color}
        fillOpacity={0.7}
      />
      <Legend />
    </RadarChart>
  );
};
export default Chart;
