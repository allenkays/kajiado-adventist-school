"use client";

import Link from "next/link";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function CurriculumPage() {
  const { content } = useSiteContent();
  const curriculum = Object.entries(content.curriculum.sections).map(([id, value]) => ({ id, ...value }));

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{content.curriculum.pageTitle}</h1>
        <p className="text-lg">{content.curriculum.intro}</p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        {curriculum.map((section) => (
          <div key={section.id} className="border rounded-xl p-6 transition hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-1">{section.title}</h2>
            <p className="text-sm opacity-70 mb-3">{section.grades}</p>
            <p className="mb-6">{section.description}</p>
            <Link href={`/curriculum/${section.id}/learning-areas`} className="inline-block font-semibold underline underline-offset-4 hover:opacity-80">
              {content.curriculum.viewLearningAreasLabel} →
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
