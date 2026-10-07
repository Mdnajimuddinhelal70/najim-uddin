import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_0.8fr_0.8fr] lg:py-20">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center text-xl font-bold tracking-tight text-slate-950"
            >
              Najim<span className="text-rose-600">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Full Stack Web Developer focused on building modern, scalable, and
              user-focused web applications.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
            >
              Let&apos;s work together
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-950">Navigation</h3>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-500 transition-colors duration-200 hover:text-slate-950"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-slate-950">Connect</h3>

            <div className="mt-5 flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group inline-flex items-center gap-3 text-sm text-slate-500 transition-colors duration-200 hover:text-slate-950"
                  >
                    <Icon className="size-4" />

                    <span>{social.label}</span>

                    {social.href.startsWith("http") && (
                      <ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-slate-100 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Najim Uddin. All rights reserved.
          </p>

          <p className="text-xs text-slate-400">Designed & built with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
