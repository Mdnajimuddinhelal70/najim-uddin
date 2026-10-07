"use client";

import { motion, type Variants } from "framer-motion";
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

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

/* --------------------------------
   Animation Variants
--------------------------------- */

const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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
      staggerChildren: 0.1,
    },
  },
};

const contentItemVariants: Variants = {
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

const socialContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const socialVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: 10,
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

const linkContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const linkVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
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
    scale: 0.85,
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

const bottomBarVariants: Variants = {
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* =========================================
          Background Effects
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Bottom Glows */}
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[130px]" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

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
        {/* =========================================
            Big CTA
        ========================================== */}

        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24"
        >
          {/* CTA Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4" />
              Let&apos;s Create Something Great
            </motion.div>

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
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="mt-9 inline-block"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-2xl shadow-violet-950/20 transition-all duration-300 hover:bg-slate-100 hover:shadow-violet-900/30"
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* =========================================
            Main Footer Content
        ========================================== */}

        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr]"
        >
          {/* Brand */}
          <motion.div variants={contentItemVariants} className="max-w-md">
            <Link href="#home" className="group inline-flex items-center gap-3">
              {/* Logo */}
              <motion.span
                whileHover={{
                  scale: 1.06,
                  rotate: 4,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 shadow-lg shadow-violet-950/20"
              >
                <Code2 className="h-5 w-5 text-violet-300 transition-transform duration-300 group-hover:rotate-6" />
              </motion.span>

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
            <motion.div
              variants={socialContainerVariants}
              className="mt-7 flex items-center gap-3"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.div key={social.label} variants={socialVariants}>
                    <Link
                      href={social.href}
                      target={social.label !== "Email" ? "_blank" : undefined}
                      rel={
                        social.label !== "Email"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.label}
                      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-violet-300"
                    >
                      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={contentItemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <motion.ul
              variants={linkContainerVariants}
              className="mt-5 space-y-3"
            >
              {quickLinks.map((link) => (
                <motion.li key={link.label} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-500 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-3" />

                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={contentItemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Built With
            </h3>

            <motion.div
              variants={technologyContainerVariants}
              className="mt-5 flex flex-wrap gap-2"
            >
              {technologies.map((tech) => (
                <motion.span
                  key={tech}
                  variants={technologyVariants}
                  whileHover={{
                    y: -2,
                  }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-500 transition-colors duration-300 hover:border-violet-400/20 hover:text-slate-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <Link
              href="mailto:your-email@example.com"
              className="group mt-7 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-violet-300"
            >
              <Mail className="h-4 w-4" />
              Let&apos;s connect
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* =========================================
            Bottom Bar
        ========================================== */}

        <motion.div
          variants={bottomBarVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Copyright */}
          <p className="text-xs text-slate-600 sm:text-sm">
            © {currentYear} Najim Uddin Helal. All rights reserved.
          </p>

          {/* Center */}
          <div className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
            <span>Designed & Built with</span>

            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-violet-400"
            >
              ♥
            </motion.span>

            <span>and code.</span>
          </div>

          {/* Back To Top */}
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#home"
              aria-label="Back to top"
              className="group flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-slate-500 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.05] hover:text-white sm:text-sm"
            >
              Back to top
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
