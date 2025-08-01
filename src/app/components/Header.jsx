"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) => pathname === href;

  return (
    <header className="w-full bg-[#0f111a] text-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center gap-2 select-none">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md flex items-center justify-center text-white font-bold">
            SH
          </div>
          <span className="hidden sm:inline font-extrabold text-lg">Software House</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-1 px-2 no-blur link-underline transition-colors ${
                isActive(item.href)
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/get-a-quote"
            className="ml-4 inline-block py-2 px-4 bg-indigo-600 text-white rounded-md shadow cursor-pointer text-sm no-blur hover:brightness-110 transition"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1 focus:outline-none"
          >
            <span
              className={`block h-0.5 w-full bg-gray-200 transition-all duration-300 ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-200 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-200 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0f111a] border-t border-gray-700 shadow-sm transition-max-height overflow-hidden ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 text-base font-medium rounded no-blur transition-colors ${
                isActive(item.href)
                  ? "text-white bg-gray-900"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/get-a-quote"
            className="mt-2 inline-block w-full text-center py-2 bg-indigo-600 text-white rounded-md no-blur"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
