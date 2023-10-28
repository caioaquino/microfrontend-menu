import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import { routes } from "./constants";
import { getBreadcrumbRoute, getCurrentRoute } from "./methods";

const { Header, Content, Sider } = Layout;
export const NavBar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();

  return (
    <Layout>
      <Sider style={{ height: "100vh", position: "absolute", left: 0, top: 0 }}>
        <div className="demo-logo-vertical">Home</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[getCurrentRoute(location)?.key || "0"]}
          items={routes.map((item) => {
            return {
              ...item,
              label: <Link to={item.pathname}>{item.label}</Link>,
            };
          })}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 16,
            background: colorBgContainer,
            alignItems: "center",
            display: "flex",
            position: "absolute",
            top: 0,
            width: `calc(100% - 200px)`,
          }}
        >
          <Breadcrumb items={getBreadcrumbRoute(location)} />
        </Header>
      </Layout>
    </Layout>
  );
};
