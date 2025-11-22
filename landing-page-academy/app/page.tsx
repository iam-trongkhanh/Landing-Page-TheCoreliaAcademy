import Image from "next/image";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { BrandMarquee } from "@/components/BrandMarquee";
import { DepartmentsSection } from "@/components/DepartmentsSection";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VideoShowcase } from "@/components/VideoShowcase";
import { departments, partnerLogos } from "@/lib/siteData";

const highlightCards = [
  {
    title: "Education Affordability",
    description:
      "We design Core-tech scholarships that keep tuition accessible while reinforcing trust for every cohort.",
    iconLabel: "Scholar",
  },
  {
    title: "Core academics solutions",
    description:
      "Studio-grade labs for blockchain, AI, and immersive computing map theory to measurable impact.",
    iconLabel: "Labs",
  },
  {
    title: "Inspiring Student Life",
    description:
      "Resident mentors, founder talks, and crafted rituals turn every semester into a living portfolio.",
    iconLabel: "Campus",
  },
];

const announcements = [
  {
    title: "Payment for summer 2024 (Social study)",
    range: "Aug 22, 2024 to Oct 11, 2024",
    image: "/announcements/announcement-1.jpg",
  },
  {
    title: "Summer 2024 Pharmacy Payment Reminder",
    range: "Aug 22, 2024 to Oct 11, 2024",
    image: "/announcements/announcement-2.jpg",
  },
  {
    title: "Important: Pharmacy Payment for Summer 2024",
    range: "Aug 22, 2024 to Oct 11, 2024",
    image: "/announcements/announcement-3.jpg",
  },
];

const facts = [
  { label: "Student Nationalities", value: "100+" },
  { label: "International Students", value: "25%" },
  { label: "Different Majors", value: "20" },
];

const galleryImages = Array.from({ length: 20 }).map(
  (_, index) => `/gallery/gallery-${index + 1}.jpg`
);

const galleryRow = galleryImages.slice(0, 8);

