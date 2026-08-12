"use client";

import React from "react";

const medicalServices = [
  {
    title: "General Medicine",
    description:
      "Diagnosis and treatment of a wide range of adult diseases and conditions.",
    icon: "/assets/icons/medicine-9-svgrepo-com.svg",
    featured: true,
  },
  {
    title: "Surgery",
    description:
      "Operative procedures for treating injuries, deformities, and diseases.",
    icon: "/assets/icons/surgery.png",
  },
  {
    title: "Obstetrics & Gynecology",
    description:
      "Care for women’s reproductive health, pregnancy, and childbirth.",
    icon: "/assets/icons/baby.png",
  },
  {
    title: "Pediatrics",
    description:
      "Specialized medical care for infants, children, and adolescents.",
    icon: "/assets/icons/pediatric.png",
  },
  {
    title: "Anesthesiology",
    description:
      "Administration of anesthesia and pain management during surgeries.",
    icon: "/assets/icons/anesthesiology.png",
  },
  {
    title: "Radiology & Imaging",
    description:
      "Diagnostic services including X-rays, CT scans, and ultrasound.",
    icon: "/assets/icons/medical.png",
  },
  {
    title: "Dentistry",
    description:
      "Oral health services including diagnosis and treatment of dental conditions.",
    icon: "/assets/icons/dental-insurance.png",
  },
  {
    title: "Blood Transfusion",
    description: "Safe and reliable blood and component transfusion services.",
    icon: "/assets/icons/blood-bag.png",
  },
];

const medicineRelated = [
  {
    title: "Neuromedicine",
    description: "Treatment of brain, spine, and nervous system disorders.",
    icon: "/assets/icons/medicine-9-svgrepo-com.svg",
    featured: true,
  },
  {
    title: "Gastroenterology",
    description: "Care for digestive system and gastrointestinal tract issues.",
    icon: "/assets/icons/surgery.png",
  },
  {
    title: "Cardiology",
    description:
      "Diagnosis and treatment of heart and circulatory system diseases.",
    icon: "/assets/icons/surgery.png",
  },
  {
    title: "Nephrology",
    description: "Management of kidney diseases and renal disorders.",
    icon: "/assets/icons/anesthesiology.png",
  },
  {
    title: "Radiation Oncology",
    description: "Cancer treatment using high-energy radiation therapy.",
    icon: "/assets/icons/medical.png",
  },
  {
    title: "Psychiatry",
    description: "Mental health diagnosis and therapeutic treatment.",
    icon: "/assets/icons/medical.png",
  },
  {
    title: "Dermatology",
    description: "Care for skin, hair, and nail disorders.",
    icon: "/assets/icons/medical.png",
  },
];

const surgicalRelated = [
  {
    title: "Otolaryngology (ENT)",
    description:
      "Surgical and medical treatment of ear, nose, and throat conditions.",
    icon: "/assets/icons/medicine-9-svgrepo-com.svg",
    featured: true,
  },
  {
    title: "Ophthalmology",
    description: "Eye care including surgeries and vision correction.",
    icon: "/assets/icons/surgery.png",
  },
  {
    title: "Neurosurgery",
    description:
      "Surgical treatment of disorders related to the brain and spinal cord.",
    icon: "/assets/icons/surgery.png",
  },
  {
    title: "Urology",
    description:
      "Surgical care for urinary tract and male reproductive organs.",
    icon: "/assets/icons/anesthesiology.png",
  },
  {
    title: "Orthopedics",
    description:
      "Treatment of bone, joint, and musculoskeletal system problems.",
    icon: "/assets/icons/medical.png",
  },
];

/* =========================================
   Section Heading
========================================= */

