// src/components/common/PdfDownloadLink.tsx
import { CalendarCheck } from "lucide-react";

interface PdfDownloadLinkProps {
  label: string;
  href: string;
}

export default function PdfDownloadLink({ label, href }: PdfDownloadLinkProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 underline hover:opacity-80"
      >
        <CalendarCheck size={18} />
        {label}
      </a>
    </li>
  );
}
