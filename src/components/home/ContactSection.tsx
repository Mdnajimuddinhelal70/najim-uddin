"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Sylhet, Bangladesh",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/",
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

const leftCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
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

const rightCardVariants: Variants = {
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

const contactItemsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const contactItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
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

const formContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const formItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const bottomCtaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-violet-400" />
            Get In Touch
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Great
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Have an idea, project, or opportunity in mind? I&apos;d love to hear
            about it and explore how we can turn it into something meaningful.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Side */}
          <motion.div
            variants={leftCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-[100px]" />

            <div className="relative">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10"
              >
                <MessageCircle className="h-6 w-6 text-violet-400" />
              </motion.div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                Let&apos;s talk
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Whether you have a project idea, a collaboration opportunity, or
                simply want to connect, feel free to reach out.
              </p>

              {/* Contact Information */}
              <motion.div
                variants={contactItemsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-8 space-y-4"
              >
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div key={item.title} variants={contactItemVariants}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.05]"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 transition-colors duration-300 group-hover:bg-violet-400/10">
                          <Icon className="h-5 w-5 text-violet-400" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-wider text-slate-500">
                            {item.title}
                          </p>

                          <p className="mt-1 truncate text-sm font-medium text-slate-200">
                            {item.value}
                          </p>
                        </div>

                        <ArrowUpRight className="ml-auto h-4 w-4 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400" />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Social Links */}
              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="text-sm font-medium text-slate-300">
                  Find me online
                </p>

                <motion.div
                  variants={socialContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-4 flex gap-3"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <motion.div key={social.label} variants={socialVariants}>
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-violet-300"
                        >
                          <Icon className="h-5 w-5" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={rightCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9"
          >
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />

            <div className="relative">
              <div className="mb-8">
                <p className="text-sm font-medium text-violet-400">
                  Send a message
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Tell me about your project
                </h3>
              </div>

              <motion.form
                variants={formContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-6"
              >
                {/* Name + Email */}
                <motion.div
                  variants={formItemVariants}
                  className="grid gap-6 sm:grid-cols-2"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-violet-400/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-violet-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-violet-400/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-violet-400/20"
                    />
                  </div>
                </motion.div>

                {/* Subject */}
                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Let's build something together"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-violet-400/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-violet-400/20"
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me a little about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-violet-400/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-violet-400/20"
                  />
                </motion.div>

                {/* Submit */}
                <motion.div variants={formItemVariants}>
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-950/20 transition-all duration-300 hover:from-violet-400 hover:to-fuchsia-400 hover:shadow-violet-900/30"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </motion.button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={bottomCtaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-slate-500">
            Prefer email? Reach out directly and I&apos;ll get back to you.
          </p>

          <Link
            href="mailto:your-email@example.com"
            className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-violet-300"
          >
            your-email@example.com
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
