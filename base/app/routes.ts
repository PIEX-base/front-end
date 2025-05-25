import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("quem-somos", "routes/quem-somos.jsx"),
] satisfies RouteConfig;
