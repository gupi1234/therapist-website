"use client";

import { useParams } from "next/navigation";
import { siteData } from "../../data/data";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer";
import FAQ from "@/app/components/FAQ";
import Contact from "@/app/components/Contact/Contact";

import HeroSection from "@/app/components/Service/HeroSection";
import DetailSection from "@/app/components/Service/DetailSection";
import DescImageAccordion from "@/app/components/Service/DescImageAccordion";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = siteData.services.find((s) => s.slug === slug);

  if (!service)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-bold text-xl">
        Service not found!
      </div>
    );

  return (
    <>
      <Navbar />
      <HeroSection image={service.image} title={service.title} />
      <DetailSection service={service} />
      {/* 👉 pass service.accordions */}
      <DescImageAccordion service={service} accordions={service.accordions} />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default ServiceDetail;