export default function Home() {
  return (
    <div className="bg-white text-[#1F3050]">
      <SiteHeader />

      <main className="flex flex-col gap-24 bg-white pb-24 pt-0">
        <Hero />
        <section className="bg-[#FDFDFD] py-24">
          <AnimateOnScroll>
            <div className="mx-auto flex w-full h-[750px] max-w-[1300px] flex-col-reverse gap-12 px-6 lg:flex-row lg:items-center lg:gap-16">
              {/* Phần ảnh bên trái */}
              <div className="relative flex flex-[1.2] justify-center lg:justify-start">
                <div className="relative h-[500px] w-[390px] max-w-full">
                  <div className="absolute inset-0 bg-white shadow-[0px_30px_80px_rgba(111,23,41,0.12)]">
                    <Image
                      src="/images/founder-main.jpg"
                      alt="Founder portrait"
                      fill
                      sizes="(max-width: 768px) 70vw, 320px"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-30 left-70 h-[380px] w-[380px]  border border-white border-3 bg-white shadow-[0px_25px_80px_rgba(31,58,95,0.15)]">
                    <Image
                      src="/images/founder-mentor.jpg"
                      alt="Mentor guiding student"
                      fill
                      sizes="(max-width: 768px) 60vw, 220px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Phần text bên phải */}
              <div className="flex flex-[0.8] flex-col justify-center gap-8 lg:text-left">
                <p className="text-5xl font-semibold leading-tight text-[#1B1B1B]">
                  Message from the main{" "}
                  <span className="text-[#B0384F]">founder</span>
                </p>

                <h2 className="text-xl font-semibold leading-snug text-[#1B1B1B]">
                  We have focused on generating new knowledge and promoting
                  critical thinking amongst our students.
                </h2>

                <div className="border-l-4 border-[#7A1D32] pl-6 text-lg font-medium text-[#4D4D4D]">
                  Since its inception in 2001, Eduvet University has become one
                  of the most reputed educational institution in NYC.
                </div>

                <div className="flex flex-col gap-2 pt-4 text-[#1B1B1B]">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-full border border-[#E2CAD0]">
                      <Image
                        src="/images/hero-student.jpg"
                        alt="Founder avatar"
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold">Founder</p>
                      <p className="text-xl font-semibold">
                        Amelia K. Hamilton
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="bg-[#651224] py-24 text-white">
          <AnimateOnScroll>
            <div className="mx-auto flex h-[800px] w-full max-w-[1300px] flex-col items-center justify-center gap-12 px-6">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.6em] text-[#F3C4CC]">
                  why choose eduvet
                </p>
                <h2 className="mt-6 text-5xl font-semibold leading-tight">
                  One of the largest universities in NYC
                </h2>
              </div>
              <div className="grid w-full gap-8 lg:grid-cols-3">
                <div className="flex flex-col items-center gap-8 border border-[#8F4D5C] bg-transparent px-10 py-16 text-center border-t-6">
                  <div className="flex h-20 w-20 items-center justify-center  ">
                    <Image
                      src="/icons/degree.svg"
                      alt="Degree icon"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-2xl font-semibold">Top Degrees</h3>
                    <p className="text-base leading-relaxed text-[#F5E0E4]">
                      Offering a wide range of programs across multiple
                      disciplines.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-8 border border-[#8F4D5C] bg-transparent px-10 py-16 text-center border-t-6">
                  <div className="flex h-20 w-20 items-center justify-center">
                    <Image
                      src="/icons/brain.svg"
                      alt="Brain icon"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-2xl font-semibold">Expert Faculty</h3>
                    <p className="text-base leading-relaxed text-[#F5E0E4]">
                      Learn from leading professionals and academic experts.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-8 border border-[#8F4D5C] bg-transparent px-10 py-16 text-center border-t-6">
                  <div className="flex h-20 w-20 items-center justify-center ">
                    <Image
                      src="/icons/book.svg"
                      alt="Book icon"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-2xl font-semibold">
                      Extensive Library
                    </h3>
                    <p className="text-base leading-relaxed text-[#F5E0E4]">
                      Access to a comprehensive collection of resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto w-full max-w-[1300px] px-6"></div>
          <AnimateOnScroll>
            <div className="relative left-1/2 mt-14 w-screen -translate-x-1/2 overflow-hidden px-[6vw]">
              <div className="gallery-marquee-full flex items-center gap-20">
                {galleryRow.concat(galleryRow).map((src, index) => {
                  const isLarge = index % 2 === 0;
                  return (
                    <div
                      key={`${src}-${index}`}
                      className={`relative flex-shrink-0 overflow-hidden bg-white  ${
                        isLarge ? "h-[650px] w-[650px]" : "h-[450px] w-[450px]"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        sizes="(max-width: 1024px) 80vw, 512px"
                        className="object-cover object-center"
                        priority={index === 0}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <DepartmentsSection departments={departments} />

        <section className="bg-white py-20">
          <AnimateOnScroll>
            <BrandMarquee logos={partnerLogos} />
          </AnimateOnScroll>
        </section>

        <section className="mx-auto flex w-full max-w-[1300px] flex-col gap-10 px-6">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Academic Dates"
              title="Announcements & news feeds"
              align="left"
            />
            <div className="grid gap-8 lg:grid-cols-3">
              {announcements.map((announcement, index) => (
                <div
                  key={announcement.title}
                  className="group flex flex-col gap-4"
                >
                  <div className="relative h-80 w-full overflow-hidden bg-[#E5D2D7]">
                    <Image
                      src={announcement.image}
                      alt={announcement.title}
                      fill
                      className="transform object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-6 top-6 rounded-md bg-[#651224] px-5 py-2.5 text-xl font-semibold tracking-[0.2em] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-[#1B1B1B]">
                      {announcement.title}
                    </h3>
                    <p className="text-base uppercase tracking-[0.3em] text-[#5F5F5F]">
                      {announcement.range}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </section>
        <VideoShowcase />

        <section className="bg-white py-24">
          <AnimateOnScroll>
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-6 text-center">
              <div className="flex flex-col items-center gap-6">
                <Image
                  src="/icons/hat.svg"
                  alt="Graduation hat"
                  width={150}
                  height={150}
                  className="object-contain"
                />
                <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#B0384F]">
                  Fun facts about university
                </p>
                <h2 className="text-5xl font-semibold text-[#1B1B1B]">
                  Education, empowering them to{" "}
                  <span className="text-[#B0384F]">become leaders</span> who
                  make a positive impact on the world.
                </h2>
              </div>
              <div className="flex w-full flex-col gap-8 text-[#84404E] lg:flex-row lg:items-center lg:justify-between">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <p className="text-base uppercase tracking-[0.3em] text-[#84404E]">
                      {fact.label}
                    </p>

                    {/* Số rỗng bên trong, viền */}
                    <p
                      className="text-5xl font-semibold"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "2px #1B1B1B",
                        textStroke: "2px #1B1B1B",
                      }}
                    >
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="relative z-20 bg-transparent pb-0 pt-28">
          <AnimateOnScroll>
            <div className="mx-auto w-full max-w-[1200px] px-6">
              <div className="relative z-20 overflow-hidden bg-white shadow-[0px_45px_120px_rgba(0,0,0,0.25)] lg:grid lg:grid-cols-[460px_1fr]">
                {/* Chỉ giảm width/height ảnh */}
                <div className="relative flex justify-center items-center h-full">
                  <div className="relative h-67 w-[420px] lg:h-[415px] lg:w-[440px]">
                    <Image
                      src="/footer/cta.jpg"
                      alt="Students celebrating"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-6 px-10 py-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#B0384F]">
                    Apply for admission?
                  </p>

                  <h2 className="text-4xl font-semibold leading-snug text-[#1B1B1B]">
                    A place to provide students with enough knowledge and skills
                    in a complex world.
                  </h2>

                  <p className="text-base leading-relaxed text-[#1B1B1B] max-w-3xl">
                    Are you looking for exceptional education experience? Eduvet
                    might be the place for you.
                  </p>

                  <form className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex flex-1 items-center gap-3  border border-[#D9D9D9] px-5 py-3 text-sm text-[#1B1B1B]">
                      <div className="h-6 w-6 text-[#B0384F]">
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
                        type="email"
                        placeholder="Business email"
                        className="flex-1 bg-transparent text-sm text-[#1B1B1B] outline-none placeholder:text-[#8C8C8C]"
                      />
                    </div>

                    <button className="inline-flex items-center gap-3 bg-[#651224] px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white">
                      subscribe ↗
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
