"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Message sent! (frontend only)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      {/* Contact Form */}
      <div>
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              rows={6}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Address:</span> Karura SDA Church School,<br/> Red Hill Road,<br/> P.O. Box 63445-00619 Muthaiga,<br/> Nairobi, Kenya
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Principal’s Office:</span> 020 2067850
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Secondary Division:</span> +254 729 852 044
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Primary Division:</span> +254 703 568 897
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Email:</span> info@karuraschool.ac.ke
          </p>
        </div>

        {/* Google Map */}
        <div className="h-64 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.123456!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a1b2c3d4e5%3A0x1234567890abcdef!2sKarura%20Adventist%20School!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            className="w-full h-full rounded"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
