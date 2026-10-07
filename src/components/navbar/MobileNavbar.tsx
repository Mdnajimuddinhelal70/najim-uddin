"use client";

import { ArrowUpRight, Code2, Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const MobileNavbar = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-300 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-white"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[320px] border-l border-white/10 bg-slate-950/95 p-0 text-white backdrop-blur-2xl sm:w-[380px]"
        >
          <SheetHeader className="border-b border-white/10 px-6 py-6">
            <SheetTitle className="flex items-center gap-3 text-left text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10">
                <Code2 className="h-4 w-4 text-violet-300" />
              </span>

              <span className="text-xl font-bold">
                Najim<span className="text-violet-400">.</span>
              </span>
            </SheetTitle>
          </SheetHeader>

          <div className="px-5 py-6">
            <p className="mb-4 px-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
              Navigation
            </p>

            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-slate-400 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-slate-700">0{index + 1}</span>

                    {item.label}
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-white/10 pt-6">
              <Link
                href="#contact"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-sm font-semibold text-white shadow-lg shadow-violet-950/20 transition-all duration-300 hover:from-violet-400 hover:to-fuchsia-400"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
                Full Stack Developer
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Building modern, meaningful, and scalable digital experiences.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
