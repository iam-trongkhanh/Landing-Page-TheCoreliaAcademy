import Link from "next/link";

import { navRoutes, navigation } from "@/lib/siteData";

export function SiteHeader() {
  return (
    <header className="border-b border-[#E3D5DA] bg-white">
      <div className="bg-[#4A0F1F] text-[11px] font-semibold uppercase tracking-[0.35em] text-white">
        <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-6 py-3">
          <span>Welcome to our Eduvet University</span>
          <div className="flex gap-6">
            <span>+8 (378) 389 092</span>
            <span>contactinfo@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-semibold text-[#4A0F1F]">Eduvet.</div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#1B1B1B] md:flex">
          {navigation.map((item) =>
            item === "Pages" ? (
              <div key={item} className="relative group">
                <Link
                  href={navRoutes[item] ?? "/"}
                  className="transition-colors hover:text-[#B0384F]"
                >
                  {item}.
                </Link>
                <div
                  className="pointer-events-none absolute left-1/2 top-full z-30 -translate-x-1/2 pt-6 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="grid min-w-[640px] grid-cols-[1.2fr_2fr] gap-10 bg-[#4A0F1F] px-10 py-10 text-left text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-[0px_30px_80px_rgba(0,0,0,0.35)]">
                    <div className="space-y-4">
                      <p className="text-[11px] tracking-[0.3em] text-white/60">
                        Demos
                      </p>
                      <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                        Home-1
                      </button>
                      <button className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]">
                        Home-2
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <p className="text-[11px] tracking-[0.3em] text-white/60">
                          Other Pages
                        </p>
                        {["Contact.", "FAQ.", "404"].map((link) => (
                          <button
                            key={link}
                            className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]"
                          >
                            {link}
                          </button>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <p className="text-[11px] tracking-[0.3em] text-white/60">
                          CMS Pages
                        </p>
                        {[
                          "Teachers.",
                          "Teacher details.",
                          "Subject details.",
                          "Blogs.",
                          "Blog details.",
                          "Event details.",
                        ].map((link) => (
                          <button
                            key={link}
                            className="block text-sm tracking-[0.3em] hover:text-[#F3C9D1]"
                          >
                            {link}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item}
                href={navRoutes[item] ?? "/"}
                className="transition-colors hover:text-[#B0384F]"
              >
                {item}.
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-4 text-[#1B1B1B]">
          <Link
            href="/apply"
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#1B1B1B] px-9 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-[#1B1B1B]"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              apply now
            </span>
            <span
              aria-hidden="true"
              className="relative z-10 -rotate-45 transition-transform duration-300 group-hover:rotate-0 group-hover:text-white"
            >
              →
            </span>
            <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </div>
      </div>
    </header>
  );
}
