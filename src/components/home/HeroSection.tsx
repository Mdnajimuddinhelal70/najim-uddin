import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafaf9]">
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-rose-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-slate-100 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Hero Content */}
          <div className="max-w-3xl">
            {/* Availability Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>

              <span className="text-xs font-medium tracking-wide text-slate-600">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-8xl">
              Building digital
              <span className="block text-slate-400">experiences that</span>
              <span className="block">
                actually <span className="text-rose-600">matter.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I&apos;m Najim Uddin — a Full Stack Web Developer focused on
              building modern, scalable, and user-focused web applications with
              clean and maintainable code.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 rounded-full bg-slate-950 px-6 text-sm font-medium text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1"
                >
                  View My Work
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-medium text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
              >
                Let&apos;s Talk
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-14 hidden items-center gap-3 text-slate-400 sm:flex">
              <ArrowDown className="size-4 animate-bounce" />

              <span className="text-xs font-medium uppercase tracking-[0.2em]">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* Developer Card */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-950/10 sm:p-8">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Developer
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                    Najim Uddin
                  </h2>
                </div>

                <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white">
                  NU
                </div>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-slate-100" />

              {/* Current Focus */}
              <div>
                <p className="text-sm font-medium text-slate-400">
                  Current focus
                </p>

                <p className="mt-2 text-lg font-semibold text-slate-900">
                  Full Stack Web Development
                </p>
              </div>

              {/* Technology Stack */}
              <div className="mt-7">
                <p className="text-sm font-medium text-slate-400">
                  Working with
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Node.js", "MongoDB"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Location / Year */}
              <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-950 p-4">
                <div>
                  <p className="text-xs text-slate-400">Based in</p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Bangladesh
                  </p>
                </div>

                <span className="text-xs font-medium text-slate-400">2026</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 -z-10 size-28 rounded-full border border-rose-200 bg-rose-50"
            />

            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 -z-10 size-20 rounded-2xl border border-slate-200 bg-white shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
