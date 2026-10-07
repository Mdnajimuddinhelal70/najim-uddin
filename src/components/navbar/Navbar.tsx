import MobileNavbar from "./MobileNavbar";
import NavbarActions from "./NavbarActions";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full px-3 pt-3 sm:px-5">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 px-4 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">
        <NavbarLogo />

        <NavbarLinks />

        <div className="flex items-center gap-2">
          <NavbarActions />
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
