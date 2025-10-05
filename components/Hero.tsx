import Image from "next/image";
import React from "react";
import Abacus from "@/public/Abacus.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="mt-24 w-full mb-20 justify-center flex px-32">
      <div className="w-full flex flex-col gap-10 items-start">
        <h1 className="text-6xl text-white font-bold font-fredoka">
          Unlock Your Child's <br />
          <span className="text-[#fedc65]">Brain Power</span> with <br />
          Abacus!
        </h1>
        <h3 className="text-xl font-roboto text-white">
          Transform learning into an exciting adventure! Our interactive Abacus
          programs boost memory, concentration, and mathematical skills through
          fun, engaging methods.
        </h3>
        <button className="bg-primaryCyan text-white font-roboto font-semibold px-6 py-3 rounded-full text-xl">
          Book Free Demo Class
        </button>
      </div>
      <div className="w-full flex items-center justify-center">
        <Image src={Abacus} alt="Abacus" className="size-96 rounded-md" />
      </div>
    </section>
  );
};

export default Hero;
