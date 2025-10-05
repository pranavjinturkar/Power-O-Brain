"use client";
import React, { useState } from "react";
import { BrainIcon, ListIcon, XIcon } from "@phosphor-icons/react";

type NavbarItem = {
  id: string;
  label: string;
};

const navTitles: NavbarItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "programs", label: "Programs" },
  // { id: "why-abacus", label: "Why Abacus?" },
  { id: "gallery", label: "Gallery" },
  // { id: "testimonials", label: "Testimonials" },
  { id: "franchise", label: "Franchise" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 shadow-xl z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-primaryCyan font-openSans">
          <BrainIcon size={36} weight="duotone" />
          <h3>Power O Brain</h3>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navTitles.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className="text-sm xl:text-lg font-roboto transition-colors hover:text-primaryCyan"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-primaryCyan focus:outline-none"
        >
          {menuOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
        </button>

        {/* Mobile Toggle Button */}
        {/* <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primaryCyan focus:outline-none"
        >
          {menuOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-200 animate-slideDown">
          <ul className="flex flex-col items-center py-6 gap-4">
            {navTitles.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)} // close menu on click
                  className="block text-lg font-roboto text-gray-800 hover:text-primaryCyan transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
