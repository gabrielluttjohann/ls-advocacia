"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo/logo-white.png";
import { Menu, X } from "lucide-react";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: "Quem somos", href: "#about" },
    { label: "Áreas de atuação", href: "#services" },
    { label: "Profissionais", href: "#team" },
    { label: "Diferenciais", href: "#differentials" },
  ];
  return (
    <header className="fixed top-0 w-full z-50 bg-black ">
      {/* Navbar */}
      <div className="backdrop-blur-md px-6 py-4 flex justify-between items-center max-w-full mx-auto shadow-lg">
        <Link href={"/"}>
          <Image
            src={logo.src}
            alt="Logo"
            width={128}
            height={100}
            className="h-auto"
          />
        </Link>
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <nav
          className={`absolute lg:static top-16 right-0 left-0 bg-black/90 lg:bg-transparent flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-0 text-white text-center ${
            menuOpen ? "flex" : "hidden lg:flex"
          }`}
        >
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-gray-300 transition duration-300 text-sm lg:text-base"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
