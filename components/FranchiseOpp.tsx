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
    icon: <ChartLineUpIcon weight="bold" className="text-white" />,
    label: "Proven Business Model",
    description:
      "15+ years of successful operations with a track record of profitability.",
  },
  {
    icon: <GraduationCapIcon weight="bold" className="text-white" />,
    label: "Comprehensive Training",
    description:
      "Complete training program for you and your staff to ensure success.",
  },
  {
    icon: <GlobeHemisphereEastIcon weight="bold" className="text-white" />,
    label: "Growing Market",
    description:
      "High demand for quality education and skill development programs.",
  },
];

const FranchiseOpp = () => {
  return (
    <section className="py-24 space-y-20 w-full bg-gradient-to-br from-[#a8edea] to-[#fed6e3]">
      <Header
        title="Franchise Opportunities"
        description="Join our growing network and bring the power of Abacus education to your community."
      />
      <div className="w-full flex justify-center gap-14">
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl font-nunito font-bold text-black">
            Why Choose Power O Brain Franchise?
          </h3>
          <div className="flex flex-col gap-4">
            {franchiseFeatures.map((item, index) => (
              <div
                className="p-4 bg-white/30 rounded-2xl backdrop-blur-md flex flex-col gap-4 shadow-lg basic-transition hover:shadow-2xl"
                key={index}
              >
                <div className="bg-primaryCyan p-4 flex items-center justify-center rounded-full w-fit">
                  <p className="text-2xl ">{item.icon}</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-openSans text-black font-semibold">
                    {item.label}
                  </h3>
                  <p className="text-sm font-roboto text-black/50">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-lg max-w-lg bg-white p-4 shadow-lg rounded-2xl mt-8 flex flex-col gap-4 py-6 px-6">
          <h3 className="font-nunito font-bold text-3xl text-primaryCyan text-center mb-4">
            Interested in Franchising?
          </h3>
          <form className="flex flex-col gap-6 w-full">
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
              className="px-4 py-3 rounded-xl transition-all duration-300 ease-in-out border-2 border-[#e1e5e9] focus:border-primaryCyan focus:outline-none min-h-28"
              placeholder="Tell us about your interest in Franchising"
            />
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primaryCyan to-[#48DBFB]  basic-transition text-white font-bold text-lg shadow-lg hover:-translate-y-0.5 font-nunito w-fit hover:bg-primaryCyan/80 cursor-pointer">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FranchiseOpp;
