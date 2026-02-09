"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const slides = [
  {
    src: "/images/karura_pics/karura01.jpg",
    title: "Karura SDA Church School",
    subtitle: "Education for Eternity",
  },
  {
    src: "/images/karura_pics/karura02.jpg",
    title: "Nurturing Mind & Character",
    subtitle: "Academic Excellence with Christian Values",
  },
  {
    src: "/images/karura_pics/karura03.jpg",
    title: "A Safe Learning Environment",
    subtitle: "Where Every Child Matters",
  },
  {
    src: "/images/karura_pics/karura04.jpg",
    title: "Preparing Students for Life",
    subtitle: "Faith • Knowledge • Service",
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative w-full h-[520px] md:h-[720px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.title}
            fill
            priority={index === 0}
            className={`object-cover scale-110 animate-kenburns`}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-20" />

      {/* Text Content */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 text-white">
        <h1
          key={slides[current].title}
          className="text-4xl md:text-6xl font-bold mb-4 animate-fade-slide"
        >
          {slides[current].title}
        </h1>

        <p
          key={slides[current].subtitle}
          className="text-lg md:text-2xl bg-lightBrown text-cream px-4 py-2 rounded mb-6 animate-fade-slide delay-200"
        >
          {slides[current].subtitle}
        </p>

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
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/40 hover:bg-black/60 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/40 hover:bg-black/60 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
