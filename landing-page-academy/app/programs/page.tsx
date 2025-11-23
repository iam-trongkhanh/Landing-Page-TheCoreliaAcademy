"use client";

import Image from "next/image";
import { useState } from "react";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ContentMarquee } from "@/components/ContentMarquee";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const programs = [
  {
    name: "Psychology",
    icon: "/icons/brain.svg",
    description:
      "We have focused generating new knowledge & promoting is any kind of situations.",
  },
  {
    name: "Sociology",
    icon: "/icons/degree.svg",
    description:
      "We have concentrated on generating new knowledge across diverse social situations.",
  },
  {
    name: "Political Science",
    icon: "/icons/book.svg",
    description:
      "We have focused on generating new knowledge understanding in a variety of political situations.",
  },
  {
    name: "Anthropology",
    icon: "/icons/book.svg",
    description:
      "We have concentrated on generating understanding in a wide range of social contexts.",
  },
  {
    name: "Economics",
    icon: "/icons/book.svg",
    description:
      "We have focused on improving understanding across diverse economic contexts and issues.",
  },
  {
    name: "International Relations",
    icon: "/icons/degree.svg",
    description:
      "We have focused on generating new knowledge in various global and diplomatic contexts.",
  },
  {
    name: "Geography",
    icon: "/icons/book.svg",
    description:
      "We have focused on promoting understanding across different geographical contexts.",
  },
  {
    name: "Physics",
    icon: "/icons/book.svg",
    description:
      "We have focused on advancing understanding in various physical and scientific contexts.",
  },
];

const testimonials = [
  {
    image: "/gallery/gallery-1.jpg",
    altText: "Students sitting outside studying",
    quote:
      "Every subject and topic I studied was extremely interesting, and that's what kept me going.",
    program: "Diploma in UX",
    name: "Amelia K. Hamilton",
    showPlayIcon: true,
  },
  {
    image: "/gallery/gallery-2.jpg",
    altText: "Student with laptop and coffee",
    quote:
      "Each subject I delved into was captivating, which fueled my passion to keep learning.",
    program: "Diploma in UX",
    name: "Juliana P. Taylor",
    showPlayIcon: true,
  },
  {
    image: "/gallery/gallery-3.jpg",
    altText: "Student in classroom with orange sweater",
    quote:
      "Every area of study I pursued was which encouraged me to stay committed.",
    program: "Diploma in UX",
    name: "Natalia T. Morgan",
    showPlayIcon: true,
  },
];

