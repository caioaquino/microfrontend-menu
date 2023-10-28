import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import { routes } from "./constants";
import { getBreadcrumbRoute, getCurrentRoute } from "./methods";
import "./style.css";
const { Header, Sider } = Layout;
export const NavBar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();

  return (
    <Layout>
      <Sider>
        <div className="demo-logo-vertical">Home</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[getCurrentRoute(location)?.key]}
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
            background: colorBgContainer,
          }}
        >
          <Breadcrumb items={getBreadcrumbRoute(location)} />
        </Header>
      </Layout>
    </Layout>
  );
};
