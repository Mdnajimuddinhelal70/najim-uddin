"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import {
  featureContainerVariants,
  featureVariants,
  projectVariants,
  technologyContainerVariants,
  technologyVariants,
} from "./project-animations";

type Project = {
  id: number;
  featured: boolean;
  title: string;
  description: string;
  category: string;
  status: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
  gradient: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={projectVariants}
      whileHover={{
        y: -6,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-500 hover:border-cyan-500/30 hover:bg-white/[0.05] sm:p-8"
    >
      {/* Background Gradient */}

      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition duration-500 group-hover:opacity-100`}
      />

      <div className="relative">
        {/* Header */}

        <div className="flex items-start justify-between gap-5">
          <motion.div
            whileHover={{
              rotate: 5,
              scale: 1.08,
            }}
            transition={{
              duration: 0.25,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
          >
            <ArrowUpRight className="h-5 w-5 text-cyan-400" />
          </motion.div>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            {project.status}
          </span>
        </div>

        {/* Category */}

        <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          {project.category}
        </p>

        {/* Title */}

        <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>

        {/* Description */}

        <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

        {/* Features */}

        <motion.div
          variants={featureContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 grid grid-cols-2 gap-y-3"
        >
          {project.features.map((feature) => (
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
          className="mt-7 flex flex-wrap gap-2"
        >
          {project.technologies.map((technology) => (
            <motion.span
              key={technology}
              variants={technologyVariants}
              className="rounded-lg border border-white/10 bg-black/10 px-3 py-1.5 text-xs text-slate-400 transition-colors duration-300 hover:border-cyan-400/20 hover:text-slate-300"
            >
              {technology}
            </motion.span>
          ))}
        </motion.div>

        {/* Project Links */}

        <div className="mt-8 flex items-center gap-5 border-t border-white/10 pt-6">
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-300"
          >
            View Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <FaGithub className="h-4 w-4" />
            Source
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
