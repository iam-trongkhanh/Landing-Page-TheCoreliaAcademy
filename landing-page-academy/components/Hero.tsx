import Image from "next/image";

const awardBadges = [
  "Hyper Best Award Winner",
  "Ultra Institution Winner",
  "Global Education Summit",
];

export function Hero() {
  return (
    <section className="relative h-[850px] overflow-hidden bg-[#FDEFF2]">
      {/* Bức ảnh mũ graduation cap */}
      <div className="absolute left-8 top-10 hidden lg:block">
        <Image
          src="/images/hero-cap.svg"
          alt="Graduation cap illustration"
          width={280}
          height={240}
          priority
        />
      </div>

      {/* Container chính */}
      <div className="relative mx-auto h-full max-w-[1300px] px-6">
        <div className="relative flex h-full items-center">
          {/* Text content bên trái */}
          <div className="relative z-30 flex-1 space-y-10 text-center lg:text-left">
            <p className="text-base font-semibold uppercase tracking-[0.5em] text-[#A5495C]">
              Meet with #01 university
            </p>
            <h1 className="text-5xl sm:text-6xl font-semibold leading-tight text-[#1B1B1B] max-w-full lg:max-w-[700px]">
              Most reputed educational{" "}
              <span className="text-[#7A1D32]">institution</span>
              <br />
              in Booston
            </h1>

            {/* Button apply */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#1B1B1B] px-10 py-5 text-sm font-semibold uppercase tracking-[0.4em] text-white transition-colors duration-300 bg-[#651224]">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  apply now
                </span>
                <span
                  aria-hidden="true"
                  className="relative z-10 transition-transform duration-300 transform -rotate-45 group-hover:rotate-0"
                >
                  →
                </span>
                <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 group-hover:translate-x-0" />
              </button>
            </div>
          </div>

          <div className="absolute right-[-100px] top-0 h-[850px] w-[830px] z-20">
            {/* Shadow background */}
            <div className="absolute inset-0 bg-white shadow-[0px_25px_80px_rgba(122,29,50,0.15)] rounded-lg" />

            {/* Image full height */}
            <Image
              src="/images/hero-student.jpg"
              alt="Student smiling with book"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Award box */}
            <div className="absolute bottom-0 right-0 w-[290px] h-auto min-h-[90px] px-4 py-3 bg-white  shadow-[0px_15px_40px_rgba(122,29,50,0.12)] flex flex-col justify-center items-center text-center">
              <p className="text-3xl font-semibold text-[#7A1D32]">2009</p>
              <p className="text-xs uppercase tracking-[0.4em] text-[#A86A78]">
                Toward Education Award
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
