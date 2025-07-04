"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdBookmarkAdded } from "react-icons/md";

const DescImageAccordion = ({ service, accordions = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="py-12 px-4 sm:px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div>
          {service?.badge && (
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md inline-block">
              {service.badge}
            </span>
          )}

          {service?.introHeadline && (
            <h2 className="mt-4 text-3xl max-w-2xl logo md:text-4xl font-bold text-gray-900 leading-tight">
              {service.introHeadline}
            </h2>
          )}

          {service?.introCopy && (
            <p className="mt-4 max-w-xl text-gray-500">{service.introCopy}</p>
          )}
        </div>

        {/* Image + Accordions */}
        <div className="mt-10 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
            <Image
              src={service.descImage}
              alt={service.title}
              width={500}
              height={500}
              className="object-cover rounded-xl"
            />
          </div>

          <div className="w-full md:w-1/2  space-y-4">
            {accordions.map((item, i) => (
              <div
                key={i}
                className="bg-white border  border-gray-200 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center cursor-pointer justify-between px-4 py-3 text-left"
                >
                  <div className="flex items-center gap-3 font-semibold text-gray-800 text-md">
                    <span className="text-xl">{item.icon}</span>
                    {item.title}
                  </div>
                  {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {openIndex === i && (
                  <div className="px-4 pb-4 text-gray-700 text-sm space-y-3">
                    <p>{item.content}</p>

                    {item.button && (
                      <Link
                        href={item.button.link}
                        className="mt-2 inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700  text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-sm"
                      >
                        <MdBookmarkAdded className="text-lg" />
                        {item.button.text}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescImageAccordion;
