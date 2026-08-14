"use client";

import Hero from "@/components/NoticeAndMedia/Hero";
import News from "@/components/NoticeAndMedia/News";
import Notice from "@/components/NoticeAndMedia/Notice";
import Publication from "@/components/NoticeAndMedia/Publication";
import Alumni from "@/components/NoticeAndMedia/Alumni";
import Gallery from "@/components/NoticeAndMedia/Gallery";

export default function NewsSection() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <Hero />
      <News />
      <Notice />
      <Publication />
      <Alumni />
      <Gallery />
    </div>
  );
}
