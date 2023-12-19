import { Card, Flex, List, Space } from "antd";
import { useParams } from "react-router-dom";
import tierListData from "./../../data/tierList.json";

const TierList = () => {
  const { dataType } = useParams();
  const data = tierListData[dataType];
  console.log(tierListData);
  console.log("data: ", data);
  // Define colors for each tier
  const tierColors = {
    S: "#f5222d",
    A: "#fa8c16",
    B: "#fadb14",
    C: "#52c41a",
    D: "#1890ff",
  };

  const tiers = {
    S: [],
    A: [],
    B: [],
    C: [],
    D: [],
  };

  data.forEach((item) => {
    if (tiers[item.tier]) {
      tiers[item.tier].push(item.name);
    }
  });

  return (
    <Flex justify="center" gap={16}>
      {Object.keys(tiers).map((tier) => (
        <Card
          key={tier}
          title={`${tier}`}
          headStyle={{
            backgroundColor: tierColors[tier],
            fontSize: "24px",
            fontWeight: 700,
          }}
          bordered={false}
          style={{ width: 300 }}
        >
          <List
            size="small"
            bordered
            dataSource={tiers[tier]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Card>
      ))}
    </Flex>
  );
};

export default TierList;
