import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const UserReviewsSlider: React.FC = ({}) => {
  return (
    <div className="bg-socie-peach md:p-10">
      <div className="font-poppins mx-auto flex flex-col gap-12 p-4 text-black md:max-w-[1200px] md:p-8">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <h2 className="text-2xl md:max-w-lg md:text-5xl/normal md:font-semibold">
            What our users who have used it say?
          </h2>
          <div className="flex items-center gap-2 md:gap-4">
            <Button className="size-12 rounded-full bg-black text-white md:size-16">
              <ArrowLeft className="size-7 md:size-10" />
            </Button>
            <Button className="size-12 rounded-full border-2 text-black md:size-16">
              <ArrowRight className="size-7 md:size-10" />
            </Button>
          </div>
        </div>
        <div className="flex gap-3 overflow-hidden">
          <div className="flex min-w-fit flex-col space-x-4 rounded-2xl bg-white p-4 md:min-w-md md:p-8">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">James R</h2>
              <div className="text-yellow-400">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              Its like having a full-time assistant. Posting, scheduling,
              analytics—all in one dashboard. Love the clean UI!
            </p>
          </div>
          <div className="flex min-w-fit flex-col space-x-4 rounded-2xl bg-white p-4 md:min-w-md md:p-8">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">James R</h2>
              <div className="text-yellow-400">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              Its like having a full-time assistant. Posting, scheduling,
              analytics—all in one dashboard. Love the clean UI!
            </p>
          </div>
          <div className="flex min-w-fit flex-col space-x-4 rounded-2xl bg-white p-4 md:min-w-md md:p-8">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">James R</h2>
              <div className="text-yellow-400">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              Its like having a full-time assistant. Posting, scheduling,
              analytics—all in one dashboard. Love the clean UI!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
