"use client";
import React from "react";
import Header from "./Header";
import {
  ArrowRightIcon,
  EnvelopeSimpleIcon,
  NavigationArrowIcon,
  PhoneIcon,
} from "@phosphor-icons/react";

type ContactDetailsProps = {
  icon: React.ReactNode;
  label: string;
  details: string[];
};

const contactDetails: ContactDetailsProps[] = [
  {
    icon: <NavigationArrowIcon weight="bold" className="text-white" />,
    label: "Visit Us",
    details: ["123 Education Street,", "Downtown City, State 12345"],
  },
  {
    icon: <PhoneIcon weight="bold" className="text-white" />,
    label: "Contact Us",
    details: ["9403906859", "Mon-Fri: 9AM-6PM"],
  },
  {
    icon: <EnvelopeSimpleIcon weight="bold" className="text-white" />,
    label: "Email Us",
    details: ["info@powerobrain.com", "support@powerobrain.com"],
  },
];

const GetInTouch = () => {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 space-y-12 sm:space-y-16 w-full bg-[#f8f9fa]"
      id="contact"
    >
      <Header
        title="Get in Touch"
        description="Ready to start your child's Abacus learning journey? Contact us today!"
      />

      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-14 px-4 sm:px-6 md:px-16">
        {/* Left Column - Contact Details */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h3 className="text-2xl sm:text-3xl font-nunito font-bold text-black">
            Why Choose Power O Brain?
          </h3>
          <div className="flex flex-col gap-6">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="bg-gradient-to-br from-primaryCyan to-[#48DBFB] p-3 sm:p-4 rounded-full shadow-md flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-105 transition-transform">
                  <span className="text-white text-xl sm:text-2xl">
                    {item.icon}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-nunito font-bold text-gray-800 mb-1">
                    {item.label}
                  </h3>
                  <div className="flex flex-col text-gray-500 font-roboto text-sm sm:text-base leading-relaxed">
                    {item.details.map((line, i) => (
                      <span key={i}>{line}</span>
                    ))}
                  </div>
                </div>

                {/* Accent Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primaryCyan text-xl sm:text-2xl">
                  <ArrowRightIcon weight="bold" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-1/2 max-w-lg bg-white p-4 sm:p-6 shadow-lg rounded-2xl flex flex-col gap-4 mt-8 lg:mt-0">
          <h3 className="font-nunito font-bold text-2xl sm:text-3xl text-primaryCyan text-center mb-4">
            Send us a Message
          </h3>
          <form className="flex flex-col gap-3 sm:gap-4 w-full">
            <input
              type="text"
              className="px-4 py-3 rounded-xl transition-all duration-300 ease-in-out border-2 border-[#e1e5e9] focus:border-primaryCyan focus:outline-none"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="px-4 py-3 rounded-xl transition-all duration-300 ease-in-out border-2 border-[#e1e5e9] focus:border-primaryCyan focus:outline-none"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="px-4 py-3 rounded-xl transition-all duration-300 ease-in-out border-2 border-[#e1e5e9] focus:border-primaryCyan focus:outline-none"
              placeholder="Phone Number"
            />
            <input
              type="text"
              className="px-4 py-3 rounded-xl transition-all duration-300 ease-in-out border-2 border-[#e1e5e9] focus:border-primaryCyan focus:outline-none"
              placeholder="Subject"
            />
            <textarea
              className="px-4 py-3 rounded-xl transition-all duration-300 ease-in-out border-2 border-[#e1e5e9] focus:border-primaryCyan focus:outline-none min-h-28"
              placeholder="Your Message"
            />
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primaryCyan to-[#48DBFB] text-white font-bold text-lg shadow-lg hover:-translate-y-0.5 font-nunito w-fit hover:bg-primaryCyan/80 transition-all cursor-pointer">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
