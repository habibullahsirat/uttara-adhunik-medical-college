const GREEN = "#018837";
const YELLOW = "#FECD2F";

function PhotoPlaceholder({ label, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a3d1f] to-[#018837] ${className}`}
    >
      <span className="font-body text-[11px] uppercase tracking-widest text-white/60 text-center px-4">
        {label}
      </span>
    </div>
  );
}

export default function NewsSection() {
  const posts = [
    {
      tag: "Education",
      date: "August 6, 2024",
      title: "10 Effective Study Tips for College Success",
    },
    {
      tag: "University",
      date: "July 4, 2024",
      title: "After Decades Of Improvement, Cardiovascular Care Advances",
    },
  ];
  return (
    <section className="flex flex-col gap-12 px-6 md:px-20 py-20 bg-white">
      <div>
        <h2
          className="font-display text-3xl md:text-5xl font-bold"
          style={{ color: GREEN }}
        >
          Read Our Latest News
        </h2>
        <p className="mt-2 font-body text-[#444444]">
          You'll find something to spark your curiosity and enhance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((p) => (
          <div
            key={p.title}
            className="flex flex-col sm:flex-row items-center gap-6 border border-dashed p-5"
            style={{ borderColor: GREEN }}
          >
            <PhotoPlaceholder
              label={p.title}
              className="h-[220px] w-full sm:w-[240px] shrink-0"
            />
            <div className="flex flex-col gap-4">
              <span
                className="w-fit px-3 py-1 font-body text-xs"
                style={{ backgroundColor: YELLOW }}
              >
                {p.tag}
              </span>
              <p className="font-body text-lg text-[#110C2D]">{p.title}</p>
              <div className="flex items-center gap-3 font-body text-sm text-[#737477]">
                <span>{p.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
