"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const techStack = ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"];

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
        {/* Top right glow */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-rose-600/10 blur-[120px]" />

        {/* Bottom left glow */}
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-900/10 blur-[120px]" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/5 blur-[140px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:60px_60px]" />

        {/* Top gradient */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-rose-950/10 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >
            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium tracking-wide text-slate-300">
                Available for opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[4.35rem]">
              Building digital
              <br />
              experiences that{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  matter.
                </span>

                {/* Under glow */}
                <span className="absolute -bottom-1 left-0 h-3 w-full bg-rose-500/20 blur-xl" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I&apos;m{" "}
              <span className="font-semibold text-slate-200">Najim Uddin</span>,
              a Full Stack Web Developer focused on building modern, scalable,
              and user-friendly web applications with clean code and thoughtful
              design.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-500 hover:text-white hover:shadow-rose-500/20"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-400/30 hover:bg-rose-500/10 hover:text-white"
              >
                Let&apos;s Talk
                <Mail size={17} />
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-9 flex items-center gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                Find me on
              </span>

              <div className="h-px w-8 bg-white/10" />

              <Link
                href="https://github.com/Mdnajimuddinhelal70"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-transparent p-2 text-slate-500 transition-all duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
              >
                <FaGithub size={19} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/najimuddin-helal-70/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-transparent p-2 text-slate-500 transition-all duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
              >
                <FaLinkedin size={19} />
              </Link>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT PREMIUM PROFILE
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[440px] lg:ml-auto"
          >
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-[3rem] bg-rose-500/10 blur-3xl" />

            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-[2.6rem] border border-white/[0.04]" />

            {/* Main profile card */}
            <div className="relative rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-4">
              {/* Image frame */}
              <div className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950">
                <div className="relative aspect-[4/4.8] w-full">
                  <Image
                    src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1776686393/myPic1.jpeg-1776686389686.jpg"
                    alt="Najim Uddin - Full Stack Web Developer"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 440px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  {/* Premium image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Soft rose glow */}
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-rose-950/30 to-transparent" />

                  {/* Image content */}
                  <div className="absolute inset-x-5 bottom-5">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-rose-300/80">
                        Full Stack Developer
                      </p>

                      <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
                        Najim Uddin
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card information */}
              <div className="px-2 pb-1 pt-5 sm:px-2">
                <div className="flex items-center justify-between">
                  {/* Location */}
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600">
                      Based in
                    </p>

                    <div className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                      <MapPin size={14} className="text-rose-400" />
                      Bangladesh
                    </div>
                  </div>

                  {/* Role */}
                  <div className="text-right">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600">
                      Focus
                    </p>

                    <p className="mt-1.5 text-sm font-medium text-slate-300">
                      Web Development
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.06] bg-white/[0.035] px-2.5 py-1.5 text-[11px] font-medium text-slate-500 transition-all duration-300 hover:border-rose-400/20 hover:bg-rose-500/10 hover:text-rose-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING NU BADGE
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: "easeOut",
              }}
              className="absolute -left-5 top-20 hidden sm:block"
            >
              <div className="rounded-2xl border border-white/10 bg-[#0b1120]/90 p-2 shadow-xl shadow-black/30 backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent text-white shadow-lg shadow-rose-900/30">
                  NU
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING CODE BADGE
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.05,
                ease: "easeOut",
              }}
              className="absolute -right-5 bottom-32 hidden sm:block"
            >
              <div className="rounded-xl border border-white/10 bg-[#0b1120]/90 px-3.5 py-2.5 shadow-xl shadow-black/30 backdrop-blur-xl">
                <span className="font-mono text-xs font-semibold text-rose-400">
                  {"<code />"}
                </span>
              </div>
            </motion.div>

            {/* Small decorative dot */}
            <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full border-2 border-[#030712] bg-rose-400 shadow-lg shadow-rose-500/40" />
          </motion.div>
        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: "easeOut",
          }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <Link
            href="#about"
            aria-label="Scroll to About section"
            className="group flex flex-col items-center gap-2 text-slate-600 transition-colors duration-300 hover:text-slate-300"
          >
            <span className="text-[9px] font-medium uppercase tracking-[0.3em]">
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
                <ArrowDown size={12} />
              </motion.span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
