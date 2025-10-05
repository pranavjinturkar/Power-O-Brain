"use client";
import React from "react";
import Header from "./Header";
import {
  ChartLineUpIcon,
  GlobeHemisphereEastIcon,
  GraduationCapIcon,
} from "@phosphor-icons/react";

type FranchiseProps = {
  icon?: React.ReactNode;
  label: string;
  description: string;
};

const franchiseFeatures: FranchiseProps[] = [
  {
    icon: <ChartLineUpIcon weight="bold" className="text-white text-2xl" />,
    label: "Proven Business Model",
    description:
      "15+ years of successful operations with a track record of profitability.",
  },
  {
    icon: <GraduationCapIcon weight="bold" className="text-white text-2xl" />,
    label: "Comprehensive Training",
    description:
      "Complete training program for you and your staff to ensure success.",
  },
  {
    icon: <GlobeHemisphereEastIcon weight="bold" className="text-white text-2xl" />,
    label: "Growing Market",
    description:
      "High demand for quality education and skill development programs.",
  },
];

const FranchiseOpp = () => {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 space-y-12 sm:space-y-16 w-full bg-gradient-to-br from-[#a8edea] to-[#fed6e3]"
      id="franchise"
    >
      <Header
        title="Franchise Opportunities"
        description="Join our growing network and bring the power of Abacus education to your community."
      />

      <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-14 px-4 sm:px-6 md:px-16">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h3 className="text-2xl sm:text-3xl font-nunito font-bold text-black">
            Why Choose Power O Brain Franchise?
          </h3>
          <div className="flex flex-col gap-4">
            {franchiseFeatures.map((item, index) => (
              <div
                className="p-4 sm:p-5 bg-white/30 rounded-2xl backdrop-blur-md flex flex-col gap-4 shadow-lg hover:shadow-2xl border-2 border-white/30 transition-all duration-300"
                key={index}
              >
                <div className="bg-primaryCyan p-3 flex items-center justify-center rounded-full w-fit shadow-lg">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-openSans text-black font-semibold">
                    {item.label}
                  </h3>
                  <p className="text-sm sm:text-base font-roboto text-black/50">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="lg:w-1/2 max-w-lg bg-white p-4 sm:p-6 shadow-lg rounded-2xl mt-8 lg:mt-0 flex flex-col gap-4">
          <h3 className="font-nunito font-bold text-2xl sm:text-3xl text-primaryCyan text-center mb-4">
            Interested in Franchising?
          </h3>
          <form className="flex flex-col gap-4 sm:gap-6 w-full">
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
            <textarea
              className="px-4 py-3 rounded-xl transition-all duration-300 ease-in-out border-2 border-[#e1e5e9] focus:border-primaryCyan focus:outline-none min-h-36"
              placeholder="Tell us about your interest in Franchising"
            />
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primaryCyan to-[#48DBFB] text-white font-bold text-lg shadow-lg hover:-translate-y-0.5 font-nunito w-fit hover:bg-primaryCyan/80 transition-all cursor-pointer lg:mt-4">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FranchiseOpp;
