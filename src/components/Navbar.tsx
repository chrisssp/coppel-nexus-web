import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full h-14 bg-blue-300">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-36">
          {/* Logo para Modo Claro */}
          <img
            src="/img/logo.png"
            alt="Coppel Nexus Logo"
            className="h-8 block dark:hidden"
          />
          {/* Logo para Modo Oscuro */}
          <img
            src="/img/logo-dark.png"
            alt="Coppel Nexus Logo"
            className="h-8 hidden dark:block"
          />
        <button className="text-white p-2 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span className="sr-only">Abrir menú principal</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
