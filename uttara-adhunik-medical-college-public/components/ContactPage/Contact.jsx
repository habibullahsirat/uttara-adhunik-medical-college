import React from "react";

const MailIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6.5 3.5h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3c0 1-1 1.5-2 1.5C11 17 7 13 5 7c-.5-2 0-3 1.5-3.5Z" />
  </svg>
);

const SocialIcon = ({ children }) => (
  <span className="flex h-5 w-5 items-center justify-center text-base font-bold text-black">
    {children}
  </span>
);

function ContactInformation() {
  return (
    <aside className="w-full bg-[rgba(1,136,55,0.1)] px-7.5 py-10 lg:w-[398px] lg:shrink-0 lg:px-[30px]">
      <div>
        <h2 className="px-2.5 py-1.5 font-serif text-[25px] font-bold leading-[30px] text-[#018837]">
          Contact Information
        </h2>

        <div className="mt-0.5 h-0.5 w-full bg-white" />
      </div>

      <div className="mt-7 flex flex-col gap-7.5">
        <div>
          <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
            Phone No:
          </h3>
          <p className="text-[15px] leading-[18px] text-black">0255080711</p>
        </div>

        <div>
          <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
            Email:
          </h3>
          <p className="text-[15px] leading-[18px] text-black">
            uamcoffice08@yahoo.com
          </p>
        </div>

        <div>
          <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
            Location:
          </h3>
          <p className="max-w-[338px] text-[15px] leading-[18px] text-black">
            H # 34, R # 4, Sector # 9, Sonargaon Janapath, Uttara Model Town
          </p>
        </div>

        <div>
          <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
            Open Hours:
          </h3>

          <p className="text-[15px] leading-[18px] text-black">
            Monday - Friday: 8:00 am - 5:00 pm
            <br />
            Saturday - Sunday: 8:00 am - 5:00 pm
          </p>
        </div>

        <div>
          <h3 className="mb-2.5 text-xl font-semibold leading-6 text-[#444]">
            Social Media:
          </h3>

          <div className="flex items-center gap-6">
            <SocialIcon>f</SocialIcon>
            <SocialIcon>▶</SocialIcon>
            <SocialIcon>in</SocialIcon>
            <SocialIcon>◎</SocialIcon>
          </div>
        </div>
      </div>
    </aside>
  );
}

function InputField({ label, placeholder }) {
  return (
    <label className="flex w-full flex-col gap-2.5">
      <span className="text-base font-bold leading-[27px] text-[#444]">
        {label} <span className="text-red-500">*</span>
      </span>

      <input
        type="text"
        placeholder={placeholder}
        className="h-[68px] w-full border-0 bg-[rgba(1,136,55,0.1)] px-5 text-base font-light text-[#444] outline-none placeholder:text-[#444] placeholder:opacity-70 focus:ring-1 focus:ring-[#018837]"
      />
    </label>
  );
}

function IconInput({ label, placeholder, type = "text", icon }) {
  return (
    <label className="flex w-full flex-col gap-2.5">
      <span className="text-base font-bold leading-[27px] text-[#444]">
        {label} <span className="text-red-500">*</span>
      </span>

      <div className="flex h-[68px] w-full">
        <div className="flex w-16 shrink-0 items-center justify-center border-r border-black/20 bg-[rgba(1,136,55,0.1)] text-[#444]">
          {icon}
        </div>

        <input
          type={type}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-[rgba(1,136,55,0.1)] px-2.5 text-base font-light text-[#444] outline-none placeholder:text-[#444] placeholder:opacity-70 focus:ring-1 focus:ring-inset focus:ring-[#018837]"
        />
      </div>
    </label>
  );
}

export default function Contact() {
  return (
    <section className="w-full bg-white px-5 py-12 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 lg:flex-row">
        <ContactInformation />

        {/* Contact form */}
        <div className="w-full lg:flex-1">
          <div className="border-l-2 border-[#018837] pl-4">
            <h2 className="max-w-[830px] font-serif text-3xl font-bold leading-[1.12] text-[#444] sm:text-4xl">
              Keep In Touch, We Want To Hear From You -
              <br className="hidden sm:block" />
              Send Us Message
            </h2>
          </div>

          <form className="mt-8 flex flex-col gap-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <InputField
                label="First Name"
                placeholder="Enter Your First Name"
              />

              <InputField
                label="Last Name"
                placeholder="Enter Your Last Name"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <IconInput
                label="Email"
                type="email"
                placeholder="Enter Your Valid Email Address"
                icon={<MailIcon />}
              />

              <IconInput
                label="Phone Number"
                type="tel"
                placeholder="Enter Your Valid Contact Number"
                icon={<PhoneIcon />}
              />
            </div>

            {/* Message */}
            <label className="flex flex-col gap-2.5">
              <span className="text-base font-bold leading-[27px] text-[#444]">
                Write your Message Here
              </span>

              <textarea
                rows={6}
                placeholder="Write your message here..."
                className="min-h-[150px] w-full resize-none border-0 bg-[rgba(1,136,55,0.1)] p-5 text-base font-light text-[#444] outline-none placeholder:text-[#444] placeholder:opacity-70 focus:ring-1 focus:ring-[#018837]"
              />
            </label>

            {/* Privacy */}
            <label className="flex items-center gap-2 text-sm font-medium text-[#444] sm:text-base">
              <input type="checkbox" className="h-4 w-4 accent-[#018837]" />

              <span>
                By submitting this form, you agree to the UAMC privacy notice.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-fit items-center gap-3 bg-[#018837] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#016f2d] sm:text-base"
            >
              Send you message
              <span className="text-lg">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
