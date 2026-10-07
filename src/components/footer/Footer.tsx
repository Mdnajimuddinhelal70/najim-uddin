"use client";

import { ArrowUp, ArrowUpRight, Code2, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* =====================================================
          Background Effects
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            Big CTA
        ====================================================== */}
        <div className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24">
          {/* CTA Glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles className="h-4 w-4" />
              Let&apos;s Create Something Great
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have an idea?
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Let&apos;s build it.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              I&apos;m always interested in meaningful projects, creative ideas,
              and opportunities to build something useful together.
            </p>

            {/* CTA */}
            <Link
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-2xl shadow-violet-950/20 transition hover:-translate-y-1 hover:bg-slate-100"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* =====================================================
            Main Footer Content
        ====================================================== */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="#home" className="group inline-flex items-center gap-3">
              {/* Logo */}
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 shadow-lg shadow-violet-950/20">
                <Code2 className="h-5 w-5 text-violet-300 transition-transform duration-300 group-hover:rotate-6" />
              </span>

              <span className="text-xl font-bold tracking-tight text-white">
                Najim
                <span className="text-violet-400">.</span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Full Stack Web Developer focused on building modern,
              user-friendly, and maintainable web applications with clean
              architecture and thoughtful experiences.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={
                      social.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-violet-300"
                  >
                    <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
                  >
                    <span className="h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Built With
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-500 transition hover:border-violet-400/20 hover:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="mailto:your-email@example.com"
              className="group mt-7 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-300"
            >
              <Mail className="h-4 w-4" />
              Let&apos;s connect
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* =====================================================
            Bottom Bar
        ====================================================== */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-xs text-slate-600 sm:text-sm">
            © {currentYear} Najim Uddin Helal. All rights reserved.
          </p>

          {/* Center */}
          <div className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
            <span>Designed & Built with</span>
            <span className="text-violet-400">♥</span>
            <span>and code.</span>
          </div>

          {/* Back To Top */}
          <Link
            href="#home"
            aria-label="Back to top"
            className="group flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-slate-500 transition hover:border-violet-400/20 hover:bg-white/[0.05] hover:text-white sm:text-sm"
          >
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
