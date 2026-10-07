"use client";

import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    featured: true,
    title: "Madrasa Management System",
    description:
      "A full-stack management platform designed to simplify madrasa administration with dedicated dashboards, authentication, CRUD operations, and API-driven data management.",
    category: "Full Stack Application",
    status: "In Development",
    icon: Layers3,
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Admin Dashboard",
      "Teacher Management",
      "Student Management",
      "Manager Management",
      "Authentication",
      "REST API Integration",
    ],
    github: "https://github.com/Mdnajimuddinhelal70/madrasa-website",
    live: "https://madrasa-website-seven.vercel.app/",
  },
  {
    id: 2,
    featured: false,
    title: "The Jannath Foundation UK",
    description:
      "A modern and responsive foundation website focused on presenting the organization's mission, information, gallery, and contact experience in a clean multilingual interface.",
    category: "Frontend Project",
    status: "Completed",
    icon: Sparkles,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "next-intl",
      "EmailJS",
    ],
    features: [
      "Responsive Design",
      "English & Bangla",
      "Modern UI",
      "Gallery",
      "Contact Form",
      "SEO-Friendly Structure",
    ],
    github: "https://github.com/",
    live: "https://thejfuk.com/",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-violet-400" />
            Selected Work
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Projects I&apos;ve{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            A selection of real-world projects where I&apos;ve focused on
            building practical solutions, clean interfaces, and maintainable
            full-stack systems.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mt-16">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-violet-500/30">
            {/* Glow */}
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px] transition duration-500 group-hover:bg-violet-500/20" />

            <div className="grid lg:grid-cols-2">
              {/* Project Visual */}
              <div className="relative min-h-[360px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${projects[0].gradient}`}
                />

                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="relative flex h-full items-center justify-center p-8 sm:p-12">
                  <div className="w-full max-w-md">
                    {/* Dashboard Mockup */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-violet-950/30">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                        </div>

                        <div className="h-2 w-20 rounded-full bg-white/10" />
                      </div>

                      {/* Dashboard Content */}
                      <div className="grid grid-cols-[80px_1fr]">
                        <div className="border-r border-white/10 bg-white/[0.02] p-3">
                          <div className="space-y-3">
                            <div className="h-8 rounded-lg bg-violet-500/20" />
                            <div className="h-8 rounded-lg bg-white/5" />
                            <div className="h-8 rounded-lg bg-white/5" />
                            <div className="h-8 rounded-lg bg-white/5" />
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="mb-5 h-4 w-28 rounded-full bg-white/10" />

                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                              <div className="mb-3 h-2 w-12 rounded-full bg-white/10" />
                              <div className="h-6 w-16 rounded bg-violet-400/20" />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                              <div className="mb-3 h-2 w-12 rounded-full bg-white/10" />
                              <div className="h-6 w-16 rounded bg-cyan-400/20" />
                            </div>
                          </div>

                          <div className="mt-3 h-28 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                            <div className="mb-4 h-2 w-20 rounded-full bg-white/10" />

                            <div className="flex items-end gap-2">
                              <div className="h-10 w-4 rounded-t bg-violet-400/30" />
                              <div className="h-16 w-4 rounded-t bg-violet-400/40" />
                              <div className="h-12 w-4 rounded-t bg-violet-400/30" />
                              <div className="h-20 w-4 rounded-t bg-cyan-400/40" />
                              <div className="h-14 w-4 rounded-t bg-violet-400/30" />
                              <div className="h-24 w-4 rounded-t bg-cyan-400/50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="relative -mt-7 ml-auto mr-2 flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                      <ShieldCheck className="h-5 w-5 text-emerald-400" />
                      <div>
                        <p className="text-xs font-medium text-white">
                          Secure Dashboard
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Admin Management
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
                    Featured Project
                  </span>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {projects[0].status}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                  {projects[0].title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {projects[0].description}
                </p>

                {/* Features */}
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {projects[0].features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {projects[0].technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href={projects[0].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    Live Project
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>

                  <Link
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {projects.slice(1).map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/[0.05] sm:p-8"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>

                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mt-6 grid grid-cols-2 gap-y-3">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-black/10 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-8 flex items-center gap-5 border-t border-white/10 pt-6">
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-300"
                    >
                      View Project
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>

                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
                    >
                      <FaGithub className="h-4 w-4" />
                      Source
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mb-4 flex justify-center">
              <Users className="h-6 w-6 text-violet-400" />
            </div>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Every project is a chance to build something better.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
              I&apos;m continuously building, learning, and improving through
              real-world projects.
            </p>

            <Link
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-violet-400/30 hover:bg-white/10"
            >
              Let&apos;s Work Together
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return <ArrowUpRight className="h-4 w-4" />;
}
