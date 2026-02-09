"use client";

import { Calendar, FileText, Megaphone } from "lucide-react";
import PdfDownloadLink from "@/components/common/PdfDownloadLink";

/* ---------- Types ---------- */

type NewsItem = {
  title: string;
  date: string;
  content: string;
};

type Newsletter = {
  title: string;
  link: string;
};

type EventItem = {
  title: string;
  date: string;
  description: string;
};

/* ---------- Page ---------- */

export default function NewsEventsPage() {
  const news: NewsItem[] = [
    {
      title: "Science Fair Winners Announced",
      date: "2025-03-12",
      content:
        "Congratulations to all participants in the 2025 Science Fair. Our students showcased amazing STEM projects.",
    },
    {
      title: "New Computer Lab Inauguration",
      date: "2025-02-25",
      content:
        "The school inaugurated a state-of-the-art computer lab to enhance digital literacy for all students.",
    },
  ];

  const newsletters: Newsletter[] = [
    {
      title: "January 2025 Newsletter",
      link: "/docs/newsletters/jan-2025.pdf",
    },
    {
      title: "February 2025 Newsletter",
      link: "/docs/newsletters/feb-2025.pdf",
    },
  ];

  const events: EventItem[] = [
    {
      title: "Annual Sports Day",
      date: "2025-01-20",
      description: "Join us for an exciting day of sports and competitions.",
    },
    {
      title: "Parent-Teacher Meeting",
      date: "2025-04-05",
      description:
        "Meet teachers and discuss student progress and school initiatives.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      <NewsSection news={news} />
      <NewsletterSection newsletters={newsletters} />
      <EventsSection events={events} />
    </section>
  );
}

/* ---------- Components ---------- */

function NewsSection({ news }: { news: NewsItem[] }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Megaphone /> School News
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="p-6 border rounded shadow hover:shadow-lg transition bg-[var(--background)]"
          >
            <h2 className="font-semibold text-xl mb-1">{item.title}</h2>

            <p className="text-gray-500 mb-2">
              {new Date(item.date).toLocaleDateString("en-KE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsletterSection({
  newsletters,
}: {
  newsletters: Newsletter[];
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <FileText /> Newsletter Archives
      </h2>

      <ul className="space-y-2">
        {newsletters.map((nl, idx) => (
          <PdfDownloadLink key={idx} label={nl.title} href={nl.link} />
        ))}
      </ul>
    </div>
  );
}

function EventsSection({ events }: { events: EventItem[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Calendar /> Upcoming Events
      </h2>

      <ul className="space-y-4">
        {events.map((event, idx) => (
          <li
            key={idx}
            className="p-4 border-l-4 border-green-700 bg-gray-50 rounded shadow hover:bg-gray-100 transition"
          >
            <p className="font-semibold">{event.title}</p>

            <p className="text-gray-600 mb-1">
              {new Date(event.date).toLocaleDateString("en-KE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            <p className="text-gray-700">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
