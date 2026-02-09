"use client";

import Link from "next/link";
import { ReactNode } from "react";
import PdfDownloadLink from "@/components/common/PdfDownloadLink";
import {
  Users,
  FileText,
  MessageCircle,
  LogIn,
  Download,
  HelpCircle,
  Church,
} from "lucide-react";

export default function ParentsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Parents &amp; Guardians</h1>
        <p className="text-lg max-w-3xl">
          We believe in a strong partnership between the school and parents to
          nurture learners academically, morally, and spiritually.
        </p>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card icon={<Users />} title="Parent–Teacher Association (PTA)">
          <p>
            The PTA supports school programs, promotes parent engagement, and
            contributes to the holistic development of learners.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Termly PTA meetings</li>
            <li>School development projects</li>
            <li>Parent representation</li>
          </ul>
        </Card>

        <Card icon={<LogIn />} title="Parent Portal">
          <p className="mb-4">
            Access academic reports, attendance records, fee statements, and
            official school communication.
          </p>
          <Link
            href="/portal/parent"
            className="inline-flex items-center gap-2 bg-darkBrown border border-brown text-white px-6 py-3 rounded-lg font-semibold hover:bg-brown transition"
          >
            <LogIn size={18} />
            Parent Portal Login
          </Link>
        </Card>

        <Card icon={<MessageCircle />} title="Communication Channels">
          <ul className="space-y-2">
            <li>Official school emails</li>
            <li>SMS &amp; WhatsApp announcements</li>
            <li>Parent–Teacher meetings</li>
            <li>Student diaries</li>
          </ul>
        </Card>

        <Card icon={<FileText />} title="Important Downloads">
          <ul className="space-y-2">
            <DownloadItem label="School Calendar" />
            <DownloadItem label="Fee Structure" />
            <DownloadItem label="School Rules &amp; Regulations" />
            <DownloadItem label="Uniform Guidelines" />
          </ul>
        </Card>
      </div>

      {/* PTA Leadership */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <Users /> PTA Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Leader name="PTA Chairperson" />
          <Leader name="PTA Vice Chair" />
          <Leader name="PTA Secretary" />
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <HelpCircle /> Parent FAQs
        </h2>

        <FAQ
          q="How do parents communicate with teachers?"
          a="Parents can communicate through official school emails, scheduled meetings, and student diaries."
        />

        <FAQ
          q="How are school fees paid?"
          a="Fees are paid via approved bank accounts. Full details are available in the fee structure document."
        />

        <FAQ
          q="Does the school observe the Sabbath?"
          a="Yes. As a Seventh-day Adventist institution, the school observes the Sabbath from Friday sunset to Saturday sunset."
        />
      </section>

      {/* Downloads */}
      <section className="mt-16 space-y-2">
        <PdfDownloadLink label="Student Handbook" href="/docs/student-handbook.pdf" />
        <PdfDownloadLink label="Academic Calendar" href="/docs/academic-calendar.pdf" />
        <PdfDownloadLink label="Uniform Guidelines" href="/docs/uniform.pdf" />
      </section>

      {/* Values */}
      <section className="mt-16 p-6 border rounded-lg">
        <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
          <Church /> Our Values
        </h2>
        <p>
          We are guided by Christian principles that emphasize discipline,
          respect, integrity, and service, in alignment with Seventh-day
          Adventist beliefs.
        </p>
      </section>
    </main>
  );
}

/* ---------- Reusable Components ---------- */

type CardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function Card({ icon, title, children }: CardProps) {
  return (
    <section className="border rounded-lg p-6 bg-[var(--background)]">
      <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
        {icon} {title}
      </h2>
      {children}
    </section>
  );
}

function DownloadItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2">
      <Download size={18} />
      <span className="underline cursor-pointer">{label}</span>
    </li>
  );
}

function Leader({ name }: { name: string }) {
  return (
    <div className="border rounded-lg p-4 text-center">
      <Users className="mx-auto mb-2" />
      <p className="font-medium">{name}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="mb-4">
      <p className="font-semibold">{q}</p>
      <p className="text-sm mt-1">{a}</p>
    </div>
  );
}
