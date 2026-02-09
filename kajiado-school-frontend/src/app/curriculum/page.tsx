import Link from "next/link";
import { learningAreas } from "@/lib/learningAreas";


const curriculum = Object.entries(learningAreas).map(([id, value]) => ({
  id,
  title: value.title,
  grades: value.grades,
  description: value.description,
}));

export default function CurriculumPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 space-y-12">

      {/* Header */}
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Our Curriculum
        </h1>
        <p className="text-lg">
          Karura Adventist School follows the Competency-Based Curriculum (CBC)
          as approved by the Kenya Institute of Curriculum Development (KICD).
        </p>
      </header>

      {/* Curriculum Sections */}
      <section className="grid md:grid-cols-2 gap-8">
        {curriculum.map((section) => (
          <CurriculumCard
            key={section.id}
            id={section.id}
            title={section.title}
            grades={section.grades}
            description={section.description}
          />
        ))}
      </section>

    </main>
  );
}

/* ---------------- Components ---------------- */

function CurriculumCard({
  id,
  title,
  grades,
  description,
}: {
  id: string;
  title: string;
  grades: string;
  description: string;
}) {
  return (
    <div className="border rounded-xl p-6 transition hover:shadow-lg">
      <h2 className="text-2xl font-semibold mb-1">
        {title}
      </h2>

      <p className="text-sm opacity-70 mb-3">
        {grades}
      </p>

      <p className="mb-6">
        {description}
      </p>

      <Link
        href={`/curriculum/${id}/learning-areas`}
        className="inline-block font-semibold underline underline-offset-4 hover:opacity-80"
      >
        View Learning Areas →
      </Link>
    </div>
  );
}
