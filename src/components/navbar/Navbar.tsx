import MobileNavbar from "./MobileNavbar";
import NavbarActions from "./NavbarActions";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <NavbarLogo />

        <NavbarLinks />

        <div className="flex items-center gap-3">
          <NavbarActions />
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
