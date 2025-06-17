import Image from 'next/image';
import growth1 from '../../public/growth1.png';
import growth2 from '../../public/growth2.png';
import growth3 from '../../public/growth3.png';
import growth4 from '../../public/growth4.png';

export const GrowthStrategies: React.FC = ({}) => {
  return (
    <div className="text-socie-black mx-auto flex flex-col items-center justify-center gap-5 overflow-x-hidden text-center">
      <h1 className="text-socie-black mx-8 text-center text-2xl font-bold md:mx-40 md:text-[46px]">
        Turn Social Posts Into Business Results
      </h1>
      <p className="text-socie-gray mx-0 px-8 text-sm md:max-w-5xl md:text-xl">
        Whether you are managing a single brand, handling multiple client
        accounts, or leading a team, SociePRO-AI will combine everything in one
        intuitive platform. Stay ahead of deadlines while reaching your audience
        at the right time.
      </p>
      <div className="flex flex-wrap justify-center gap-8 py-16">
        <div className="bg-socie-yellow flex max-w-80 flex-col items-center justify-center rounded-2xl shadow-lg">
          <div className="flex w-full justify-center rounded-2xl bg-white py-5 shadow-md">
            <Image
              src={growth1} // Replace with the actual path to your image
              alt="Connected Apps"
            />
          </div>

          <div className="flex h-full flex-col gap-4 p-4">
            <h5 className="text-socie-black text-center text-lg font-bold md:text-xl">
              Higher Engagement
            </h5>
            <p className="text-socie-gray text-sm">
              Customised AI-generated content that grabs attention, improves
              engagement, and builds loyal audiences.
            </p>
          </div>
        </div>
        <div className="bg-socie-green flex max-w-80 flex-col items-center justify-center rounded-2xl shadow-lg">
          <div className="flex w-full justify-center rounded-2xl bg-white py-5 shadow-md">
            <Image
              src={growth2} // Replace with the actual path to your image
              alt="Connected Apps"
            />
          </div>

          <div className="flex h-full flex-col gap-4 p-4">
            <h5 className="text-socie-black text-center text-lg font-bold md:text-xl">
              Smarter Decisions
            </h5>
            <p className="text-socie-gray text-sm">
              Offers you to monitor and gain insights from analytics with no
              spreadsheets or guesswork required.
            </p>
          </div>
        </div>
        <div className="bg-socie-peach flex max-w-80 flex-col items-center justify-center rounded-2xl shadow-lg">
          <div className="flex w-full justify-center rounded-2xl bg-white py-6 shadow-md">
            <Image
              src={growth3} // Replace with the actual path to your image
              alt="Connected Apps"
            />
          </div>
          <div className="flex h-full flex-col gap-4 p-4">
            <h5 className="text-socie-black text-center text-lg font-bold md:text-xl">
              Accelerated Follower Growth
            </h5>
            <p className="text-socie-gray text-sm">
              Helps to create consistent & valuable posts that attract new
              followers and convert them into paying customers.
            </p>
          </div>
        </div>
        <div className="bg-socie-purple flex max-w-80 flex-col items-center justify-center rounded-2xl shadow-lg">
          <div className="flex w-full justify-center rounded-2xl bg-white py-5 shadow-md">
            <Image
              src={growth4} // Replace with the actual path to your image
              alt="Connected Apps"
            />
          </div>

          <div className="flex h-full flex-col gap-4 p-4">
            <h5 className="text-socie-black text-center text-lg font-bold md:text-xl">
              Increased Traffic
            </h5>
            <p className="text-socie-gray text-sm">
              Channel-specific strategies that divert targeted clicks to your
              site, product pages, and lead funnels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
