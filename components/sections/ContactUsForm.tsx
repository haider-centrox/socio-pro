import { Button } from '../ui/button';

interface Feature {
  title: string;
  description: string;

  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor: string;
}

interface ProductFeaturesProps {
  features: Feature[];
}

export const ConstactUsForm: React.FC<ProductFeaturesProps> = ({}) => {
  return (
    <>
      <div className="font-poppins md: mt-20 flex w-full justify-center bg-transparent px-2">
        <div className="rounded-4xl bg-gradient-to-b from-black to-white text-black">
          <div className="m-[1px] flex flex-col gap-4 overflow-x-hidden rounded-4xl bg-white px-2 py-6 md:w-[1200px] md:gap-8">
            <h1 className="mb-6 px-16 text-center text-2xl font-semibold md:text-5xl md:font-bold">
              Socie-Pro AI
            </h1>
            <h2 className="text-center text-xl md:text-3xl">
              Ready to Take Control of Your Social Media?
            </h2>
            <p className="text-socie-gray text-center text-xs md:text-xl">
              Let SociePro-AI handle all the routine tasks.
            </p>
            <div className="mx-2 flex flex-col flex-wrap items-center gap-2 md:flex-row"></div>
            <div className="mx-auto max-w-4xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      className="focus:ring-socie-gray focus:border-socie-gray mt-2 block w-full rounded-md border border-gray-300 bg-[#F5F5F5] px-4 py-2 shadow-sm placeholder:text-xs focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="focus:ring-socie-gray focus:border-socie-gray mt-2 block w-full rounded-md border border-gray-300 bg-[#F5F5F5] px-4 py-2 shadow-sm placeholder:text-xs focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="focus:ring-socie-gray focus:border-socie-gray mt-2 block w-full rounded-md border border-gray-300 bg-[#F5F5F5] p-4 px-4 py-2 shadow-sm placeholder:text-xs focus:ring-2 focus:outline-none"
                  />
                </div>

                <div className="flex w-full items-center justify-center">
                  <Button type="submit" className="w-fit px-20 py-6">
                    Get Notified
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
