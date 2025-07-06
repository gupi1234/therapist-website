"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";

const MobileDrawer = ({ therapist, hero, drawerOpen, setDrawerOpen }) => (
  <>
    {drawerOpen && (
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setDrawerOpen(false)}
      />
    )}

    <aside
      className={`fixed inset-y-0 right-0 w-3/4 max-w-sm bg-gray-100 text-teal-900 px-6 pt-4 pb-10 z-50 transform transition-transform duration-300 ease-in-out ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 p-2 rounded-full border border-teal-900"
        onClick={() => setDrawerOpen(false)}
        aria-label="Close navigation menu"
      >
        <FaTimes className="w-4 h-4" />
      </button>

      {/* Logo */}
      <Link href="/#hero" scroll={true}>
        <div
          id="/"
          className="flex items-center mt-12 cursor-pointer gap-3 mt-4"
        >
          <Image
            src={therapist.logo}
            alt="Logo"
            width={40}
            height={40}
            className="w-8 h-8 rounded-full  object-contain border border-[#2d96d7]/40 shadow-sm"
          />
          <div>
            <h1 className="text-sm font-bold bg-gradient-to-r from-[#2d96d7] to-[#099fcd] text-transparent bg-clip-text leading-tight">
              {therapist.name}
            </h1>
            <p className="text-[10px] sm:text-xs text-[#0594bc] font-medium">
              {therapist.title}
            </p>
          </div>
        </div>
      </Link>

      {/* Links */}
      <nav className="mt-8 flex flex-col gap-4 text-lg">
        {["services", "about", "testimonials", "faqs", "contact"].map((id) => (
          <Link
            key={`m-${id}`}
            href={`/#${id}`}
            className="hover:bg-white px-3 py-1.5 rounded-lg"
            onClick={() => setDrawerOpen(false)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}

        <Link
          href="/#contact"
          className="mt-4 text-sm sm:text:md inline-flex items-center justify-center gap-2 px-4 py-3 font-medium border border-teal-700 rounded-md bg-white text-teal-700 transition hover:bg-teal-700 hover:text-white"
          onClick={() => setDrawerOpen(false)}
        >
          <MdAutoAwesome className="w-5 h-5" />
          <span>{hero.cta}</span>
        </Link>
      </nav>
    </aside>
  </>
);

export default MobileDrawer;
