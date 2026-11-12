"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import Link from "next/link";

import { bottomCtaVariants } from "./project-animations";

export default function ProjectsCTA() {
  return (
    <motion.div
      variants={bottomCtaVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16 text-center"
    >
      <div className="mx-auto max-w-2xl">
        {/* Icon */}

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 5,
          }}
          transition={{
            duration: 0.25,
          }}
          className="mb-4 flex justify-center"
        >
          <Users className="h-6 w-6 text-violet-400" />
        </motion.div>

        {/* Heading */}

        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          Every project is a chance to build something better.
        </h3>

        {/* Description */}

        <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
          I&apos;m continuously building, learning, and improving through
          real-world projects.
        </p>

        {/* Contact Button */}

        <Link
          href="#contact"
          className="group mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-violet-400/30 hover:bg-white/10"
        >
          Let&apos;s Work Together
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
