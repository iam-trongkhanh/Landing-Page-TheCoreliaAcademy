import Image from "next/image";

import { BrandMarquee } from "@/components/BrandMarquee";
import { DepartmentsSection } from "@/components/DepartmentsSection";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { departments, partnerLogos } from "@/lib/siteData";

const stats = [
  { label: "Student Nationalities", value: "100+" },
  { label: "International Students", value: "25%" },
  { label: "Daily Admissions", value: "1k+" },
  { label: "Support", value: "24/7" },
];

const historyEntries = [
  {
    year: "2015",
    title: "Get awards reward",
    description:
      "While the adoption of cryptocurrency for everyday transactions is growing.",
    image: "/gallery/gallery-1.jpg",
  },
  {
    year: "2020",
    title: "Nominate by Google",
    description:
      "While the use of cryptocurrency for everyday transactions is on the rise.",
    image: "/gallery/gallery-2.jpg",
  },
  {
    year: "2024",
    title: "Get awards reward",
    description:
      "As cryptocurrency becomes increasingly adopted for everyday transactions.",
    image: "/gallery/gallery-3.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1B1B1B]">
      <SiteHeader />

      <main className="flex flex-col gap-24 bg-white pb-28 pt-0 text-[#1B1B1B]">
        <section className="bg-[#F7E8EE]">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-16 px-6 py-28 lg:flex-row lg:items-center lg:gap-24">
            <div className="flex-1 space-y-8">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#A5495C]">
                Shape
              </p>
              <h1 className="text-[62px] font-semibold leading-tight text-[#1B1B1B]">
                Unleashing academic excellence
              </h1>
              <p className="text-lg leading-relaxed text-[#4D4D4D]">
                We have focused on generating new knowledge and promoting
                critical thinking amongst our students, graduating more than
                7,000 young men and women during this time.
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <button className="inline-flex items-center justify-center border border-[#1B1B1B] px-12 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-[#1B1B1B]">
                  Apply now ↗
                </button>
                <div className="text-sm font-semibold uppercase tracking-[0.5em] text-[#7A1D32]">
                  Since 1990
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="grid grid-cols-2 gap-8">
                {[
                  "/images/founder-main.jpg",
                  "/images/hero-student.jpg",
                  "/images/founder-mentor.jpg",
                  "/images/hero-student.jpg",
                ].map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative h-56 w-56 bg-[#E8C7D1]"
                  >
                    <Image
                      src={src}
                      alt="About collage"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-16 px-6">
            <div className="text-center">
              <h2 className="text-5xl font-semibold text-[#1B1B1B]">
                Unleashing academic excellence
              </h2>
            </div>
            <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]">
              <div className="space-y-8">
                <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#B0384F]">
                  Since 1990
                </p>
                <h3 className="text-4xl font-semibold leading-tight">
                  Quality education for every students.
                </h3>
                <p className="text-base leading-relaxed text-[#4D4D4D]">
                  We have focused on generating new knowledge and promoting
                  critical thinking amongst our students, graduating more than
                  7,000 young men and women during this time.
                </p>
                <div className="grid gap-6">
                  <div className="relative h-64 w-full bg-[#E5D2D7]">
                    <Image
                      src="/gallery/gallery-7.jpg"
                      alt="Campus tour"
                      fill
                      className="object-cover object-center"
                    />
                    <button className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center border border-white bg-white text-[#7A1D32]">
                      ▶
                    </button>
                  </div>
                  <div className="relative h-64 w-full bg-[#E5D2D7]">
                    <Image
                      src="/gallery/gallery-8.jpg"
                      alt="Students collaborating"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12">
                <div className="relative h-[420px] w-full bg-[#E5D2D7]">
                  <Image
                    src="/gallery/gallery-9.jpg"
                    alt="Study session"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="grid gap-10 md:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="space-y-2">
                      <p className="text-sm uppercase tracking-[0.4em] text-[#7A1D32]">
                        {stat.label}
                      </p>
                      <p className="text-4xl font-semibold text-[#1B1B1B]">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-20">
          <div className="mx-auto w-full max-w-[1300px] px-6">
            <SectionHeading
              eyebrow="Brand Logo"
              title="Partnering ecosystems"
              align="left"
            />
          </div>
          <BrandMarquee
            logos={partnerLogos}
            borderColorClass="border-[#E6D1D7]"
            itemClassName="flex h-12 w-28 items-center justify-center opacity-70"
            imageClassName="h-full w-full object-contain"
          />
        </section>

        <section className="bg-[#FDF8FA] py-24">
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-12 px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#B0384F]">
                Our history
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight">
                One of the largest, most diverse universities in the NYC.
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {historyEntries.map((entry) => (
                <div
                  key={entry.year}
                  className="flex flex-col border border-[#E6D1D7]"
                >
                  <div className="relative h-56 w-full bg-[#E9D2D8]">
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-3 px-8 py-10">
                    <p className="text-sm uppercase tracking-[0.5em] text-[#B0384F]">
                      {entry.title}
                    </p>
                    <p className="text-3xl font-semibold text-[#1B1B1B]">
                      {entry.year}
                    </p>
                    <p className="text-sm leading-relaxed text-[#5C5C5C]">
                      {entry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DepartmentsSection
          departments={departments}
          className="bg-white py-24"
        />
      </main>

      <SiteFooter />
    </div>
  );
}
