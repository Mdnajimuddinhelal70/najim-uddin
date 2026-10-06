import Link from "next/link";

const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2"
      aria-label="Najim Uddin - Home"
    >
      <span className="text-xl font-bold tracking-tight text-slate-950">
        Najim<span className="text-rose-600">.</span>
      </span>
    </Link>
  );
};

export default NavbarLogo;
