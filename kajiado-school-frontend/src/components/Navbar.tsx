"use client";

import Link from "next/link";
import { useState } from "react";
import { useSiteContent } from "@/components/SiteContentProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { content } = useSiteContent();

  return (
    <header className="bg-darkBrown">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-cream tracking-wide">
          {content.navbar.logoText}
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-cream font-medium">
          {content.navbar.links.map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-lightBrown">
          <ul className="flex flex-col px-4 py-3 gap-3 text-brown font-medium">
            {content.navbar.links.map((link) => (
              <MobileNavLink key={link.href} href={link.href} setMenuOpen={setMenuOpen}>{link.label}</MobileNavLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-lightBrown transition-colors">
        {children}
      </Link>
    </li>
  );
}

function MobileNavLink({ href, children, setMenuOpen }: { href: string; children: React.ReactNode; setMenuOpen: (open: boolean) => void; }) {
  return (
    <li>
      <Link href={href} onClick={() => setMenuOpen(false)} className="block py-1 hover:text-darkBrown transition-colors">
        {children}
      </Link>
    </li>
  );
}
