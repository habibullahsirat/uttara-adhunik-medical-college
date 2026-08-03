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

export default function Footer() {
  const campusLinks = [
    "Our Campus",
    "Careers",
    "News",
    "Support",
    "Accessible mode",
  ];
  const pageLinks = ["Home", "About", "Facilities", "Admission", "Contact"];
  const posts = [
    { title: "Those inequalities that Matter", date: "August 6, 2024" },
    {
      title: "After Decades Of Improvement, Cardiovascular",
      date: "July 4, 2024",
    },
  ];

  return (
    <footer className="flex flex-col items-center bg-black px-6 md:px-20 pt-14 pb-8 text-white">
      <div className="flex w-full max-w-6xl flex-col md:flex-row items-center justify-between gap-8 border-b border-[#242424] pb-14">
        <h3 className="font-body text-2xl">Subscribe To Newsletter</h3>
        <div className="flex w-full max-w-md items-stretch">
          <input
            placeholder="Enter Your mail"
            className="flex-1 border px-5 py-4 font-body text-sm bg-transparent outline-none placeholder:text-white/70"
            style={{ borderColor: GREEN }}
          />
          <button className="px-8 py-4 font-body text-sm font-medium bg-white text-[#110C2D]">
            Submit Button →
          </button>
        </div>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-4 gap-10 py-14">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-white font-display font-bold"
              style={{ backgroundColor: GREEN }}
            >
              U
            </div>
            <span className="font-display text-lg font-bold">
              Uttara Adhunik Medical College
            </span>
          </div>
          <p className="font-body text-[#737477]">
            We are passionate education dedicated to providing high-quality
            resources for learners of all backgrounds.
          </p>
          {/* <div className="flex items-center gap-4">
            {[Facebook, Youtube, Linkedin, Instagram].map((Icon, i) => (
              <Icon
                key={i}
                className="h-4 w-4 text-[#737477]"
                strokeWidth={1.8}
              />
            ))}
          </div> */}
        </div>

        <div>
          <h4 className="mb-4 font-body text-lg font-medium underline underline-offset-4">
            Our Campus
          </h4>
          <ul className="flex flex-col gap-2 font-body text-[#737477]">
            {campusLinks.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-body text-lg font-medium underline underline-offset-4">
            Our Pages
          </h4>
          <ul className="flex flex-col gap-2 font-body text-[#737477]">
            {pageLinks.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-body text-lg font-medium underline underline-offset-4">
            Recent Posts
          </h4>
          <div className="flex flex-col gap-4">
            {posts.map((p) => (
              <div key={p.title} className="flex items-center gap-3">
                <PhotoPlaceholder label="" className="h-14 w-20 shrink-0" />
                <div>
                  <p className="font-body text-xs text-[#737477]">{p.date}</p>
                  <p className="font-body text-sm">{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-6xl flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#242424] pt-6 font-body text-sm text-[#737477]">
        <span>
          Copyright @ 2024. All Rights Reserved by{" "}
          <span className="text-white">Umaio</span>
        </span>
      </div>
    </footer>
  );
}
