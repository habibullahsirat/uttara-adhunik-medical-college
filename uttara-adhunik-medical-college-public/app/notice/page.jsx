import Hero from "@/components/NoticeAndMedia/Hero";
import News from "@/components/NoticeAndMedia/News";
import Notice from "@/components/NoticeAndMedia/Notice";
import Publication from "@/components/NoticeAndMedia/Publication";
import AlumniEvents from "@/components/Homepage/AlumniEvents";
import Gallery from "@/components/NoticeAndMedia/Gallery";

export default function NewsSection() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <Hero />
      <News />
      <Notice />
      <Publication />
      <AlumniEvents />
      <Gallery />
    </div>
  );
}
