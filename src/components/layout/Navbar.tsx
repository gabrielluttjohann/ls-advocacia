"use client";

import logo from "/icons/logo-2.png";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    { href: "/", label: "Início" },
    {
      label: "Serviços",
      dropdown: [
        { href: "/servicos/abusos-e-fraudes", label: "Abusos e fraudes" },
        { href: "/servicos/negociacao-de-dividas", label: "Negociação de Dívidas" },
        { href: "/servicos/superendividamento", label: "Superendividamento" },
        { href: "/servicos/revisao-de-taxas-de-juros", label: "Revisão de Juros" },
        { href: "/servicos/consignado-ilegal", label: "Consignado Ilegal" },
        { href: "/servicos/defesa-em-cobrancas", label: "Defesa em Cobranças" },
        { href: "/servicos/bens-impenhoraveis", label: "Conta Bloqueada" },
        { href: "/servicos/bens-impenhoraveis", label: "Bens Impenhoráveis" },
        { href: "/servicos/defesa-de-produtores-rurais", label: "Defesa do Produtor Rural" },
        { href: "/servicos/dividas-empresariais", label: "Dívidas Empresariais" },
      ],
    },
    { href: "#diferenciais", label: "Diferenciais" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isSidebarOpen) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeAll = () => {
    setIsSidebarOpen(false);
    setOpenDropdown(null);
  };

  const renderDropdownIcon = (isOpen: boolean) => (
    <svg
      className={`w-4 h-4 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );

  return (
    <>
      {/* Navbar principal */}
      <nav className="fixed top-0 w-full z-50 bg-white text-gray-700 px-4 py-2 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center justify-between space-x-4">
            <Link
              href="/"
              className="text-xl font-bold cursor-pointer md:hover:scale-110 transition duration-300 ease-in-out"
              onClick={closeAll}
            >
              <img
                src={logo.src}
                alt="Logo"
                className="w-64 h-24 "
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-blue"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(`desktop-${item.label.toLowerCase()}`)}
                      className="cursor-pointer hover:text-blue flex items-center"
                    >
                      {item.label}
                      {renderDropdownIcon(openDropdown === `desktop-${item.label.toLowerCase()}`)}
                    </button>
                    {openDropdown === `desktop-${item.label.toLowerCase()}` && item.dropdown && (
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 hover:bg-gray-200 hover:text-blue"
                            onClick={closeAll}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 mt-28 w-64 bg-white text-gray-700 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20 md:hidden`}
      >
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Menu</h2>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-2 px-4 hover:bg-gray-200 rounded"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(`sidebar-${item.label.toLowerCase()}`)}
                      className="w-full flex justify-between items-center py-2 px-4 hover:bg-gray-200 rounded"
                    >
                      <span>{item.label}</span>
                      {renderDropdownIcon(openDropdown === `sidebar-${item.label.toLowerCase()}`)}
                    </button>
                    {openDropdown === `sidebar-${item.label.toLowerCase()}` && item.dropdown && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block py-2 px-4 hover:bg-gray-200 rounded"
                              onClick={closeAll}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={closeAll}
        ></div>
      )}
    </>
  );
};

export default Navbar;