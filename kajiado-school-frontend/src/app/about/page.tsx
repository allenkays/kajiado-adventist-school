"use client";

import Image from "next/image";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function AboutPage() {
  const { content } = useSiteContent();
  const about = content.about;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-4">{about.historyTitle}</h1>
        <p className="text-gray-700">{about.historyText}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">{about.missionVisionTitle}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded shadow">
            <h3 className="font-semibold mb-2">{about.missionTitle}</h3>
            <p>{about.missionText}</p>
          </div>
          <div className="bg-blue-50 p-6 rounded shadow">
            <h3 className="font-semibold mb-2">{about.visionTitle}</h3>
            <p>{about.visionText}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">{about.leadershipTitle}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {about.leadership.map((leader) => (
            <div key={leader.name} className="text-center p-4 border rounded shadow">
              <Image src={leader.img} alt={leader.name} width={128} height={128} className="w-32 h-32 mx-auto rounded-full object-cover mb-2" />
              <h3 className="font-semibold">{leader.name}</h3>
              <p className="text-gray-600">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">{about.testimonialsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {about.testimonials.map((t) => (
            <div key={`${t.name}-${t.relation}`} className="p-6 border-l-4 border-green-700 bg-gray-50 rounded shadow">
              <p className="italic text-gray-800">&quot;{t.text}&quot;</p>
              <p className="mt-2 font-semibold">{t.name} &mdash; {t.relation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
