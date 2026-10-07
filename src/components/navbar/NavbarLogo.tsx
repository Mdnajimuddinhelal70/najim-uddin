import { Code2 } from "lucide-react";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <Link
      href="#home"
      className="group inline-flex items-center gap-2.5"
      aria-label="Najim Uddin - Home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 shadow-lg shadow-violet-950/20 transition duration-300 group-hover:border-violet-400/40 group-hover:shadow-violet-500/10">
        <Code2 className="h-4 w-4 text-violet-300 transition-transform duration-300 group-hover:rotate-6" />
      </span>

      <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
        Najim<span className="text-violet-400">.</span>
      </span>
    </Link>
  );
};

export default NavbarLogo;
