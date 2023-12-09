import React from "react";
import "./App.css";
import newWorldLogo from "./assets/New_World_Logo.svg";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Breadcrumb, Layout, Menu, Typography, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   }
// );

const navItems = [
  {
    key: "armor-perks",
    label: "Armor Perks",
    children: [
      {
        key: "bubble",
        label: "Bubble Chart",
      },
      {
        key: "circle",
        label: "Circle Chart",
      },
      {
        key: "wordcloud",
        label: "Word Cloud Chart",
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Typography.Title>Welcome to NW Perk Charts.</Typography.Title>
        <Typography.Text>
          Where you can visualize the most value perks in new world.
        </Typography.Text>
      </div>
    ),
  },
]);

const App = () => {
  const {
    token: { colorBgLayout, colorBgContainer },
  } = theme.useToken();
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
        <a
          href="https://www.newworld.com/en-us/"
          target="_blank"
          className="logo-link"
        >
          <img src={newWorldLogo} className="logo" alt="New World logo" />
        </a>
        <Typography.Title level={3}>NW Perk Charts</Typography.Title>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
          items={[
            {
              title: "Armor Perks",
            },
            {
              title: "Bubble",
            },
          ]}
        />
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
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={navItems}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <RouterProvider router={router} />
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
