"use client";

import { motion, type Variants } from "framer-motion";
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

/* --------------------------------
   Animation Variants
--------------------------------- */

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const featuredContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const featuredVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const featuredVisualVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -35,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const featuredContentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 35,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const featureContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const featureVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 10,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const technologyContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const technologyVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const projectContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const projectVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const bottomCtaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProjectsSection() {
  const featuredProject = projects[0];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28"
    >
      {/* --------------------------------
          Background Effects
      --------------------------------- */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute right-1/4 top-1/2 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --------------------------------
            Section Header
        --------------------------------- */}

        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
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
        </motion.div>

        {/* --------------------------------
            Featured Project
        --------------------------------- */}

        <motion.div
          variants={featuredContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-16"
        >
          <motion.div
            variants={featuredVariants}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-violet-500/30"
          >
            {/* Glow */}

            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px] transition duration-500 group-hover:bg-violet-500/20" />

            <div className="grid lg:grid-cols-2">
              {/* --------------------------------
                  Project Visual
              --------------------------------- */}

              <motion.div
                variants={featuredVisualVariants}
                className="relative min-h-[360px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${featuredProject.gradient}`}
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
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full max-w-md"
                  >
                    {/* Dashboard Mockup */}

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-violet-950/30 transition-transform duration-500 group-hover:scale-[1.02]">
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
                              <motion.div
                                animate={{ height: [40, 48, 40] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="w-4 rounded-t bg-violet-400/30"
                              />

                              <motion.div
                                animate={{ height: [64, 56, 64] }}
                                transition={{
                                  duration: 2.2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="w-4 rounded-t bg-violet-400/40"
                              />

                              <motion.div
                                animate={{ height: [48, 60, 48] }}
                                transition={{
                                  duration: 1.8,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="w-4 rounded-t bg-violet-400/30"
                              />

                              <motion.div
                                animate={{ height: [80, 68, 80] }}
                                transition={{
                                  duration: 2.1,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="w-4 rounded-t bg-cyan-400/40"
                              />

                              <motion.div
                                animate={{ height: [56, 70, 56] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="w-4 rounded-t bg-violet-400/30"
                              />

                              <motion.div
                                animate={{ height: [96, 82, 96] }}
                                transition={{
                                  duration: 2.3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="w-4 rounded-t bg-cyan-400/50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge */}

                    <motion.div
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                      }}
                      className="relative -mt-7 ml-auto mr-2 flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl"
                    >
                      <ShieldCheck className="h-5 w-5 text-emerald-400" />

                      <div>
                        <p className="text-xs font-medium text-white">
                          Secure Dashboard
                        </p>

                        <p className="text-[10px] text-slate-500">
                          Admin Management
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* --------------------------------
                  Project Content
              --------------------------------- */}

              <motion.div
                variants={featuredContentVariants}
                className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
                    Featured Project
                  </span>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {featuredProject.status}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {featuredProject.description}
                </p>

                {/* Features */}

                <motion.div
                  variants={featureContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mt-7 grid grid-cols-2 gap-3"
                >
                  {featuredProject.features.map((feature) => (
                    <motion.div
                      key={feature}
                      variants={featureVariants}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

                      {feature}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Technologies */}

                <motion.div
                  variants={technologyContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mt-8 flex flex-wrap gap-2"
                >
                  {featuredProject.technologies.map((technology) => (
                    <motion.span
                      key={technology}
                      variants={technologyVariants}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-colors duration-300 hover:border-violet-400/20 hover:bg-violet-400/5"
                    >
                      {technology}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Actions */}

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    Live Project
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>

                  <Link
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* --------------------------------
            Other Projects
        --------------------------------- */}

        <motion.div
          variants={projectContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-8 grid gap-8 lg:grid-cols-2"
        >
          {projects.slice(1).map((project) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:border-cyan-500/30 hover:bg-white/[0.05] sm:p-8"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
                />

                <div className="relative">
                  {/* Header */}

                  <div className="flex items-start justify-between gap-5">
                    <motion.div
                      whileHover={{
                        rotate: 5,
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                    >
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </motion.div>

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

                  <motion.div
                    variants={featureContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-6 grid grid-cols-2 gap-y-3"
                  >
                    {project.features.map((feature) => (
                      <motion.div
                        key={feature}
                        variants={featureVariants}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                        {feature}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Technologies */}

                  <motion.div
                    variants={technologyContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-7 flex flex-wrap gap-2"
                  >
                    {project.technologies.map((technology) => (
                      <motion.span
                        key={technology}
                        variants={technologyVariants}
                        className="rounded-lg border border-white/10 bg-black/10 px-3 py-1.5 text-xs text-slate-400 transition-colors duration-300 hover:border-cyan-400/20 hover:text-slate-300"
                      >
                        {technology}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Links */}

                  <div className="mt-8 flex items-center gap-5 border-t border-white/10 pt-6">
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-300"
                    >
                      View Project
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
              </motion.div>
            );
          })}
        </motion.div>

        {/* --------------------------------
            Bottom CTA
        --------------------------------- */}

        <motion.div
          variants={bottomCtaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 5,
              }}
              transition={{
                duration: 0.25,
              }}
              className="mb-4 flex justify-center"
            >
              <Users className="h-6 w-6 text-violet-400" />
            </motion.div>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Every project is a chance to build something better.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
              I&apos;m continuously building, learning, and improving through
              real-world projects.
            </p>

            <Link
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-violet-400/30 hover:bg-white/10"
            >
              Let&apos;s Work Together
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
