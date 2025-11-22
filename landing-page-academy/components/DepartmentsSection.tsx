import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { SectionHeading } from "@/components/SectionHeading";

type Department = {
  title: string;
  description: string;
  image: string;
};

type DepartmentsSectionProps = {
  departments: Department[];
  eyebrow?: string;
  title?: string;
  className?: string;
};

export function DepartmentsSection({
  departments,
  eyebrow = "departments",
  title = "Academies expertise",
  className = "",
}: DepartmentsSectionProps) {
  return (
    <section
      className={`mx-auto flex w-full max-w-[1300px] flex-col gap-16 px-6 ${className}`}
    >
      <AnimateOnScroll>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="flex flex-col gap-6">
          {departments.map((dept, index) => (
            <div
              key={dept.title}
              className="group relative overflow-hidden border border-[#E0B9C1] bg-white transition-colors duration-500 hover:border-transparent hover:bg-[#651224]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70">
                <Image
                  src={dept.image}
                  alt={dept.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative flex items-center justify-between gap-8 px-12 py-12 text-[#1B1B1B] transition-colors duration-500 group-hover:text-white">
                {/* Số thứ tự rỗng bên trong */}
                <div
                  className="text-5xl font-bold tracking-[0.2em] group-hover:text-[#F6C9D5]"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #C27C8A",
                    textStroke: "2px #C27C8A",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-3xl font-semibold">{dept.title}</h3>
                  <p className="text-lg leading-relaxed text-[#444C5C] group-hover:text-[#F6DCE3]">
                    {dept.description}
                  </p>
                </div>
                <button className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C27C8A] text-2xl text-[#C27C8A] transition-colors duration-500 group-hover:border-white group-hover:text-white">
                  ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
