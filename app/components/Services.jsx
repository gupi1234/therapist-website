"use client";

import Image from "next/image";
import { siteData } from "../data/data";
import { FaHandsHelping } from "react-icons/fa";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="w-full relative py-20 px-6 bg-gradient-to-b from-[#e0f7f7] to-white text-slate-800"
      >
        {/* Leaf background */}
        <div className="hidden md:block absolute right-10 -bottom-15 z-0 pointer-events-none">
          <Image
            src="/images/leaves.webp"
            alt="Decorative Leaf"
            width={250}
            height={250}
            className="opacity-60"
          />
        </div>

        {/* Heading content */}
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg logo">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold flex items-center gap-2">
                <FaHandsHelping className="text-[#0f766e] text-3xl sm:text-4xl" />
                <span className="bg-gradient-to-r from-[#0f766e] to-[#2dd4bf] text-transparent bg-clip-text">
                  How I Help
                </span>
              </h2>
            </div>
            <p className="mt-4 text-base sm:text-lg text-gray-500">
              Evidence‑based care tailored to your needs
            </p>
          </div>

          {/* Service Cards */}
          <div className="max-w-6xl mx-auto grid  gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {siteData.services.map((srv, i) => (
              <article
                key={i}
                className="group bg-white border border-[#cfeeee] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={srv.logo}
                      alt={srv.title + " Icon"}
                      width={24}
                      height={24}
                    />
                    <h3 className="text-xl font-bold text-[#0f766e]">
                      {srv.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed flex-grow">
                    {srv.description}
                  </p>
                  <Link
                    href={`/services/${srv.title
                      .toLowerCase()
                      .replace(/ & | /g, "-")}`}
                    className="mt-6 inline-block self-start text-md font-medium text-teal-700 hover:text-teal-900 transition"
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
