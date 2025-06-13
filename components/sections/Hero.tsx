import React from 'react';
import mobileImage from '../../public/hero-mobile.png';
import subMobileImage from '../../public/sub-mobile.png';
import facebook from '../../public/facebook.png';
import insta from '../../public/insta.png';
import x from '../../public/x.png';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  headline?: string;
  subHeadline?: string;
  highlightText?: string;
  buttonText?: string;
}

export default function SocieProHero({
  headline = 'Handle Every Client, Campaign, and Social Media Channel in One Place',
  subHeadline = 'Handle Every Client, Campaign, and Social Media Channel in One Place',
  highlightText = 'SociePRO–AI',
  buttonText = 'FREE',
}: HeroProps) {
  return (
    <section className="relative z-20 flex flex-col justify-around gap-12 overflow-x-hidden px-4 py-12 md:flex-row md:gap-0 md:px-16 md:pb-28">
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
          is your smarter to plan, publish, and scale.
        </p>

        <Button className="font-roboto py-6 text-base md:w-sm md:px-8">
          Start for <span className="font-bold">{buttonText}</span> today{' '}
          <ArrowRight />
        </Button>
      </div>
      <div className="bg-socie-yellow absolute -top-0 -left-12 -z-10 rounded-4xl px-24 py-32 opacity-70 md:h-5/10 md:w-1/5 md:px-0 md:py-0"></div>

      <div className="from-socie-green to-socie-yellow relative mx-auto my-10 flex h-80 w-80 rounded-4xl bg-gradient-to-br md:mx-0 md:min-h-[450px] md:min-w-[450px]">
        <Image
          src={mobileImage}
          alt="Hero Image"
          className="absolute -top-8 right-0 left-0 mx-auto rounded-4xl object-cover md:hidden"
          width={188}
          height={391}
        />
        <Image
          src={mobileImage}
          alt="Hero Image"
          className="absolute -top-10 right-0 left-0 mx-auto hidden rounded-4xl object-cover md:block"
          width={271}
          height={400}
        />
        <Image
          src={subMobileImage}
          alt="Hero Image"
          className="absolute top-20 right-0 -left-10 mx-auto rounded-4xl object-cover md:hidden"
          width={200}
          height={101}
        />
        <Image
          src={subMobileImage}
          alt="Hero Image"
          className="absolute top-30 right-0 -left-20 mx-auto hidden rounded-4xl object-cover md:block"
          width={300}
          height={101}
        />
        <Image
          src={insta}
          alt="Instagram Logo"
          className="absolute top-0 right-0 -left-60 mx-auto rounded-4xl object-cover md:-left-16/20"
        />
        <Image
          src={facebook}
          alt="Instagram Logo"
          className="absolute top-60 right-20 -left-60 mx-auto rounded-4xl object-cover md:top-72 md:-left-96"
        />
        <Image
          src={x}
          alt="Instagram Logo"
          className="absolute top-20 left-72 mx-auto rounded-4xl object-cover md:-right-19/20 md:left-0"
        />
      </div>
    </section>
  );
}
