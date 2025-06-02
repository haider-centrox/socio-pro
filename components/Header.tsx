import React from "react";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logoText?: string;
  navItems?: NavItem[];
}

export default function Header({
  logoText = "Socie-Pro AI",
  navItems = [
    { label: "About Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
}: HeaderProps) {
  return (
    <header className="flex justify-between text-black items-center px-8 py-6">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
          {/* Leaf icon placeholder */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C12 2 5 7 5 12a7 7 0 0 0 14 0c0-5-7-10-7-10z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 22c2.5-3 2.5-9 2.5-9"
            />
          </svg>
        </div>
        <span className="font-semibold text-lg">{logoText}</span>
      </div>

      {/* Nav Links */}
      <nav className="space-x-6 text-sm font-medium ">
        {navItems.map(({ label, href }, index) => (
          <a key={index} href={href} className="hover:underline">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
