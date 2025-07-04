"use client";
import React, { useState, useEffect } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { MdOutlineAutoAwesome } from "react-icons/md";

const Hero = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const AnimatedCounter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let current = 0;
      const end = parseInt(target);
      const increment = Math.ceil(end / (duration / 30));

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setCount(current);
      }, 30);

      return () => clearInterval(timer);
    }, [target, duration]);

    return <span>{count}+</span>;
  };

  return (
    <>
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/hero4.jpg')" }}
      >
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 to-[#1e293b]/90 z-0"></div>

        <div className="text-white max-w-6xl mt-28 relative z-10">
          <p className="text-sm md:text-base uppercase tracking-wide text-slate-300 mb-2">
            Dr. Serena Blake, PsyD • Clinical Psychologist, Los Angeles
          </p>
          <h1 className="text-3xl md:text-5xl font-bold my-4">
            Compassionate Therapy for Healing and Growth
          </h1>
          <p className="text-lg md:text-xl text-slate-100 mb-6 leading-relaxed">
            With over 8 years of experience and 500+ sessions, Dr. Blake blends
            cognitive-behavioral therapy and mindfulness to help you overcome
            anxiety, trauma, and relationship challenges.
          </p>

          <div className="relative h-10 mb-4">
            <p
              className={`absolute inset-0 flex items-center justify-center gap-2 text-md md:text-lg font-semibold text-pink-300 transition-opacity duration-1000 ${
                showFirst ? "opacity-100" : "opacity-0"
              }`}
            >
              <FaHeart className="text-red-400" />
              Greater Peace in Your Heart
            </p>
            <p
              className={`absolute inset-0 flex items-center justify-center gap-2 text-md md:text-lg font-semibold text-pink-300 transition-opacity duration-1000 ${
                showFirst ? "opacity-0" : "opacity-100"
              }`}
            >
              <FaHeart className="text-red-400" />
              Greater Purpose in Your Life Direction
            </p>
          </div>

          <p className="text-md md:text-lg font-semibold mb-2">
            Available for sessions...
          </p>
          <p className="text-md md:text-lg text-white font-semibold mb-4">
            🗓️ In-Person: Tue & Thu | 💻 Online: Mon, Wed & Fri
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-sm font-medium">
            <span className="flex items-center gap-1 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              <FaStar className="text-yellow-400" /> 500+ Sessions
            </span>
            <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              8 Years of Experience
            </span>
            <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full underline underline-offset-2">
              Trauma & Anxiety Support
            </span>
            <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full underline underline-offset-2">
              Relationship Therapy
            </span>
          </div>

          {/* CTA Button */}
          <a href="#contact">
            <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-full shadow cursor-pointer hover:bg-teal-700 transition duration-300">
              <MdOutlineAutoAwesome className="text-xl animate-bounce" />
              Book a Free Consult
            </button>
          </a>

          <a
            href="#about"
            className="mt-8 text-sm text-slate-300 animate-bounce block"
          >
            ↓ Scroll to learn more
          </a>
        </div>
      </section>

      {/* Counter Section */}
      <section className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-12 px-4 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <AnimatedCounter target={8} />
            </h1>
            <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
            <p className="text-slate-300">
              Providing compassionate and effective Individual and Couples
              Therapy
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <AnimatedCounter target={500} />
            </h1>
            <h3 className="text-xl font-semibold mb-2">
              Individual Client Sessions
            </h3>
            <p className="text-slate-300">
              Helping individuals and couples heal, grow, and find purpose
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
