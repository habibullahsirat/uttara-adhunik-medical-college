// // import React from "react";

// // const MailIcon = () => (
// //   <svg
// //     className="h-6 w-6"
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="2"
// //   >
// //     <rect x="3" y="5" width="18" height="14" rx="1" />
// //     <path d="m3 7 9 6 9-6" />
// //   </svg>
// // );

// // const PhoneIcon = () => (
// //   <svg
// //     className="h-6 w-6"
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="2"
// //   >
// //     <path d="M6.5 3.5h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3c0 1-1 1.5-2 1.5C11 17 7 13 5 7c-.5-2 0-3 1.5-3.5Z" />
// //   </svg>
// // );

// // const SocialIcon = ({ children }) => (
// //   <span className="flex h-5 w-5 items-center justify-center text-base font-bold text-black">
// //     {children}
// //   </span>
// // );

// // function ContactInformation() {
// //   return (
// //     <aside className="w-full bg-[rgba(1,136,55,0.1)] px-7.5 py-10 lg:w-[398px] lg:shrink-0 lg:px-[30px]">
// //       <div>
// //         <h2 className="px-2.5 py-1.5 font-serif text-[25px] font-bold leading-[30px] text-[#018837]">
// //           Contact Information
// //         </h2>

// //         <div className="mt-0.5 h-0.5 w-full bg-white" />
// //       </div>

// //       <div className="mt-7 flex flex-col gap-7.5">
// //         <div>
// //           <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
// //             Phone No:
// //           </h3>
// //           <p className="text-[15px] leading-[18px] text-black">0255080711</p>
// //         </div>

// //         <div>
// //           <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
// //             Email:
// //           </h3>
// //           <p className="text-[15px] leading-[18px] text-black">
// //             uamcoffice08@yahoo.com
// //           </p>
// //         </div>

// //         <div>
// //           <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
// //             Location:
// //           </h3>
// //           <p className="max-w-[338px] text-[15px] leading-[18px] text-black">
// //             H # 34, R # 4, Sector # 9, Sonargaon Janapath, Uttara Model Town
// //           </p>
// //         </div>

// //         <div>
// //           <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
// //             Open Hours:
// //           </h3>

// //           <p className="text-[15px] leading-[18px] text-black">
// //             Monday - Friday: 8:00 am - 5:00 pm
// //             <br />
// //             Saturday - Sunday: 8:00 am - 5:00 pm
// //           </p>
// //         </div>

// //         <div>
// //           <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
// //             Social Media:
// //           </h3>

// //           <div className="flex items-center gap-6">
// //             <SocialIcon>f</SocialIcon>
// //             <SocialIcon>▶</SocialIcon>
// //             <SocialIcon>in</SocialIcon>
// //             <SocialIcon>◎</SocialIcon>
// //           </div>
// //         </div>
// //       </div>
// //     </aside>
// //   );
// // }

// // function InputField({ label, placeholder }) {
// //   return (
// //     <label className="flex w-full flex-col gap-2.5">
// //       <span className="text-base font-bold leading-[27px] text-[#444]">
// //         {label} <span className="text-red-500">*</span>
// //       </span>

// //       <input
// //         type="text"
// //         placeholder={placeholder}
// //         className="h-[68px] w-full border-0 bg-[rgba(1,136,55,0.1)] px-5 text-base font-light text-[#444] outline-none placeholder:text-[#444] placeholder:opacity-70 focus:ring-1 focus:ring-[#018837]"
// //       />
// //     </label>
// //   );
// // }

// // function IconInput({ label, placeholder, type = "text", icon }) {
// //   return (
// //     <label className="flex w-full flex-col gap-2.5">
// //       <span className="text-base font-bold leading-[27px] text-[#444]">
// //         {label} <span className="text-red-500">*</span>
// //       </span>

