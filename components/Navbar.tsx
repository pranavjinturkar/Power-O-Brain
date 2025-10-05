"use client";
import { BrainIcon } from "@phosphor-icons/react";

type Props = {};
type Navbar = {
  id: string;
  label: string;
};

const navTitles: Navbar[] = [
  { id: "Home", label: "Home" },
  { id: "About Us", label: "About Us" },
  { id: "Why Abacus?", label: "Why Abacus?" },
  { id: "Gallery", label: "Gallery" },
  { id: "Testimonials", label: "Testimonials" },
  { id: "Blog", label: "Blog" },
  { id: "Franchise", label: "Franchise" },
  { id: "Contact", label: "Contact" },
];

const Navbar = (props: Props) => {
  return (
    <div className="w-full bg-white py-4 px-8 flex items-center justify-evenly">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-semibold text-teal-600 font-serif">
        <BrainIcon size={36} />
        <h3 className="">Power O Brain</h3>
      </div>
      <div className="flex items-center md:gap-6 xl:gap-8">
        {navTitles.map((item, index) => (
          <p key={index} className="text-lg">{item.label}</p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
