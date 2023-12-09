import { createElement } from "react";
import BubbleChart from "./BubbleChart";
import CircleChart from "./CircleChart";
import Typography from "antd/es/typography/Typography";
import { useParams } from "react-router-dom";
import WordCloudChart from "./WordCloud";

const Chart = ({ data }) => {
  let { chartType } = useParams();
  const chartMap = {
    circle: CircleChart,
    bubble: BubbleChart,
    wordcloud: WordCloudChart,
  };
  const chart = createElement(chartMap[chartType], { data: data });

  return (
    <div>
      <Typography.Title level={2}>{chartType}</Typography.Title>
      <div className="chart-container">{chart}</div>
    </div>
  );
};

export default Chart;
