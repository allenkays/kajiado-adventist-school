"use client";

import HeroSlideshow from "@/components/HeroSlideshow";

export default function HomePage() {
  return (
    <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      {/* Background Slideshow */}
      <HeroSlideshow/>
    </section>
  );
}
