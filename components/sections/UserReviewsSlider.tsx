import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Review {
  name: string;
  rating: string;
  comment: string;
  userImage?: string;
}

interface UserReviewsSliderProps {
  mainHeading?: string;
  reviews?: Review[];
}

export const UserReviewsSlider: React.FC<UserReviewsSliderProps> = ({
  mainHeading = 'What our users who have used it say?',
  reviews = [
    {
      name: 'James R',
      rating: '⭐⭐⭐⭐⭐',
      comment:
        "It's like having a full-time assistant. Posting, scheduling, analytics—all in one dashboard. Love the clean UI!",
      userImage: '/default-user.png',
    },
    {
      name: 'Sarah M.',
      rating: '⭐⭐⭐⭐⭐',
      comment:
        'As an agency, managing client posts has never been this smooth. Approvals, feedback, publishing—its all just faster.',
      userImage: '/default-user.png',
    },
    {
      name: 'Emily D.',
      rating: '⭐⭐⭐⭐⭐',
      comment:
        'Socie-Pro AI cut our posting time in half. A game changer for our small team.',
      userImage: '/default-user.png',
    },
  ],
}: UserReviewsSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = reviews.length;
  const [activeButton, setActiveButton] = useState<'left' | 'right' | null>(
    null
  );

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    setActiveButton(activeButton === 'left' ? 'left' : 'left');
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    setActiveButton(activeButton === 'right' ? 'right' : 'right');
  };

  return (
    <div className="bg-socie-peach md:p-10">
      <div className="font-poppins mx-auto flex flex-col gap-12 p-4 text-black md:max-w-[1200px] md:p-8">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <h2 className="text-2xl md:max-w-lg md:text-5xl/normal md:font-semibold">
            {mainHeading}
          </h2>
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              className={`size-12 rounded-full ${activeButton === 'left' ? 'bg-black text-white' : 'border-2 bg-transparent text-black'} md:size-16`}
              onClick={goToPrevSlide}
            >
              <ArrowLeft className="size-7 md:size-10" />
            </Button>
            <Button
              className={`size-12 rounded-full ${activeButton === 'right' ? 'bg-black text-white' : 'border-2 text-black'} md:size-16`}
              onClick={goToNextSlide}
            >
              <ArrowRight className="size-7 md:size-10" />
            </Button>
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 33}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="mr-4 flex w-xs flex-col space-x-4 rounded-2xl bg-white p-4 md:min-w-md md:p-8"
              >
                <div className="flex items-center gap-4">
                  {review.userImage && (
                    <Image
                      src={review.userImage}
                      alt={`${review.name}'s profile`}
                      width={60}
                      height={60}
                      className="mb-2 h-12 w-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h2>

                    <div className="text-yellow-400">{review.rating}</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
