"use client";

export default function StudentLifePage() {
  const activities = [
    { name: "Football", description: "Join our competitive football teams and inter-school tournaments." },
    { name: "Music & Choir", description: "Develop musical talents and participate in school concerts." },
    { name: "Drama Club", description: "Act in school plays and cultural productions." },
    { name: "Science & Robotics Club", description: "Explore STEM through experiments and robotics projects." },
    { name: "Debate Club", description: "Enhance critical thinking and public speaking skills." },
  ];

  const studentCouncil = [
    { name: "Alice Wanjiku", position: "School President" },
    { name: "Brian Otieno", position: "Vice President" },
    { name: "Grace Chebet", position: "Secretary" },
    { name: "David Kiplagat", position: "Treasurer" },
  ];

  const events = [
    { date: "2025-01-20", title: "Annual Sports Day" },
    { date: "2025-02-14", title: "Valentine's Concert" },
    { date: "2025-03-10", title: "Science Fair" },
    { date: "2025-04-05", title: "Parent-Teacher Meeting" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      {/* Extracurricular Activities */}
      <div>
        <h1 className="text-3xl font-bold mb-6">Extracurricular Activities</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="p-6 border rounded shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{activity.name}</h3>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Student Council */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Student Council</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {studentCouncil.map((member, index) => (
            <div key={index} className="text-center p-4 border rounded shadow">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-2 flex items-center justify-center text-xl font-bold text-gray-600">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Events Calendar */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li key={index} className="p-4 border-l-4 border-green-700 bg-gray-50 rounded shadow">
              <p className="font-semibold">{event.title}</p>
              <p className="text-gray-600">{new Date(event.date).toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" })}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
