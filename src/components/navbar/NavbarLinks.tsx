import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const NavbarLinks = () => {
  return (
    <nav
      className="hidden items-center gap-7 lg:flex"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-950"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarLinks;
