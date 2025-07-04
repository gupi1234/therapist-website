"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdOutlineAutoAwesome } from "react-icons/md";

const HeroSection = ({ image, title }) => {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] mt-28 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute flex-col gap-4 inset-0 bg-black/60 flex items-center justify-center">
        <div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl">
            {title}
          </h1>
          <div className="mt-4">
            <p className="text-md md:text-lg flex items-center justify-center text-gray-400 font-semibold mb-2">
              Available for sessions...
            </p>
            <p className=" text-sm  sm:text-md  flex items-center justify-center  md:text-lg text-white font-semibold mb-4">
              🗓️ In-Person: Tue & Thu | 💻 Online: Mon, Wed & Fri
            </p>
          </div>
        </div>

        <a href="#contact">
          <button className=" inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-full shadow cursor-pointer hover:bg-teal-700 transition duration-300">
            <MdOutlineAutoAwesome className="text-xl animate-bounce" />
            Book a Free Consult
          </button>
        </a>
      </div>

      {/* Badges */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform z-10 px-4 w-full max-w-screen-sm scrollbar-hide  overflow-x-auto whitespace-nowrap md:overflow-visible">
        <div className="flex justify-center items-center gap-3 text-sm font-medium min-w-max">
          <span className="flex items-center gap-1 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white">
            <FaStar className="text-yellow-400" /> 500+ Sessions
          </span>
          <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white">
            8 Years of Experience
          </span>
          <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white underline underline-offset-2">
            Trauma & Anxiety Support
          </span>
          <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white underline underline-offset-2">
            Relationship Therapy
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
