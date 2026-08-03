export default function StatStrip() {
  const stats = [
    { value: "90%", label: "Post-Graduation Success Rate" },
    { value: "Top 10", label: "Colleges That Create Futures" },
    { value: "No. 1", label: "In The Nation For Materials R&D" },
  ];
  return (
    <section
      className="flex items-center justify-center px-6 md:px-24 py-14"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), linear-gradient(135deg, #0a3d1f, #018837)",
      }}
    >
      <div
        className="flex w-full max-w-5xl flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0 p-10"
        style={{
          backgroundColor: "rgba(1,136,55,0.5)",
          backdropFilter: "blur(5px)",
        }}
      >
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-10">
            <div className="flex flex-col items-center gap-3 text-center w-36">
              <span className="font-display text-4xl text-white">
                {s.value}
              </span>
              <span
                className="font-display text-lg font-bold"
                style={{ color: YELLOW }}
              >
                {s.label}
              </span>
            </div>
            {i < stats.length - 1 && (
              <span className="hidden sm:block h-24 w-px bg-white/40" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
