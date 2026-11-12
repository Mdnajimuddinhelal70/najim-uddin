"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { headingVariants } from "./project-animations";

export default function ProjectHeader() {
  return (
    <motion.div
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto max-w-3xl text-center"
    >
      {/* Badge */}

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">
        <Sparkles className="h-4 w-4 text-violet-400" />
        Selected Work
      </div>

      {/* Heading */}

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Projects I&apos;ve{" "}
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Built
        </span>
      </h2>

      {/* Description */}

      <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
        A selection of real-world projects where I&apos;ve focused on building
        practical solutions, clean interfaces, and maintainable full-stack
        systems.
      </p>
    </motion.div>
  );
}
