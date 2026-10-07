"use client";

import { ArrowDown, ArrowRight, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const technologies = ["Next.js", "TypeScript", "React", "Node.js", "MongoDB"];

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Content */}
          <div className="max-w-3xl">
            {/* Availability Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </div>

            {/* Small Intro */}
            <div className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              <Sparkles className="h-4 w-4" />
              Full Stack Web Developer
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              I build digital
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                experiences
              </span>
              that matter.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I&apos;m Najim Uddin Helal, a Full Stack Web Developer focused on
              building modern, scalable, and user-friendly web applications with
              clean code and thoughtful user experiences.
            </p>

            {/* Tech Stack */}
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-slate-300 transition-colors duration-300 hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10"
              >
                Explore My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
              >
                Let&apos;s Talk
                <Mail className="h-4 w-4" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-3">
              <span className="mr-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                Find me
              </span>

              <Link
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <FaGithub className="h-4 w-4" />
              </Link>

              <Link
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <FaLinkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-[460px]">
              {/* Outer Glow */}
              <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-400/20 blur-3xl" />

              {/* Main Card */}
              <div className="absolute inset-10 rotate-3 rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl transition-transform duration-700 hover:rotate-0">
                <div className="flex h-full flex-col justify-between p-7">
                  {/* Browser Header */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                      <span className="h-3 w-3 rounded-full bg-green-400/80" />

                      <div className="ml-3 h-7 flex-1 rounded-md bg-white/[0.05]" />
                    </div>

                    {/* Code-like Content */}
                    <div className="mt-10 space-y-4 font-mono text-sm">
                      <div>
                        <span className="text-violet-400">const</span>{" "}
                        <span className="text-cyan-300">developer</span>{" "}
                        <span className="text-slate-500">=</span>{" "}
                        <span className="text-emerald-300">
                          &quot;Najim&quot;
                        </span>
                      </div>

                      <div className="pl-5">
                        <span className="text-violet-400">skills</span>
                        <span className="text-slate-500">:</span>{" "}
                        <span className="text-amber-300">[</span>
                      </div>

                      <div className="pl-10 text-slate-400">
                        &quot;Next.js&quot;,
                      </div>

                      <div className="pl-10 text-slate-400">
                        &quot;TypeScript&quot;,
                      </div>

                      <div className="pl-10 text-slate-400">
                        &quot;Node.js&quot;,
                      </div>

                      <div className="pl-10 text-slate-400">
                        &quot;MongoDB&quot;
                      </div>

                      <div className="pl-5 text-amber-300">]</div>

                      <div className="pt-3">
                        <span className="text-violet-400">return</span>{" "}
                        <span className="text-cyan-300">
                          buildSomethingAmazing
                        </span>
                        <span className="text-slate-300">()</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500">
                        Current focus
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-200">
                        Full Stack Development
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/20">
                      <ArrowRight className="h-5 w-5 -rotate-45 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -right-2 top-16 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                    &lt;/&gt;
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Building</p>
                    <p className="text-sm font-semibold text-white">
                      Scalable Apps
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-2 left-0 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                    ✦
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Passion</p>
                    <p className="text-sm font-semibold text-white">
                      Clean &amp; Modern UI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-white md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

        <ArrowDown className="h-4 w-4 animate-bounce" />
      </Link>
    </section>
  );
}
