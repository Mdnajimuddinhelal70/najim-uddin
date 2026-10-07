"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const technologies = ["Next.js", "TypeScript", "React", "Node.js", "MongoDB"];

const stats = [
  {
    value: "01+",
    label: "Years Learning",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "100%",
    label: "Passion",
  },
];

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main radial glow */}
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/[0.13] blur-[180px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[180px]" />

        {/* Side glow */}
        <div className="absolute right-[-200px] top-[30%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/[0.07] blur-[170px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Top center light */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for new opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                Full Stack Web Developer
              </p>

              <h1 className="text-[clamp(3.5rem,8vw,6.8rem)] font-black leading-[0.88] tracking-[-0.055em]">
                Building
                <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Digital
                </span>
                <span className="block text-slate-100">Experiences.</span>
              </h1>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I design and develop modern web applications that combine
              thoughtful user experiences, clean architecture and reliable
              performance.
            </p>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {technologies.map((technology, index) => (
                <motion.span
                  key={technology}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3 + index * 0.05,
                    duration: 0.4,
                  }}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-400 transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.08] hover:text-white"
                >
                  {technology}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-slate-100 sm:px-7 sm:py-4"
              >
                Explore My Work
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:px-7 sm:py-4"
              >
                Let&apos;s Talk
                <Mail
                  size={17}
                  className="transition-transform duration-300 group-hover:rotate-6"
                />
              </Link>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              <Link
                href="#"
                aria-label="GitHub"
                className="group rounded-full border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <FaGithub
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="group rounded-full border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <FaLinkedin
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>

              <span className="ml-2 h-px w-10 bg-white/10" />

              <span className="text-xs text-slate-600">
                Based in Bangladesh
              </span>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center gap-7 border-t border-white/[0.07] pt-7">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold text-white">{stat.value}</p>

                  <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative hidden lg:block"
          >
            {/* Large Glow */}
            <div className="absolute -inset-16 rounded-full bg-violet-500/[0.08] blur-[100px]" />

            {/* Decorative Circle */}
            <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

            <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-400/[0.12]" />

            {/* Main Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto w-full max-w-[470px]"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-[#0b0d14]/90 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                {/* Card top */}
                <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>

                  <span className="text-[11px] font-medium text-slate-600">
                    portfolio.tsx
                  </span>

                  <Code2 size={16} className="text-violet-400" />
                </div>

                {/* Main card */}
                <div className="p-7">
                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-xl font-black shadow-lg shadow-violet-500/20">
                        NH
                      </div>

                      <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[#0b0d14] bg-emerald-400" />
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-white">
                        Najim Uddin Helal
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        Full Stack Web Developer
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-7 h-px bg-white/[0.06]" />

                  {/* Code */}
                  <div className="space-y-3 font-mono text-[12px] leading-6 sm:text-[13px]">
                    <div>
                      <span className="text-violet-400">const</span>{" "}
                      <span className="text-cyan-300">mindset</span>{" "}
                      <span className="text-slate-600">=</span>{" "}
                      <span className="text-yellow-300">{"{"}</span>
                    </div>

                    <div className="pl-5">
                      <span className="text-slate-500">curiosity:</span>{" "}
                      <span className="text-emerald-300">true</span>
                      <span className="text-slate-600">,</span>
                    </div>

                    <div className="pl-5">
                      <span className="text-slate-500">cleanCode:</span>{" "}
                      <span className="text-emerald-300">true</span>
                      <span className="text-slate-600">,</span>
                    </div>

                    <div className="pl-5">
                      <span className="text-slate-500">problemSolving:</span>{" "}
                      <span className="text-emerald-300">true</span>
                      <span className="text-slate-600">,</span>
                    </div>

                    <div className="pl-5">
                      <span className="text-slate-500">learning:</span>{" "}
                      <span className="text-emerald-300">
                        &quot;always&quot;
                      </span>
                      <span className="text-slate-600">,</span>
                    </div>

                    <div>
                      <span className="text-yellow-300">{"}"}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                      <Layers3 size={18} className="text-violet-400" />

                      <p className="mt-3 text-xs font-semibold text-white">
                        Scalable
                      </p>

                      <p className="mt-1 text-[11px] text-slate-600">
                        Architecture
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                      <Globe2 size={18} className="text-cyan-400" />

                      <p className="mt-3 text-xs font-semibold text-white">
                        Modern
                      </p>

                      <p className="mt-1 text-[11px] text-slate-600">
                        Web Experience
                      </p>
                    </div>
                  </div>

                  {/* Bottom status */}
                  <div className="mt-5 flex items-center justify-between rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10">
                        <Check size={12} className="text-emerald-400" />
                      </div>

                      <span className="text-[11px] text-slate-400">
                        Ready to build
                      </span>
                    </div>

                    <ArrowUpRight size={15} className="text-slate-600" />
                  </div>
                </div>
              </div>

              {/* Floating card - top */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-7 -top-7 rounded-2xl border border-white/10 bg-[#10131c]/90 px-4 py-3 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-500/10 p-2">
                    <Sparkles size={16} className="text-violet-400" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-600">
                      Quality
                    </p>

                    <p className="text-xs font-semibold text-slate-200">
                      Crafted with care
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card - bottom */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-7 -left-7 rounded-2xl border border-white/10 bg-[#10131c]/90 px-4 py-3 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-500/10 p-2">
                    <Code2 size={16} className="text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-600">
                      Stack
                    </p>

                    <p className="text-xs font-semibold text-slate-200">
                      Modern Technologies
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
