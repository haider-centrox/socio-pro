import React from 'react';
import Image from 'next/image';

interface SocieProDashboardProps {
  mainHeading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const SocieProDashboard: React.FC<SocieProDashboardProps> = ({
  mainHeading = 'One Dashboard. Every Platform. Zero Headaches',
  description = 'Whether you are managing a single brand, handling multiple client accounts, or leading a team, SociePRO-AI will combine everything in one intuitive platform. Stay ahead of deadlines while reaching your audience at the right time.',
  imageSrc = '/connected-apps.png',
  imageAlt = 'Connected Apps',
  imageWidth = 800,
  imageHeight = 400,
}: SocieProDashboardProps) => {
  return (
    <div className="text-socie-black mx-auto flex flex-col items-center justify-center gap-5 overflow-x-hidden px-4 text-center">
      <h1 className="text-socie-black mx-8 text-center text-2xl font-bold md:mx-40 md:text-[46px]">
        {mainHeading}
      </h1>
      <p className="text-socie-gray mx-0 text-sm md:max-w-5xl md:text-xl">
        {description}
      </p>
      <div className="mx-4 flex flex-col justify-center gap-12 py-16">
        {imageSrc ? (
          <Image
            src={imageSrc || '/connected-apps.png'}
            alt={imageAlt || 'Image'}
            width={imageWidth || 800}
            height={imageHeight || 600}
            className="mx-auto w-full max-w-2xl rounded-4xl"
          />
        ) : null}
      </div>
    </div>
  );
};

// Register the component with Builder.io
