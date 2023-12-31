import React from "react";
import { Scatter } from "@ant-design/plots";

const BubbleChart = ({ data }) => {
  const config = {
    appendPadding: 30,
    height: 600,
    width: 1000,
    data,
    xField: "name",
    yField: "value",
    sizeField: "value",
    colorField: "category",
    theme: "default",
    size: [4, 30],
    shape: "circle",
    pointStyle: {
      fillOpacity: 0.8,
      stroke: "#bbb",
    },
  };

  return <Scatter {...config} />;
};

export default BubbleChart;
