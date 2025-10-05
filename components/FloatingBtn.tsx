"use client";

import { CalendarCheckIcon } from "@phosphor-icons/react";

const FloatingBtn = () => {
  return (
    <div className="px-6 py-3 rounded-full fixed right-7 bottom-7 bg-gradient-to-r from-[#FF6B6B] to-[#FECA57] text-white flex items-center gap-2 animate-bounce font-nunito font-bold cursor-pointer shadow-lg shadow-[#ff6b6b4d] hover:shadow-xl hover:shadow-[#ff6b6b66] basic-transition ease-in-out">
      <CalendarCheckIcon weight="duotone" className="text-xl" /> Book Free Demo
    </div>
  );
};

export default FloatingBtn;