const SectionHeading = ({ number, title }) => {
  return (
    <div className="flex items-center justify-center gap-5 sm:gap-6 lg:gap-[30px]">
      {/* Number - AlumniRow style */}

      <span
        className="
          shrink-0
          font-['Bitter']
          text-[70px]
          font-bold
          leading-[1]
          tracking-[0.01em]
          text-transparent
          [-webkit-text-stroke:1px_#018837]

          sm:text-[85px]

          lg:text-[100px]
        "
      >
        {number}
      </span>

      {/* Title */}

      <h2
        className="
          max-w-[220px]
          font-['Bitter']
          text-2xl
          font-bold
          uppercase
          leading-[1.2]
          tracking-[0.01em]
          text-black

          sm:text-[28px]

          lg:text-[30px]
        "
      >
        {title}
      </h2>
    </div>
  );
};

/* =========================================
   Service Card
========================================= */

const ServiceCard = ({ service }) => {
  return (
    <article
      className={`
        flex
        min-h-[200px]
        h-full
        flex-col
        items-start
        justify-center
        gap-2.5
        rounded-[10px]
        p-[30px]
        transition-all
        duration-300

        ${
          service.featured
            ? "bg-[#018837]"
            : "border border-dashed border-[#018837] bg-[rgba(1,136,55,0.1)] hover:bg-[rgba(1,136,55,0.16)]"
        }
      `}
    >
      {/* Icon */}

      <div
        className={`
          flex
          h-[70px]
          w-[70px]
          shrink-0
          items-center
          justify-center
          rounded-full
          p-[14px]

          ${service.featured ? "bg-white" : "bg-[#018837]"}
        `}
      >
        <img
          src={service.icon}
          alt=""
          className="h-[30px] w-[30px] object-contain"
        />
      </div>

      {/* Content */}

      <div className="mt-0.5 flex w-full flex-col gap-[5px]">
        <h3
          className={`
            font-['Inter']
            text-[18px]
            font-bold
            leading-[22px]
            tracking-[0.01em]

            ${service.featured ? "text-white" : "text-[#018837]"}
          `}
        >
          {service.title}
        </h3>

        <p
          className={`
            font-['Inter']
            text-[10px]
            font-normal
            leading-[12px]
            tracking-[0.01em]

            ${service.featured ? "text-white/90" : "text-[#444444]"}
          `}
        >
          {service.description}
        </p>
      </div>
    </article>
  );
};

/* =========================================
   Side Heading
========================================= */

const SideHeading = ({ title, icon, position = "left" }) => {
  const isLeft = position === "left";

  return (
    <div
      className={`
        flex
        items-center
        gap-5

        ${isLeft ? "justify-start" : "justify-end"}

        lg:h-full
        lg:w-[300px]
        lg:shrink-0
      `}
    >
      {/* Left Icon */}

      {isLeft && (
        <img
          src={icon}
          alt=""
          className="
            hidden
            h-[100px]
            w-[100px]
            shrink-0
            object-contain
            lg:block
          "
        />
      )}

      {/* Heading */}

      <h3
        className={`
          font-['Bitter']
          text-[26px]
          font-bold
          uppercase
          leading-[36px]
          tracking-[0.01em]
          text-black
          sm:text-[30px]

          ${!isLeft ? "text-right" : ""}
        `}
      >
        {title}
      </h3>

      {/* Right Icon */}

      {!isLeft && (
        <img
          src={icon}
          alt=""
          className="
            hidden
            h-[100px]
            w-[100px]
            shrink-0
            object-contain
            lg:block
          "
        />
      )}
    </div>
  );
};

/* =========================================
   Main Service Section
========================================= */

export default function Service() {
  return (
    <>
      <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 sm:gap-14 lg:gap-[50px]">
          {/* =====================================
              MAIN TITLE
          ====================================== */}

          <div className="flex items-center justify-center px-2.5">
            <h1
              className="
                text-center
                font-['Bitter']
                text-[34px]
                font-bold
                leading-tight
                tracking-[0.01em]
                text-[#018837]

                sm:text-[42px]

                lg:text-[50px]
                lg:leading-[60px]
              "
            >
              UAMCH Facilities &amp; Services
            </h1>
          </div>

          {/* =====================================
              01 - MEDICAL SERVICES
          ====================================== */}

          <section className="flex w-full flex-col items-center gap-8 sm:gap-10 lg:gap-[50px]">
            <SectionHeading number="01" title="Medical Services" />

            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {medicalServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>

          {/* =====================================
              02 - CLINICAL DEPARTMENTS
          ====================================== */}

          <section className="flex w-full flex-col items-center gap-8 sm:gap-10 lg:gap-[50px]">
            <SectionHeading number="02" title="Clinical Departments" />

            {/* =====================================
                MEDICINE RELATED
            ====================================== */}

            <div className="w-full bg-[rgba(1,136,55,0.1)] p-6 sm:p-8 lg:p-[50px]">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-[50px]">
                {/* LEFT: Medicine Heading + Icon */}

                <SideHeading
                  title={
                    <>
                      Medicine
                      <br />
                      Related
                    </>
                  }
                  icon="/assets/icons/medicine-9-svgrepo-com.svg"
                  position="left"
                />

                {/* RIGHT: Medicine Cards */}

                <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
                  {medicineRelated.map((service, index) => (
                    <div
                      key={service.title}
                      className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                    >
                      <ServiceCard service={service} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* =====================================
                SURGICAL RELATED
            ====================================== */}

            <div className="w-full bg-[rgba(1,136,55,0.1)] p-6 sm:p-8 lg:p-[50px]">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-[50px]">
                {/* LEFT: Surgical Cards */}

                <div className="order-1 grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
                  {surgicalRelated.map((service, index) => (
                    <div
                      key={service.title}
                      className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                    >
                      <ServiceCard service={service} />
                    </div>
                  ))}
                </div>

                {/* RIGHT: Surgical Heading + Icon */}

                <div className="order-2 lg:w-[300px] lg:shrink-0">
                  <SideHeading
                    title={
                      <>
                        Surgical
                        <br />
                        Related
                      </>
                    }
                    icon="/assets/icons/surgery (1).png"
                    position="right"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* =========================================
          FULL-WIDTH HORIZONTAL DIVIDER
      ========================================== */}

      <div
        className="w-full"
        style={{
          height: "1px",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      />
    </>
  );
}
