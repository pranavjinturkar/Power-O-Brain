"use client";
import { BrainIcon } from "@phosphor-icons/react";

type Navbar = {
  id: string;
  label: string;
};

const navTitles: Navbar[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "programs", label: "Programs" },
  { id: "why-abacus", label: "Why Abacus?" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Testimonials" },
  // { id: "Blog", label: "Blog" },
  { id: "franchise", label: "Franchise" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <div className="w-full bg-white py-4 px-8 flex items-center justify-evenly fixed top-0 shadow-xl z-40">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold text-primaryCyan font-openSans">
        <BrainIcon size={36} weight="duotone" />
        <h3 className="">Power O Brain</h3>
      </div>
      <div className="flex items-center md:gap-6 xl:gap-8">
        {navTitles.map((item, index) => (
          <a
            href={`#${item.id}`}
            key={index}
            className="text-lg font-roboto basic-transition hover:text-primaryCyan duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
