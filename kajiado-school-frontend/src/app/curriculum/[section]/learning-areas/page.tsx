import { notFound } from "next/navigation";
import { learningAreas } from "@/lib/learningAreas";

interface Props {
  params: { section: string };
}

export default async function LearningAreasPage({ params }: Props) {
  // If params might be a promise, await it
  const { section } = await params; // <-- unwrap if needed (App Router)

  const sectionData = learningAreas[section as keyof typeof learningAreas];

  if (!sectionData) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-12">

      {/* Header */}
      <header className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">{sectionData.title}</h1>
        <p className="text-sm opacity-70 mb-4">{sectionData.grades}</p>
        <p className="text-lg">{sectionData.description}</p>
      </header>

      {/* Learning Areas */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Learning Areas</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sectionData.areas.map((area) => (
            <div
              key={area}
              className="border rounded-lg p-5 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{area}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
