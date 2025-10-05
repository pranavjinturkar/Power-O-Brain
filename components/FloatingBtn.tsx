"use client";

import { CalendarCheckIcon } from "@phosphor-icons/react";

const FloatingBtn = () => {
  return (
    <div className="hidden sm:flex px-4 py-2 sm:px-6 sm:py-3 rounded-full fixed right-5 sm:right-7 bottom-5 sm:bottom-7 z-50 bg-gradient-to-r from-[#FF6B6B] to-[#FECA57] text-white items-center gap-2 animate-bounce font-nunito font-bold cursor-pointer shadow-lg shadow-[#ff6b6b4d] hover:shadow-xl hover:shadow-[#ff6b6b66] basic-transition ease-in-out">
      <CalendarCheckIcon weight="duotone" className="text-lg sm:text-xl" /> Book
      Free Demo
    </div>
  );
};

export default FloatingBtn;
