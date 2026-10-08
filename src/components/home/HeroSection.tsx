"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const techStack = ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"];

const stats = [
  {
    value: "Full Stack",
    label: "Development",
  },
  {
    value: "Modern",
    label: "Tech Stack",
  },
  {
    value: "Real World",
    label: "Projects",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[#030712] text-white"
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main atmospheric glow */}
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-violet-600/[0.07] blur-[130px]" />

        <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-fuchsia-600/[0.035] blur-[150px]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet-950/10 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#030712] to-transparent" />

        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/[0.025] lg:block" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Availability */}
            <motion.div
              variants={fadeUpVariants}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/10 bg-emerald-400/[0.035] px-3.5 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[11px] font-medium tracking-wide text-emerald-300/90">
                Available for opportunities
              </span>
            </motion.div>

            {/* Small intro */}
            <motion.div
              variants={fadeUpVariants}
              className="mb-5 flex items-center gap-3 text-sm text-slate-500"
            >
              <span className="h-px w-8 bg-slate-700" />

              <span className="font-medium">Hello, I&apos;m Najim Uddin</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeUpVariants}
              className="max-w-4xl text-[2.7rem] font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4.7rem]"
            >
              I build digital
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  experiences
                </span>

                <span className="absolute -bottom-1 left-0 h-4 w-full bg-violet-500/10 blur-2xl" />
              </span>
              <br />
              <span className="text-slate-300">that make an impact.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className="mt-7 max-w-2xl text-[15px] leading-7 text-slate-400 sm:text-lg sm:leading-8"
            >
              I&apos;m a Full Stack Web Developer focused on building modern,
              scalable, and user-friendly web applications with clean
              architecture, thoughtful interfaces, and reliable backend systems.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-2xl shadow-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
              >
                Explore My Work
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.08]"
              >
                Let&apos;s Work Together
                <ExternalLink
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-8 flex items-center gap-4"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-600">
                Connect
              </span>

              <span className="h-px w-8 bg-white/10" />

              <Link
                href="https://github.com/Mdnajimuddinhelal70"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5 text-slate-500 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
              >
                <FaGithub size={17} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/najimuddin-helal-70/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5 text-slate-500 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
              >
                <FaLinkedin size={17} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/[0.06] py-5"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className={`px-3 first:pl-0 ${
                    index !== 0 ? "border-l border-white/[0.06]" : ""
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-200 sm:text-base">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT PROFILE AREA
          ================================================== */}

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full max-w-[450px] lg:ml-auto"
          >
            {/* Ambient glow */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-8 rounded-[3rem] bg-violet-600/10 blur-[70px]"
            />

            {/* Rotating decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-5 rounded-[3rem] border border-dashed border-white/[0.05]"
            />

            {/* Main Card */}
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:p-4">
              {/* Image */}
              <div className="group relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-slate-950">
                <div className="relative aspect-[4/4.8] w-full">
                  <Image
                    src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1776686393/myPic1.jpeg-1776686389686.jpg"
                    alt="Najim Uddin - Full Stack Web Developer"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 55vw, 450px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  {/* Dark cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-black/10" />

                  {/* Subtle color wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-cyan-400/[0.05]" />

                  {/* Profile label */}
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-violet-300">
                            Full Stack Developer
                          </p>

                          <h2 className="mt-1 text-lg font-semibold text-white">
                            Najim Uddin
                          </h2>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
                          <CheckCircle2
                            size={16}
                            className="text-emerald-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="px-2 pb-1 pt-5">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-600">
                      Based in
                    </p>

                    <div className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                      <MapPin size={13} className="text-violet-400" />
                      Bangladesh
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-600">
                      Specialization
                    </p>

                    <p className="mt-1.5 text-sm font-medium text-slate-300">
                      Web Applications
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-medium text-slate-500 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/[0.08] hover:text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING CODE CARD
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: "easeOut",
              }}
              className="absolute -right-4 top-16 hidden sm:block"
            >
              <div className="rounded-xl border border-white/10 bg-[#080d1b]/90 px-3.5 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                    <Code2 size={15} className="text-violet-300" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-slate-600">
                      Building
                    </p>

                    <p className="font-mono text-[11px] font-semibold text-slate-300">
                      clean_code()
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING AVAILABLE CARD
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1,
                ease: "easeOut",
              }}
              className="absolute -left-5 bottom-24 hidden sm:block"
            >
              <div className="rounded-xl border border-white/10 bg-[#080d1b]/90 px-3.5 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10">
                    <Sparkles size={15} className="text-emerald-300" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-slate-600">
                      Status
                    </p>

                    <p className="text-[11px] font-semibold text-emerald-300">
                      Open to work
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tiny accent */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 -top-2 h-3.5 w-3.5 rounded-full border-2 border-[#030712] bg-violet-400 shadow-lg shadow-violet-500/50"
            />
          </motion.div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: "easeOut",
          }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <Link
            href="#about"
            aria-label="Scroll to About section"
            className="group flex flex-col items-center gap-2 text-slate-700 transition-colors duration-300 hover:text-slate-400"
          >
            <span className="text-[8px] font-medium uppercase tracking-[0.32em]">
              Scroll to explore
            </span>

            <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/10 p-1.5">
              <motion.span
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown size={11} />
              </motion.span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
