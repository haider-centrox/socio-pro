import React from 'react';
import Image from 'next/image';

interface LogoItem {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

interface LogoProps {
  logos?: LogoItem[];
  containerClassName?: string;
}

export const Logo = ({
  logos = [
    {
      src: '/logo1.png',
      alt: 'Logo 1',
      className: '',
      width: 99,
      height: 44,
    },
    {
      src: '/logo2.png',
      alt: 'Logo 2',
      className: '',
      width: 176,
      height: 176,
    },
    {
      src: '/logo3.png',
      alt: 'Logo 3',
      className: ' ',
      width: 128,
      height: 128,
    },
    {
      src: '/logo4.png',
      alt: 'Logo 4',
      className: ' ',
      width: 96,
      height: 96,
    },
    {
      src: '/logo5.png',
      alt: 'Logo 5',
      className: ' ',
      width: 128,
      height: 128,
    },
    {
      src: '/logo6.png',
      alt: 'Logo 6',
      className: '',
      width: 100,
      height: 100,
    },
    {
      src: '/logo7.png',
      alt: 'Logo 7',
      className: '',
      width: 100,
      height: 100,
    },
  ],
  containerClassName = 'flex w-full md:flex-wrap items-center md:justify-around md:gap-6 md:px-4',
}: LogoProps) => {
  return (
    <div className={containerClassName}>
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          width={logo.width || 220}
          height={logo.height || 60}
          className={logo.className}
        />
      ))}
    </div>
  );
};

// Register the component with Builder.io
