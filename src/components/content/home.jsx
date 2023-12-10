import { Divider, Typography } from "antd";

const Home = () => {
  return (
    <div>
      <Typography.Title>
        Uncover the Secrets of Perks in New World
      </Typography.Title>
      <Typography.Title level={3}>
        Welcome to the ultimate resource for understanding the value of the
        perks on your gear in New World!
      </Typography.Title>
      <Divider />
      <Typography.Title level={5}>
        Explore, Analyze, and Master
      </Typography.Title>
      <Typography.Text>
        Dive deep into the world of New World perks with our comprehensive data
        visualizations. Understand how each perk shapes your gear, and make the
        most informed decisions to enhance your in-game strategy.
      </Typography.Text>
      <Divider />
      <Typography.Title level={5}>
        Interactive Perk Data Visualiaztions
      </Typography.Title>
      <Typography.Text>
        Our dynamic, interactive chart lets you discover the values and impacts
        of each perk. Filter by categories like combat, crafting, and gathering
        to see how each perks effects the value of the item.
      </Typography.Text>
    </div>
  );
};

export default Home;
