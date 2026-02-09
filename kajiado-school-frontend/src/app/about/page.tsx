"use client";

import Image from "next/image";

type Leader = {
  name: string;
  role: string;
  img: string;
};

type Testimonial = {
  name: string;
  relation: string;
  text: string;
};

export default function AboutPage() {
  const leadership: Leader[] = [
    { name: "Mrs. Jane Njeri", role: "Principal", img: "/images/principal.jpg" },
    { name: "Mr. Peter Ouma", role: "Head of Primary", img: "/images/head_primary.jpg" },
    { name: "Ms. Grace Wambui", role: "Head of Junior", img: "/images/head_junior.jpg" },
    { name: "Mr. John Mwangi", role: "Head of Senior", img: "/images/head_senior.jpg" },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Mary Kamau",
      relation: "Parent",
      text: "Karura Adventist School has transformed my child’s learning experience!",
    },
    {
      name: "Samuel Kiptoo",
      relation: "Student",
      text: "I enjoy the learning environment and all the extracurricular activities offered here.",
    },
    {
      name: "Maria Mutheu",
      relation: "Parent",
      text: "Karura Adventist School has transformed my child’s learning experience!",
    },
    {
      name: "Sammy Kuria",
      relation: "Student",
      text: "I enjoy the learning environment and all the extracurricular activities offered here.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      {/* School History */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Our History</h1>
        <p className="text-gray-700">
          Karura Adventist School was established to provide quality Christian
          education to children in Nairobi. Over the years, it has grown into a
          nurturing and academically excellent institution, preparing students
          for both life and eternity.
        </p>
      </div>

      {/* Mission & Vision */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Mission &amp; Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Mission</h3>
            <p>
              To provide holistic education rooted in Christian values, fostering
              academic excellence, character development, and social
              responsibility.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Vision</h3>
            <p>
              A center of excellence recognized for nurturing morally
              upright, competent, and innovative learners ready to impact
              society positively.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Leadership</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {leadership.map((leader) => (
            <div
              key={leader.name}
              className="text-center p-4 border rounded shadow"
            >
              <Image
                src={leader.img}
                alt={leader.name}
                width={128}
                height={128}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-2"
              />
              <h3 className="font-semibold">{leader.name}</h3>
              <p className="text-gray-600">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          What Parents &amp; Students Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={`${t.name}-${t.relation}`}
              className="p-6 border-l-4 border-green-700 bg-gray-50 rounded shadow"
            >
              <p className="italic text-gray-800">
                &quot;{t.text}&quot;
              </p>
              <p className="mt-2 font-semibold">
                {t.name} &mdash; {t.relation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
