import newWorldLogo from "./assets/New_World_Logo.svg";
import Chart from "./components/charts/Chart";

import armorPerkData from "./data/armorPerks.json";

import { Layout, Menu, Typography, theme } from "antd";
import { Link, Routes, Route, useLocation } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const AppLayout = ({ children }) => {
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
        <a href="/" className="logo-link">
          <img src={newWorldLogo} className="logo" alt="New World logo" />
        </a>
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
              <Route
                path="/"
                element={
                  <div>
                    <Typography.Title>
                      Welcome to NW Perk Charts.
                    </Typography.Title>
                    <Typography.Text>
                      Where you can visualize the most important and valuable
                      perks in new world.
                    </Typography.Text>
                  </div>
                }
              />
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
export default AppLayout;
