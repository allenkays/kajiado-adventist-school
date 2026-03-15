"use client";

import Link from "next/link";
import { ReactNode } from "react";
import PdfDownloadLink from "@/components/common/PdfDownloadLink";
import { Users, FileText, MessageCircle, LogIn, Download, HelpCircle, Church } from "lucide-react";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function ParentsPage() {
  const { content } = useSiteContent();
  const parents = content.parents;

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{parents.pageTitle}</h1>
        <p className="text-lg max-w-3xl">{parents.intro}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card icon={<Users />} title={parents.ptaTitle}>
          <p>{parents.ptaText}</p>
          <ul className="list-disc list-inside mt-3 space-y-1">{parents.ptaBullets.map((item) => <li key={item}>{item}</li>)}</ul>
        </Card>

        <Card icon={<LogIn />} title={parents.portalTitle}>
          <p className="mb-4">{parents.portalText}</p>
          <Link href="/portal/parent" className="inline-flex items-center gap-2 bg-darkBrown border border-brown text-white px-6 py-3 rounded-lg font-semibold hover:bg-brown transition">
            <LogIn size={18} />{parents.portalButton}
          </Link>
        </Card>

        <Card icon={<MessageCircle />} title={parents.communicationTitle}>
          <ul className="space-y-2">{parents.communicationItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </Card>

        <Card icon={<FileText />} title={parents.downloadsTitle}>
          <ul className="space-y-2">{parents.downloadsItems.map((item) => <DownloadItem key={item} label={item} />)}</ul>
        </Card>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2"><Users /> {parents.ptaLeadershipTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{parents.ptaLeaders.map((name) => <Leader key={name} name={name} />)}</div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2"><HelpCircle /> {parents.faqsTitle}</h2>
        {parents.faqs.map((faq) => <FAQ key={faq.q} q={faq.q} a={faq.a} />)}
      </section>

      <section className="mt-16 space-y-2">
        {parents.pdfLinks.map((link) => <PdfDownloadLink key={link.href} label={link.label} href={link.href} />)}
      </section>

      <section className="mt-16 p-6 border rounded-lg">
        <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2"><Church /> {parents.valuesTitle}</h2>
        <p>{parents.valuesText}</p>
      </section>
    </main>
  );
}

type CardProps = { icon: ReactNode; title: string; children: ReactNode };
function Card({ icon, title, children }: CardProps) {
  return <section className="border rounded-lg p-6 bg-[var(--background)]"><h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">{icon} {title}</h2>{children}</section>;
}

function DownloadItem({ label }: { label: string }) {
  return <li className="flex items-center gap-2"><Download size={18} /><span className="underline cursor-pointer">{label}</span></li>;
}

function Leader({ name }: { name: string }) {
  return <div className="border rounded-lg p-4 text-center"><Users className="mx-auto mb-2" /><p className="font-medium">{name}</p></div>;
}

function FAQ({ q, a }: { q: string; a: string }) {
  return <div className="mb-4"><p className="font-semibold">{q}</p><p className="text-sm mt-1">{a}</p></div>;
}
