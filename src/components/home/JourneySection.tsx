"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Rocket,
  Sparkles,
} from "lucide-react";

const journey = [
  {
    year: "2024",
    title: "Started Full Stack Development",
    description:
      "Started my journey into modern web development and built a strong foundation in frontend and backend technologies.",
    icon: GraduationCap,
    type: "Learning",
  },
  {
    year: "2025",
    title: "Completed Full Stack Development Course",
    description:
      "Completed the Programming Hero Full Stack Development course and strengthened my skills in React, Next.js, Node.js, Express.js, MongoDB, and REST APIs.",
    icon: Code2,
    type: "Milestone",
  },
  {
    year: "2025",
    title: "Started Building Real Projects",
    description:
      "Moved from tutorials to practical projects and started working on complete web applications with real requirements and production-oriented architecture.",
    icon: BriefcaseBusiness,
    type: "Experience",
  },
  {
    year: "2026",
    title: "Building Full Stack Systems",
    description:
      "Focused on building scalable applications with authentication, dashboards, CRUD operations, API integration, database management, validation, and deployment.",
    icon: Rocket,
    type: "Current",
  },
];

const focusAreas = [
  "Full Stack Web Development",
  "Modern React & Next.js",
  "REST API Development",
  "Database & Data Modeling",
  "Authentication & Authorization",
  "Clean & Maintainable Architecture",
];

export default function JourneySection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-violet-400" />
            My Journey
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Learning
            </span>{" "}
            to Building
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            A journey of continuous learning, practical projects, and becoming a
            better problem solver through real development work.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute bottom-0 left-[23px] top-0 w-px bg-gradient-to-b from-violet-500/50 via-white/10 to-cyan-500/50 sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-12">
              {journey.map((item, index) => {
                const Icon = item.icon;
                const isRight = index % 2 !== 0;

                return (
                  <div
                    key={item.title}
                    className="relative grid sm:grid-cols-2 sm:gap-12"
                  >
                    {/* Mobile Icon */}
                    <div className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 shadow-lg shadow-black/20 sm:hidden">
                      <Icon className="h-5 w-5 text-violet-400" />
                    </div>

                    {/* Left Content */}
                    <div
                      className={`pl-16 sm:pl-0 ${
                        isRight
                          ? "sm:col-start-1 sm:row-start-1 sm:text-right"
                          : "sm:col-start-1 sm:row-start-1"
                      }`}
                    >
                      {!isRight && (
                        <JourneyCard item={item} Icon={Icon} align="left" />
                      )}

                      {isRight && (
                        <div className="hidden sm:block">
                          <div className="text-sm font-semibold text-slate-600">
                            {item.year}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Center Icon */}
                    <div className="absolute left-1/2 top-0 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 shadow-xl shadow-violet-950/20 sm:flex">
                      <Icon className="h-5 w-5 text-violet-400" />
                    </div>

                    {/* Right Content */}
                    <div
                      className={`hidden sm:block ${
                        isRight
                          ? "sm:col-start-2 sm:row-start-1"
                          : "sm:col-start-2 sm:row-start-1"
                      }`}
                    >
                      {isRight ? (
                        <JourneyCard item={item} Icon={Icon} align="left" />
                      ) : (
                        <div className="text-sm font-semibold text-slate-600">
                          {item.year}
                        </div>
                      )}
                    </div>

                    {/* Mobile Card */}
                    <div className="pl-16 sm:hidden">
                      <JourneyCard item={item} Icon={Icon} align="left" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mx-auto mt-24 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              {/* Heading */}
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                  <Rocket className="h-5 w-5 text-violet-400" />
                </div>

                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  What I&apos;m Focused On
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  My goal is to keep improving as a developer by working on
                  meaningful projects and solving increasingly complex problems.
                </p>
              </div>

              {/* Focus Areas */}
              <div className="grid gap-3 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-violet-400/20 hover:bg-white/[0.05]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-violet-400/10">
                      <ArrowRight className="h-3.5 w-3.5 text-violet-400 transition-transform group-hover:translate-x-0.5" />
                    </span>

                    <span className="text-sm text-slate-300">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Still learning. Still building. Still moving forward.
          </p>
        </div>
      </div>
    </section>
  );
}

function JourneyCard({
  item,
  Icon,
  align,
}: {
  item: (typeof journey)[number];
  Icon: typeof GraduationCap;
  align: "left" | "right";
}) {
  return (
    <div
      className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.05] ${
        align === "right" ? "text-right" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between gap-4 ${
          align === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
          {item.type}
        </span>

        <span className="text-sm font-semibold text-slate-500">
          {item.year}
        </span>
      </div>

      <div
        className={`mt-5 flex items-start gap-4 ${
          align === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:flex">
          <Icon className="h-4 w-4 text-violet-400" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
