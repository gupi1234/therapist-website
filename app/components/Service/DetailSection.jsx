"use client";

import Image from "next/image";
import Link from "next/link";

const DetailSection = ({ service }) => {
  return (
    <section className="bg-white text-slate-800 py-20 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2">
        {/* Left text */}
        <div>
          {service.subtitle && (
            <p className="text-sm font-semibold bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-1 rounded-full inline-block mb-2 shadow-md">
              {service.subtitle}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl logo font-bold text-gray-900 mb-4">
            {service.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Pain Points */}
          {service.painPoints?.map((p, idx) => (
            <div
              key={idx}
              className="border-l-4 border-teal-500 bg-teal-50/40 rounded-r-lg p-4 mb-4"
            >
              <h3 className="font-semibold logo text-teal-800">{p.heading}</h3>
              <p className="text-sm text-gray-500">{p.text}</p>
            </div>
          ))}

          {/* CTA Buttons */}
          <Link href="#contact">
            <div className="flex flex-wrap gap-4 cursor-pointer mt-12">
              {(service.ctaButtons || []).map((btn, i) => {
                const baseClass =
                  "px-5 py-3 rounded-full cursor-pointer font-medium transition duration-300 ease-in-out";
                const styles =
                  btn.style === "primary"
                    ? "bg-teal-600 text-white hover:bg-teal-700 shadow"
                    : "border border-teal-900 text-teal-900  hover:bg-teal-100";
                return (
                  <button key={i} className={`${baseClass} ${styles}`}>
                    {btn.text}
                  </button>
                );
              })}
            </div>
          </Link>
        </div>

        {/* Right image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={service.sideImage || service.image}
            alt={`${service.title} side`}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
          {/* Highlights */}
          {service.bottomHighlights && (
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent text-white p-5 space-y-2">
              <h3 className="font-semibold text-lg">
                You Are God’s Masterpiece — Let’s Uncover That Truth
              </h3>
              <ul className="text-sm space-y-1">
                {service.bottomHighlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span>{h.icon}</span>
                    <span>{h.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
