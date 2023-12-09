import { createElement } from "react";
import BubbleChart from "./BubbleChart";
import CircleChart from "./CircleChart";
import Typography from "antd/es/typography/Typography";
import { useParams } from "react-router-dom";

const Chart = ({ data }) => {
  let { chartType } = useParams();
  const chartMap = {
    circle: CircleChart,
    bubble: BubbleChart,
  };
  const chart = createElement(chartMap[chartType], { data: data });

  return (
    <div>
      <Typography.Title level={2}>{chartType}</Typography.Title>
      {chart}
    </div>
  );
};

export default Chart;
