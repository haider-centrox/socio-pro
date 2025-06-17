import Image, { StaticImageData } from 'next/image';
import feature1 from '../../public/feature1.png';
import feature2 from '../../public/feature2.png';
import feature3 from '../../public/feature3.png';
import feature4 from '../../public/feature4.png';
import feature5 from '../../public/feature5.png';

import featureIcon1 from '../../public/feature-icon1.png';
import featureIcon2 from '../../public/feature-icon2.png';
import featureIcon3 from '../../public/feature-icon3.png';
import featureIcon4 from '../../public/feature-icon4.png';
import featureIcon5 from '../../public/feature-icon5.png';
import { Button } from '../ui/button';

interface Feature {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor: string;
}

interface ProductFeaturesProps {
  features: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: 'AI-Powered Post Scheduling',
    description:
      'SociePRO-AI helps you manage multiple clients, tight deadlines, and campaigns by carefully analyzing the target audiences behavior. Find the best times for engagement and build your social calendar with AI-powered post scheduling.',
    imageSrc: feature1,
    imageAlt: 'feature',
    buttonText: 'Learn More',
    buttonLink: '#',
    backgroundColor: 'bg-socie-yellow',
  },
  // Add more features as needed
];

export const ProductFeatures: React.FC<ProductFeaturesProps> = ({
  features = defaultFeatures,
}) => {
  return (
    <div className="text-socie-black mx-auto flex flex-col md:max-w-[1200px]">
      <p className="text-socie-black mx-8 text-center text-2xl font-bold md:mx-40 md:text-[46px]">
        Everything You Need to Plan, Publish, and Grow Your Social Presence
      </p>
      <div className="mx-4 flex flex-col justify-center gap-12 py-16">
        <div className="bg-socie-yellow flex flex-col justify-center gap-16 rounded-4xl px-4 pt-6 md:mx-32 md:flex-row md:px-14">
          <div className="flex flex-col gap-5 md:max-w-[600px]">
            <div>
              <Image src={featureIcon1} alt="featureicon" className="size-11" />
            </div>
            <h2 className="text-socie-black text-lg font-bold md:text-2xl">
              {features[0].title}
            </h2>
            <p className="text-socie-gray text-sm md:text-lg">
              <span className="font-bold">SociePRO-AI</span> helps you manage
              multiple clients, tight deadlines, and campaigns by carefully
              analyzing the target audiences behavior. Find the best times for
              engagement and build your social calendar with AI-powered post
              scheduling.
            </p>
            <Button className="bg-black px-14 py-6 text-sm text-white md:w-fit md:text-base">
              Learn More
            </Button>
          </div>
          <div className="mx-auto">
            <Image
              src={feature1}
              layout="contain"
              className="rounded-2xl md:max-h-[400px] md:max-w-[400px]"
              alt="feature"
            />
          </div>
        </div>
        <div className="bg-socie-green flex flex-col justify-center gap-16 rounded-4xl px-4 pt-6 md:mx-32 md:flex-row-reverse md:px-14">
          <div className="flex flex-col gap-5 md:max-w-[600px]">
            <div>
              <Image src={featureIcon2} alt="featureicon" className="size-11" />
            </div>
            <h2 className="text-socie-black text-lg font-bold md:text-2xl">
              {features[0].title}
            </h2>
            <p className="text-socie-gray text-sm md:text-lg">
              <span className="font-bold">SociePRO-AI</span> helps you manage
              multiple clients, tight deadlines, and campaigns by carefully
              analyzing the target audiences behavior. Find the best times for
              engagement and build your social calendar with AI-powered post
              scheduling.
            </p>
            <Button className="bg-black px-14 py-6 text-sm text-white md:w-fit md:text-base">
              Learn More
            </Button>
          </div>
          <div className="mx-auto">
            <Image
              src={feature2}
              layout="contain"
              className="rounded-2xl md:max-h-[400px] md:max-w-[400px]"
              alt="feature"
            />
          </div>
        </div>
        <div className="bg-socie-peach flex flex-col justify-center gap-16 rounded-4xl px-4 pt-6 md:mx-32 md:flex-row md:px-14">
          <div className="flex flex-col gap-5 md:max-w-[600px]">
            <div>
              <Image src={featureIcon3} alt="featureicon" className="size-11" />
            </div>
            <h2 className="text-socie-black text-lg font-bold md:text-2xl">
              {features[0].title}
            </h2>
            <p className="text-socie-gray text-sm md:text-lg">
              <span className="font-bold">SociePRO-AI</span> helps you manage
              multiple clients, tight deadlines, and campaigns by carefully
              analyzing the target audiences behavior. Find the best times for
              engagement and build your social calendar with AI-powered post
              scheduling.
            </p>
            <Button className="bg-black px-14 py-6 text-sm text-white md:w-fit md:text-base">
              Learn More
            </Button>
          </div>
          <div className="mx-auto">
            <Image
              src={feature3}
              layout="contain"
              className="rounded-2xl md:max-h-[400px] md:max-w-[400px]"
              alt="feature"
            />
          </div>
        </div>
        <div className="bg-socie-purple flex flex-col justify-center gap-16 rounded-4xl px-4 pt-6 md:mx-32 md:flex-row-reverse md:px-14">
          <div className="flex flex-col gap-5 md:max-w-[600px]">
            <div>
              <Image src={featureIcon4} alt="featureicon" className="size-11" />
            </div>
            <h2 className="text-socie-black text-lg font-bold md:text-2xl">
              {features[0].title}
            </h2>
            <p className="text-socie-gray text-sm md:text-lg">
              <span className="font-bold">SociePRO-AI</span> helps you manage
              multiple clients, tight deadlines, and campaigns by carefully
              analyzing the target audiences behavior. Find the best times for
              engagement and build your social calendar with AI-powered post
              scheduling.
            </p>
            <Button className="bg-black px-14 py-6 text-sm text-white md:w-fit md:text-base">
              Learn More
            </Button>
          </div>
          <div className="mx-auto">
            <Image
              src={feature4}
              layout="contain"
              className="rounded-2xl md:max-h-[400px] md:max-w-[400px]"
              alt="feature"
            />
          </div>
        </div>
        <div className="bg-socie-pink flex flex-col justify-center gap-16 rounded-4xl px-4 pt-6 md:mx-32 md:flex-row md:px-14">
          <div className="flex flex-col gap-5 md:max-w-[600px]">
            <div>
              <Image src={featureIcon5} alt="featureicon" className="size-11" />
            </div>
            <h2 className="text-socie-black text-lg font-bold md:text-2xl">
              {features[0].title}
            </h2>
            <p className="text-socie-gray text-sm md:text-lg">
              <span className="font-bold">SociePRO-AI</span> helps you manage
              multiple clients, tight deadlines, and campaigns by carefully
              analyzing the target audiences behavior. Find the best times for
              engagement and build your social calendar with AI-powered post
              scheduling.
            </p>
            <Button className="bg-black px-14 py-6 text-sm text-white md:w-fit md:text-base">
              Learn More
            </Button>
          </div>
          <div className="mx-auto">
            <Image
              src={feature5}
              layout="contain"
              className="rounded-2xl md:max-h-[400px] md:max-w-[400px]"
              alt="feature"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
