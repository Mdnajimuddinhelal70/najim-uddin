"use client";

import { motion, type Variants } from "framer-motion";
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

const contentContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const profileCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
    y: 20,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const rightContentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
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

const statsContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const statVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const highlightsContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const highlightVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const resumeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      {/* --------------------------------
          Background
      --------------------------------- */}

      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      {/* --------------------------------
          Main Container
      --------------------------------- */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* --------------------------------
            Section Heading
        --------------------------------- */}

        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
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
        </motion.div>

        {/* --------------------------------
            Main Content
        --------------------------------- */}

        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-16 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          {/* --------------------------------
              Left Profile Card
          --------------------------------- */}

          <motion.div variants={profileCardVariants} className="relative">
            {/* Glow */}

            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/15 hover:bg-white/[0.05] sm:p-9">
              {/* Decorative Gradient */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

              {/* Profile Header */}

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Developer Profile
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Najim Uddin Helal
                  </h3>
                </div>

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/20"
                >
                  <Code2 className="h-5 w-5 text-white" />
                </motion.div>
              </div>

              {/* Profile Description */}

              <p className="relative mt-7 text-sm leading-7 text-slate-400">
                My journey in web development is driven by curiosity,
                consistency, and the desire to create better digital
                experiences. I enjoy working across the frontend and backend
                while keeping performance, usability, and clean architecture in
                mind.
              </p>

              {/* Stats */}

              <motion.div
                variants={statsContainerVariants}
                className="relative mt-8 grid grid-cols-3 gap-3"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={statVariants}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-2xl border border-white/10 bg-black/10 p-4 transition-colors duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
                  >
                    <p className="text-sm font-bold text-white">{stat.value}</p>

                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Resume CTA */}

              <motion.div variants={resumeVariants} className="relative mt-8">
                <Link
                  href="/resume"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/10"
                >
                  Download Resume
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* --------------------------------
              Right Content
          --------------------------------- */}

          <motion.div variants={rightContentVariants}>
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

              {/* --------------------------------
                  Highlight Grid
              --------------------------------- */}

              <motion.div
                variants={highlightsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="mt-10 grid gap-4 sm:grid-cols-2"
              >
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={highlightVariants}
                      whileHover={{
                        y: -5,
                      }}
                      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: 4,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition-colors duration-300 group-hover:bg-violet-500/20"
                        >
                          <Icon className="h-[18px] w-[18px]" />
                        </motion.div>

                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-xs leading-6 text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* --------------------------------
                  Learn More
              --------------------------------- */}

              <motion.div
                variants={resumeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  href="#skills"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  Explore my skills
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
