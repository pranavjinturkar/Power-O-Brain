"use client";
import React from "react";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeSimpleIcon,
  ClockIcon,
  BrainIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

const socialMediaIcons = [
  {
    icon: <FacebookLogoIcon weight="bold" className="icon-style" />,
    link: "#",
  },
  {
    icon: <InstagramLogoIcon weight="bold" className="icon-style" />,
    link: "#",
  },
  {
    icon: <XLogoIcon weight="bold" className="icon-style" />,
    link: "#",
  },
  {
    icon: <LinkedinLogoIcon weight="bold" className="icon-style" />,
    link: "#",
  },
];

const programsDetails = [
  {
    label: "Foundation Level",
    href: "programs",
  },
  {
    label: "Beginner Level",
    href: "programs",
  },
  {
    label: "Intermediate Level",
    href: "programs",
  },
  {
    label: "Advanced Level",
    href: "programs",
  },
  {
    label: "Franchise",
    href: "franchise",
  },
];

const quickLinks = [
  {
    label: "AboutUs",
    href: "about",
  },
  {
    label: "Programs",
    href: "programs",
  },
  {
    label: "Gallery",
    href: "gallery",
  },
  {
    label: "Testimonials",
    href: "testimonials",
  },
  {
    label: "FQAs",
    href: "fqa",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16 px-6 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BrainIcon
              size={36}
              weight="duotone"
              className="text-transparent bg-clip-text bg-gradient-to-r from-primaryCyan to-[#48DBFB]"
            />
            <h2 className="text-2xl font-bold text-white font-nunito">
              Power O Brain
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6 font-roboto">
            Unlocking your child’s brain power through innovative Abacus
            education methods.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialMediaIcons.map((item, index) => (
              <a key={index} href={item.link} className="">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white font-nunito">
            Quick Links
          </h3>
          <ul className="space-y-2 font-roboto">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={`#${link.href}`}
                  className="hover:text-primaryCyan transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white font-nunito">
            Programs
          </h3>
          <ul className="space-y-2 font-roboto">
            {programsDetails.map((program, i) => (
              <li key={i}>
                <a
                  href={`#${program.href}`}
                  className="hover:text-primaryCyan transition-colors"
                >
                  {program.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white font-nunito">
            Contact Info
          </h3>
          <ul className="space-y-3 font-roboto text-gray-400">
            <li className="flex items-start gap-3">
              <MapPinIcon size={20} className="text-primaryCyan mt-1" />
              <span>123 Education Street, Downtown City, State 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon size={20} className="text-primaryCyan" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <EnvelopeSimpleIcon size={20} className="text-primaryCyan" />
              <span>info@powerobrain.com</span>
            </li>
            <li className="flex items-center gap-3">
              <ClockIcon size={20} className="text-primaryCyan" />
              <span>Mon-Fri: 9 AM - 6 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Power O Brain. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
