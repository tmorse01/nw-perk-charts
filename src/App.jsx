import newWorldLogo from "./assets/New_World_Logo.svg";
import Chart from "./components/charts/Chart";
import "./App.css";
import armorPerkData from "./data/armorPerks.json";
import Home from "./components/content/home";

import { Layout, Menu, Typography, theme } from "antd";
import { Link, Routes, Route } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const App = ({ children }) => {
  const {
    token: { colorBgLayout, colorBgContainer },
  } = theme.useToken();

  const navItems = [
    {
      key: "armor-perks",
      label: "Armor Perk Charts",
      children: [
        {
          key: "armor-bubble",
          label: <Link to="/armor/bubble">Bubble</Link>,
        },
        {
          key: "circle",
          label: <Link to="/armor/circle">Circle</Link>,
        },
        {
          key: "wordcloud",
          label: <Link to="/armor/wordcloud">Word Cloud</Link>,
        },
      ],
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: colorBgLayout,
          gap: "32px",
        }}
      >
        <Link href="/" className="logo-link">
          <img src={newWorldLogo} className="logo" alt="New World logo" />
        </Link>
        <Typography.Title level={3}>Perk Charts</Typography.Title>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultOpenKeys={["armor-perks"]}
              style={{
                height: "100%",
              }}
              items={navItems}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 700,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/armor/:chartType"
                element={<Chart data={armorPerkData.armorPerks} />}
              />
            </Routes>
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        NW Perk Charts ©2023 Created by 51Grimz
      </Footer>
    </Layout>
  );
};
export default App;
