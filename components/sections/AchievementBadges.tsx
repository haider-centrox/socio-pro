import React from 'react';
import Image from 'next/image';
import badge1 from '../../public/badge1.png';
import badge2 from '../../public/badge2.png';
import badge3 from '../../public/badge3.png';

// Default props for Builder.io
const defaultLogos = [
  { src: badge1, alt: 'Badge 1' },
  { src: badge2, alt: 'Badge 2' },
  { src: badge3, alt: 'Badge 3' },
];

// Component Props interface
interface Props {
  heading?: string;
  badges?: { src: string; alt: string }[];
}

const AchivementBadges: React.FC<Props> = ({
  heading = 'Trusted by industry leaders and over 1,000 brands, Socie Pro AI redefines social media management excellence.',
  badges = defaultLogos,
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 py-10">
      <h1 className="font-poppins text-socie-black text-center text-base font-medium md:max-w-5xl md:text-2xl">
        {heading}
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {badges.map((badge, index) => (
          <div key={index} className="logo-item">
            <Image src={badge.src} alt={badge.alt} className="rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Register the component with Builder.io

export default AchivementBadges;
