import React from 'react';
import Image from 'next/image';
import { Star } from '../icons/icons';

interface ListItem {
  text: string;
}

interface ContentCreatorsProps {
  mainHeading?: string;
  description?: string;
  listItems?: ListItem[];
  mainImageSrc?: string;
  mainImageAlt?: string;
  mainImageWidth?: number;
  mainImageHeight?: number;
  overlayImageSrc?: string;
  overlayImageAlt?: string;
  overlayImageWidth?: number;
  overlayImageHeight?: number;
}

export const ContentCreators: React.FC<ContentCreatorsProps> = ({
  mainHeading = 'By Content Creators,\nfor Content Creators',
  description = '<span className="font-bold">SociePRO-AI</span> was designed for content creators just like you. We know the struggle of juggling multiple tools, battling burnout, and trying to keep up with ever-changing algorithms. Thats why every feature in <span className="font-bold">SociePro-AI</span> is built with your needs in mind',
  listItems = [
    {
      text: 'AI-based content creation that saves you time while staying true to your voice.',
    },
    { text: 'Effortless scheduling and posting across all platforms.' },
    {
      text: 'Analytics that make sense, helping you fine-tune your strategy for better results.',
    },
  ],
  mainImageSrc = '/image-1.png',
  mainImageAlt = 'content creators',
  mainImageWidth = 482,
  mainImageHeight = 377,
  overlayImageSrc = '/image-2.png',
  overlayImageAlt = 'content creators',
  overlayImageWidth = 332,
  overlayImageHeight = 200,
}: ContentCreatorsProps) => {
  return (
    <div className="font-poppins text-socie-black mx-auto flex w-full flex-col items-center justify-center gap-5 overflow-x-hidden md:max-w-[1200px] md:flex-row md:p-4">
      <div className="flex flex-col gap-6 px-8 text-2xl md:w-3/5">
        <h2
          className="text-socie-black font-medium md:text-4xl/snug"
          dangerouslySetInnerHTML={{ __html: mainHeading }}
        />
        <p
          className="text-socie-gray font-nor text-sm md:text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <ul className="text-socie-gray space-y-4 text-sm">
          {listItems.map((item, index) => (
            <li key={index} className="flex">
              <span className="p-1">
                <Star className="mr-1" />
              </span>
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </li>
          ))}
        </ul>
      </div>
      <div className="relative z-10 mt-12 flex p-4 md:w-1/2">
        <Image
          src={mainImageSrc || '/image.png'}
          alt={mainImageAlt || 'main-image'}
          width={mainImageWidth || 482}
          height={mainImageHeight || 377}
          className=""
        />
        <Image
          src={overlayImageSrc || '/image.png'}
          alt={overlayImageAlt || 'image.png'}
          width={overlayImageWidth || 332}
          height={overlayImageHeight || 200}
          className="absolute -top-10 left-52 -z-10 size-56 md:left-72 md:size-72"
        />
      </div>
    </div>
  );
};
