"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { DepartmentsSection } from "@/components/DepartmentsSection";
import { BrandMarquee } from "@/components/BrandMarquee";
import { ContentMarquee } from "@/components/ContentMarquee";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { departments, partnerLogos } from "@/lib/siteData";

const stats = [
  { label: "Student Nationalities", value: "100+" },
  { label: "Graduation Rate", value: "25%" },
  { label: "Entry Admission", value: "10k" },
  { label: "Open Classes", value: "24/7" },
];

// const partnerLogos = [
//   { name: "Logoipsum 1", src: "/brands/logo1.svg", width: 120, height: 40 },
//   { name: "Logoipsum 2", src: "/brands/logo2.png", width: 120, height: 40 },
//   { name: "Logoipsum 3", src: "/brands/logo3.svg", width: 120, height: 40 },
//   { name: "Logoipsum 4", src: "/brands/logo4.svg", width: 120, height: 40 },
//   { name: "Logoipsum 5", src: "/brands/logo5.svg", width: 120, height: 40 },
//   { name: "Logoipsum 6", src: "/brands/logo6.svg", width: 120, height: 40 },
// ];

const highlights = [
  {
    image_url: "/gallery/gallery-1.jpg",
    year: "2015",
    description:
      "Set academic records. While the adoption of cryptocurrency for everyday transactions is growing.",
  },
  {
    image_url: "/gallery/gallery-2.jpg",
    year: "2020",
    description:
      "Innovative city campus. While the use of cryptocurrency for everyday transactions is on the rise.",
  },
  {
    image_url: "/gallery/gallery-3.jpg",
    year: "2019",
    description:
      "Innovative city campus. As the adoption of cryptocurrency for daily transactions continues to accelerate.",
  },
  {
    image_url: "/gallery/gallery-4.jpg",
    year: "2024",
    description:
      "Set records. As cryptocurrency becomes increasingly adopted for everyday transactions.",
  },
  {
    image_url: "/gallery/gallery-5.jpg",
    year: "2016",
    description:
      "Expanded global partnerships. The university established connections with leading institutions worldwide.",
  },
  {
    image_url: "/gallery/gallery-6.jpg",
    year: "2017",
    description:
      "Launched new research centers. Focus on innovation and cutting-edge technology development.",
  },
  {
    image_url: "/gallery/gallery-7.jpg",
    year: "2018",
    description:
      "Record enrollment numbers. Welcomed the largest incoming class in university history.",
  },
  {
    image_url: "/gallery/gallery-8.jpg",
    year: "2021",
    description:
      "Digital transformation initiative. Implemented comprehensive online learning platforms.",
  },
  {
    image_url: "/gallery/gallery-9.jpg",
    year: "2022",
    description:
      "Sustainability achievements. Recognized for environmental leadership and green campus initiatives.",
  },
  {
    image_url: "/gallery/gallery-10.jpg",
    year: "2023",
    description:
      "Research excellence award. Faculty recognized for groundbreaking contributions to science.",
  },
];

