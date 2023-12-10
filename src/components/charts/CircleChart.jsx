import React from "react";
import { CirclePacking } from "@ant-design/plots";

const CircleChart = ({ data }) => {
  const config = {
    autoFit: true,
    padding: 0,
    data: {
      name: "root",
      children: data,
    },
    label: false,
    theme: "default",
    legend: false,
    hierarchyConfig: {
      sort: (a, b) => b.depth - a.depth,
    },
  };

  return <CirclePacking {...config} />;
};

export default CircleChart;
