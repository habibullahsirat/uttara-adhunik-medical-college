const GREEN = "#018837";

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

export default function CampusLife() {
  const items = ["Student Life", "Arts & Culture", "Recreation & Wellness"];
  return (
    <section
      className="flex flex-col items-center gap-16 px-6 md:px-20 py-20"
      style={{ backgroundColor: GREEN }}
    >
      <div className="flex flex-col items-center gap-4 text-center max-w-xl">
        <p className="font-body text-white/90">
          Building a vibrant community of creative and accomplished people from
          around the world
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-white text-right w-full">
          Campus Life
        </h2>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-3 gap-9">
        {items.map((item) => (
          <div key={item} className="flex flex-col gap-8">
            <PhotoPlaceholder label={item} className="h-[300px] w-full" />
            <a
              href="#"
              className="flex items-center gap-3 font-display text-xl text-white"
            >
              {item} ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
