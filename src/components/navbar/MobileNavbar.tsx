"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const MobileNavbar = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          className="inline-flex size-10 items-center justify-center rounded-full transition-colors hover:bg-slate-100"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent side="right" className="w-[300px] sm:w-[360px]">
          <SheetHeader>
            <SheetTitle className="text-left text-xl font-bold">
              Najim<span className="text-rose-600">.</span>
            </SheetTitle>
          </SheetHeader>

          <nav
            className="mt-8 flex flex-col gap-2"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <Link
              href="/contact"
              className="flex h-10 w-full items-center justify-center rounded-full bg-slate-950 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
