"use client";
import React, { useState } from "react";
import Header from "./Header";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";

const faqs = [
  {
    id: 1,
    question: "What age is best to start Abacus learning?",
    answer:
      "Children can start Abacus learning as early as 4-5 years old. Our programs are designed for different age groups, starting from Foundation Level (ages 4-6) to Advanced Level (ages 13-15).",
  },
  {
    id: 2,
    question: "How long does it take to see results?",
    answer:
      "Most students show improvement in mental math skills within 3-6 months of regular practice. However, the timeline varies based on individual learning pace and practice consistency.",
  },
  {
    id: 3,
    question: "Do you offer online classes?",
    answer:
      "Yes, we offer both in-person and online classes. Our online platform provides the same quality of instruction with interactive tools and real-time feedback.",
  },
  {
    id: 4,
    question: "What materials are provided?",
    answer:
      "We provide all necessary Abacus tools, workbooks, and practice materials. Students receive a complete kit that includes an Abacus, practice books, and access to our digital learning platform.",
  },
  {
    id: 5,
    question: "How often should my child practice?",
    answer:
      "We recommend 15-20 minutes of daily practice for optimal results. Regular practice is key to developing mental math skills and maintaining progress.",
  },
];

const FrequentlyAskedQsn = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-24 w-full bg-gradient-to-b from-white to-[#f8f9fa]">
      <Header
        title="Frequently Asked Questions"
        description="Find answers to common questions about our Abacus learning programs."
      />

      <div className="max-w-4xl mx-auto mt-10 space-y-4 px-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:bg-gray-100"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-nunito">
                {faq.question}
              </h3>
              <span className="text-primaryCyan transition-transform duration-300">
                {activeId === faq.id ? (
                  <CaretUpIcon size={24} weight="bold" />
                ) : (
                  <CaretDownIcon size={24} weight="bold" />
                )}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`px-6 transition-all duration-500 ease-in-out ${
                activeId === faq.id
                  ? "max-h-40 opacity-100 py-3"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p className="text-gray-600 text-base leading-relaxed font-roboto">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQsn;
