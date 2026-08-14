// function GalleryCard({ caption, hue }) {
//   return (
//     <div className="flex flex-col">
//       <div
//         className="w-full aspect-[8/5]"
//         style={{ background: `linear-gradient(135deg, ${hue}, #1F1F25)` }}
//       />
//       <div className="bg-[#018837] text-white text-[14px] font-serif font-bold px-4 py-4 truncate">
//         {caption}
//       </div>
//     </div>
//   );
// }

// export default function Gallery() {
//   const captions = [
//     "বঙ্গবন্ধুর স্বদেশ প্রত্যাবর্তন...",
//     "স্বাধীনতা দিবস ও সুবর্ণজয়ন্তী",
//     "স্বাধীনতা দিবস ও সুবর্ণজয়ন্তী",
//   ];
//   const hues = ["#4A5FA5", "#D97A2A", "#3F7B54"];

//   return (
//     <section className="w-full bg-white py-20 px-8">
//       <div className="max-w-[1440px] mx-auto">
//         <div className="mb-10">
//           <h2 className="font-serif font-bold text-[36px] text-[#018837]">
//             Event Gallery of UAMC
//           </h2>
//           <p className="text-[15px] text-[#444444] mt-1">
//             You'll find something to spark your curiosity and enhance
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {Array.from({ length: 12 }).map((_, i) => (
//             <GalleryCard
//               key={i}
//               caption={captions[i % captions.length]}
//               hue={hues[i % hues.length]}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";

async function getGallery() {
  const res = await fetch("http://localhost:3000/api/gallery", {
    // Remove/reduce this depending on whether you want caching.
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch gallery");
  }

  return res.json();
}

function GalleryCard({ item }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-sm bg-white shadow-sm">
      <div className="relative w-full aspect-[8/5] bg-gray-100">
        <Image
          src={item.image}
          alt={item.title || "Gallery image"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="bg-[#018837] px-4 py-4 text-[14px] font-serif font-bold text-white">
        <p className="truncate" title={item.title}>
          {item.title}
        </p>
      </div>
    </div>
  );
}

export default async function Gallery() {
  const gallery = await getGallery();

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl font-bold text-[#018837] sm:text-3xl lg:text-[36px]">
            Event Gallery of UAMC
          </h2>

          <p className="mt-1 max-w-2xl text-sm text-[#444444] sm:text-[15px]">
            You'll find something to spark your curiosity and enhance your
            experience.
          </p>
        </div>

        {/* Gallery */}
        {gallery?.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <GalleryCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="py-10 text-center text-gray-500">
            No gallery images available.
          </div>
        )}
      </div>
    </section>
  );
}
