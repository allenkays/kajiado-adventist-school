"use client";

import { useState } from "react";

export default function AdmissionsForm() {
  const gradesBySection: Record<string, string[]> = {
    "pre-primary": ["PP1", "PP2"],
    primary: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"],
    junior: ["Grade 7", "Grade 8", "Grade 9"],
    senior: ["Grade 10", "Grade 11", "Grade 12"],
  };

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    age: "",
    email: "",
    phone: "",
    section: "",
    grade: "",
    formerSchool: "",
    transferLetter: null as File | null,
    reportCard: null as File | null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      if (name === "section") {
        updated.grade = "";
      }

      if (name === "dob") {
        const birthDate = new Date(value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        updated.age = age.toString();
      }

      return updated;
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
    alert("Application submitted! (frontend only)");
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Admissions
      </h1>

      <p className="text-center opacity-80 mb-8">
        Join Karura Adventist School. Complete the form below to apply.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-background p-6 rounded-xl shadow-md border border-foreground/20 space-y-4"
      >
        {/* Name Fields */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded
                         border border-foreground/30
                         bg-background text-foreground
                         focus:outline-none focus:ring-2 focus:ring-foreground/40"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded
                         border border-foreground/30
                         bg-background text-foreground
                         focus:outline-none focus:ring-2 focus:ring-foreground/40"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded
                         border border-foreground/30
                         bg-background text-foreground
                         focus:outline-none focus:ring-2 focus:ring-foreground/40"
            />
          </div>
        </div>

        {/* DOB & Age */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded
                         border border-foreground/30
                         bg-background text-foreground
                         focus:outline-none focus:ring-2 focus:ring-foreground/40"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              readOnly
              className="w-full px-3 py-2 rounded
                         border border-foreground/20
                         bg-foreground/5 text-foreground"
            />
          </div>
        </div>

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded
                         border border-foreground/30
                         bg-background text-foreground
                         focus:outline-none focus:ring-2 focus:ring-foreground/40"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded
                         border border-foreground/30
                         bg-background text-foreground
                         focus:outline-none focus:ring-2 focus:ring-foreground/40"
            />
          </div>
        </div>

        {/* Section & Grade */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">School Section</label>
            <select
              name="section"
              value={formData.section}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded
                         border border-foreground/30
                         bg-background text-foreground"
            >
              <option value="">Select Section</option>
              <option value="pre-primary">Pre-Primary</option>
              <option value="primary">Primary</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Grade Applying To</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              disabled={!formData.section}
              className="w-full px-3 py-2 rounded
                         border border-foreground/30
                         bg-background text-foreground disabled:opacity-50"
            >
              <option value="">Select Grade</option>
              {formData.section &&
                gradesBySection[formData.section].map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Former School */}
        <div>
          <label className="block mb-1 font-semibold">
            Former School (if any)
          </label>
          <input
            type="text"
            name="formerSchool"
            value={formData.formerSchool}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded
                       border border-foreground/30
                       bg-background text-foreground"
          />
        </div>

        {/* File Uploads */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Transfer Letter</label>
            <input
              type="file"
              name="transferLetter"
              onChange={handleFileChange}
              className="w-full px-3 py-2 rounded
                         border border-foreground/30
                         bg-background text-foreground"
            />
            {formData.transferLetter && (
              <p className="mt-1 text-sm opacity-75">
                Selected file: {formData.transferLetter.name}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold">Report Card</label>
            <input
              type="file"
              name="reportCard"
              onChange={handleFileChange}
              className="w-full px-3 py-2 rounded
                         border border-foreground/30
                         bg-background text-foreground"
            />
            {formData.reportCard && (
              <p className="mt-1 text-sm opacity-75">
                Selected file: {formData.reportCard.name}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-semibold">Message / Notes</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 rounded
                       border border-foreground/30
                       bg-background text-foreground"
          />
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-darkBrown text-cream
                       px-8 py-3 rounded-lg font-semibold
                       hover:opacity-90 transition"
          >
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
}
