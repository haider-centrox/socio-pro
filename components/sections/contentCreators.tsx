import Image from 'next/image';

import { Star } from '../icons/icons';

export const ContentCreators: React.FC = ({}) => {
  return (
    <div className="font-poppins text-socie-black mx-auto flex w-full flex-col items-center justify-center gap-5 overflow-x-hidden md:max-w-[1200px] md:flex-row md:p-4">
      <div className="flex flex-col gap-6 px-8 text-2xl md:w-3/5">
        <h2 className="text-socie-black font-medium md:text-4xl/snug">
          By Content Creators,
          <br /> for Content Creators
        </h2>
        <p className="text-socie-gray font-nor text-sm md:text-lg">
          <span className="font-bold">SociePRO-AI</span> was designed for
          content creators just like you. We know the struggle of juggling
          multiple tools, battling burnout, and trying to keep up with
          ever-changing algorithms. Thats why every feature in{' '}
          <span className="font-bold">SociePro-AI</span> is built with your
          needs in mind
        </p>
        <ul className="text-socie-gray space-y-4 text-sm">
          <li className="flex">
            <span className="p-1">
              <Star className="mr-1" />
            </span>
            <span>
              <span>AI-based content creation</span> that saves you time while
              staying true to your voice.
            </span>
          </li>
          <li className="flex">
            <span className="p-1">
              <Star className="mr-1" />
            </span>
            <span>
              <span>Effortless scheduling and posting</span> across all
              platforms.
            </span>
          </li>
          <li className="flex">
            <span className="p-1">
              <Star className="mr-1" />
            </span>
            <span>
              <span>Analytics that make sense,</span> helping you fine-tune your
              strategy for better results.
            </span>
          </li>
        </ul>
      </div>
      <div className="relative z-10 mt-12 flex p-4 md:w-1/2">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2F0a047baeedce410bb94ede0ae7df9827%2F398641bf16f3491d8e5b3c892347cba7"
          alt="feature"
          className=""
          width={482}
          height={377}
        />

        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2F0a047baeedce410bb94ede0ae7df9827%2F03697f3e31ed487bb75f49a844631a66"
          alt="feature"
          className="absolute -top-10 left-52 -z-10 size-56 md:left-72 md:size-72"
          width={332}
          height={200}
        />
      </div>
    </div>
  );
};
