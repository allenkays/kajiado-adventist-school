"use client";

import { useSiteContent } from "@/components/SiteContentProvider";

export default function StudentLifePage() {
  const { content } = useSiteContent();
  const studentLife = content.studentLife;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-6">{studentLife.activitiesTitle}</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {studentLife.activities.map((activity) => (
            <div key={activity.name} className="p-6 border rounded shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{activity.name}</h3>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">{studentLife.councilTitle}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {studentLife.council.map((member) => (
            <div key={member.name} className="text-center p-4 border rounded shadow">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-2 flex items-center justify-center text-xl font-bold text-gray-600">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">{studentLife.eventsTitle}</h2>
        <ul className="space-y-4">
          {studentLife.events.map((event) => (
            <li key={`${event.title}-${event.date}`} className="p-4 border-l-4 border-green-700 bg-gray-50 rounded shadow">
              <p className="font-semibold">{event.title}</p>
              <p className="text-gray-600">{new Date(event.date).toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" })}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
