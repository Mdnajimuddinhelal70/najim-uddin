import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Modern and responsive web interfaces",
  "Clean and maintainable code",
  "Full-stack application development",
  "Practical problem-solving approach",
];

const AboutSection = () => {
  return (
    <section className="bg-[#fafaf9]">
      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
          {/* Section Label */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
              About Me
            </p>

            <h2 className="mt-4 max-w-sm text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Turning ideas into useful digital experiences.
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
              I&apos;m Najim Uddin, a Full Stack Web Developer who enjoys
              building modern web applications from the user interface to the
              backend.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              My focus is on writing clean, understandable code and creating
              experiences that feel simple for users. I work with modern
              JavaScript technologies and continuously improve my development
              skills by building real-world projects.
            </p>

            {/* Highlights */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-rose-600" />

                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
              >
                More about me
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
