import { ArrowUpRight, Download, Eye } from "lucide-react";
import Link from "next/link";

const NavbarActions = () => {
  return (
    <div className="hidden lg:flex items-center gap-2">
      {/* View Resume */}
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
      >
        <Eye className="h-4 w-4 text-cyan-300" />
        View Resume
      </Link>

      {/* Download Resume */}
      <Link
        href="/resume.pdf"
        download="Najim-Uddin-Resume.pdf"
        className="inline-flex h-10 items-center gap-2 rounded-xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 px-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-violet-400/40 hover:from-violet-500/20 hover:to-fuchsia-500/20"
      >
        <Download className="h-4 w-4 text-violet-300" />
        Download
      </Link>

      {/* Let's Talk */}
      <Link
        href="#contact"
        className="group inline-flex h-10 items-center gap-2 rounded-xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 px-4 text-sm font-medium text-white shadow-lg shadow-violet-950/10 transition-all duration-300 hover:border-violet-400/40 hover:from-violet-500/20 hover:to-fuchsia-500/20 hover:shadow-violet-900/20"
      >
        Let&apos;s Talk
        <ArrowUpRight className="h-3.5 w-3.5 text-violet-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
};

export default NavbarActions;
