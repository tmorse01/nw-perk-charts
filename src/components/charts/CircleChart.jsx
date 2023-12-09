import React from "react";
import { CirclePacking } from "@ant-design/plots";

const CircleChart = ({ data }) => {
  return (
    <CirclePacking
      data={{
        name: "root",
        children: data,
      }}
      color="rgb(187, 255, 187)-rgb(255, 255, 204)-rgb(255, 224, 224)"
      hierarchyConfig={{
        padding: 0.01,
      }}
      tooltip={{
        autoEllipsis: true,
        maxLength: 10,
        formatter: ({ name }) => {
          // TODO figure out how to always show name and ellipsis
          return name !== "root" ? name : "";
        },
        offsetY: 8,
        style: {
          fontSize: 14,
          textAlign: "center",
          fill: "rgba(0,0,0,0.75)",
        },
      }}
      legend={false}
    />
  );
};

export default CircleChart;
