"use client";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-teal-50 via-cyan-50 to-white py-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-center logo text-4xl md:text-5xl font-extrabold text-teal-800 tracking-tight mb-12">
          Book a Consultation
        </h2>

        <div className="grid gap-10 lg:grid-cols-10">
          <div className="lg:col-span-3">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
