import { Bitter, Inter } from "next/font/google";
import FeedbackSlider from "./FeedbackSlider";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-bitter",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const GREEN = "#018837";

const API_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API;

async function getTestimonials() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/homepage/feedback`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch testimonials");
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Testimonials API error:", error);
    return [];
  }
}

export default async function Testimonials() {
  const allReviews = await getTestimonials();

  // Most recent 6 feedbacks, newest first
  const reviews = [...allReviews]
    .sort(
      (a, b) =>
        new Date(b.createdAt || b.date || 0) -
        new Date(a.createdAt || a.date || 0),
    )
    .slice(0, 6);

  return (
    <section
      className={`${bitter.variable} ${inter.variable} w-full bg-[#F6F6F6] px-5 py-16 sm:px-8 md:px-10 lg:px-16 xl:px-20`}
    >
      {/* =========================================
          HEADER
      ========================================== */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-4">
        <div className="flex items-center">
          <span
            className="mr-3 hidden h-[23px] w-[32px] sm:block"
            style={{ backgroundColor: GREEN }}
          />

          <span
            className="font-body text-[15px] font-medium sm:text-[17px] lg:text-[19.5px]"
            style={{
              color: GREEN,
              fontFamily: "var(--font-inter)",
            }}
          >
            knowledge meets innovation
          </span>
        </div>

        <h2
          className="
            text-center
            font-bold
            text-[34px]
            leading-[40px]
            sm:text-[40px]
            sm:leading-[44px]
            md:text-[46px]
            md:leading-[48px]
            lg:text-[50px]
          "
          style={{
            color: GREEN,
            fontFamily: "var(--font-bitter)",
          }}
        >
          My Students Feedback
        </h2>

        <p
          className="
            w-full
            text-center
            text-[14px]
            leading-[24px]
            sm:text-[15px]
            sm:leading-[27px]
            md:text-base
            md:leading-[29px]
          "
          style={{
            color: "#737477",
            fontFamily: "var(--font-inter)",
          }}
        >
          You&apos;ll find something to spark your curiosity and enhance
        </p>
      </div>

      {/* =========================================
          TESTIMONIAL SLIDER
      ========================================== */}
      <div className="mx-auto mt-[50px] w-full max-w-[1290px]">
        {reviews.length > 0 ? (
          <FeedbackSlider reviews={reviews} />
        ) : (
          <div className="flex min-h-[250px] items-center justify-center bg-white">
            <p
              className="text-center text-base text-[#737477]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              No feedback available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
