import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("quem-somos", "routes/quem-somos.jsx"),
  route("projetos", "routes/projetos.jsx"),
  route("doacoes", "routes/doacoes.jsx"),
  route("como-ajudar", "routes/como-ajudar.jsx"),
] satisfies RouteConfig;
