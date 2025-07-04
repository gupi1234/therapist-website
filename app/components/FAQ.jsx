"use client";

import { useState } from "react";
import { siteData } from "../data/data";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="w-full bg-gradient-to-b from-white via-[#f0fdfa] to-[#e0f7f7] py-20 px-4 sm:px-6 md:px-10 text-slate-800 border-t border-teal-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="logo text-3xl md:text-5xl font-bold text-[#0f766e] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about therapy, policies, and
            sessions.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {siteData.faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-md ${
                  isOpen
                    ? "border-teal-500 bg-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex justify-between items-center w-full text-left px-5 py-4 sm:py-5 cursor-pointer"
                >
                  <span className="text-lg md:text-2xl font-semibold text-teal-900">
                    {item.question}
                  </span>

                  <FaChevronDown
                    className={`text-teal-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`px-5 text-gray-500 text-base md:text-lg leading-relaxed transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-[500px] py-2 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
