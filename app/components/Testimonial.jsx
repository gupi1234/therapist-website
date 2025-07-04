"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { siteData } from "../data/data";

const Testimonial = () => {
  const { testimonials } = siteData;
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-gradient-to-b from-white via-[#d2e6e7] to-[#ffffff] py-20 px-4 sm:px-6 md:px-10 text-slate-800"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-center mb-6">
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-1.5 text-sm rounded-full font-medium shadow-sm">
            Client Success Stories &amp; Testimonials
          </span>
        </div>

        <div className="text-center mb-12">
          <h2 className="logo text-3xl md:text-5xl logo font-bold text-[#0f766e] mb-4">
            What Clients Are Saying
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Real experiences from individuals who have worked with Dr. Blake.
          </p>
        </div>

        <button
          onClick={() => scroll("left")}
          aria-label="scroll testimonials left"
          className="absolute -left-20 top-1/2 -translate-y-1/2 hidden xl:flex bg-white border cursor-pointer border-[#279191] shadow-md rounded-full p-2 z-10"
        >
          <FaChevronLeft className="text-teal-600 text-xl" />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="scroll testimonials right"
          className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:flex cursor-pointer bg-white border border-[#279191] shadow-md rounded-full p-2 z-10"
        >
          <FaChevronRight className="text-teal-600 text-xl" />
        </button>

        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 md:space-x-8 min-w-max pb-2">
            {testimonials.map(({ name, quote, profile }, idx) => (
              <div
                key={idx}
                className="min-w-[300px] max-w-[320px] sm:min-w-[340px] sm:max-w-[360px] bg-white border border-[#cfeeee] p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={profile}
                    alt={name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border border-[#cfeeee]"
                  />
                  <p className="ml-3 text-sm font-medium text-teal-800">
                    {name}
                  </p>
                </div>

                {/* Quote */}

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  “{quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
