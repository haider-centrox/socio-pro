import React from 'react';
import Image from 'next/image';
interface Strategy {
  title: string;
  subDescription: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  backgroundColor: string;
}

interface GrowthStrategiesProps {
  mainHeading?: string;
  description?: string;
  strategies?: Strategy[];
}

export const GrowthStrategies: React.FC<GrowthStrategiesProps> = ({
  mainHeading = 'Turn Social Posts Into Business Results',
  description = 'Whether you are managing a single brand, handling multiple client accounts, or leading a team, SociePRO-AI will combine everything in one intuitive platform. Stay ahead of deadlines while reaching your audience at the right time.',
  strategies = [
    {
      title: 'Higher Engagement',
      subDescription:
        'Customised AI-generated content that grabs attention, improves engagement, and builds loyal audiences.',
      imageSrc: '/growth1.png',
      imageAlt: 'Higher Engagement',
      imageWidth: 80,
      imageHeight: 80,
      backgroundColor: 'bg-socie-yellow',
    },
    {
      title: 'Smarter Decisions',
      subDescription:
        'Offers you to monitor and gain insights from analytics with no spreadsheets or guesswork required.',
      imageSrc: '/growth2.png',
      imageAlt: 'Smarter Decisions',
      imageWidth: 80,
      imageHeight: 80,
      backgroundColor: 'bg-socie-green',
    },
    {
      title: 'Accelerated Follower Growth',
      subDescription:
        'Helps to create consistent & valuable posts that attract new followers and convert them into paying customers.',
      imageSrc: '/growth3.png',
      imageAlt: 'Accelerated Follower Growth',
      imageWidth: 80,
      imageHeight: 80,
      backgroundColor: 'bg-socie-peach',
    },
    {
      title: 'Increased Traffic',
      subDescription:
        'Channel-specific strategies that divert targeted clicks to your site, product pages, and lead funnels.',
      imageSrc: '/growth4.png',
      imageAlt: 'Increased Traffic',
      imageWidth: 80,
      imageHeight: 80,
      backgroundColor: 'bg-socie-purple',
    },
  ],
}: GrowthStrategiesProps) => {
  return (
    <div className="text-socie-black mx-auto flex flex-col items-center justify-center gap-5 overflow-x-hidden text-center">
      <h1 className="text-socie-black mx-8 text-center text-2xl font-bold md:mx-40 md:text-[46px]">
        {mainHeading}
      </h1>
      <p className="text-socie-gray mx-0 px-8 text-sm md:max-w-5xl md:text-xl">
        {description}
      </p>
      <div className="flex flex-wrap justify-center gap-8 py-16">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className={`${strategy.backgroundColor} flex max-w-80 flex-col items-center justify-center rounded-2xl shadow-lg`}
          >
            <div className="flex w-full justify-center rounded-2xl bg-white py-5 shadow-md">
              {strategy.imageSrc ? (
                <Image
                  src={strategy.imageSrc}
                  alt={strategy.imageAlt || 'Strategy Image'}
                  width={strategy.imageWidth}
                  height={strategy.imageHeight}
                />
              ) : null}
            </div>
            <div className="flex h-full flex-col gap-4 p-4">
              <h5 className="text-socie-black text-center text-lg font-bold md:text-xl">
                {strategy.title}
              </h5>
              <p className="text-socie-gray text-sm">
                {strategy.subDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
