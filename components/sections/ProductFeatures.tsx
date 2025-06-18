import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  iconAlt: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor: string;
  imageWidth: number;
  imageHeight: number;
}

interface ProductFeaturesProps {
  features?: Feature[];
  mainHeading?: string;
}

export const ProductFeatures: React.FC<ProductFeaturesProps> = ({
  features = [
    {
      title: 'AI-Powered Post Scheduling',
      description:
        'SociePRO-AI helps you manage multiple clients, tight deadlines, and campaigns by carefully analyzing the target audiences behavior. Find the best times for engagement and build your social calendar with AI-powered post scheduling.',
      imageSrc: '/feature1.png',
      imageAlt: 'Feature 1',
      iconSrc: '/feature-icon1.png',
      iconAlt: 'Feature Icon 1',
      buttonText: 'Learn More',
      buttonLink: '#',
      backgroundColor: 'bg-socie-yellow',
      imageWidth: 300,
      imageHeight: 300,
    },
    {
      title: 'Multi-Platform Publishing',
      description:
        'With SociePRO-AI, you can publish to Facebook, Instagram, Twitter (X), Threads, LinkedIn, TikTok, Reddit, and Nextdoor with a single click. Your social media posts will be optimized for all platforms, saving you time and effort.',
      imageSrc: '/feature2.png',
      imageAlt: 'Feature 2',
      iconSrc: '/feature-icon2.png',
      iconAlt: 'Feature Icon 2',
      buttonText: 'Learn More',
      buttonLink: '#',
      backgroundColor: 'bg-socie-green',
      imageWidth: 300,
      imageHeight: 300,
    },
    {
      title: 'AI-Optimized Timing',
      description:
        'Using advanced AI technology, SociePRO-AI analyzes your audiences activity to identify the best times for posting. With one simple scheduling, your content will go live at the peak time for maximum engagement, every time.',
      imageSrc: '/feature3.png',
      imageAlt: 'Feature 3',
      iconSrc: '/feature-icon3.png',
      iconAlt: 'Feature Icon 3',
      buttonText: 'Learn More',
      buttonLink: '#',
      backgroundColor: 'bg-socie-peach',
      imageWidth: 300,
      imageHeight: 300,
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description:
        'With the real-time analytics board of SociePRO-AI, you can get instant insights about the performance of your content across all integrated platforms. Plan smarter, modify your strategies, and drive better ROI.',
      imageSrc: '/feature4.png',
      imageAlt: 'Feature 4',
      iconSrc: '/feature-icon4.png',
      iconAlt: 'Feature Icon 4',
      buttonText: 'Learn More',
      buttonLink: '#',
      backgroundColor: 'bg-socie-purple',
      imageWidth: 300,
      imageHeight: 300,
    },
    {
      title: 'Team Collaboration',
      description:
        'With SociePRO-AI, managing large teams can be streamlined by assigning roles, providing feedback, and tracking progress. Keep your team aligned on the same page and avoid delays in the efficient and smart project execution.',
      imageSrc: '/feature5.png',
      imageAlt: 'Feature 5',
      iconSrc: '/feature-icon5.png',
      iconAlt: 'Feature Icon 5',
      buttonText: 'Learn More',
      buttonLink: '#',
      backgroundColor: 'bg-socie-pink',
      imageWidth: 350,
      imageHeight: 350,
    },
  ],
  mainHeading = 'Everything You Need to Plan, Publish, and Grow Your Social Presence',
}: ProductFeaturesProps) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      'ProductFeatures received:',
      features.length,
      'features',
      features
    );
  }

  return (
    <div className="font-poppins text-socie-black mx-auto flex flex-col md:max-w-[1400px]">
      <p className="text-socie-black mx-8 text-center text-2xl font-bold md:mx-40 md:text-[46px]">
        {mainHeading}
      </p>
      <div className="mx-4 flex flex-col justify-center gap-12 py-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.backgroundColor} flex flex-col justify-center gap-16 rounded-4xl px-4 pt-6 md:mx-32 md:px-14 ${
              index === 0
                ? 'md:flex-row'
                : index === 1
                  ? 'md:flex-row-reverse'
                  : index === 2
                    ? 'md:flex-row'
                    : index === 3
                      ? 'md:flex-row-reverse'
                      : 'md:flex-row'
            }`}
          >
            <div className="flex flex-col gap-5 py-6 md:max-w-[600px]">
              <div>
                {feature.iconSrc ? (
                  <Image
                    src={feature.iconSrc}
                    alt={feature.iconAlt || 'icon'}
                    width={44}
                    height={44}
                    className="size-11"
                  />
                ) : null}
              </div>
              <h2 className="text-socie-black text-lg font-bold md:text-2xl">
                {feature.title}
              </h2>
              <p className="text-socie-gray text-sm md:text-lg">
                {feature.description}
              </p>
              <Button className="bg-black py-6 text-sm text-white md:w-fit md:px-14 md:text-base">
                {feature.buttonText}
              </Button>
            </div>
            <div className="relative mx-auto flex">
              {feature.imageSrc ? (
                <Image
                  src={feature.imageSrc || '/feature'}
                  layout="contain"
                  width={feature.imageWidth || 350}
                  height={feature.imageHeight || 350}
                  className="rounded-2xl md:max-h-[400px] md:max-w-[400px]"
                  alt={feature.imageAlt || 'image'}
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
