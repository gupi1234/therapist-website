"use client";

import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";

const ContactInfo = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#e0f7f7] to-white  border box border-teal-100 shadow-xl rounded-2xl p-6 sm:p-8 space-y-10 transition-all duration-300">
      {/* Office Address */}
      <div>
        <h3 className="text-xl font-semibold text-teal-800 flex items-center gap-2 mb-3 logo">
          <span className="bg-teal-100 p-2 rounded-full">
            <FaMapMarkerAlt className="text-teal-600" />
          </span>
          Our Office
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed ml-2">
          1287 Maplewood Drive
          <br />
          Los Angeles, CA 90026
        </p>
        <a
          href="https://www.google.com/maps?q=1287+Maplewood+Drive+Los+Angeles+CA+90026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-teal-600 mt-3 ml-2 hover:underline hover:text-teal-800 transition"
        >
          View on Google Maps <FaExternalLinkAlt className="w-3 h-3" />
        </a>
      </div>

      {/* Office Hours */}
      <div>
        <h3 className="text-xl font-semibold text-teal-800 flex items-center gap-2 mb-3 logo">
          <span className="bg-teal-100 p-2 rounded-full">
            <FaClock className="text-teal-600" />
          </span>
          Hours
        </h3>
        <ul className="text-gray-700 text-sm ml-2 space-y-3">
          <li className="flex items-start gap-2">
            <FaPersonCirclePlus className="text-teal-500 mt-1" />
            <span>
              In-person:{" "}
              <span className="font-medium text-teal-800">Tue & Thu</span>, 10
              AM – 6 PM
            </span>
          </li>
          <li className="flex items-start gap-2">
            <SiGooglemeet className="text-teal-500 mt-1" />
            <span>
              Virtual:{" "}
              <span className="font-medium text-teal-800">Mon, Wed & Fri</span>,
              1 PM – 5 PM
            </span>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold text-teal-800 flex items-center gap-2 mb-3 logo">
          <span className="bg-teal-100 p-2 rounded-full">
            <FaPhoneAlt className="text-teal-600" />
          </span>
          Contact
        </h3>
        <p className="text-gray-700 text-sm ml-2">
          Phone:{" "}
          <a
            href="tel:3235550192"
            className="text-teal-600 hover:underline hover:text-teal-800 transition"
          >
            (323) 555-0192
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
