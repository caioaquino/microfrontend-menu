import { routes } from "./constants";

export const getBreadcrumbRoute = (location: any) => {
  return [{ title: "Início" }, { title: getCurrentRoute(location)?.label }];
};

export const getCurrentRoute = (location: any) => {
  const routeSplit = location.pathname.split("/");
  return routes.find((item) => routeSplit.includes(item.pathname));
};
