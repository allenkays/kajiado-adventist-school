import PdfDownloadLink from "@/components/common/PdfDownloadLink";
import AdmissionsForm from "@/components/admissions/AdmissionsForm";
import { FileText, PhoneCall } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-20">

      {/* Header */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Admissions</h1>
        <p className="text-lg">
          Karura Adventist School welcomes learners into a Christ-centered,
          disciplined, and nurturing learning environment.
        </p>
      </section>

      {/* School Sections */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">
          Available School Sections
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title="Pre-Primary">
            Play Group, PP1 & PP2
          </InfoCard>

          <InfoCard title="Primary School">
            Grades 1 – 6 (CBC)
          </InfoCard>

          <InfoCard title="Junior High School">
            Grades 7 – 9
          </InfoCard>

          <InfoCard title="Senior High School">
            Grades 10 – 12 (Upcoming)
          </InfoCard>
        </div>
      </section>

      {/* Process + Documents */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">
          How to Apply
        </h2>

        <div className="flex flex-col md:flex-row gap-10">

          {/* Admission Process */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">
              Admission Process
            </h3>

            <ol className="list-decimal list-inside space-y-2">
              <li>Fill in the online admission form</li>
              <li>Attach required documents</li>
              <li>Assessment / interview where applicable</li>
              <li>Admission confirmation and fee payment</li>
            </ol>
          </div>

          {/* Documents */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText /> Required Documents
            </h3>

            <ul className="space-y-3">
              <PdfDownloadLink label="Admission Form" href="/docs/admission-form.pdf" />
              <PdfDownloadLink label="Fee Structure" href="/docs/fee-structure.pdf" />
              <PdfDownloadLink label="School Calendar" href="/docs/school-calendar.pdf" />
            </ul>
          </div>        
        </div>
      </section>

      {/* Admission Form */}
      <section>
        <AdmissionsForm />
      </section>

      {/* Contact */}
      <section className="p-6 border rounded-lg">
        <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
          <PhoneCall /> Need Help?
        </h2>

        <p className="mb-4">
          Contact the school office for guidance on admissions and enrollment.
        </p>

        <p className="font-medium">
          📞 Phone: +254 XXX XXX XXX  
          <br />
          📧 Email: info@karuraschool.ac.ke
        </p>
      </section>

    </main>
  );
}

/* ---------------- Components ---------------- */

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-lg p-5">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

// function DownloadLink({ label, href }: { label: string; href: string }) {
//   return (
//     <li>
//       <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="underline flex items-center gap-2 hover:opacity-80"
//       >
//         <CalendarCheck size={18} />
//         {label}
//       </a>
//     </li>
//   );
// }

