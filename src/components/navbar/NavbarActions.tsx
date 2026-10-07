import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const NavbarActions = () => {
  return (
    <div className="hidden lg:block">
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
