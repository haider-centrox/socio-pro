import React, { useState } from 'react';
import {
  CloseIcon,
  HamburgerIcon,
  LogoDesktop,
  LogoMobile,
} from '../icons/icons';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logoText?: string;
  navItems?: NavItem[];
}

export default function Header({
  logoText = 'Socie-Pro AI',
  navItems = [
    { label: 'About Us', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex items-center justify-between px-4 py-2 text-black md:px-24 md:py-6">
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center rounded-full md:hidden">
          <LogoMobile />
        </div>
        <div className="hidden items-center justify-center rounded-full md:flex">
          <LogoDesktop />
        </div>
        <span className="font-quantify text-xs md:text-2xl">{logoText}</span>
      </div>

      <span onClick={toggleMenu} className="cursor-pointer lg:hidden">
        <HamburgerIcon />
      </span>

      <nav className="font-poppins hidden space-x-6 text-sm font-medium lg:flex">
        {navItems.map(({ label, href }, index) => (
          <a key={index} href={href} className="hover:underline">
            {label}
          </a>
        ))}
      </nav>
      {/* mobile */}
      <div
        className={`absolute top-0 left-0 z-30 w-full transform bg-white shadow-md transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } lg:hidden`}
      >
        <nav className="font-poppins flex flex-col items-center justify-center space-y-6 pb-12 font-medium">
          <span className="flex w-full cursor-pointer justify-end p-4">
            <CloseIcon onClick={toggleMenu} />
          </span>
          {navItems.map(({ label, href }, index) => (
            <a key={index} href={href} className="hover:underline">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
