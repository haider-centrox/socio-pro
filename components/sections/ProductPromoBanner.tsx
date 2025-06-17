import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export const ProductPromoBanner: React.FC = ({}) => {
  return (
    <div className="mx-auto px-4">
      <div className="bg-socie-peach font-poppins text-socie-black flex w-full flex-col items-center justify-center gap-5 overflow-x-hidden rounded-2xl md:mx-auto md:max-w-[1200px] md:flex-row">
        <div className="flex flex-col items-start gap-6 px-2 text-2xl md:w-3/5 md:px-8">
          <h2 className="text-socie-black py-6 font-semibold md:text-4xl/snug md:font-bold">
            Fuel Your Social Strategy with the Power of AI
          </h2>
          <Button className="!bg-black !py-6 !text-white md:w-fit md:!px-24 md:!py-8 md:text-2xl">
            {' '}
            Get Started <ArrowRight />{' '}
          </Button>
        </div>
        <div className="relative z-10 flex justify-center md:w-1/2">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets%2F0a047baeedce410bb94ede0ae7df9827%2Fde9e73d3e73e4048923db049d68f56a3"
            alt="feature"
            className=""
            width={400}
            height={300}
          />

          <Image
            src="https://cdn.builder.io/api/v1/image/assets%2F0a047baeedce410bb94ede0ae7df9827%2Fddf8a84e752948d6a20455c7d3217277"
            alt="feature"
            className="absolute right-0 bottom-0 -z-10"
            width={650}
            height={650}
          />
        </div>
      </div>
    </div>
  );
};
