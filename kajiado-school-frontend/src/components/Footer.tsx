"use client";

import Link from "next/link";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function Footer() {
  const { content } = useSiteContent();

  return (
    <footer className="bg-lightBrown text-cream mt-12">
      <div className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">{content.footer.schoolName}</h3>
          <p className="text-sm leading-relaxed">
            {content.footer.tagline}
            <br />
            {content.footer.description}
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">{content.footer.quickLinksTitle}</h4>
          <ul className="space-y-2 text-sm">
            {content.footer.quickLinks.map((link) => (
              <li key={link.href}><Link href={link.href} className="hover:underline">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">{content.footer.sectionsTitle}</h4>
          <ul className="space-y-2 text-sm">
            {content.footer.sections.map((section) => <li key={section}>{section}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">{content.footer.contactTitle}</h4>
          <ul className="space-y-2 text-sm">
            {content.footer.contactLines.map((line) => <li key={line}>{line}</li>)}
          </ul>
        </div>
      </div>

      <div className="bg-darkBrown text-center py-3 text-sm">
        © {new Date().getFullYear()} {content.footer.copyrightSuffix}
      </div>
    </footer>
  );
}
