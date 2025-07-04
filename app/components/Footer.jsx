"use client";

import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { siteData } from "../data/data";
import Link from "next/link";

const Footer = () => {
  const { therapist } = siteData;

  return (
    <footer className="w-full bg-teal-900 text-white pt-14 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        <div className="flex flex-col items-start ">
          <Link href="/#hero" scroll={true}>
            <div id="/" className="flex items-center cursor-pointer gap-3">
              <Image
                src={therapist.logo}
                alt="Logo"
                width={48}
                height={48}
                className="w-14 h-14 rounded-full object-contain border border-[#2d96d7]/40 shadow-sm"
              />
              <div>
                <h1 className="text-lg md:text-lg lg:text-2xl logo font-bold bg-gradient-to-r from-[#2d96d7] to-[#099fcd] text-transparent bg-clip-text leading-tight">
                  {therapist.name}
                </h1>
                <p className="text-sm lg:text-base text-[#0594bc] font-medium">
                  {therapist.title}
                </p>
              </div>
            </div>
          </Link>

          <p className="text-sm opacity-80 leading-relaxed mt-4 max-w-sm">
            Licensed Clinical Psychologist (PsyD) in Los Angeles. Helping you
            heal from anxiety, trauma & relationship challenges with
            compassionate, evidence‑based care.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 logo">Contact Info</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-0.5 text-teal-300" />
              {therapist.location}
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-teal-300" />
              {therapist.phone}
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-teal-300" />
              <a href={`mailto:${therapist.email}`} className="hover:underline">
                {therapist.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Office Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4 logo    ">Office Hours</h3>
          <ul className="text-sm opacity-90 space-y-2">
            <li>
              <span className="font-medium">In‑Person:</span> Tue & Thu,
              10 AM – 6 PM
            </li>
            <li>
              <span className="font-medium">Virtual (Zoom):</span> Mon, Wed &
              Fri, 1 PM – 5 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {therapist.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
