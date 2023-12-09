import { useState, createElement } from "react";
import { Select } from "antd";
import BubbleChart from "./BubbleChart";
import CircleChart from "./CircleChart";
import Typography from "antd/es/typography/Typography";

const Chart = ({ data }) => {
  const [chartType, setChartType] = useState("circle");
  const chartMap = {
    circle: CircleChart,
    bubble: BubbleChart,
  };

  function handleChange(value) {
    setChartType(value);
  }

  const chart = createElement(chartMap[chartType], { data: data });

  return (
    <div>
      <Typography.Title level={4}>Chart Type</Typography.Title>
      <Select
        defaultValue="circle"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "wordcloud", label: "Word Cloud" },
          { value: "bubble", label: "Bubble" },
          { value: "circle", label: "Circle" },
        ]}
      />
      <div className="chart-container">{chart}</div>
    </div>
  );
};

export default Chart;
