import {
  AppstoreAddOutlined,
  DashboardOutlined,
  HomeOutlined,
} from "@ant-design/icons";

export const routes = [
  {
    key: "0",
    label: "Home",
    pathname: "",
    icon: <HomeOutlined />,
  },
  {
    key: "1",
    label: "Dashboard",
    pathname: "dashboard",
    icon: <DashboardOutlined />,
  },
  {
    key: "2",
    label: "Registro",
    pathname: "register",
    icon: <AppstoreAddOutlined />,
  },
];
