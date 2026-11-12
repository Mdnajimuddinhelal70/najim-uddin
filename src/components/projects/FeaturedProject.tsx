"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import FeaturedProjectVisual from "./FeaturedProjectVisual";
import { projects } from "./project-data";

import {
  featureContainerVariants,
  featuredContentVariants,
  featuredVariants,
  featuredVisualVariants,
  featureVariants,
  technologyContainerVariants,
  technologyVariants,
} from "./project-animations";

export default function FeaturedProject() {
  const featuredProject = projects.find((project) => project.featured);

  if (!featuredProject) return null;

  return (
    <motion.div
      variants={featuredVariants}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-500 hover:border-cyan-500/30"
    >
      {/* Background Glow */}

      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px] transition duration-500 group-hover:bg-cyan-500/20" />

      <div className="grid lg:grid-cols-2">
        {/* Project Visual */}

        <motion.div
          variants={featuredVisualVariants}
          className="relative min-h-[360px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r"
        >
          {/* Gradient Background */}

          <div
            className={`absolute inset-0 bg-gradient-to-br ${featuredProject.gradient}`}
          />

          {/* Background Grid */}

          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <FeaturedProjectVisual />
        </motion.div>

        {/* Project Content */}

        <motion.div
          variants={featuredContentVariants}
          className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"
        >
          {/* Project Status */}

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              Featured Project
            </span>

            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              {featuredProject.status}
            </span>
          </div>

          {/* Title */}

          <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
            {featuredProject.title}
          </h3>

          {/* Category */}

          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-400">
            {featuredProject.category}
          </p>

          {/* Description */}

          <p className="mt-5 leading-7 text-slate-400">
            {featuredProject.description}
          </p>

          {/* Features */}

          <motion.div
            variants={featureContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-7 grid grid-cols-2 gap-3"
          >
            {featuredProject.features.map((feature) => (
              <motion.div
                key={feature}
                variants={featureVariants}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* Technologies */}

          <motion.div
            variants={technologyContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {featuredProject.technologies.map((technology) => (
              <motion.span
                key={technology}
                variants={technologyVariants}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-colors duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/5"
              >
                {technology}
              </motion.span>
            ))}
          </motion.div>

          {/* Project Links */}

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={featuredProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Live Project
              <ExternalLink className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </Link>

            <Link
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </Link>
          </div>

          {/* Security Indicator */}

          <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Full Stack Application
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
