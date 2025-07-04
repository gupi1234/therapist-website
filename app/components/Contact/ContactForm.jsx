"use client";

import { useState } from "react";
import InputField from "./ContactFields/InputField ";
import TextAreaField from "./ContactFields/TextAreaField ";
import SelectField from "./ContactFields/SelectField ";
import CheckboxField from "./ContactFields/CheckboxField ";
import SubmitButton from "./SubmitButton ";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    method: "",
    agree: false,
    captchaChecked: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.phone.trim()) errs.phone = "Phone is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.message.trim()) errs.message = "Message is required";
    if (!formData.time.trim()) errs.time = "Preferred time is required";
    if (!formData.method) errs.method = "Select a method";
    if (!formData.agree) errs.agree = "Consent required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("Form submitted ✅");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-teal-100 bg-white/60 p-8 shadow-xl backdrop-blur-lg md:p-10"
    >
      <h2 className="text-center text-2xl md:text-3xl logo font-extrabold text-teal-600">
        Get In Touch
      </h2>
      <p className="text-sm md:text-base text-slate-600 mb-6 text-center">
        Simply fill out the brief fields below and Dr. Serena will be in touch
        within one business day.
      </p>

      <InputField
        label="Name"
        type="text"
        id="name"
        value={formData.name}
        onChange={(val) => setFormData({ ...formData, name: val })}
        error={errors.name}
        placeholder="Your full name"
      />
      <InputField
        label="Email"
        type="email"
        id="email"
        value={formData.email}
        onChange={(val) => setFormData({ ...formData, email: val })}
        error={errors.email}
        placeholder="you@example.com"
      />
      <InputField
        label="Phone"
        type="tel"
        id="phone"
        value={formData.phone}
        onChange={(val) => setFormData({ ...formData, phone: val })}
        error={errors.phone}
        placeholder="(555) 234‑5678"
      />
      <TextAreaField
        label="Message"
        id="message"
        value={formData.message}
        onChange={(val) => setFormData({ ...formData, message: val })}
        error={errors.message}
      />
      <InputField
        label="Preferred Contact Time"
        type="text"
        id="time"
        value={formData.time}
        onChange={(val) => setFormData({ ...formData, time: val })}
        error={errors.time}
        placeholder="Mornings, Afternoons..."
      />
      <SelectField
        label="Preferred Contact Method"
        id="method"
        value={formData.method}
        onChange={(val) => setFormData({ ...formData, method: val })}
        error={errors.method}
        options={[
          { value: "", label: "Select preferred method" },
          { value: "phone", label: "Phone" },
          { value: "email", label: "Email" },
          { value: "text", label: "Text" },
        ]}
      />

      <CheckboxField
        id="captcha"
        label="I'm not a robot"
        checked={formData.captchaChecked}
        onChange={(val) => setFormData({ ...formData, captchaChecked: val })}
        image
      />

      <div className="flex items-center gap-3 ">
        <input
          type="checkbox"
          id="agree"
          checked={formData.agree}
          onChange={(e) =>
            setFormData({ ...formData, agree: e.target.checked })
          }
          className=" h-4 w-4 shrink-0 rounded-md border border-gray-300 accent-teal-600   transition"
        />
        <label
          htmlFor="agree"
          className="text-sm text-slate-500 leading-snug cursor-pointer"
        >
          I agree to be contacted
        </label>
      </div>

      {errors.agree && (
        <p className="text-xs text-red-500 mt-1">{errors.agree}</p>
      )}

      <SubmitButton />

      <p className="mt-4 text-center text-xs text-slate-500">
        © By clicking submit you consent to receive texts and emails from Dr.
        Serena Blake
      </p>
    </form>
  );
};

export default ContactForm;
