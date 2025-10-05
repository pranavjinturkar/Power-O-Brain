"use client";
import {
  InfinityIcon,
  LightbulbIcon,
  MedalIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import AboutImg from "@/public/AboutImg.jpeg";
import Header from "./Header";

type AboutPoints = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const aboutPoints: AboutPoints[] = [
  {
    icon: (
      <LightbulbIcon size={32} weight="duotone" className="text-primaryCyan" />
    ),
    title: "Vision to Transform Learning",
    description:
      "Founded with a mission to revolutionize mathematical education and make learning fun and effective.",
  },
  {
    icon: <MedalIcon size={32} weight="duotone" className="text-primaryCyan" />,
    title: "15+ Years of Excellence",
    description:
      "With over 15 years of experience, we’ve helped thousands of students unlock their true potential.",
  },
  {
    icon: (
      <UsersThreeIcon size={32} weight="duotone" className="text-primaryCyan" />
    ),
    title: "Empowering Every Child",
    description:
      "We believe every child can master mathematics and develop strong problem-solving abilities.",
  },
  {
    icon: (
      <InfinityIcon size={32} weight="duotone" className="text-primaryCyan" />
    ),
    title: "Blending Tradition with Innovation",
    description:
      "Our programs combine classic Abacus techniques with modern teaching methods for lasting results.",
  },
];

const AboutUs = () => {
  return (
    <section
      className="py-16 sm:py-24 space-y-12 sm:space-y-20 w-full bg-[#f8f9fa]"
      id="about"
    >
      {/* Heading */}
      <Header
        title="About Power O Brain"
        description="We are passionate about unlocking every child's potential through
         innovative Abacus education methods."
      />

      {/* Our Story */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-5 sm:px-10 lg:px-32">
        {/* Left Column (Text) */}
        <div className="flex flex-col gap-8 sm:gap-10 w-full lg:w-1/2">
          {aboutPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-4 sm:gap-5">
              <div>{point.icon}</div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-center w-full lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src={AboutImg}
            alt="About Power O Brain"
            className="rounded-2xl shadow-lg w-72 sm:w-96 md:w-[28rem] lg:w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
