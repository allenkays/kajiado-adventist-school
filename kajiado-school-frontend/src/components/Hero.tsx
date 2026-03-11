"use client";

import Link from "next/link";
import { useState } from "react";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      <div>
        {/* Slideshow */}
        <HeroSlideshow/>
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Link
            href="/admissions"
            className="bg-darkBrown border border-brown px-6 py-3 rounded-lg font-semibold hover:bg-brown transition"
          >
            Admissions
          </Link>

          <Link
            href="/contact"
            className="bg-darkBrown border border-brown px-6 py-3 rounded-lg font-semibold hover:bg-brown transition"
          >
            Contact Us
          </Link>

          {/* Portals Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-darkBrown border border-brown px-6 py-3 rounded-lg font-semibold hover:bg-brown transition flex items-center gap-2"
            >
              Portals <span className="text-sm">▾</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                <Link
                  href="/portal/student"
                  className="block px-4 py-3 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Student Portal
                </Link>
                <Link
                  href="/portal/parent"
                  className="block px-4 py-3 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Parent Portal
                </Link>
                <Link
                  href="/portal/staff"
                  className="block px-4 py-3 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Staff Portal
                </Link>
                <Link
                  href="/portal/finance"
                  className="block px-4 py-3 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Finance Portal
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
