import Image from "next/image";
import React from "react";
import Abacus from "@/public/Abacus.png";

type ExperienceTrained = {
  label: string;
  count: number;
};

const experience: ExperienceTrained[] = [
  {
    label: "Students Trained",
    count: 5000,
  },
  {
    label: "Franchise Centers",
    count: 25,
  },
  {
    label: "Years Experience",
    count: 15,
  },
  {
    label: "% Success Rate",
    count: 98,
  },
];

const Hero = () => {
  return (
    <section className="py-24 pt-40 w-full bg-gradient-to-br from-purple-500 to-sky-700" id="home">
      <div className="w-full justify-center flex px-32 mb-48">
        <div className="w-full flex flex-col gap-10 items-start">
          <h1 className="text-6xl text-white font-bold font-fredoka">
            Unlock Your Child&apos;s <br />
            <span className="text-[#fedc65]">Brain Power</span> with <br />
            Abacus!
          </h1>
          <h3 className="text-xl font-roboto text-white">
            Transform learning into an exciting adventure! Our interactive
            Abacus programs boost memory, concentration, and mathematical skills
            through fun, engaging methods.
          </h3>
          <button className="bg-primaryCyan text-white font-roboto font-semibold px-6 py-3 rounded-full text-xl cursor-pointer hover:bg-primaryCyan/80 basic-transition shadow-lg">
            Book Free Demo Class
          </button>
        </div>
        <div className="w-full flex items-center justify-end pr-10">
          <Image src={Abacus} alt="Abacus" className="size-96 rounded-md" />
        </div>
      </div>
      <div className="mx-auto flex items-center justify-between w-5xl bg-white rounded-xl px-20 py-16">
        {experience.map((item, index) => (
          <div className="flex flex-col items-center gap-6" key={index}>
            <h3 className="text-5xl font-semibold tracking-wider text-primaryCyan font-fredoka">
              {item.count}
            </h3>
            <p className="text-xl text-black font-roboto">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
