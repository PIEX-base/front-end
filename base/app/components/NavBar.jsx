import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">

      <NavLink to={"/quem-somos"}>
        <span
          href="#"
          className="text-white hover:text-gray-200 hover:underline transition-colors">
          Quem somos
        </span>
      </NavLink>

      <NavLink to={"/projetos"}>
        <span
          href="#"
          className="text-white hover:text-gray-200 hover:underline transition-colors">
          Projetos
        </span>
      </NavLink>

      <NavLink to={"/doacoes"}>
        <span
          href="#"
          className="text-white hover:text-gray-200 hover:underline transition-colors">
          Doações
        </span>
      </NavLink>

      
    </nav>
  );
};
