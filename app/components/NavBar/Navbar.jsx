"use client";

import { useState, useEffect, useRef } from "react";
import { siteData } from "../../data/data";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  const { therapist, services, hero } = siteData;

  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 inset-x-0 z-50 bg-gray-100 shadow-sm">
      <TopBar
        phone={therapist.phone}
        location={therapist.location}
        visible={!scrolled}
      />

      <MainNav
        therapist={therapist}
        services={services}
        hero={hero}
        scrolled={scrolled}
        servicesOpen={servicesOpen}
        setServicesOpen={setServicesOpen}
        menuRef={menuRef}
        timeoutRef={timeoutRef}
        setDrawerOpen={setDrawerOpen}
      />

      <MobileDrawer
        therapist={therapist}
        hero={hero}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
    </header>
  );
};

export default Navbar;
