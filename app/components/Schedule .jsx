"use client";

import { GiHealing } from "react-icons/gi";

const Schedule = () => {
  return (
    <section className="w-full md:mt-10 bg-gradient-to-r from-[#e0f7f7] to-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
        <div className="flex-1">
          <h1 className="text-3xl logo sm:text-4xl md:text-5xl font-[800] text-[#0f766e] mb-4">
            Schedule A Consultation
          </h1>
          <h3 className="text-base sm:text-lg text-gray-500 max-w-xl">
            Serena Blake is currently accepting new clients. <br />
            Available for online and in-person sessions.
          </h3>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white text-base font-medium rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 animate-bounce"
        >
          <GiHealing className="text-lg animate-pulse" />
          Start Healing
        </a>
      </div>
    </section>
  );
};

export default Schedule;
