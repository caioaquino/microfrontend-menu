import { AppstoreAddOutlined, DashboardOutlined } from "@ant-design/icons";

export const routes = [
  {
    key: "0",
    label: "Dashboard",
    pathname: "dashboard",
    icon: <DashboardOutlined />,
  },
  {
    key: "1",
    label: "Registro",
    pathname: "register",
    icon: <AppstoreAddOutlined />,
  },
];
