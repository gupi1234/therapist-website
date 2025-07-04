"use client";

import Image from "next/image";
import { siteData } from "../data/data";
import { FaAward } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Schedule from "./Schedule ";

const About = () => {
  const { therapist } = siteData;

  return (
    <>
      <Schedule />
      <section
        id="about"
        className="w-full py-20 px-6 bg-gradient-to-b from-white via-[#f0fdfa] to-[#e0f7f7] text-slate-800"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[380px] sm:h-[420px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-[#cfeeee]">
            <Image
              src={therapist.Profile}
              alt="Dr. Serena Blake"
              fill
              className="object-cover rounded-3xl"
              priority
            />

            <div
              className="
      absolute bottom-2 md:bottom-2 left-1/2 -translate-x-1/2 
      bg-white border border-[#cfeeee] shadow-xl 
      px-4 py-2 rounded-2xl 
      flex flex-col items-center 
      text-[11px] sm:text-sm 
      font-medium text-teal-800 
      w-[70%] sm:w-[50%] md:w-[85%] lg:w-[60%]
    "
            >
              <p className="mb-1 text-center">Dr. Serena Blake, PsyD</p>
              <div className="flex items-center gap-1 sm:gap-2 text-center flex-wrap justify-center">
                <FaStar className="text-yellow-400 text-base" />
                <p className="whitespace-nowrap">
                  Top Rated • 8+ Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="text-slate-800">
            <div className="bg-gradient-to-r from-teal-400 to-teal-600 text-white   px-4 py-1.5 rounded-full inline-block text-xs sm:text-sm font-medium mb-6 shadow-sm">
              About {therapist.name}, – Licensed Clinical Psychologist in Los
              Angeles
            </div>
            <h2 className=" logo text-3xl sm:text-2xl lg:text-4xl font-extrabold text-[#0f766e] mb-4 leading-snug">
              Meet {therapist.name}
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-gray-700 mb-6">
              {therapist.name} is a licensed Clinical Psychologist with over{" "}
              <strong className="text-[#0f766e]">8 years</strong> of experience
              helping individuals and couples work through anxiety, trauma, and
              relationship challenges. She blends Cognitive Behavioral Therapy
              (CBT), mindfulness, and trauma-informed care for effective
              outcomes.
            </p>
            <p className="text-base lg:text-lg text-gray-700">
              Her mission is to provide a warm, safe space where clients feel
              heard, supported, and empowered. Whether you’re navigating
              challenges or seeking growth, {therapist.name} is here to help you
              thrive with confidence and clarity.
            </p>
            {/* CTA Button */}
            <div className="flex justify-start items-center mt-5">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-teal-600 text-white text-md font-medium rounded-full shadow hover:bg-teal-700 transition duration-300"
              >
                <MdOutlineEventAvailable className="text-xl font-medium" />
                Schedule a Session
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Featured In Section */}
      <section className="w-full bg-white  py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 bg-gradient-to-r from-[#e0f7f7] via-[#f0fdfa] to-[#e0f7f7] px-4 py-2 rounded-full shadow-md mb-12 w-fit mx-auto">
            <FaAward className="text-[#0f766e] text-xl md:text-2xl" />
            <h3 className="text-xl md:text-2xl font-semibold text-[#0f766e] tracking-wide logo">
              Featured In
            </h3>
          </div>
          <div className="flex flex-wrap cursor-pointer justify-center items-center gap-6 md:gap-12">
            {siteData.featuredIn?.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform.name}
                className="flex items-center justify-center h-12 transition-transform hover:scale-105"
              >
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  width={160}
                  height={40}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
