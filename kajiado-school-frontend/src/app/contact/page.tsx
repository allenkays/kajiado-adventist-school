"use client";

import { useState } from "react";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function ContactPage() {
  const { content } = useSiteContent();
  const contact = content.contact;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(contact.successMessage);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-6">{contact.pageTitle}</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
          <div>
            <label className="block mb-1 font-semibold">{contact.labels.name}</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold">{contact.labels.email}</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold">{contact.labels.message}</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border px-3 py-2 rounded" rows={6} required />
          </div>
          <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800 transition">{contact.labels.submit}</button>
        </form>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{contact.contactInfoTitle}</h2>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{contact.addressLabel}:</span> {contact.addressLines.join(", ")}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{contact.officeLabel}:</span> {contact.officePhone}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{contact.secondaryLabel}:</span> {contact.secondaryPhone}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{contact.primaryLabel}:</span> {contact.primaryPhone}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{contact.emailLabel}:</span> {contact.email}</p>
        </div>
        <div className="h-64 w-full">
          <iframe src={contact.mapEmbedUrl} className="w-full h-full rounded" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}
