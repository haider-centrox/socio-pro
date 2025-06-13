import Image from 'next/image';
import connectedApps from '../../public/connected-apps.png';

export const SocieProDashboard: React.FC = ({}) => {
  return (
    <div className="text-socie-black mx-auto flex flex-col items-center justify-center gap-5 overflow-x-hidden text-center">
      <h1 className="text-socie-black mx-8 text-center text-2xl font-bold md:mx-40 md:text-[46px]">
        One Dashboard. Every Platform. Zero Headaches
      </h1>
      <p className="text-socie-gray mx-0 text-sm md:max-w-5xl md:text-xl">
        Whether you are managing a single brand, handling multiple client
        accounts, or leading a team, SociePRO-AI will combine everything in one
        intuitive platform. Stay ahead of deadlines while reaching your audience
        at the right time.
      </p>
      <div className="mx-4 flex flex-col justify-center gap-12 py-16">
        <Image
          src={connectedApps}
          alt="Connected Apps"
          className="mx-auto w-full max-w-2xl rounded-4xl"
        />
      </div>
    </div>
  );
};
