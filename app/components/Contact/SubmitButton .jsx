"use client";

const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] focus:outline-none cursor-pointer "
    >
      <span className="absolute inset-0 -translate-x-full bg-black/20 transition-all duration-500 group-hover:translate-x-0" />
      <span className="relative">Submit</span>
    </button>
  );
};

export default SubmitButton;
