import { Index } from "../pages/index/index.jsx";

export function meta({}) {
  return [
    { title: "A Base" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Index />;
}
