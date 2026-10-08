"use client";

import { motion, type Variants } from "framer-motion";
import {
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Server,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    description: "Building modern, responsive, and interactive interfaces.",
    icon: Globe2,
    technologies: [
      {
        name: "HTML5",
        level: "Advanced",
        short: "HTML",
        className: "from-orange-500/20 to-orange-500/5",
      },
      {
        name: "CSS3",
        level: "Advanced",
        short: "CSS",
        className: "from-blue-500/20 to-blue-500/5",
      },
      {
        name: "JavaScript",
        level: "Strong",
        short: "JS",
        className: "from-yellow-500/20 to-yellow-500/5",
      },
      {
        name: "TypeScript",
        level: "Strong",
        short: "TS",
        className: "from-blue-600/20 to-blue-600/5",
      },
      {
        name: "React",
        level: "Strong",
        short: "RE",
        className: "from-cyan-500/20 to-cyan-500/5",
      },
      {
        name: "Next.js",
        level: "Strong",
        short: "NX",
        className: "from-white/15 to-white/5",
      },
      {
        name: "Tailwind CSS",
        level: "Strong",
        short: "TW",
        className: "from-cyan-400/20 to-cyan-400/5",
      },
      {
        name: "shadcn/ui",
        level: "Comfortable",
        short: "SC",
        className: "from-violet-500/20 to-violet-500/5",
      },
      {
        name: "Framer Motion",
        level: "Comfortable",
        short: "FR",
        className: "from-violet-500/20 to-violet-500/5",
      },
    ],
  },
  {
    category: "Backend",
    description: "Creating secure APIs and reliable server-side systems.",
    icon: Server,
    technologies: [
      {
        name: "Node.js",
        level: "Strong",
        short: "NO",
        className: "from-green-500/20 to-green-500/5",
      },
      {
        name: "Express.js",
        level: "Strong",
        short: "EX",
        className: "from-slate-300/15 to-slate-300/5",
      },
      {
        name: "REST API",
        level: "Strong",
        short: "API",
        className: "from-emerald-500/20 to-emerald-500/5",
      },
      {
        name: "Zod",
        level: "Comfortable",
        short: "ZD",
        className: "from-blue-400/20 to-blue-400/5",
      },
    ],
  },
  {
    category: "Database",
    description: "Designing and managing structured application data.",
    icon: Database,
    technologies: [
      {
        name: "MongoDB",
        level: "Strong",
        short: "DB",
        className: "from-green-500/20 to-green-500/5",
      },
      {
        name: "Mongoose",
        level: "Strong",
        short: "MG",
        className: "from-red-500/20 to-red-500/5",
      },
      {
        name: "PostgreSQL",
        level: "Strong",
        short: "PG",
        className: "from-red-500/20 to-red-500/5",
      },
      {
        name: "MySQL",
        level: "Strong",
        short: "MY",
        className: "from-red-500/20 to-red-500/5",
      },
    ],
  },
  {
    category: "Tools & Workflow",
    description: "Tools I use to build, manage, and deploy projects.",
    icon: Wrench,
    technologies: [
      {
        name: "Git",
        level: "Strong",
        short: "GIT",
        className: "from-orange-500/20 to-orange-500/5",
      },
      {
        name: "GitHub",
        level: "Strong",
        short: "GH",
        className: "from-white/15 to-white/5",
      },
      {
        name: "Vercel",
        level: "Comfortable",
        short: "VC",
        className: "from-white/15 to-white/5",
      },
      {
        name: "Render",
        level: "Comfortable",
        short: "RD",
        className: "from-purple-500/20 to-purple-500/5",
      },
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Plan",
    description: "Understand the problem and structure the solution.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Build",
    description: "Turn ideas into clean and functional interfaces.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Connect",
    description: "Integrate APIs, authentication, and databases.",
    icon: Braces,
  },
  {
    number: "04",
    title: "Deploy",
    description: "Ship the application and keep improving it.",
    icon: Cloud,
  },
];

/* --------------------------------
   Animation Variants
--------------------------------- */

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

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

const categoryContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const categoryVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
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

const technologyContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const technologyVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 12,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const workflowContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const workflowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
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

const statementVariants: Variants = {
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

export default function TechStackSection() {
  return (
    <motion.section
      id="skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* --------------------------------
            Heading
        --------------------------------- */}

        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
            <Terminal className="h-3.5 w-3.5" />
            Tech Stack
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tools behind the{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              work I build.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            A collection of technologies I use to design, develop, connect, and
            deploy modern full-stack web applications.
          </p>
        </motion.div>

        {/* --------------------------------
            Tech Categories
        --------------------------------- */}

        <motion.div
          variants={categoryContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-16 grid gap-6 lg:grid-cols-2"
        >
          {techStack.map((stack) => {
            const CategoryIcon = stack.icon;

            return (
              <motion.div
                key={stack.category}
                variants={categoryVariants}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05] sm:p-7"
              >
                {/* Category Header */}

                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.05] text-cyan-300 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-cyan-400/10 group-hover:text-cyan-200">
                      <CategoryIcon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {stack.category}
                      </h3>

                      <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
                        {stack.description}
                      </p>
                    </div>
                  </div>

                  <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-slate-500 sm:block">
                    {stack.technologies.length} Tools
                  </span>
                </div>

                {/* Technologies */}

                <motion.div
                  variants={technologyContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3"
                >
                  {stack.technologies.map((technology) => (
                    <motion.div
                      key={technology.name}
                      variants={technologyVariants}
                      className="group/tech flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${technology.className} text-[10px] font-bold tracking-tight text-white ring-1 ring-white/10`}
                      >
                        {technology.short}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-slate-200">
                          {technology.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-600 transition-colors group-hover/tech:text-slate-500">
                          {technology.level}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --------------------------------
            Workflow
        --------------------------------- */}

        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20"
        >
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
              <GitBranch className="h-3.5 w-3.5" />
              My Development Workflow
            </div>

            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              From idea to <span className="text-slate-500">production.</span>
            </h3>
          </div>

          <div className="relative mt-10">
            {/* Connecting Line */}

            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

            <motion.div
              variants={workflowContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {workflow.map((item) => {
                const WorkflowIcon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    variants={workflowVariants}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04]"
                  >
                    <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-violet-300 shadow-xl transition-transform duration-300 group-hover:scale-105">
                      <WorkflowIcon className="h-5 w-5" />

                      <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border border-slate-800 bg-violet-500 px-1.5 text-[9px] font-bold text-white">
                        {item.number}
                      </span>
                    </div>

                    <h4 className="mt-5 text-sm font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* --------------------------------
            Bottom Statement
        --------------------------------- */}

        <motion.div
          variants={statementVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-300">
              <Sparkles className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Always exploring better ways to build.
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Technology changes. The goal stays the same: build better
                products.
              </p>
            </div>
          </div>

          <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.15em] text-slate-600">
            Build • Learn • Improve
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
