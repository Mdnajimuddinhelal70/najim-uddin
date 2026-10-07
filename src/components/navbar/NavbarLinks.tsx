import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const NavbarLinks = () => {
  return (
    <nav
      className="hidden items-center gap-1 rounded-xl border border-white/5 bg-white/[0.03] p-1 lg:flex"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative rounded-lg px-3 py-2 text-xs font-medium text-slate-400 transition-all duration-300 hover:bg-white/[0.07] hover:text-white xl:px-3.5 xl:text-sm"
        >
          <span className="relative z-10">{item.label}</span>

          <span className="absolute inset-x-3 bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-violet-400 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      ))}
    </nav>
  );
};

export default NavbarLinks;
