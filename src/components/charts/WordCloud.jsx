import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { WordCloud } from "@ant-design/plots";

const WordCloudChart = ({ data }) => {
  const config = {
    data,
    wordField: "name",
    weightField: "value",
    colorField: "name",
    wordStyle: {
      fontFamily: "Verdana",
      fontSize: [8, 32],
      rotation: 0,
    },
    random: () => 0.5,
  };

  return <WordCloud {...config} />;
};
export default WordCloudChart;
