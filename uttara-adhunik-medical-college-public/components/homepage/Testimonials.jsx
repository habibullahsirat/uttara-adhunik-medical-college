import { Star } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

export default function Testimonials() {
  const reviews = [
    { name: "Emma Elizabeth", role: "Assistant Teacher" },
    { name: "Zent Ekizie", role: "Assistant Teacher" },
    { name: "Samantha Willow", role: "Teacher" },
  ];
  return (
    <section className="flex flex-col items-center gap-12 px-6 md:px-20 py-20 bg-[#F6F6F6]">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2
          className="font-display text-4xl md:text-5xl font-bold"
          style={{ color: GREEN }}
        >
          My Students Feedback
        </h2>
        <p className="font-body text-[#737477]">
          You'll find something to spark your curiosity and enhance
        </p>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-3 gap-px bg-black/5">
        {reviews.map((r) => (
          <div key={r.name} className="flex flex-col gap-6 bg-white p-8">
            <div className="flex gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-current"
                  style={{ color: YELLOW }}
                />
              ))}
            </div>
            <p className="font-body text-[#444444] leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="h-12 w-12 rounded-full"
                  style={{ backgroundColor: GREEN }}
                />
                <div>
                  <p
                    className="font-display text-base font-bold"
                    style={{ color: GREEN }}
                  >
                    {r.name}
                  </p>
                  <p className="font-body text-sm text-[#444444]">{r.role}</p>
                </div>
              </div>
              <span className="font-display text-3xl" style={{ color: GREEN }}>
                ”
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
