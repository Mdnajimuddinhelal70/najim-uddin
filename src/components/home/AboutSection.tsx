"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Layers3,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Code2,
    title: "Clean Development",
    description:
      "I care about readable, maintainable code and thoughtful project structure.",
  },
  {
    icon: Layers3,
    title: "Full Stack Mindset",
    description:
      "From polished interfaces to APIs and databases, I enjoy understanding the complete product.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Real Projects",
    description:
      "I focus on building practical applications that solve real-world problems.",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    description:
      "I continuously improve my skills by building, experimenting, and solving problems.",
  },
];

const stats = [
  {
    value: "Full Stack",
    label: "Development Focus",
  },
  {
    value: "Modern",
    label: "Web Technologies",
  },
  {
    value: "Real World",
    label: "Project Experience",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
            <Sparkles className="h-3.5 w-3.5" />
            About Me
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              meaningful products.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m a Full Stack Web Developer who enjoys turning ideas,
            designs, and real-world problems into modern web applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Profile Card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl sm:p-9">
              {/* Decorative Top */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Developer Profile
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Najim Uddin Helal
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/20">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Profile Description */}
              <p className="mt-7 text-sm leading-7 text-slate-400">
                My journey in web development is driven by curiosity,
                consistency, and the desire to create better digital
                experiences. I enjoy working across the frontend and backend
                while keeping performance, usability, and clean architecture in
                mind.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/10 p-4"
                  >
                    <p className="text-sm font-bold text-white">{stat.value}</p>

                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Resume CTA */}
              <div className="mt-8">
                <Link
                  href="/resume"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/10"
                >
                  Download Resume
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
                Who I Am
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                I don&apos;t just write code.
                <span className="block text-slate-500">I build solutions.</span>
              </h3>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-400">
                <p>
                  I&apos;m passionate about creating web experiences that are
                  not only visually appealing but also useful, reliable, and
                  easy to maintain.
                </p>

                <p>
                  My current focus is modern full-stack development with
                  technologies such as{" "}
                  <span className="font-medium text-slate-200">
                    Next.js, React, TypeScript, Node.js, Express.js, and MongoDB
                  </span>
                  .
                </p>

                <p>
                  I believe great development comes from combining strong
                  fundamentals with continuous learning, attention to detail,
                  and a genuine understanding of the people who will use the
                  product.
                </p>
              </div>

              {/* Highlight Grid */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition-colors duration-300 group-hover:bg-violet-500/20">
                          <Icon className="h-4.5 w-4.5" />
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-xs leading-6 text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Learn More */}
              <Link
                href="#skills"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Explore my skills
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
