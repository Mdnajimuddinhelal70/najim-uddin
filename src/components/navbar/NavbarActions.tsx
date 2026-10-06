import Link from "next/link";

import { Button } from "@/components/ui/button";

const NavbarActions = () => {
  return (
    <div className="hidden items-center lg:flex">
      <Button className="rounded-full bg-slate-950 px-5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md">
        <Link href="/contact">Let&apos;s Talk</Link>
      </Button>
    </div>
  );
};

export default NavbarActions;
