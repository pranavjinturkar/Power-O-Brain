"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Abacus from "@/public/Abacus.png";

type ExperienceTrained = {
  label: string;
  count: number;
};

const experience: ExperienceTrained[] = [
  { label: "Students Trained", count: 5000 },
  { label: "Franchise Centers", count: 25 },
  { label: "Years Experience", count: 15 },
  { label: "% Success Rate", count: 98 },
];

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="home"
      className="py-24 pt-40 w-full bg-gradient-to-br from-purple-500 to-sky-700"
    >
      {/* top section */}
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-16 px-6 sm:px-10 lg:px-32 mb-32 lg:mb-48">
        {/* Left text */}
        <div className="w-full flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold font-fredoka leading-snug">
            Unlock Your Child&apos;s <br />
            <span className="text-[#fedc65]">Brain Power</span> with <br />
            Abacus!
          </h1>

          <h3 className="text-base sm:text-lg lg:text-xl font-roboto text-white/90 max-w-2xl">
            Transform learning into an exciting adventure! Our interactive
            Abacus programs boost memory, concentration, and mathematical skills
            through fun, engaging methods.
          </h3>

          <button className="bg-primaryCyan text-white font-roboto font-semibold px-6 py-3 rounded-full text-lg sm:text-xl hover:bg-primaryCyan/80 transition-all shadow-lg">
            Book Free Demo Class
          </button>
        </div>

        {/* Right image */}
        <div className="w-full flex items-center justify-center lg:justify-end pr-0 lg:pr-10">
          <Image
            src={Abacus}
            alt="Abacus"
            className="w-64 sm:w-80 lg:size-96 rounded-md object-contain"
            priority
          />
        </div>
      </div>

      {/* stats section */}
      <div
        ref={statsRef}
        className="mx-auto flex flex-wrap justify-center items-center gap-10 lg:gap-0 lg:justify-between w-[90%] lg:w-5xl bg-white rounded-xl px-6 sm:px-10 lg:px-20 py-10 sm:py-14 lg:py-16 shadow-lg"
      >
        {experience.map((item, index) => (
          <StatItem
            key={index}
            label={item.label}
            count={item.count}
            visible={visible}
          />
        ))}
      </div>
    </section>
  );
};

const StatItem = ({
  label,
  count,
  visible,
}: {
  label: string;
  count: number;
  visible: boolean;
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 3000; // 2 seconds
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * count);
      setValue(currentValue);

      if (progress < 1) requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);
  }, [visible, count]);

  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 w-1/2 sm:w-1/3 lg:w-auto">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider text-primaryCyan font-fredoka">
        {value}
      </h3>
      <p className="text-base sm:text-lg lg:text-xl text-black font-roboto text-center">
        {label}
      </p>
    </div>
  );
};

export default Hero;