// //       <div className="flex h-[68px] w-full">
// //         <div className="flex w-16 shrink-0 items-center justify-center border-r border-black/20 bg-[rgba(1,136,55,0.1)] text-[#444]">
// //           {icon}
// //         </div>

// //         <input
// //           type={type}
// //           placeholder={placeholder}
// //           className="min-w-0 flex-1 bg-[rgba(1,136,55,0.1)] px-2.5 text-base font-light text-[#444] outline-none placeholder:text-[#444] placeholder:opacity-70 focus:ring-1 focus:ring-inset focus:ring-[#018837]"
// //         />
// //       </div>
// //     </label>
// //   );
// // }

// // export default function Contact() {
// //   return (
// //     <section className="w-full bg-white px-5 py-12 lg:px-20 lg:py-20">
// //       <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 lg:flex-row">
// //         <ContactInformation />

// //         {/* Contact form */}
// //         <div className="w-full lg:flex-1">
// //           <div className="border-l-2 border-[#018837] pl-4">
// //             <h2 className="max-w-[830px] font-serif text-3xl font-bold leading-[1.12] text-[#444] sm:text-4xl">
// //               Keep In Touch, We Want To Hear From You -
// //               <br className="hidden sm:block" />
// //               Send Us Message
// //             </h2>
// //           </div>

// //           <form className="mt-8 flex flex-col gap-5">
// //             {/* Row 1 */}
// //             <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
// //               <InputField
// //                 label="First Name"
// //                 placeholder="Enter Your First Name"
// //               />

// //               <InputField
// //                 label="Last Name"
// //                 placeholder="Enter Your Last Name"
// //               />
// //             </div>

// //             {/* Row 2 */}
// //             <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
// //               <IconInput
// //                 label="Email"
// //                 type="email"
// //                 placeholder="Enter Your Valid Email Address"
// //                 icon={<MailIcon />}
// //               />

// //               <IconInput
// //                 label="Phone Number"
// //                 type="tel"
// //                 placeholder="Enter Your Valid Contact Number"
// //                 icon={<PhoneIcon />}
// //               />
// //             </div>

// //             {/* Message */}
// //             <label className="flex flex-col gap-2.5">
// //               <span className="text-base font-bold leading-[27px] text-[#444]">
// //                 Write your Message Here
// //               </span>

// //               <textarea
// //                 rows={6}
// //                 placeholder="Write your message here..."
// //                 className="min-h-[150px] w-full resize-none border-0 bg-[rgba(1,136,55,0.1)] p-5 text-base font-light text-[#444] outline-none placeholder:text-[#444] placeholder:opacity-70 focus:ring-1 focus:ring-[#018837]"
// //               />
// //             </label>

// //             {/* Privacy */}
// //             <label className="flex items-center gap-2 text-sm font-medium text-[#444] sm:text-base">
// //               <input type="checkbox" className="h-4 w-4 accent-[#018837]" />

// //               <span>
// //                 By submitting this form, you agree to the UAMC privacy notice.
// //               </span>
// //             </label>

// //             {/* Submit */}
// //             <button
// //               type="submit"
// //               className="flex w-fit items-center gap-3 bg-[#018837] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#016f2d] sm:text-base"
// //             >
// //               Send you message
// //               <span className="text-lg">→</span>
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // Version 2
// "use client";
// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const MailIcon = () => (
//   <svg
//     className="h-6 w-6"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <rect x="3" y="5" width="18" height="14" rx="1" />
//     <path d="m3 7 9 6 9-6" />
//   </svg>
// );

// const PhoneIcon = () => (
//   <svg
//     className="h-6 w-6"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path d="M6.5 3.5h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3c0 1-1 1.5-2 1.5C11 17 7 13 5 7c-.5-2 0-3 1.5-3.5Z" />
//   </svg>
// );

// const SocialIcon = ({ children }) => (
//   <span className="flex h-5 w-5 items-center justify-center text-base font-bold text-black">
//     {children}
//   </span>
// );

