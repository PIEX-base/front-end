import { LogoSVG } from "../img/home/logo.jsx";
import { NavBar } from "./NavBar";
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header className="bg-primary px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-light">
          <NavLink to={"/"}>
            <LogoSVG />
          </NavLink>
        </div>
        {/* Navigation */}
        <NavBar />
        {/* CTA button */}
        <button className="cursor-pointer bg-yellow hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full">
          Seja um parceiro
        </button>
      </div>
    </header>
  );
};
