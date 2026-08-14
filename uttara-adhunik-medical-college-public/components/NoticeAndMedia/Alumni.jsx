function AlumniRow({ number, title, date, time, place }) {
  return (
    <div className="flex items-center gap-6 bg-[#F6F6F6] px-5 py-6">
      <span className="font-serif text-[64px] leading-none text-transparent [-webkit-text-stroke:1px_#018837] w-[90px] shrink-0">
        {number}
      </span>
      <div className="flex flex-col gap-2 min-w-0">
        <h4 className="text-[17px] text-[#018837] truncate">{title}</h4>
        <div className="flex items-center gap-5 text-[13px] text-[#444444] flex-wrap">
          <span>📅 {date}</span>
          <span>🕓 {time}</span>
          <span>📍 {place}</span>
        </div>
      </div>
    </div>
  );
}

export default function Alumni() {
  const rows = [
    {
      number: "01",
      title: "Bridging Cultures: Global Perspectives in",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      number: "02",
      title: "Literary Voices: Celebrating Diverse Narratives",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      number: "03",
      title: "Cultural Exchange: Building Global Connections",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
  ];

  return (
    <section className="w-full bg-[#E6F3EB] py-20 px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10">
        <h2 className="font-serif font-bold text-[36px] text-[#018837]">
          Alumni Event
        </h2>
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-10">
          <div className="flex-1 flex flex-col gap-4 justify-between">
            {rows.map((r) => (
              <AlumniRow key={r.number} {...r} />
            ))}
          </div>
          <div
            className="flex-1 min-h-[300px] lg:min-h-0"
            style={{ background: "linear-gradient(135deg,#9AB8CF,#4C6E8C)" }}
          />
        </div>
      </div>
    </section>
  );
}
