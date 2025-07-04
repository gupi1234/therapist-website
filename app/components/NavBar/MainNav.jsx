"use client";

import Image from "next/image";
import Link from "next/link";
import { MdAutoAwesome } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";

const MainNav = ({
  therapist,
  services,
  hero,
  scrolled,
  servicesOpen,
  setServicesOpen,
  menuRef,
  timeoutRef,
  setDrawerOpen,
}) => (
  <nav
    role="navigation"
    aria-label="Main Navigation"
    className={`flex justify-between items-center px-4 lg:px-18 py-4 transition-all duration-500 ${
      scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-gray-100"
    }`}
  >
    {/* Logo */}
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
          <h1 className="text-lg lg:text-2xl font-bold bg-gradient-to-r from-[#2d96d7] to-[#099fcd] text-transparent bg-clip-text leading-tight">
            {therapist.name}
          </h1>
          <p className="text-sm lg:text-base text-[#0594bc] font-medium">
            {therapist.title}
          </p>
        </div>
      </div>
    </Link>

    {/* Desktop Menu */}
    <ul className="hidden xl:flex items-center gap-6 text-xl font-[400] relative">
      <li
        ref={menuRef}
        className="relative px-3 py-1.5 rounded-lg cursor-pointer hover:bg-white"
        onMouseEnter={() => {
          clearTimeout(timeoutRef.current);
          setServicesOpen(true);
        }}
        onMouseLeave={() => {
          timeoutRef.current = setTimeout(() => setServicesOpen(false), 300);
        }}
      >
        <a href="/#services">Services</a>

        {servicesOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[clamp(18rem,50vw,38rem)] bg-gray-100 border border-gray-300 rounded-xl shadow-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 z-50">
            {services.map((s, i) => (
              <Link
                key={i}
                href={`/services/${s.title
                  .toLowerCase()
                  .replace(/ & | /g, "-")}`}
                onClick={() => setServicesOpen(false)}
                className="group flex items-start gap-4 p-4 rounded-lg border border-gray-500 box-shadow hover:shadow transition-all"
              >
                <div className="w-12 h-12 min-w-[48px] flex items-center justify-center rounded-full bg-[#e0f7fa]">
                  <Image
                    src={s.logo}
                    alt={s.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold mb-1 text-gray-900 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {s.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </li>

      {["about", "testimonials", "faqs", "contact"].map((id) => (
        <li
          key={id}
          className="hover:bg-white px-3 py-1.5 rounded-lg cursor-pointer"
        >
          <Link href={`/#${id}`}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        </li>
      ))}
    </ul>

    {/* Desktop CTA  Button*/}
    <Link
      href="/#contact"
      className="hidden xl:inline-flex items-center gap-2 px-4 py-3 font-medium border border-teal-700 rounded-md bg-white text-teal-700 transition hover:bg-teal-700 hover:text-white hover:scale-105"
    >
      <MdAutoAwesome className="w-6 h-6" />
      <span>{hero.cta}</span>
    </Link>

    {/* Mobile Menu Button */}
    <button
      className="xl:hidden p-2 rounded-md"
      onClick={() => setDrawerOpen(true)}
      aria-label="Open navigation menu"
    >
      <RiMenu2Line className="w-8 h-8" />
    </button>
  </nav>
);

export default MainNav;
