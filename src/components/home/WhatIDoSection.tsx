"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Blocks,
  Check,
  Code2,
  Database,
  LayoutDashboard,
  ServerCog,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    number: "01",
    icon: Code2,
    title: "Modern Frontend",
    description:
      "I build responsive and polished interfaces that feel fast, intuitive, and consistent across devices.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    icon: ServerCog,
    title: "Backend & APIs",
    description:
      "I develop structured backend systems and REST APIs that connect frontend applications with reliable server-side logic.",
    technologies: ["Node.js", "Express.js", "REST API", "Zod"],
  },
  {
    number: "03",
    icon: Database,
    title: "Database Systems",
    description:
      "I design and manage application data with practical schemas and backend structures built around real project requirements.",
    technologies: ["MongoDB", "Mongoose", "Data Modeling"],
  },
  {
    number: "04",
    icon: LayoutDashboard,
    title: "Dashboard Systems",
    description:
      "I create practical dashboards for managing users, content, data, and application workflows from one place.",
    technologies: ["Admin Panels", "CRUD", "Authentication", "Forms"],
  },
  {
    number: "05",
    icon: Workflow,
    title: "Full Stack Integration",
    description:
      "I connect frontend, backend, authentication, APIs, and databases into a complete application workflow.",
    technologies: ["Server Actions", "JWT", "Cookies", "API Integration"],
  },
  {
    number: "06",
    icon: Blocks,
    title: "Project Architecture",
    description:
      "I organize projects with reusable components, clear folder structures, validation, and maintainable code.",
    technologies: ["Reusable UI", "Validation", "Clean Structure", "Git"],
  },
];

const principles = [
  "Responsive-first development",
  "Reusable component architecture",
  "Clean and maintainable code",
  "Practical API integration",
  "User-focused interface design",
  "Continuous improvement",
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

const capabilitiesContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const capabilityVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const technologyContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const technologyVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 8,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const philosophyVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const philosophyContentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const principlesContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const principleVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 15,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const ctaVariants: Variants = {
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

export default function WhatIDoSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      {/* --------------------------------
          Background
      --------------------------------- */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/3 h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* --------------------------------
            Heading
        --------------------------------- */}

        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300">
              <Sparkles className="h-3.5 w-3.5" />
              What I Do
            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              From interface to{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                full-stack.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-400 lg:justify-self-end lg:text-lg">
            I enjoy working across the entire development process—from designing
            interfaces and building reusable components to creating APIs,
            managing data, and connecting everything into a complete
            application.
          </p>
        </motion.div>

        {/* --------------------------------
            Capabilities
        --------------------------------- */}

        <motion.div
          variants={capabilitiesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                variants={capabilityVariants}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.05]"
              >
                {/* Hover Glow */}

                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

                {/* Top */}

                <div className="relative flex items-center justify-between">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/15 to-cyan-500/10 text-violet-300 ring-1 ring-white/10 transition-all duration-300 group-hover:from-violet-500/25 group-hover:to-cyan-500/20"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <span className="font-mono text-xs text-slate-600">
                    {item.number}
                  </span>
                </div>

                {/* Content */}

                <div className="relative mt-7">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>

                {/* Technologies */}

                <motion.div
                  variants={technologyContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative mt-7 flex flex-wrap gap-2"
                >
                  {item.technologies.map((technology) => (
                    <motion.span
                      key={technology}
                      variants={technologyVariants}
                      className="rounded-full border border-white/10 bg-black/10 px-2.5 py-1 text-[10px] font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-400"
                    >
                      {technology}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover:via-violet-400/40" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* --------------------------------
            Philosophy Block
        --------------------------------- */}

        <motion.div
          variants={philosophyVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
        >
          <div className="grid lg:grid-cols-[1fr_1fr]">
            {/* Left */}

            <motion.div
              variants={philosophyContentVariants}
              className="relative p-8 sm:p-10 lg:p-12"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-500/40 to-transparent" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
                Development Philosophy
              </p>

              <h3 className="mt-5 max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
                Good code solves the problem.
                <span className="block text-slate-500">
                  Great code respects the people using it.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500">
                I try to balance technical quality with real user needs. Whether
                I&apos;m working on a small interface or a larger application, I
                focus on clarity, usability, maintainability, and continuous
                improvement.
              </p>

              <Link
                href="#projects"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                See what I&apos;ve built
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Right */}

            <motion.div
              variants={philosophyContentVariants}
              className="border-t border-white/10 bg-white/[0.02] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300"
                >
                  <Check className="h-5 w-5" />
                </motion.div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    What I value
                  </p>

                  <p className="text-xs text-slate-600">
                    Principles behind my work
                  </p>
                </div>
              </div>

              {/* Principles */}

              <motion.div
                variants={principlesContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >
                {principles.map((principle) => (
                  <motion.div
                    key={principle}
                    variants={principleVariants}
                    className="flex items-start gap-3 text-sm text-slate-400"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-300">
                      <Check className="h-3 w-3" />
                    </span>

                    <span>{principle}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* --------------------------------
            Bottom CTA
        --------------------------------- */}

        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-500/[0.06] to-cyan-500/[0.06] p-6 text-center sm:flex-row sm:text-left"
        >
          <div>
            <p className="text-sm font-semibold text-white">
              Have an idea worth building?
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Let&apos;s turn it into a practical digital experience.
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10"
          >
            Start a conversation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