// const expertiseFields = [
//   {
//     id: "01",
//     name: "Psychology",
//     description:
//       "We Have Focused On Generating New Knowledge & Promoting In Any Kind Of Situations.",
//   },
//   {
//     id: "02",
//     name: "Sociology",
//     description:
//       "We Have Concentrated On Generating New Knowledge Across Diverse Social Situations.",
//   },
//   {
//     id: "03",
//     name: "Political Science",
//     description:
//       "We Have Focused On Generating New Knowledge Understanding In A Variety Of Political Situations.",
//   },
//   {
//     id: "04",
//     name: "Anthropology",
//     description:
//       "We Have Concentrated On Generating Understanding In A Whole Range Of Social Contexts.",
//   },
//   {
//     id: "05",
//     name: "Economics",
//     description:
//       "We Have Focused On Improving Understanding Across Diverse Economic Contexts And Issues.",
//   },
// ];

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(highlights.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const itemWidth = 340;
  const gap = 120;
  const itemWidthWithGap = itemWidth + gap;
  const itemsPerView = 4;

  // Duplicate items for infinite loop
  const duplicatedHighlights = [...highlights, ...highlights, ...highlights];

  useEffect(() => {
    if (currentIndex < highlights.length) {
      // Reset to end without animation
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(highlights.length * 2);
        setTimeout(() => setIsTransitioning(true), 10);
      }, 500);
      return () => clearTimeout(timer);
    } else if (currentIndex >= highlights.length * 2) {
      // Reset to start without animation
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(highlights.length);
        setTimeout(() => setIsTransitioning(true), 10);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div
      className=" bg-white text-[#1B1B1B]"
      style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif' }}
    >
      <SiteHeader />

      <main className="flex flex-col gap-24 bg-white pb-28 pt-0 text-[#1B1B1B]">
        {/* Hero Section */}
        <section className="bg-white pt-24 pb-5">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center justify-center px-6">
            <AnimateOnScroll>
              <h1
                className="text-center text-[64px] font-semibold leading-tight text-[#111111]"
                style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif' }}
              >
                Unleashing academic
                <br />
                excellence
              </h1>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Quality Education Section */}
        <section className="bg-white py-4">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-16 px-6">
            <div className="grid gap-[140px] lg:grid-cols-[1fr_1.15fr]">
              <AnimateOnScroll>
                <div className="space-y-8">
                  <span className=" underline underline-offset-[4px] decoration-2 font-semibold text-[14px] text-[rgb(100,19,32)]">
                    SINCE 1990
                  </span>

                  <h3 className=" mt-[20px] text-[48px] font-semibold leading-tight">
                    Quality education for every students.
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#4D4D4D]">
                    We have focused on generating new knowledge and promoting
                    critical thinking amongst our students, graduating more than
                    7,000 young men and women during this time.
                  </p>
                  <div className="relative w-[580px] h-[480px] bg-[#E5D2D7]">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="VIT University - 1Min Ad Film"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <div className="flex flex-col gap-12">
                  <div className="relative h-[535px] w-[580px] bg-[#E5D2D7]">
                    <Image
                      src="/gallery/gallery-9.jpg"
                      alt="Students collaborating in modern lounge"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    {stats.map((stat) => (
                      <div key={stat.label} className="space-y-2">
                        <p className="text-[14px]   text-[#7A1D32]">
                          {stat.label}
                        </p>
                        <p
                          className="text-[48px] font-semibold"
                          style={{
                            color: "transparent",
                            WebkitTextStroke: "2px #1B1B1B",
                          }}
                        >
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section className="bg-white pb-20">
          <BrandMarquee
            logos={partnerLogos}
            itemClassName="flex h-12 w-28 items-center justify-center opacity-70"
            imageClassName="h-full w-full object-contain"
          />
        </section>

        {/* University Highlights Section */}
        <section className="bg-[#FDF8FA] py-24">
          <div className="mx-auto flex w-full flex-col gap-12 px-6">
            <AnimateOnScroll>
              <div className="text-center">
                <p className="text-[14px] font-semibold underline underline-offset-[4px] decoration-1 uppercase  text-[#B0384F]">
                  OUR HISTORY
                </p>
                <h2 className="mt-4 text-[48px] font-semibold leading-tight">
                  One of the largest,
                  <span className="text-[#641320]"> most </span>
                  diverse
                  <br />
                  <span className="text-[#641320]">universities </span>
                  in the nyc.
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="relative w-full">
              <div
                className="overflow-hidden w-full mx-auto"
                style={{
                  maxWidth: `${
                    itemsPerView * itemWidth + (itemsPerView - 1) * gap
                  }px`,
                }}
              >
                <div
                  data-carousel
                  className="flex"
                  style={{
                    gap: `${gap}px`,
                    transform: `translateX(-${
                      currentIndex * itemWidthWithGap
                    }px)`,
                    transition: isTransitioning
                      ? "transform 500ms ease-in-out"
                      : "none",
                  }}
                >
                  {duplicatedHighlights.map((highlight, index) => (
                    <div
                      key={`${highlight.year}-${index}`}
                      className="shrink-0 w-[340px] flex flex-col"
                    >
                      <div className="relative h-[220px] w-[340px] bg-[#E9D2D8]">
                        <Image
                          src={highlight.image_url}
                          alt={highlight.description}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-col gap-3 px-8 py-10 w-[340px]">
                        <p className="text-sm font-semibold uppercase text-[#B0384F]">
                          {highlight.description.split(". ")[0]}
                        </p>
                        <p
                          className="text-3xl font-semibold"
                          style={{
                            color: "transparent",
                            WebkitTextStroke: "2px #1B1B1B",
                          }}
                        >
                          {highlight.year}
                        </p>
                        <p className="text-sm leading-relaxed text-[#5C5C5C]">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={handlePrevious}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#641320] text-white transition-colors hover:bg-[#7A1D32]"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#641320] text-white transition-colors hover:bg-[#7A1D32]"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <DepartmentsSection departments={departments} />

        {/* Decorative Bar Section */}
        <section className="bg-white py-12">
          <ContentMarquee
            borderColorClass="border-[#641320] "
            itemClassName="flex items-center gap-8"
          >
            <span className="text-4xl font-bold text-[#641320]">
              mathematics
            </span>
            <svg
              className="h-6 w-6 text-[#C27C8A]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.54-3.07 8.83-7.09 9.95C8.07 21.83 5 17.54 5 13V8.18l7-3.5V2.18z" />
            </svg>
            <span
              className="text-4xl font-bold"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #C27C8A",
              }}
            >
              arts
            </span>
            <svg
              className="h-6 w-6 text-[#C27C8A]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.54-3.07 8.83-7.09 9.95C8.07 21.83 5 17.54 5 13V8.18l7-3.5V2.18z" />
            </svg>
            <span
              className="text-4xl font-bold"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #C27C8A",
              }}
            >
              commerce
            </span>
          </ContentMarquee>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
