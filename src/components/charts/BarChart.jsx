import React from "react";
import { Bar } from "@ant-design/plots";

const BarChart = ({ data }) => {
  const config = {
    data,
    xField: "value",
    yField: "name",
    seriesField: "category",
    legend: {
      position: "top-left",
    },
  };
  return <Bar {...config} />;
};

export default BarChart;