// function ContactInformation() {
//   return (
//     <aside className="w-full bg-[rgba(1,136,55,0.1)] px-7.5 py-10 lg:w-[398px] lg:shrink-0 lg:px-[30px]">
//       <div>
//         <h2 className="px-2.5 py-1.5 font-serif text-[25px] font-bold leading-[30px] text-[#018837]">
//           Contact Information
//         </h2>

//         <div className="mt-0.5 h-0.5 w-full bg-white" />
//       </div>

//       <div className="mt-7 flex flex-col gap-7.5">
//         <div>
//           <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
//             Phone No:
//           </h3>

//           <p className="text-[15px] leading-[18px] text-black">0255080711</p>
//         </div>

//         <div>
//           <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
//             Email:
//           </h3>

//           <p className="text-[15px] leading-[18px] text-black">
//             uamcoffice08@yahoo.com
//           </p>
//         </div>

//         <div>
//           <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
//             Location:
//           </h3>

//           <p className="max-w-[338px] text-[15px] leading-[18px] text-black">
//             H # 34, R # 4, Sector # 9, Sonargaon Janapath, Uttara Model Town
//           </p>
//         </div>

//         <div>
//           <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
//             Open Hours:
//           </h3>

//           <p className="text-[15px] leading-[18px] text-black">
//             Monday - Friday: 8:00 am - 5:00 pm
//             <br />
//             Saturday - Sunday: 8:00 am - 5:00 pm
//           </p>
//         </div>

//         <div>
//           <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
//             Social Media:
//           </h3>

//           <div className="flex items-center gap-6">
//             <SocialIcon>f</SocialIcon>
//             <SocialIcon>▶</SocialIcon>
//             <SocialIcon>in</SocialIcon>
//             <SocialIcon>◎</SocialIcon>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }

// function InputField({ label, placeholder, name }) {
//   return (
//     <label className="flex w-full flex-col gap-2.5">
//       <span className="text-base font-bold leading-[27px] text-[#444]">
//         {label} <span className="text-red-500">*</span>
//       </span>

//       <input
//         type="text"
//         name={name}
//         placeholder={placeholder}
//         required
//         className="h-[68px] w-full border-0 bg-[rgba(1,136,55,0.1)] px-5 text-base font-light text-[#444] outline-none placeholder:text-[#444] placeholder:opacity-70 focus:ring-1 focus:ring-[#018837]"
//       />
//     </label>
//   );
// }

// function IconInput({ label, placeholder, type = "text", icon, name }) {
//   return (
//     <label className="flex w-full flex-col gap-2.5">
//       <span className="text-base font-bold leading-[27px] text-[#444]">
//         {label} <span className="text-red-500">*</span>
//       </span>

//       <div className="flex h-[68px] w-full">
//         <div className="flex w-16 shrink-0 items-center justify-center border-r border-black/20 bg-[rgba(1,136,55,0.1)] text-[#444]">
//           {icon}
//         </div>

//         <input
//           type={type}
//           name={name}
//           placeholder={placeholder}
//           required
//           className="min-w-0 flex-1 bg-[rgba(1,136,55,0.1)] px-2.5 text-base font-light text-[#444] outline-none placeholder:text-[#444] placeholder:opacity-70 focus:ring-1 focus:ring-inset focus:ring-[#018837]"
//         />
//       </div>
//     </label>
//   );
// }

// const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
// const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
// const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

// export default function Contact() {
//   // This connects EmailJS to our form
//   const form = useRef();

//   // Used to show success/error messages
//   const [status, setStatus] = useState("");

//   // const sendEmail = (e) => {
//   //   // Prevent the browser from refreshing the page
//   //   e.preventDefault();

//   //   setStatus("sending");

//   //   emailjs
//   //     .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
//   //       publicKey: PUBLIC_KEY,
//   //     })
//   //     .then(
//   //       () => {
//   //         console.log("Email sent successfully!");

//   //         setStatus("success");

