import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left - Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-medium mb-4">
              Entre em contato com a gente
            </h3>
            <div className="flex items-center space-x-2 text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>ong@mail.com</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-2">
              {/* INSTAGRAM */}
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                <NavLink
                  to={"https://www.instagram.com/abase.ong/"}
                  target="_blank"
                  rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Center - Links */}
          <div className="space-y-4">
            <h3 className="text-white font-medium mb-4">Links úteis</h3>
            <ul className="space-y-2 text-white">
              <li>
                <a href="#" className="hover:underline">
                  Quem somos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Como ajudar
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Doações
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Transparência
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Address */}
          <div className="space-y-4">
            <h3 className="text-white font-medium mb-4">Onde estamos</h3>
            <div className="text-white">
              {/* Avenida Brasil,6955, Juiz de Fora 36080068 */}
              <p className="mb-2">Avenida Brasil, 6955</p>
              <p className="mb-2">Mariano Procópio</p>
              <p className="mb-2">Juiz de Fora/MG</p>
              <p>CEP 36080-060</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white text-sm">
          <p>
            © {new Date().getFullYear()} A Base. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );

};

