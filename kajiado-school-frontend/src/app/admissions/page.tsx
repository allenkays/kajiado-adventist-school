"use client";

import PdfDownloadLink from "@/components/common/PdfDownloadLink";
import AdmissionsForm from "@/components/admissions/AdmissionsForm";
import { FileText, PhoneCall } from "lucide-react";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function AdmissionsPage() {
  const { content } = useSiteContent();
  const admissions = content.admissions;

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-20">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{admissions.pageTitle}</h1>
        <p className="text-lg">{admissions.intro}</p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">{admissions.sectionsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {admissions.sections.map((section) => (
            <InfoCard key={section.title} title={section.title}>{section.description}</InfoCard>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8">{admissions.howToApplyTitle}</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">{admissions.processTitle}</h3>
            <ol className="list-decimal list-inside space-y-2">
              {admissions.processSteps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText /> {admissions.requiredDocsTitle}
            </h3>
            <ul className="space-y-3">
              {admissions.requiredDocs.map((doc) => (
                <PdfDownloadLink key={doc.href} label={doc.label} href={doc.href} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section><AdmissionsForm /></section>

      <section className="p-6 border rounded-lg">
        <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2"><PhoneCall /> {admissions.helpTitle}</h2>
        <p className="mb-4">{admissions.helpText}</p>
        <p className="font-medium">📞 Phone: {admissions.helpPhone}<br />📧 Email: {admissions.helpEmail}</p>
      </section>
    </main>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border rounded-lg p-5">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{children}</p>
    </div>
  );
}
