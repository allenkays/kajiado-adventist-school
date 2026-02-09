"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-darkBrown">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / School Name */}
        <Link
          href="/"
          className="text-2xl font-bold text-cream tracking-wide"
        >
          Karura Adventist School
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-cream font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/curriculum">Curriculum</NavLink>
          <NavLink href="/admissions">Admissions</NavLink>
          <NavLink href="/student-life">Student Life</NavLink>
          <NavLink href="/parents">Parents</NavLink>
          <NavLink href="/news-events">News & Events</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-lightBrown">
          <ul className="flex flex-col px-4 py-3 gap-3 text-brown font-medium">
            <MobileNavLink href="/" setMenuOpen={setMenuOpen}>Home</MobileNavLink>
            <MobileNavLink href="/about" setMenuOpen={setMenuOpen}>About Us</MobileNavLink>
            <MobileNavLink href="/curriculum" setMenuOpen={setMenuOpen}>Curriculum</MobileNavLink>
            <MobileNavLink href="/admissions" setMenuOpen={setMenuOpen}>Admissions</MobileNavLink>
            <MobileNavLink href="/student-life" setMenuOpen={setMenuOpen}>Student Life</MobileNavLink>
            <MobileNavLink href="/parents" setMenuOpen={setMenuOpen}>Parents</MobileNavLink>
            <MobileNavLink href="/news-events" setMenuOpen={setMenuOpen}>News & Events</MobileNavLink>
            <MobileNavLink href="/contact" setMenuOpen={setMenuOpen}>Contact</MobileNavLink>
          </ul>
        </div>
      )}
    </header>
  );
}

/* Desktop link */
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-lightBrown transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

/* Mobile link */
function MobileNavLink({
  href,
  children,
  setMenuOpen,
}: {
  href: string;
  children: React.ReactNode;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={() => setMenuOpen(false)}
        className="block py-1 hover:text-darkBrown transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
