"use client";

import { Calendar, FileText, Megaphone } from "lucide-react";
import PdfDownloadLink from "@/components/common/PdfDownloadLink";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function NewsEventsPage() {
  const { content } = useSiteContent();
  const data = content.newsEvents;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      <div>
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2"><Megaphone /> {data.newsTitle}</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {data.news.map((item) => (
            <div key={`${item.title}-${item.date}`} className="p-6 border rounded shadow hover:shadow-lg transition bg-[var(--background)]">
              <h2 className="font-semibold text-xl mb-1">{item.title}</h2>
              <p className="text-gray-500 mb-2">{new Date(item.date).toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" })}</p>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FileText /> {data.newslettersTitle}</h2>
        <ul className="space-y-2">
          {data.newsletters.map((nl) => <PdfDownloadLink key={nl.link} label={nl.title} href={nl.link} />)}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Calendar /> {data.eventsTitle}</h2>
        <ul className="space-y-4">
          {data.events.map((event) => (
            <li key={`${event.title}-${event.date}`} className="p-4 border-l-4 border-green-700 bg-gray-50 rounded shadow hover:bg-gray-100 transition">
              <p className="font-semibold">{event.title}</p>
              <p className="text-gray-600 mb-1">{new Date(event.date).toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" })}</p>
              <p className="text-gray-700">{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
