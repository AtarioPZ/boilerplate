"use client";

import React, { useState } from "react";

import CustomSection from "@/components/Layout/CustomSection";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.succes) {
        setSuccessMessage("Your message has been sent successfully!");
        setErrorMessage(null);
        setFormData({
          name: "",
          email: "",
        });
      } else {
        setErrorMessage(
          "There was an error in sending your message. Please try again."
        );
        setSuccessMessage(null);
      }
    } catch {
      setErrorMessage(
        "There was an error in sending your message. Please try again."
      );
      setSuccessMessage(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center py-6">
      <CustomSection>
        <form
          onSubmit={handleSubmit}
          className="max-w-[700px] flex flex-col gap-8 rounded-lg shadow-sm border border-gray-200 px-6 py-4"
        >
          <div className="flex gap-3">
            <label>Name:</label>
            <input
              type="text"
              aria-label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full shadow-md rounded-[6px] px-2"
            />
          </div>
          <div className="flex gap-3">
            <label>Email:</label>
            <input
              type="email"
              aria-label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full shadow-md rounded-[6px] px-2"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`border border-black w-fit rounded-lg px-4 py-1`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {successMessage && (
            <div className="text-green-500 mt-4">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="text-red-500 mt-4">{errorMessage}</div>
          )}
        </form>
      </CustomSection>
    </section>
  );
};

export default Contact;
