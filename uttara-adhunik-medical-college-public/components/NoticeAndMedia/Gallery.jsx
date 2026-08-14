function GalleryCard({ caption, hue }) {
  return (
    <div className="flex flex-col">
      <div
        className="w-full aspect-[8/5]"
        style={{ background: `linear-gradient(135deg, ${hue}, #1F1F25)` }}
      />
      <div className="bg-[#018837] text-white text-[14px] font-serif font-bold px-4 py-4 truncate">
        {caption}
      </div>
    </div>
  );
}

export default function Gallery() {
  const captions = [
    "বঙ্গবন্ধুর স্বদেশ প্রত্যাবর্তন...",
    "স্বাধীনতা দিবস ও সুবর্ণজয়ন্তী",
    "স্বাধীনতা দিবস ও সুবর্ণজয়ন্তী",
  ];
  const hues = ["#4A5FA5", "#D97A2A", "#3F7B54"];

  return (
    <section className="w-full bg-white py-20 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-10">
          <h2 className="font-serif font-bold text-[36px] text-[#018837]">
            Event Gallery of UAMC
          </h2>
          <p className="text-[15px] text-[#444444] mt-1">
            You'll find something to spark your curiosity and enhance
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <GalleryCard
              key={i}
              caption={captions[i % captions.length]}
              hue={hues[i % hues.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
