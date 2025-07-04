"use client";

const SelectField = ({ label, id, value, onChange, error, options }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-teal-800"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2.5 rounded-lg border bg-white/80 backdrop-blur-md text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${
          error ? "border-red-500" : "border-slate-200"
        }`}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default SelectField;
