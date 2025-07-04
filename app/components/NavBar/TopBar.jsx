"use client";

import { TbPhoneCall } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";

const TopBar = ({ phone, location, visible }) => {
  if (!visible) return null;

  return (
    <div className="flex justify-between items-center bg-[#fff0ec] text-sm px-4 lg:px-20 py-2 border-b transition-all duration-300">
      <div className="flex items-center gap-2">
        <TbPhoneCall className="w-4 h-4" />
        <span>{phone}</span>
      </div>
      <div className="flex items-center gap-2 max-w-[200px] truncate lg:max-w-none">
        <LuMapPin className="w-4 h-4 min-w-[16px]" />
        <span className="truncate">{location}</span>
      </div>
    </div>
  );
};

export default TopBar;
