"use client";

const CheckboxField = ({ id, label, checked, onChange, error, image }) => {
  return (
    <>
      <div className="flex w-[90%] xs:w-[80%]  md:w-[65%] xl:w-[40%] items-center gap-4 rounded-lg border border-slate-200 bg-white/80 p-3 shadow-sm">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-5 w-5 rounded accent-teal-600"
        />
        <label
          htmlFor={id}
          className="cursor-pointer text-sm lg:text-base font-medium text-slate-700"
        >
          {label}
        </label>
        {image && (
          <div className="ml-auto h-10 w-20 opacity-80">
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="Google reCAPTCHA logo"
              className="h-full w-full object-contain"
            />
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </>
  );
};

export default CheckboxField;
