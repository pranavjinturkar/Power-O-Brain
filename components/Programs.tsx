"use client";
import React from "react";
import Header from "./Header";
import {
  BabyIcon,
  BookOpenIcon,
  CheckIcon,
  LightbulbIcon,
  TrophyIcon,
} from "@phosphor-icons/react";

type AllPrograms = {
  icon?: React.ReactNode;
  level: string;
  ages: string;
  topicsCovered: string[];
  timeReq: string;
  gradientFrom: string;
  gradientTo: string;
};

const allPrograms: AllPrograms[] = [
  {
    icon: <BabyIcon size={28} weight="bold" className="text-white" />,
    level: "Foundation Level",
    ages: "4-6",
    topicsCovered: [
      "Basic number recognition",
      "Simple counting",
      "Hand-eye coordination",
      "Fun learning games",
    ],
    timeReq: "6 months",
    gradientFrom: "from-[#FFDDE2]",
    gradientTo: "to-[#FFB6C1]",
  },
  {
    icon: <BookOpenIcon size={28} weight="bold" className="text-white" />,
    level: "Beginner Level",
    ages: "7-9",
    topicsCovered: [
      "Addition & Subtraction",
      "Mental arithmetic",
      "Memory enhancement",
      "Concentration skills",
    ],
    timeReq: "8 months",
    gradientFrom: "from-[#D0EFFF]",
    gradientTo: "to-[#90CAF9]",
  },
  {
    icon: <LightbulbIcon size={28} weight="bold" className="text-white" />,
    level: "Intermediate Level",
    ages: "10-12",
    topicsCovered: [
      "Multiplication & Division",
      "Speed calculation",
      "Problem solving",
      "Logical thinking",
    ],
    timeReq: "10 months",
    gradientFrom: "from-[#FFF4C2]",
    gradientTo: "to-[#FFD54F]",
  },
  {
    icon: <TrophyIcon size={28} weight="bold" className="text-white" />,
    level: "Advance Level",
    ages: "13-15",
    topicsCovered: [
      "Complex calculations",
      "Competition preparation",
      "Advanced techniques",
      "Mastery level",
    ],
    timeReq: "12 months",
    gradientFrom: "from-[#C8FACC]",
    gradientTo: "to-[#66BB6A]",
  },
];

const Programs = () => {
  return (
    <section className="py-24 space-y-20 w-full bg-white" id="programs">
      <Header
        title="Our Programs"
        description="Comprehensive Abacus training programs designed for different age groups and skill levels."
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 px-6 md:px-16">
        {allPrograms.map((program, idx) => (
          <div
            key={idx}
            className="relative flex flex-col p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
          >
            {/* Icon circle */}
            <div className="absolute -top-6 left-6 bg-primaryCyan w-14 h-14 rounded-full flex items-center justify-center shadow-md">
              {program.icon}
            </div>

            {/* Level / Header */}
            <h3 className="mt-8 text-xl font-nunito font-bold text-gray-800 mb-2">
              {program.level}
            </h3>

            {/* Ages */}
            <p className="text-sm font-roboto text-gray-500 mb-4">
              Ages: {program.ages}
            </p>

            {/* Topics */}
            <div className=" text-gray-700 font-openSans mb-4 space-y-1">
              {program.topicsCovered.map((topic, tidx) => (
                <div key={tidx} className="flex gap-2 items-center">
                  <CheckIcon className="text-primaryCyan" weight="bold" />
                  <p>{topic}</p>
                </div>
              ))}
            </div>

            {/* Duration */}
            <p className="mt-auto text-primaryCyan font-semibold font-roboto">
              Duration: {program.timeReq}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;

// Might Use Later

// <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-16">
// {allPrograms.map((program, idx) => (
//  <div
//    key={idx}
//    className={`relative flex flex-col p-6 rounded-3xl shadow-xl bg-gradient-to-br ${program.gradientFrom} ${program.gradientTo} hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
//  >
//    {/* Icon circle */}
//    <div className="absolute -top-6 left-6 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
//      {program.icon}
//    </div>

//    {/* Level */}
//    <h3 className="mt-10 text-2xl font-nunito font-bold text-gray-800 mb-2">
//      {program.level}
//    </h3>

//    {/* Ages */}
//    <p className="text-sm font-roboto text-gray-700 mb-4">
//      Ages: {program.ages}
//    </p>

//    {/* Topics */}
//    <ul className="list-disc list-inside text-gray-800 font-openSans mb-4 space-y-1">
//      {program.topicsCovered.map((topic, tidx) => (
//        <li key={tidx}>{topic}</li>
//      ))}
//    </ul>

//    {/* Duration */}
//    <p className="mt-auto font-semibold font-roboto text-gray-900">
//      Duration: {program.timeReq}
//    </p>

//    {/* Subtle background accent */}
//    <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-white opacity-20"></div>
//  </div>
//  ))}
// </div>;