export default function ProgramsPage() {
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(
    null
  );
  const videoId = "0nn_fOjcYM0";

  return (
    <div className="bg-white text-[#1B1B1B]">
      <SiteHeader />

      <main className="flex flex-col gap-24 bg-white pb-24 pt-0">
        {/* Programs Overview Section */}
        <section className="bg-white py-24">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-16 px-6">
            <AnimateOnScroll>
              <div className="text-center">
                <h2 className="text-5xl font-semibold leading-tight text-[#1B1B1B]">
                  University expertise:
                  <br />
                  <span className="text-[#641320]">Social science</span>
                </h2>
              </div>
            </AnimateOnScroll>

            {/* Programs Grid */}
            <AnimateOnScroll>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {programs.map((program) => (
                  <div
                    key={program.name}
                    className="group relative flex min-h-[360px] flex-col overflow-hidden  border border-[#641320] bg-white p-8 transition-all duration-500 hover:border-transparent hover:bg-[#651224]"
                  >
                    <div className="relative z-10 flex flex-1 flex-col space-y-4 text-[#1B1B1B] transition-colors duration-500 group-hover:text-white">
                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center">
                        <Image
                          src={program.icon}
                          alt={`${program.name} icon`}
                          width={48}
                          height={48}
                          className="icon-filter transition-all duration-500"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold">{program.name}</h3>

                      {/* Description */}
                      <p className="flex-1 text-base leading-relaxed text-[#444C5C] group-hover:text-[#F6DCE3]">
                        {program.description}
                      </p>

                      {/* Button */}
                      <a
                        href="#"
                        className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#641320] transition-colors duration-500 group-hover:text-white"
                      >
                        READ MORE
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#822333] py-24 text-white">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-16 px-6">
            <AnimateOnScroll>
              <div className="text-center">
                <p className="text-[14px] font-semibold uppercase ">
                  WHAT OUR STUDENTS SAY?
                </p>
                <h2 className="mt-4 text-[48px] font-semibold leading-tight text-white">
                  Top reviews provided by
                  <br />
                  our customers
                </h2>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex flex-col h-full">
                    {/* Image/Video with Play Icon */}
                    <div className="relative h-[265px] w-[410px] overflow-hidden bg-black mb-6">
                      {playingVideoIndex === index ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 h-full w-full"
                        />
                      ) : (
                        <>
                          <Image
                            src={testimonial.image}
                            alt={testimonial.altText}
                            width={410}
                            height={265}
                            className="absolute inset-0 h-full w-full object-cover object-center"
                          />
                          {testimonial.showPlayIcon && (
                            <button
                              onClick={() => setPlayingVideoIndex(index)}
                              className="absolute right-4 top-4 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white transition-transform hover:scale-110"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6 text-[#822333]"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                          )}
                        </>
                      )}
                    </div>

                    {/* Quote - grow để chiếm không gian còn lại */}
                    <p className="text-[16px] leading-relaxed font-semibold text-white mb-4 grow">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Program + Name với vertical line - luôn ở dưới cùng */}
                    <div className="flex items-start gap-4">
                      {/* Vertical line */}
                      <div className="w-[1px] bg-white/40 h-[60px] shrink-0"></div>

                      {/* Program + Name */}
                      <div className="flex flex-col gap-2">
                        <p className="text-[14px] font-semibold  text-white/80 leading-tight">
                          {testimonial.program}
                        </p>
                        <p className="text-[16px] font-semibold text-white leading-tight">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        {/* Hero Form Section */}
        <section className="bg-white pt-24 pb-12">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-16">
            {/* Left: Contact Form */}
            <div className="flex w-full lg:w-1/2 shrink-0 flex-col gap-8">
              <AnimateOnScroll>
                <div className="flex flex-col pt-[50px] gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1B1B1B] underline underline-offset-4">
                    GET IN TOUCH
                  </p>
                  <h2 className="text-4xl my-[20px] font-semibold leading-tight text-[#1B1B1B]">
                    Tell us anything{" "}
                    <span className="text-[#822333]">here.</span>
                  </h2>
                </div>

                <form className="mt-5 relative flex flex-col gap-8 z-10">
                  {/* Business email */}
                  <div className="flex flex-1 items-center gap-3 border border-[#D9D9D9] px-5 py-3">
                    <div className="h-6 w-6 text-[#B0384F] shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-full w-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Business email"
                      className="flex-1 bg-transparent text-sm text-[#1B1B1B] outline-none placeholder:text-[#8C8C8C]"
                    />
                  </div>

                  {/* info@ */}
                  <div className="flex flex-1 items-center gap-3 border border-[#D9D9D9] px-5 py-3">
                    <div className="h-6 w-6 text-[#B0384F] shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-full w-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="info@"
                      className="flex-1 bg-transparent text-sm text-[#1B1B1B] outline-none placeholder:text-[#8C8C8C]"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-1 items-start gap-3 border border-[#D9D9D9] px-5 py-3 min-h-[120px]">
                    <div className="h-6 w-6 text-[#B0384F] shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-full w-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="flex-1 resize-none bg-transparent text-sm text-[#1B1B1B] outline-none placeholder:text-[#8C8C8C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#822333] px-8 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-white transition-colors hover:bg-[#9a2a3f]"
                  >
                    SUBMIT
                  </button>
                </form>
              </AnimateOnScroll>
            </div>

            {/* Right: Image */}
            <div className="relative w-full lg:w-auto shrink-0">
              <AnimateOnScroll>
                <div className="relative h-[630px] w-[480px] bg-[#E5D2D7]">
                  <Image
                    src="/gallery/gallery-1.jpg"
                    alt="Students talking with laptop in classroom"
                    width={480}
                    height={630}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Subject Divider */}
        <section className="bg-white py-12">
          <ContentMarquee
            borderColorClass="border-b-[#641320] border-t-white "
            itemClassName="flex items-center gap-8"
          >
            <span className="text-4xl font-bold text-[#641320]">Commerce</span>
            <Image
              src="/icons/hat.svg"
              alt="Graduation cap"
              width={24}
              height={24}
              className="text-[#C27C8A]"
            />
            <span
              className="text-4xl font-bold"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #C27C8A",
              }}
            >
              Mathematics
            </span>
            <Image
              src="/icons/hat.svg"
              alt="Graduation cap"
              width={24}
              height={24}
              className="text-[#C27C8A]"
            />
            <span
              className="text-4xl font-bold"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #C27C8A",
              }}
            >
              Arts
            </span>
          </ContentMarquee>
        </section>
      </main>

      <SiteFooter variant="light" />
    </div>
  );
}