//   //         // Clear the form after successful submission
//   //         form.current.reset();
//   //       },
//   //       (error) => {
//   //         console.error("EmailJS error:", error);

//   //         setStatus("error");
//   //       },
//   //     );
//   // };

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     setStatus("sending");

//     const formData = new FormData(form.current);

//     const data = {
//       first_name: formData.get("first_name"),
//       last_name: formData.get("last_name"),
//       email: formData.get("email"),
//       phone: formData.get("phone"),
//       message: formData.get("message"),
//       privacy: formData.get("privacy") === "on",
//     };

//     try {
//       // 1. Save data to MongoDB
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_ADMIN_API}/api/contact`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         },
//       );

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.message || "Failed to save contact data");
//       }

//       // 2. Send email through EmailJS
//       await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
//         publicKey: PUBLIC_KEY,
//       });

//       console.log("Contact saved and email sent successfully!");

//       setStatus("success");

//       form.current.reset();
//     } catch (error) {
//       console.error("Contact submission error:", error);

//       setStatus("error");
//     }
//   };

//   return (
//     <section className="w-full bg-white px-5 py-12 lg:px-20 lg:py-20">
//       <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 lg:flex-row">
//         <ContactInformation />

//         {/* Contact form */}

//         <div className="w-full lg:flex-1">
//           <div className="border-l-2 border-[#018837] pl-4">
//             <h2 className="max-w-[830px] font-serif text-3xl font-bold leading-[1.12] text-[#444] sm:text-4xl">
//               Keep In Touch, We Want To Hear From You -
//               <br className="hidden sm:block" />
//               Send Us Message
//             </h2>
//           </div>

//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="mt-8 flex flex-col gap-5"
//           >
//             {/* Row 1 */}

//             <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//               <InputField
//                 label="First Name"
//                 name="first_name"
//                 placeholder="Enter Your First Name"
//               />

//               <InputField
//                 label="Last Name"
//                 name="last_name"
//                 placeholder="Enter Your Last Name"
//               />
//             </div>

//             {/* Row 2 */}

//             <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//               <IconInput
//                 label="Email"
//                 name="email"
//                 type="email"
//                 placeholder="Enter Your Valid Email Address"
//                 icon={<MailIcon />}
//               />

//               <IconInput
//                 label="Phone Number"
//                 name="phone"
//                 type="tel"
//                 placeholder="Enter Your Valid Contact Number"
//                 icon={<PhoneIcon />}
//               />
//             </div>

//             {/* Message */}

//             <label className="flex flex-col gap-2.5">
//               <span className="text-base font-bold leading-[27px] text-[#444]">
//                 Write your Message Here
//               </span>

//               <textarea
//                 name="message"
//                 rows={6}
//                 placeholder="Write your message here..."
//                 className="min-h-[150px] w-full resize-none border-0 bg-[rgba(1,136,55,0.1)] p-5 text-base font-light text-[#444] outline-none placeholder:text-[#444] placeholder:opacity-70 focus:ring-1 focus:ring-[#018837]"
//               />
//             </label>

//             {/* Privacy */}

//             <label className="flex items-center gap-2 text-sm font-medium text-[#444] sm:text-base">
//               <input
//                 type="checkbox"
//                 name="privacy"
//                 required
//                 className="h-4 w-4 accent-[#018837]"
//               />

//               <span>
//                 By submitting this form, you agree to the UAMC privacy notice.
//               </span>
//             </label>

//             {/* Status message */}

//             {status === "success" && (
//               <p className="font-medium text-green-600">
//                 Your message has been sent successfully!
//               </p>
//             )}

//             {status === "error" && (
//               <p className="font-medium text-red-600">
//                 Something went wrong. Please try again.
//               </p>
//             )}

//             {/* Submit */}

//             <button
//               type="submit"
//               disabled={status === "sending"}
//               className="flex w-fit items-center gap-3 bg-[#018837] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#016f2d] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
//             >
//               {status === "sending" ? "Sending..." : "Send your message"}

//               {status !== "sending" && <span className="text-lg">→</span>}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const MailIcon = () => (
  <svg
    className="h-5 w-5 sm:h-6 sm:w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="h-5 w-5 sm:h-6 sm:w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M6.5 3.5h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3c0 1-1 1.5-2 1.5C11 17 7 13 5 7c-.5-2 0-3 1.5-3.5Z" />
  </svg>
);

/* -----------------------------
   Social Icons
------------------------------ */

const FacebookIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.5 22v-8h2.75l.5-3h-3.25V9.05c0-.87.43-1.55 1.65-1.55H17V4.82c-.32-.04-1.2-.12-2.28-.12-2.25 0-3.79 1.37-3.79 3.88V11H8.25v3h2.68v8h2.57Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M5.2 8.2H2.1V21h3.1V8.2ZM3.65 3A1.85 1.85 0 1 0 3.65 6.7 1.85 1.85 0 0 0 3.65 3ZM21.9 13.66c0-3.85-2.05-5.64-4.79-5.64-2.21 0-3.2 1.22-3.76 2.08V8.2h-3.1V21h3.1v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.91 2.07 3.4V21h3.1v-7.34Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2C0 8.05 0 12 0 12s0 3.95.5 5.8a3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12c.5-1.85.5-5.8.5-5.8s0-3.95-.5-5.8ZM9.55 15.7V8.3L15.75 12l-6.2 3.7Z" />
  </svg>
);

/* -----------------------------
   Social Icon Wrapper
------------------------------ */

const SocialIcon = ({ href, label, children }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-200 hover:bg-[#018837] hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#018837] focus:ring-offset-2"
    >
      {children}
    </a>
  );
};

/* -----------------------------
   Contact Information
------------------------------ */

function ContactInformation({ siteSetting, loading }) {
  if (loading) {
    return (
      <aside className="w-full shrink-0 rounded-sm bg-[rgba(1,136,55,0.1)] px-5 py-8 sm:px-7 sm:py-9 md:px-8 lg:w-[398px] lg:px-[30px] lg:py-10">
        <div className="animate-pulse">
          <div className="h-8 w-64 rounded bg-green-200" />
          <div className="mt-3 h-0.5 w-full bg-white" />

          <div className="mt-8 space-y-8">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item}>
                <div className="h-6 w-32 rounded bg-green-200" />
                <div className="mt-3 h-5 w-52 rounded bg-green-100" />
              </div>
            ))}
          </div>
        </div>
      </aside>
    );
  }

  if (!siteSetting) {
    return (
      <aside className="w-full shrink-0 rounded-sm bg-[rgba(1,136,55,0.1)] px-5 py-8 sm:px-7 sm:py-9 md:px-8 lg:w-[398px] lg:px-[30px] lg:py-10">
        <h2 className="font-serif text-[23px] font-bold leading-[30px] text-[#018837] sm:text-[25px]">
          Contact Information
        </h2>

        <div className="mt-3 h-0.5 w-full bg-white" />

        <p className="mt-7 text-sm leading-6 text-red-600">
          Unable to load contact information.
        </p>
      </aside>
    );
  }

  /*
    API response example:

    {
      phone: "+880 1700-220000",
      office_email: "uamcoffice08@yahoo.com",
      address: "House - 34, Road - 4, Sector - 9, ...",
      opening_hour: "Monday - Friday: 8:00 am Saturday - Sunday: 8:00 am",
      closing_hour: "Monday - Friday: 5:00 pm Saturday - Sunday: 5:00 pm",
      facebook_link: "...",
      instagram_link: "...",
      linkedin_link: "...",
      youtube_link: "..."
    }
  */

  const phone = siteSetting.phone || "";
  const email = siteSetting.office_email || siteSetting.email || "";
  const address = siteSetting.address || "";

  /*
    Your API currently stores opening and closing hours separately:

    opening_hour:
      "Monday - Friday: 8:00 am Saturday - Sunday: 8:00 am"

    closing_hour:
      "Monday - Friday: 5:00 pm Saturday - Sunday: 5:00 pm"

    We normalize them into two display lines.
  */

  const openingHour = siteSetting.opening_hour || "";
  const closingHour = siteSetting.closing_hour || "";

  const formattedOpeningHours = openingHour
    .replace(/Monday\s*-\s*Friday:\s*8:00\s*am/i, "Monday - Friday: 8:00 am")
    .replace(
      /Saturday\s*-\s*Sunday:\s*8:00\s*am/i,
      "Saturday - Sunday: 8:00 am",
    );

  const formattedClosingHours = closingHour
    .replace(/Monday\s*-\s*Friday:\s*5:00\s*pm/i, "Monday - Friday: 5:00 pm")
    .replace(
      /Saturday\s*-\s*Sunday:\s*5:00\s*pm/i,
      "Saturday - Sunday: 5:00 pm",
    );

  const weekDayOpening = formattedOpeningHours
    .match(/Monday\s*-\s*Friday:\s*[^S]+/i)?.[0]
    ?.trim();

  const weekendOpening = formattedOpeningHours
    .match(/Saturday\s*-\s*Sunday:\s*.+/i)?.[0]
    ?.trim();

  const weekDayClosing = formattedClosingHours
    .match(/Monday\s*-\s*Friday:\s*[^S]+/i)?.[0]
    ?.trim();

  const weekendClosing = formattedClosingHours
    .match(/Saturday\s*-\s*Sunday:\s*.+/i)?.[0]
    ?.trim();

  /*
    If the API format changes, fallback to displaying the
    original values rather than breaking the component.
  */

  const displayWeekdayHours =
    weekDayOpening && weekDayClosing
      ? `${weekDayOpening} - ${weekDayClosing.replace("Monday - Friday: ", "")}`
      : formattedOpeningHours;

  const displayWeekendHours =
    weekendOpening && weekendClosing
      ? `${weekendOpening} - ${weekendClosing.replace(
          "Saturday - Sunday: ",
          "",
        )}`
      : "";

  return (
    <aside className="w-full shrink-0 rounded-sm bg-[rgba(1,136,55,0.1)] px-5 py-8 sm:px-7 sm:py-9 md:px-8 lg:w-[398px] lg:px-[30px] lg:py-10">
      {/* Heading */}
      <div>
        <h2 className="px-1.5 py-1.5 font-serif text-[23px] font-bold leading-[30px] text-[#018837] sm:px-2.5 sm:text-[25px]">
          Contact Information
        </h2>

        <div className="mt-1 h-0.5 w-full bg-white" />
      </div>

      {/* Contact Details */}
      <div className="mt-7 flex flex-col gap-7 sm:mt-8 sm:gap-7.5">
        {/* Phone */}
        {phone && (
          <div>
            <h3 className="mb-2.5 text-lg font-semibold leading-6 text-[#444] sm:text-xl">
              Phone No:
            </h3>

            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="break-words text-[15px] leading-6 text-black transition-colors hover:text-[#018837] focus:outline-none focus:ring-2 focus:ring-[#018837] focus:ring-offset-2"
            >
              {phone}
            </a>
          </div>
        )}

        {/* Email */}
        {email && (
          <div>
            <h3 className="mb-2.5 text-lg font-semibold leading-6 text-[#444] sm:text-xl">
              Email:
            </h3>

            <a
              href={`mailto:${email}`}
              className="break-all text-[15px] leading-6 text-black transition-colors hover:text-[#018837] focus:outline-none focus:ring-2 focus:ring-[#018837] focus:ring-offset-2"
            >
              {email}
            </a>
          </div>
        )}

        {/* Location */}
        {address && (
          <div>
            <h3 className="mb-2.5 text-lg font-semibold leading-6 text-[#444] sm:text-xl">
              Location:
            </h3>

            <p className="max-w-[338px] whitespace-pre-line break-words text-[15px] leading-6 text-black">
              {address}
            </p>
          </div>
        )}

        {/* Opening Hours */}
        {(openingHour || closingHour) && (
          <div>
            <h3 className="mb-2.5 text-lg font-semibold leading-6 text-[#444] sm:text-xl">
              Open Hours:
            </h3>

            <div className="space-y-1 text-[15px] leading-6 text-black">
              {displayWeekdayHours && <p>{displayWeekdayHours}</p>}

              {displayWeekendHours && <p>{displayWeekendHours}</p>}

              {!displayWeekdayHours && !displayWeekendHours && (
                <>
                  {openingHour && <p>{openingHour}</p>}
                  {closingHour && <p>{closingHour}</p>}
                </>
              )}
            </div>
          </div>
        )}

        {/* Social Media */}
        <div>
          <h3 className="mb-3 text-lg font-semibold leading-6 text-[#444] sm:text-xl">
            Social Media:
          </h3>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <SocialIcon href={siteSetting.facebook_link} label="Facebook">
              <FacebookIcon />
            </SocialIcon>

            <SocialIcon href={siteSetting.youtube_link} label="YouTube">
              <YoutubeIcon />
            </SocialIcon>

            <SocialIcon href={siteSetting.linkedin_link} label="LinkedIn">
              <LinkedinIcon />
            </SocialIcon>

            <SocialIcon href={siteSetting.instagram_link} label="Instagram">
              <InstagramIcon />
            </SocialIcon>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* -----------------------------
   Input Field
------------------------------ */

function InputField({ label, placeholder, name, type = "text" }) {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="text-sm font-bold leading-6 text-[#444] sm:text-base sm:leading-[27px]">
        {label} <span className="text-red-500">*</span>
      </span>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="h-14 w-full rounded-none border-0 bg-[rgba(1,136,55,0.1)] px-4 text-sm font-light text-[#444] outline-none transition focus:ring-1 focus:ring-[#018837] placeholder:text-[#444] placeholder:opacity-70 sm:h-[68px] sm:px-5 sm:text-base"
      />
    </label>
  );
}

/* -----------------------------
   Icon Input
------------------------------ */

function IconInput({ label, placeholder, type = "text", icon, name }) {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="text-sm font-bold leading-6 text-[#444] sm:text-base sm:leading-[27px]">
        {label} <span className="text-red-500">*</span>
      </span>

      <div className="flex h-14 w-full sm:h-[68px]">
        <div className="flex w-12 shrink-0 items-center justify-center border-r border-black/20 bg-[rgba(1,136,55,0.1)] text-[#444] sm:w-16">
          {icon}
        </div>

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required
          className="min-w-0 flex-1 bg-[rgba(1,136,55,0.1)] px-3 text-sm font-light text-[#444] outline-none transition placeholder:text-[#444] placeholder:opacity-70 focus:ring-1 focus:ring-inset focus:ring-[#018837] sm:px-2.5 sm:text-base"
        />
      </div>
    </label>
  );
}

/* -----------------------------
   Environment Variables
------------------------------ */

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

const API_URL = process.env.NEXT_PUBLIC_ADMIN_API;

/* -----------------------------
   Main Contact Component
------------------------------ */

export default function Contact() {
  const form = useRef(null);

  const [status, setStatus] = useState("");
  const [siteSetting, setSiteSetting] = useState(null);
  const [loadingSiteSetting, setLoadingSiteSetting] = useState(true);

  /* -----------------------------
     Fetch Site Settings
  ------------------------------ */

  useEffect(() => {
    const fetchSiteSetting = async () => {
      try {
        setLoadingSiteSetting(true);

        const response = await fetch(`${API_URL}/api/site-setting`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch site settings");
        }

        const data = await response.json();

        /*
          API returns an array:

          [
            {
              _id: "...",
              phone: "...",
              ...
            }
          ]

          We only need the first setting object.
        */

        if (Array.isArray(data) && data.length > 0) {
          setSiteSetting(data[0]);
        } else {
          setSiteSetting(null);
        }
      } catch (error) {
        console.error("Site setting fetch error:", error);
        setSiteSetting(null);
      } finally {
        setLoadingSiteSetting(false);
      }
    };

    fetchSiteSetting();
  }, []);

  /* -----------------------------
     Submit Contact Form
  ------------------------------ */

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus("sending");

    const formData = new FormData(form.current);

    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      privacy: formData.get("privacy") === "on",
    };

    try {
      /* -----------------------------
         1. Save data to MongoDB
      ------------------------------ */

      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to save contact data");
      }

      /* -----------------------------
         2. Send email through EmailJS
      ------------------------------ */

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });

      console.log("Contact saved and email sent successfully!");

      setStatus("success");

      form.current.reset();
    } catch (error) {
      console.error("Contact submission error:", error);

      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-20 xl:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch gap-8 sm:gap-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
        {/* --------------------------------
            Contact Information
        --------------------------------- */}

        <ContactInformation
          siteSetting={siteSetting}
          loading={loadingSiteSetting}
        />

        {/* --------------------------------
            Contact Form
        --------------------------------- */}

        <div className="w-full min-w-0 lg:flex-1">
          {/* Heading */}
          <div className="border-l-2 border-[#018837] pl-3 sm:pl-4">
            <h2 className="max-w-[830px] font-serif text-2xl font-bold leading-[1.15] text-[#444] sm:text-3xl md:text-4xl">
              Keep In Touch, We Want To Hear From You -
              <br className="hidden sm:block" />
              Send Us Message
            </h2>
          </div>

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-7 flex flex-col gap-5 sm:mt-8 sm:gap-5"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <InputField
                label="First Name"
                name="first_name"
                placeholder="Enter Your First Name"
              />

              <InputField
                label="Last Name"
                name="last_name"
                placeholder="Enter Your Last Name"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <IconInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Your Valid Email Address"
                icon={<MailIcon />}
              />

              <IconInput
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter Your Valid Contact Number"
                icon={<PhoneIcon />}
              />
            </div>

            {/* Message */}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-bold leading-6 text-[#444] sm:text-base sm:leading-[27px]">
                Write your Message Here
              </span>

              <textarea
                name="message"
                rows={6}
                placeholder="Write your message here..."
                className="min-h-[150px] w-full resize-none rounded-none border-0 bg-[rgba(1,136,55,0.1)] p-4 text-sm font-light leading-6 text-[#444] outline-none transition placeholder:text-[#444] placeholder:opacity-70 focus:ring-1 focus:ring-[#018837] sm:min-h-[170px] sm:p-5 sm:text-base"
              />
            </label>

            {/* Privacy */}
            <label className="flex items-start gap-2 text-xs font-medium leading-5 text-[#444] sm:items-center sm:text-sm md:text-base">
              <input
                type="checkbox"
                name="privacy"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#018837] sm:mt-0"
              />

              <span>
                By submitting this form, you agree to the UAMC privacy notice.
              </span>
            </label>

            {/* Success Message */}
            {status === "success" && (
              <p
                role="status"
                className="text-sm font-medium text-green-600 sm:text-base"
              >
                Your message has been sent successfully!
              </p>
            )}

            {/* Error Message */}
            {status === "error" && (
              <p
                role="alert"
                className="text-sm font-medium text-red-600 sm:text-base"
              >
                Something went wrong. Please try again.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-3 bg-[#018837] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#016f2d] disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit sm:px-8 sm:py-4 sm:text-base"
            >
              {status === "sending" ? "Sending..." : "Send your message"}

              {status !== "sending" && (
                <span className="text-lg" aria-hidden="true">
                  →
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
