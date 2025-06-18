import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  headline?: string;
  subHeadline?: string;
  highlightText?: string;
  descriptionText?: string;
  buttonText?: string;
  buttonPrefixText?: string;
  buttonSuffixText?: string;
  heroImage?: string;
}

export default function SocieProHero({
  headline = 'Handle Every Client, Campaign, and Social Media Channel in One Place',
  subHeadline = 'Handle Every Client, Campaign, and Social Media Channel in One Place',
  highlightText = 'SociePRO–AI',
  descriptionText = 'is your smarter way to plan, publish, and scale.',
  buttonText = 'FREE',
  buttonPrefixText = 'Start for',
  buttonSuffixText = 'today',
  heroImage = '/hero-mobile.png',
}: HeroProps) {
  return (
    <section className="relative z-20 mx-auto flex w-full flex-col justify-around gap-12 overflow-x-hidden px-4 py-12 md:flex-row md:gap-0 md:px-16 md:pb-28">
      <div className="relative flex flex-col md:max-w-2xl md:py-12">
        <h1 className="mb-4 text-2xl leading-snug font-semibold md:text-4xl">
          {headline}
        </h1>
        <p className="text-socie-gray mb-4 text-base font-normal md:text-2xl md:font-normal">
          {subHeadline}
        </p>
        <p className="text-socie-gray mb-6 md:text-2xl md:font-normal">
          <span className="text-socie-gray text-sm font-bold md:text-2xl">
            {highlightText}
          </span>{' '}
          {descriptionText}
        </p>

        <Button className="font-roboto py-6 text-base md:mt-10 md:w-sm md:px-8">
          {buttonPrefixText} <span className="font-bold">{buttonText}</span>{' '}
          {buttonSuffixText} <ArrowRight />
        </Button>
      </div>
      <div className="bg-socie-yellow absolute -top-0 -left-12 -z-10 rounded-4xl px-24 py-32 opacity-70 md:h-5/10 md:w-1/5 md:px-0 md:py-0"></div>

      {heroImage && (
        <Image
          src={heroImage}
          alt="Hero Image"
          width={500}
          height={500}
          className="object-contain"
        />
      )}
    </section>
  );
}
