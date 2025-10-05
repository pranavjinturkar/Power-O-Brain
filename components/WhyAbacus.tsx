"use client";
import React from "react";
import Header from "./Header";
import {
  BrainIcon,
  LightningIcon,
  PuzzlePieceIcon,
  StarIcon,
  TargetIcon,
} from "@phosphor-icons/react";

type AbacusFeaturesProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

const abacusFeatures: AbacusFeaturesProps[] = [
  {
    icon: <BrainIcon size={28} weight="bold" className="text-white" />,
    title: "Brain Development",
    description:
      "Stimulates both left and right brain hemispheres, enhancing overall cognitive function.",
  },
  {
    icon: <LightningIcon size={28} weight="bold" className="text-white" />,
    title: "Mental Math Skills",
    description:
      "Develop lightning-fast mental calculation abilities without relying on calculators.",
  },
  {
    icon: <TargetIcon size={28} weight="bold" className="text-white" />,
    title: "Concentration",
    description:
      "Improves focus and attention span through engaging hands-on learning activities.",
  },
  {
    icon: <PuzzlePieceIcon size={28} weight="bold" className="text-white" />,
    title: "Problem Solving",
    description:
      "Enhances logical thinking and analytical skills for better academic performance.",
  },
  {
    icon: <StarIcon size={28} weight="bold" className="text-white" />,
    title: "Confidence Building",
    description: "Boosts self-esteem as children master new skills.",
  },
];

const WhyAbacus = () => {
  return (
    <section className="py-24 space-y-20 w-full bg-gradient-to-br from-[#667eea] to-[#764ba2]" id="why-abacus">
      <Header
        title="Why Choose Abacus Learning?"
        description="Discover the incredible benefits of Abacus education for your child's brain development."
        titleStyle="text-white"
        descStyle="text-white"
      />
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-6 md:px-16">
        {abacusFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="relative flex flex-col p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-white/20"
          >
            <div className="w-14 h-14 rounded-full bg-primaryCyan flex items-center justify-center shadow-md mb-4">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-nunito font-bold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-white/90 font-roboto text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAbacus;
