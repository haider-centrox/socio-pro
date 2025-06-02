import React from "react";
import mobileImage from "../../public/mobile.png";
import Image from "next/image";



interface HeroProps {
  headline?: string;
  subHeadline?: string;
  highlightText?: string;
  buttonText?: string;
}

export default function SocieProHero({
  headline = "Handle Every Client, Campaign, and Social Media Channel in One Place",
  subHeadline = "Handle Every Client, Campaign, and Social Media Channel in One Place",
  highlightText = "SociePRO–AI",
  buttonText = "Start for FREE today →",
}: HeroProps) {
  return (
    <section className="relative flex items-center justify-between px-20 bg-white min-h-[500px]">
      {/* Left text container */}
      <div className="relative max-w-lg">
        {/* Top left rounded pale yellow block */}
        <div className="absolute top-0 left-0 w-36 h-36 rounded-tl-[80px] rounded-bl-[80px] bg-yellow-50 -z-10" />

        <h1 className="text-4xl font-extrabold leading-snug max-w-md mb-4">
          {headline}
        </h1>
        <p className="text-gray-400 mb-4 max-w-md">{subHeadline}</p>
        <p className="mb-6 max-w-md font-semibold">
          <span className="font-bold">{highlightText}</span> is your smarter way
          to plan, publish, and scale.
        </p>

        <button className="bg-orange-200 text-orange-900 rounded-full px-8 py-2 shadow-md hover:bg-orange-300 transition">
          {buttonText}
        </button>
      </div>

      {/* Right image container */}
      <div className="relative">
        {/* Background greenish blob */}
        <div className="absolute top-[-40px] left-[-60px] w-[400px] h-[380px] rounded-l-[80px] bg-green-100 opacity-60 -z-10" />

    <Image
          src={mobileImage}
          alt="Hero Image"
          className="w-[400px] h-auto object-cover rounded-lg shadow-lg"
          width={400}
            height={500}
        />

        {/* Floating icons */}
        <div className="absolute top-10 left-[-40px] bg-purple-300 rounded-lg p-3 shadow-md rotate-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-purple-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>

        <div className="absolute top-[150px] left-[40px] bg-blue-600 rounded-lg p-3 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12a10 10 0 10-11.5 9.9v-7h-3v-3h3v-2c0-3 1.8-4.5 4.5-4.5 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2v2h3.5l-.5 3h-3v7A10 10 0 0022 12z" />
          </svg>
        </div>

        <div className="absolute top-[100px] right-[-60px] bg-black rounded-lg p-3 shadow-md rotate-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.07 9.07 0 01-2.86 1.1A4.52 4.52 0 0016.5 2a4.52 4.52 0 00-4.48 5.54A12.8 12.8 0 013 3s-4 9 5 13a13.34 13.34 0 01-8 2c9 5.5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </div>

        <div className="absolute bottom-[-20px] right-[-20px] bg-orange-200 rounded-full p-3 shadow-md cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-orange-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V10a2 2 0 012-2h2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
