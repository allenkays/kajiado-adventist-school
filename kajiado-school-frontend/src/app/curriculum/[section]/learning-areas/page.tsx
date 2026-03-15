"use client";

import { useParams } from "next/navigation";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function LearningAreasPage() {
  const params = useParams<{ section: string }>();
  const section = params.section;
  const { content } = useSiteContent();
  const sectionData = content.curriculum.sections[section];

  if (!sectionData) {
    return <main className="max-w-6xl mx-auto px-4 py-16"><h1 className="text-2xl font-bold">Section not found</h1></main>;
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <header className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">{sectionData.title}</h1>
        <p className="text-sm opacity-70 mb-4">{sectionData.grades}</p>
        <p className="text-lg">{sectionData.description}</p>
      </header>

      <section>
        <h2 className="text-3xl font-semibold mb-6">{content.curriculum.learningAreasTitle}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sectionData.areas.map((area) => (
            <div key={area} className="border rounded-lg p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-lg">{area}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
